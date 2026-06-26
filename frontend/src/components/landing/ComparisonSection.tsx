const ROWS = [
  { dimension: 'Consistency', manual: 'Ad-hoc, reviewer-dependent', specsentinel: 'Same 14 rules every run' },
  { dimension: 'Governance', manual: 'Spreadsheets / verbal approval', specsentinel: 'specguard.yml policy file' },
  { dimension: 'Automation', manual: 'Manual diff in PR', specsentinel: 'CI gate + PR comments' },
  { dimension: 'CI Integration', manual: 'None by default', specsentinel: 'GitHub Action + exit codes' },
  { dimension: 'Review Speed', manual: 'Hours on large specs', specsentinel: 'Seconds' },
]

export function ComparisonSection() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-16" aria-labelledby="compare-heading">
      <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-2">
        Why SpecSentinel
      </p>
      <h2 id="compare-heading" className="text-2xl font-bold tracking-tight mb-2">
        Manual review vs. automated contract intelligence
      </h2>
      <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-10 max-w-xl">
        Factual comparison — no silver bullets, just consistent, policy-driven API change review.
      </p>

      {/* Desktop table */}
      <div className="hidden sm:block rounded-xl border border-zinc-200 dark:border-zinc-800 overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-zinc-50 dark:bg-zinc-900/80 border-b border-zinc-200 dark:border-zinc-800">
              <th className="text-left px-4 py-3 font-semibold text-zinc-700 dark:text-zinc-300 w-1/4">Dimension</th>
              <th className="text-left px-4 py-3 font-semibold text-zinc-500 dark:text-zinc-400 w-[37.5%]">Manual API Review</th>
              <th className="text-left px-4 py-3 font-semibold text-indigo-600 dark:text-indigo-400 w-[37.5%]">SpecSentinel</th>
            </tr>
          </thead>
          <tbody>
            {ROWS.map((row, i) => (
              <tr
                key={row.dimension}
                className={i % 2 === 0 ? 'bg-white dark:bg-zinc-950' : 'bg-zinc-50/50 dark:bg-zinc-900/30'}
              >
                <td className="px-4 py-3 font-medium text-zinc-800 dark:text-zinc-200">{row.dimension}</td>
                <td className="px-4 py-3 text-zinc-500 dark:text-zinc-400">{row.manual}</td>
                <td className="px-4 py-3 text-zinc-700 dark:text-zinc-300">{row.specsentinel}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="sm:hidden space-y-4">
        {ROWS.map(row => (
          <div
            key={row.dimension}
            className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 p-4"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400 mb-3">
              {row.dimension}
            </p>
            <div className="space-y-2">
              <div>
                <p className="text-[10px] font-medium text-zinc-400 uppercase">Manual</p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">{row.manual}</p>
              </div>
              <div>
                <p className="text-[10px] font-medium text-indigo-500 uppercase">SpecSentinel</p>
                <p className="text-sm text-zinc-800 dark:text-zinc-200">{row.specsentinel}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
