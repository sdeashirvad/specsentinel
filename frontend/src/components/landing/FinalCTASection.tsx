import { Link } from 'react-router-dom'
import { Package, FlaskConical, GitBranch, BookOpen } from 'lucide-react'
import { BRAND } from '../../brand/tokens'

const CTAS = [
  {
    icon: Package,
    label: 'Install from npm',
    desc: BRAND.npmInstall,
    href: BRAND.npmUrl,
    external: true,
    primary: true,
  },
  {
    icon: FlaskConical,
    label: 'Open Studio',
    desc: 'Try interactive demos',
    href: '/studio',
    external: false,
    primary: false,
  },
  {
    icon: GitBranch,
    label: 'GitHub Repository',
    desc: 'Source & issues',
    href: BRAND.githubUrl,
    external: true,
    primary: false,
  },
  {
    icon: BookOpen,
    label: 'Documentation',
    desc: 'README & guides',
    href: BRAND.docsUrl,
    external: true,
    primary: false,
  },
]

export function FinalCTASection() {
  return (
    <section
      className="border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50/30 dark:bg-zinc-900/20"
      aria-labelledby="cta-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-16">
        <h2 id="cta-heading" className="text-2xl font-bold tracking-tight mb-2 text-center">
          Get started with SpecSentinel
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-10 text-center max-w-md mx-auto">
          Install the CLI, explore Studio, or read the docs — pick what fits your workflow.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CTAS.map(({ icon: Icon, label, desc, href, external, primary }) => {
            const className = `group flex flex-col items-center text-center p-6 rounded-xl border transition-colors min-h-[140px] ${
              primary
                ? 'bg-indigo-600 border-indigo-600 hover:bg-indigo-500 text-white'
                : 'bg-white dark:bg-zinc-900/60 border-zinc-200 dark:border-zinc-800 hover:border-indigo-300 dark:hover:border-indigo-700'
            }`

            const inner = (
              <>
                <Icon
                  className={`w-6 h-6 mb-3 ${primary ? 'text-white' : 'text-indigo-500'}`}
                  aria-hidden
                />
                <span className={`font-semibold text-sm ${primary ? 'text-white' : 'text-zinc-900 dark:text-zinc-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400'}`}>
                  {label}
                </span>
                <span className={`mt-1 text-xs ${primary ? 'text-indigo-100' : 'text-zinc-500 dark:text-zinc-400'}`}>
                  {desc}
                </span>
              </>
            )

            if (external) {
              return (
                <a key={label} href={href} target="_blank" rel="noreferrer" className={className}>
                  {inner}
                </a>
              )
            }
            return (
              <Link key={label} to={href} className={className}>
                {inner}
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
