# SpecSentinel

Detect breaking and non-breaking changes between OpenAPI / Swagger API specifications.

## Install

```bash
npm install specsentinel
```

## CLI

```bash
# Human-readable diff
npx specsentinel old.yaml new.yaml

# JSON report
npx specsentinel old.yaml new.yaml --json

# Open report in browser (report-only Studio view)
npx specsentinel old.yaml new.yaml --webview

# With governance config (specguard.yml)
npx specsentinel old.yaml new.yaml --config specguard.yml

# CI: fail only on HIGH/CRITICAL breaking changes
npx specsentinel old.yaml new.yaml --fail-on-high
```

### Options

| Flag | Description |
|------|-------------|
| `--json` | Output `ContractDiffReport` JSON |
| `--format` | `console` (default), `json`, or `markdown` |
| `--output <file>` | Write report to file |
| `--config <file>` | Governance config (default: `./specguard.yml` if present) |
| `--webview` | Launch SpecSentinel Studio locally with this report |
| `--port <n>` | WebView server port (default: 4321) |
| `--fail-on-high` | Exit non-zero only for HIGH/CRITICAL breaking changes |
| `--fail-on-medium` | Exit non-zero for any breaking change (default) |

### Exit codes

| Code | Meaning |
|------|---------|
| 0 | No breaking changes (per threshold) |
| 1 | Breaking changes (MEDIUM/LOW max severity) |
| 2 | Breaking changes (HIGH/CRITICAL max severity) |
| 3 | Invalid or unreadable contract file |
| 4 | Internal error |

## Programmatic API

```typescript
import {
  parseContract,
  compareContracts,
  generateReport,
  determineExitCode,
  toJSONReport,
} from 'specsentinel'

const oldSpec = parseContract(oldYaml)
const newSpec = parseContract(newYaml)
const diff = compareContracts(oldSpec, newSpec)
const report = generateReport(diff)
const exitCode = determineExitCode(report)
```

## Governance

Place `specguard.yml` in your project root to approve breaking changes and suppress findings. See [governance docs](docs/governance.md) in the repository.

## WebView mode

`--webview` bundles SpecSentinel Studio and serves a **report-only** browser view for the exact CLI run — no sample scenarios. Requires `assets/webview/` from the release build (`./scripts/build-release.sh`).

## License

MIT

---

**SpecSentinel** is a product of [SdeAshirvad Labs](https://labs.sdeashirvad.com/).  
Built by [Ashirvad Kumar Pandey](https://sdeashirvad.com/).  
Product site: [labs.sdeashirvad.com/specsentinel](https://labs.sdeashirvad.com/specsentinel)
