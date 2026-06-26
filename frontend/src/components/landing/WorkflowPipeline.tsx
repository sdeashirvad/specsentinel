import {
  FileJson, Cpu, Zap, Shield, Layers,
  ArrowDown, ArrowRight, Terminal, GitBranch, MessageSquare, Monitor, Globe,
} from 'lucide-react'

const PIPELINE = [
  { icon: FileJson, label: 'Old Spec', sub: 'OpenAPI YAML / JSON' },
  { icon: Cpu, label: 'SpecSentinel Engine', sub: 'Compare contracts' },
  { icon: Zap, label: 'Risk Analysis', sub: 'Score & classify' },
  { icon: Shield, label: 'Governance', sub: 'Policy rules' },
  { icon: Layers, label: 'ContractDiffReport', sub: 'Canonical output' },
]

const OUTPUTS = [
  { icon: Terminal, label: 'CLI' },
  { icon: GitBranch, label: 'GitHub Action' },
  { icon: MessageSquare, label: 'PR Comment' },
  { icon: Monitor, label: 'Studio' },
  { icon: Globe, label: 'WebView' },
]

function Connector({ vertical }: { vertical: boolean }) {
  return (
    <div className={`flex items-center justify-center shrink-0 ${vertical ? 'py-1' : 'px-1'}`} aria-hidden>
      {vertical ? (
        <ArrowDown className="w-4 h-4 text-zinc-300 dark:text-zinc-600" />
      ) : (
        <ArrowRight className="w-4 h-4 text-zinc-300 dark:text-zinc-600 hidden md:block" />
      )}
    </div>
  )
}

export function WorkflowPipeline() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-16" aria-labelledby="workflow-heading">
      <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-2">
        Developer workflow
      </p>
      <h2 id="workflow-heading" className="text-2xl font-bold tracking-tight mb-2">
        From spec change to ship decision
      </h2>
      <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-10 max-w-xl">
        One engine powers every output — local terminal, CI gates, PR comments, and interactive Studio.
      </p>

      {/* Mobile: vertical pipeline */}
      <div className="flex flex-col items-center md:hidden">
        {PIPELINE.map((step, i) => {
          const Icon = step.icon
          return (
            <div key={step.label} className="flex flex-col items-center w-full max-w-xs">
              {i > 0 && <Connector vertical />}
              <div className="w-full rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 p-4 text-center">
                <Icon className="w-5 h-5 text-indigo-500 mx-auto mb-2" aria-hidden />
                <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">{step.label}</p>
                <p className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-0.5">{step.sub}</p>
              </div>
            </div>
          )
        })}
        <Connector vertical />
        <div className="w-full max-w-xs rounded-xl border border-dashed border-indigo-300 dark:border-indigo-800 bg-indigo-50/50 dark:bg-indigo-950/20 p-4">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 text-center mb-3">
            Outputs
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {OUTPUTS.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1.5 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700"
              >
                <Icon className="w-3.5 h-3.5 text-indigo-500" aria-hidden />
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop: horizontal pipeline */}
      <div className="hidden md:block">
        <div className="flex items-stretch justify-between gap-1">
          {PIPELINE.map((step, i) => {
            const Icon = step.icon
            return (
              <div key={step.label} className="flex items-center flex-1 min-w-0">
                {i > 0 && <Connector vertical={false} />}
                <div className="flex-1 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 p-4 text-center min-w-0">
                  <Icon className="w-5 h-5 text-indigo-500 mx-auto mb-2" aria-hidden />
                  <p className="text-xs font-semibold text-zinc-900 dark:text-zinc-100 truncate">{step.label}</p>
                  <p className="text-[10px] text-zinc-500 dark:text-zinc-400 mt-0.5 truncate">{step.sub}</p>
                </div>
              </div>
            )
          })}
        </div>
        <div className="flex justify-center my-4" aria-hidden>
          <ArrowDown className="w-5 h-5 text-zinc-300 dark:text-zinc-600" />
        </div>
        <div className="rounded-xl border border-dashed border-indigo-300 dark:border-indigo-800 bg-indigo-50/50 dark:bg-indigo-950/20 p-5">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 text-center mb-4">
            Deliver anywhere your team works
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {OUTPUTS.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700"
              >
                <Icon className="w-4 h-4 text-indigo-500" aria-hidden />
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
