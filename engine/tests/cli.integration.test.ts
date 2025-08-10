import { strict as assert } from 'assert'
import { test, describe } from 'node:test'
import { spawnSync } from 'child_process'
import { fileURLToPath } from 'url'
import { join, dirname } from 'path'
import { readFileSync, existsSync } from 'fs'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ENGINE_ROOT = join(__dirname, '..')
const FIXTURES = join(__dirname, 'fixtures')
const CLI = join(ENGINE_ROOT, 'src', 'cli.ts')

function runCli(args: string[]): { status: number | null; stdout: string; stderr: string } {
  const tsxBin = join(ENGINE_ROOT, 'node_modules', '.bin', process.platform === 'win32' ? 'tsx.cmd' : 'tsx')
  const result = spawnSync(tsxBin, [CLI, ...args], {
    cwd: ENGINE_ROOT,
    encoding: 'utf-8',
    env: process.env,
    shell: process.platform === 'win32',
  })
  return {
    status: result.status,
    stdout: (result.stdout ?? '') + (result.stderr ?? ''),
    stderr: result.stderr ?? '',
  }
}

describe('CLI integration', () => {
  test('fixtures exist', () => {
    assert.ok(existsSync(join(FIXTURES, 'old.yaml')))
    assert.ok(existsSync(join(FIXTURES, 'new.yaml')))
  })

  test('--version prints tool version', () => {
    const { status, stdout } = runCli(['--version'])
    assert.equal(status, 0)
    assert.match(stdout.trim(), /^\d+\.\d+\.\d+$/)
  })

  test('--help documents --webview', () => {
    const { status, stdout } = runCli(['--help'])
    assert.equal(status, 0)
    assert.ok(stdout.includes('--webview'))
    assert.ok(stdout.includes('specsentinel'))
  })

  test('diff fixtures produces JSON report', () => {
    const outFile = join(FIXTURES, 'report-out.json')
    const { status } = runCli([
      join(FIXTURES, 'old.yaml'),
      join(FIXTURES, 'new.yaml'),
      '--json',
      '--output',
      outFile,
    ])
    assert.ok(status === 0 || status === 1 || status === 2, `unexpected exit ${status}`)
    const report = JSON.parse(readFileSync(outFile, 'utf-8'))
    assert.equal(report.metadata.oldTitle, 'E-Commerce API')
    assert.ok(report.summary.total > 0)
    assert.ok(Array.isArray(report.changes))
  })

  test('identical specs exit 0', () => {
    const { status } = runCli([
      join(FIXTURES, 'old.yaml'),
      join(FIXTURES, 'old.yaml'),
    ])
    assert.equal(status, 0)
  })

  test('missing file exits 3', () => {
    const { status } = runCli([
      join(FIXTURES, 'does-not-exist.yaml'),
      join(FIXTURES, 'new.yaml'),
    ])
    assert.equal(status, 3)
  })

  test('--config applies governance', () => {
    const { status, stdout } = runCli([
      join(FIXTURES, 'old.yaml'),
      join(FIXTURES, 'new.yaml'),
      '--config',
      join(FIXTURES, 'specguard.yml'),
    ])
    assert.ok(status === 0 || status === 1 || status === 2)
    assert.ok(stdout.includes('Governance'))
  })
})
