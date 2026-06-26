import { Zap, Shield, GitBranch, Terminal, FlaskConical, Monitor } from 'lucide-react'
import { Link } from 'react-router-dom'
import { BRAND } from '../../brand/tokens'

const FEATURES = [
  {
    icon: Zap,
    title: 'Risk Intelligence',
    problem: 'Hard to judge if a spec change is safe to deploy.',
    benefit: 'Weighted risk scores with breaking vs. safe classification and consumer impact.',
    usedIn: 'Local dev · CI artifacts',
    href: BRAND.npmUrl,
    external: true,
  },
  {
    icon: Shield,
    title: 'Governance',
    problem: 'Breaking changes slip through without documented approval.',
    benefit: 'Policy-driven approvals, suppressions, ownership, and expiration tracking.',
    usedIn: 'PR reviews · Platform policy',
    href: '/studio',
    external: false,
  },
  {
    icon: GitBranch,
    title: 'GitHub Action',
    problem: 'PRs merge before anyone reviews the API contract.',
    benefit: 'Gate pull requests and post structured diff comments automatically.',
    usedIn: 'CI/CD pipelines',
    href: BRAND.githubUrl,
    external: true,
  },
  {
    icon: Terminal,
    title: 'CLI',
    problem: 'No fast way to diff specs from the terminal or scripts.',
    benefit: 'JSON, Markdown, or console output from any shell or pre-push hook.',
    usedIn: 'Scripts · Pre-push hooks',
    href: BRAND.npmUrl,
    external: true,
  },
  {
    icon: FlaskConical,
    title: 'Studio',
    problem: 'Hard to explore contract changes without running the full pipeline.',
    benefit: 'Interactive playground for demos, onboarding, and contract review.',
    usedIn: 'Demos · Onboarding',
    href: '/studio',
    external: false,
  },
  {
    icon: Monitor,
    title: 'WebView',
    problem: 'CLI output alone is not enough for complex reports.',
    benefit: 'Open a browser report view directly from any CLI run with --webview.',
    usedIn: 'Local debugging',
    href: BRAND.npmUrl,
    external: true,
  },
]

function FeatureCard({ feature }: { feature: typeof FEATURES[number] }) {
  const Icon = feature.icon
  const inner = (
    <>
      <div className="w-10 h-10 rounded-lg bg-indigo-100 dark:bg-indigo-950/50 flex items-center justify-center shrink-0">
        <Icon className="w-5 h-5 text-indigo-600 dark:text-indigo-400" aria-hidden />
      </div>
      <div className="min-w-0">
        <h3 className="font-semibold text-sm text-zinc-900 dark:text-zinc-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
          {feature.title}
        </h3>
        <p className="mt-1.5 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
          <span className="text-zinc-600 dark:text-zinc-300">Problem:</span> {feature.problem}
        </p>
        <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
          <span className="text-zinc-600 dark:text-zinc-300">Benefit:</span> {feature.benefit}
        </p>
        <span className="inline-block mt-2 text-[10px] font-medium uppercase tracking-wide px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400">
          {feature.usedIn}
        </span>
      </div>
    </>
  )

  const className = 'group flex gap-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 p-5 hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors'

  if (feature.external) {
    return (
      <a href={feature.href} target="_blank" rel="noreferrer" className={className}>
        {inner}
      </a>
    )
  }
  return (
    <Link to={feature.href} className={className}>
      {inner}
    </Link>
  )
}

export function FeatureGrid() {
  return (
    <section
      className="border-y border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30"
      aria-labelledby="features-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-16">
        <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-2">
          Features
        </p>
        <h2 id="features-heading" className="text-2xl font-bold tracking-tight mb-2">
          Outcomes that matter to your team
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-10 max-w-xl">
          Every capability is designed around a real workflow — not just another output format.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map(f => (
            <FeatureCard key={f.title} feature={f} />
          ))}
        </div>
      </div>
    </section>
  )
}
