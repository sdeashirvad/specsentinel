const TERMINAL_LINES = [
  { type: 'cmd', text: '$ specsentinel old.yaml new.yaml --config specguard.yml' },
  { type: 'meta', text: 'Risk: HIGH (61) · 3 breaking · 2 non-breaking' },
  { type: 'breaking', text: 'BREAKING  DELETE /products/{id} — endpoint removed' },
  { type: 'breaking', text: 'BREAKING  POST /users — required field email removed' },
  { type: 'safe', text: 'SAFE      GET /inventory — endpoint added' },
  { type: 'gov', text: 'Governance: 1 approved · 1 unapproved breaking · 0 expired' },
  { type: 'exit', text: 'Exit code: 1 (breaking changes require approval)' },
]

function lineColor(type: string) {
  switch (type) {
    case 'breaking': return 'text-red-500 dark:text-red-400'
    case 'safe': return 'text-emerald-500 dark:text-emerald-400'
    case 'meta': return 'text-amber-500 dark:text-amber-400'
    case 'gov': return 'text-violet-400 dark:text-violet-300'
    case 'exit': return 'text-zinc-400 dark:text-zinc-500'
    default: return 'text-zinc-300'
  }
}

export function TerminalDemo() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-16" aria-labelledby="terminal-heading">
      <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-2">
        Proof
      </p>
      <h2 id="terminal-heading" className="text-2xl font-bold tracking-tight mb-2">
        See the full workflow in your terminal
      </h2>
      <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-8 max-w-xl">
        One command returns risk score, breaking changes, governance summary, and a CI-ready exit code.
      </p>

      <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-950 overflow-hidden shadow-xl">
        <div className="flex items-center gap-1.5 px-4 py-3 border-b border-zinc-800 bg-zinc-900">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          <span className="ml-2 text-[11px] text-zinc-500 font-mono">terminal</span>
        </div>
        <div className="p-4 sm:p-6 overflow-x-auto">
          <pre className="font-mono text-xs sm:text-sm leading-relaxed min-w-0">
            {TERMINAL_LINES.map((line, i) => (
              <div key={i} className={lineColor(line.type)}>
                {line.text}
              </div>
            ))}
          </pre>
        </div>
      </div>
      <p className="mt-4 text-xs text-zinc-500 dark:text-zinc-400">
        Sample output from SpecSentinel&apos;s breaking-removal scenario. Open Studio to explore live.
      </p>
    </section>
  )
}
