import { useState } from 'react'
import { Copy, CheckCheck, ExternalLink, Package } from 'lucide-react'
import { BRAND } from '../../brand/tokens'

export function NpmInstallStrip() {
  const [copied, setCopied] = useState(false)

  function copyInstall() {
    navigator.clipboard.writeText(BRAND.npmInstall).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <section
      className="border-y border-zinc-200 dark:border-zinc-800 bg-indigo-50/60 dark:bg-zinc-950"
      aria-labelledby="npm-install-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-14">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
              <Package className="w-3.5 h-3.5" aria-hidden />
              Available on npm
            </div>
            <h2
              id="npm-install-heading"
              className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100"
            >
              Install SpecSentinel in one command
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Published as{' '}
              <a
                href={BRAND.npmUrl}
                className="text-indigo-600 dark:text-indigo-400 hover:underline font-mono"
                target="_blank"
                rel="noreferrer"
              >
                {BRAND.npmPackage}
              </a>{' '}
              v{BRAND.npmVersion} — CLI, library, and local{' '}
              <code className="font-mono text-zinc-700 dark:text-zinc-300">--webview</code> report view included.
            </p>
          </div>

          <div className="w-full lg:max-w-lg space-y-3">
            <div className="flex items-center gap-2 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm dark:shadow-none px-4 py-3.5">
              <code className="flex-1 font-mono text-sm text-zinc-800 dark:text-zinc-200 truncate">
                {BRAND.npmInstall}
              </code>
              <button
                type="button"
                onClick={copyInstall}
                className="shrink-0 inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white transition-colors min-h-[36px]"
              >
                {copied ? <CheckCheck className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                {copied ? 'Copied' : 'Copy'}
              </button>
            </div>
            <div className="flex flex-wrap gap-3 text-xs">
              <a
                href={BRAND.npmUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-zinc-500 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                View on npm
                <ExternalLink className="w-3 h-3" />
              </a>
              <span className="text-zinc-300 dark:text-zinc-700" aria-hidden>·</span>
              <span className="text-zinc-500 dark:text-zinc-500">
                <code className="font-mono text-zinc-600 dark:text-zinc-400">npx {BRAND.npmPackage}</code>
                {' '}— no global install needed
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
