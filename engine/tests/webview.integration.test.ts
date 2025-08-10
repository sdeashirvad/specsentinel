import { strict as assert } from 'assert'
import { test, describe } from 'node:test'
import { readFileSync, existsSync } from 'fs'
import { fileURLToPath } from 'url'
import { join, dirname } from 'path'
import { parseContract } from '../src/parsers/openapi.js'
import { compareContracts } from '../src/compare/contracts.js'
import { generateReport } from '../src/report/ReportGenerator.js'
import { TOOL_VERSION } from '../src/report/ReportVersion.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ENGINE_ROOT = join(__dirname, '..')
const FIXTURES = join(__dirname, 'fixtures')
const ASSETS_DIR = join(ENGINE_ROOT, 'assets', 'webview')

describe('WebView integration', () => {
  test('webview assets exist after release build', () => {
    assert.ok(existsSync(join(ASSETS_DIR, 'index.html')), 'Run build-release.sh to populate assets/webview/')
    assert.ok(existsSync(join(ASSETS_DIR, 'assets')))
  })

  test('bundled Studio checks __SPECSENTINEL_WEBVIEW__ flag', () => {
    const assetsDir = join(ASSETS_DIR, 'assets')
    const jsFiles = readFileSync(join(ASSETS_DIR, 'index.html'), 'utf-8').match(/\/assets\/index-[^"]+\.js/) ?? []
    assert.ok(jsFiles.length > 0, 'index.html must reference a JS bundle')
    const bundleName = jsFiles[0]!.replace('/assets/', '')
    const bundle = readFileSync(join(assetsDir, bundleName), 'utf-8')
    assert.ok(bundle.includes('__SPECSENTINEL_WEBVIEW__'))
    assert.ok(bundle.includes('reconstructFromReport') || bundle.includes('Lc('))
  })

  test('webview data payload shape matches Studio expectations', () => {
    const oldRaw = readFileSync(join(FIXTURES, 'old.yaml'), 'utf-8')
    const newRaw = readFileSync(join(FIXTURES, 'new.yaml'), 'utf-8')
    const report = generateReport(compareContracts(parseContract(oldRaw), parseContract(newRaw)))

    const payload = {
      report,
      oldContract: oldRaw,
      newContract: newRaw,
      meta: {
        oldPath: join(FIXTURES, 'old.yaml'),
        newPath: join(FIXTURES, 'new.yaml'),
        engineVersion: TOOL_VERSION,
        reportGeneratedAt: report.generatedAt,
        riskLevel: report.riskLevel,
        riskScore: report.riskScore,
        breakingCount: report.summary.breaking,
      },
    }

    assert.equal(payload.report.metadata.oldTitle, 'E-Commerce API')
    assert.ok(payload.oldContract.includes('E-Commerce API'))
    assert.equal(payload.meta.engineVersion, TOOL_VERSION)
    assert.ok(JSON.stringify(payload).includes('"reportVersion"'))
  })
})
