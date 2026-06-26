import { AlertTriangle, Shield, GitBranch } from 'lucide-react'

const PROBLEMS = [
  {
    icon: AlertTriangle,
    title: 'Silent client breakage',
    desc: 'Removing a field or endpoint breaks mobile apps and partners without a compile error.',
  },
  {
    icon: Shield,
    title: 'CI blind spots',
    desc: 'Unit tests pass while contract drift ships to production unnoticed.',
  },
  {
    icon: GitBranch,
    title: 'Review fatigue',
    desc: 'Manual OpenAPI diffs are slow, inconsistent, and easy to miss in large PRs.',
  },
]

export function ProblemSection() {
  return (
    <section
      className="border-y border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30"
      aria-labelledby="problem-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-16">
        <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-2">
          The problem
        </p>
        <h2 id="problem-heading" className="text-2xl font-bold tracking-tight mb-6">
          API changes break clients quietly
        </h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {PROBLEMS.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 p-5"
            >
              <Icon className="w-5 h-5 text-amber-500 mb-3" aria-hidden />
              <h3 className="font-semibold text-sm text-zinc-900 dark:text-zinc-100">{title}</h3>
              <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
