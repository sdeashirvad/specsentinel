import { Link } from 'react-router-dom'
import {
  FlaskConical, FileJson, Shield, GitBranch, MessageSquare, Network, ArrowRight,
} from 'lucide-react'

const PREVIEWS = [
  { icon: FlaskConical, title: 'Contract Playground', desc: 'Diff any two contracts side by side', color: 'text-indigo-500' },
  { icon: Shield, title: 'Governance Lab', desc: 'Edit specguard.yml live', color: 'text-violet-500' },
  { icon: FileJson, title: 'Report Explorer', desc: 'Inspect ContractDiffReport', color: 'text-emerald-500' },
  { icon: GitBranch, title: 'GitHub Action', desc: 'Preview CI/CD integration', color: 'text-blue-500' },
  { icon: MessageSquare, title: 'PR Comment Preview', desc: 'See generated PR comments', color: 'text-cyan-500' },
  { icon: Network, title: 'Architecture View', desc: 'Understand the full pipeline', color: 'text-amber-500' },
]

export function StudioShowcase() {
  return (
    <section
      className="border-y border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30"
      aria-labelledby="studio-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-16">
        <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-2">
          Studio
        </p>
        <h2 id="studio-heading" className="text-2xl font-bold tracking-tight mb-2">
          Explore every capability interactively
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-10 max-w-xl">
          SpecSentinel Studio lets you run scenarios, edit governance rules, and preview CI output — no install required.
        </p>

        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:overflow-visible scrollbar-none">
          {PREVIEWS.map(({ icon: Icon, title, desc, color }) => (
            <Link
              key={title}
              to="/studio"
              className="snap-start shrink-0 w-[260px] sm:w-auto group rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 p-5 hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            >
              <div className="w-10 h-10 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center mb-3">
                <Icon className={`w-5 h-5 ${color}`} aria-hidden />
              </div>
              <h3 className="font-semibold text-sm text-zinc-900 dark:text-zinc-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {title}
              </h3>
              <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">{desc}</p>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center sm:text-left">
          <Link
            to="/studio"
            className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
          >
            Explore SpecSentinel Studio
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
