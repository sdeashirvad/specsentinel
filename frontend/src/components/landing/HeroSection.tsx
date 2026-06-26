import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { BRAND } from '../../brand/tokens'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden" aria-labelledby="hero-heading">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/50 via-transparent to-transparent dark:from-indigo-950/30 pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-16 pb-20 sm:pt-24 sm:pb-28 relative">
        <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-4">
          {BRAND.labs} · API Contract Intelligence ·{' '}
          <a href={BRAND.npmUrl} className="hover:underline" target="_blank" rel="noreferrer">
            npm v{BRAND.npmVersion}
          </a>
        </p>
        <h1
          id="hero-heading"
          className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 max-w-3xl leading-[1.1]"
        >
          Catch API breaking changes before production
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
          SpecSentinel compares OpenAPI contracts, calculates deployment risk, enforces governance rules,
          and reviews changes locally, in CI, or directly in GitHub pull requests.
        </p>
        <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-500">
          For API owners · Platform teams · CI maintainers · Release reviewers
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Link
            to="/studio"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-colors shadow-lg shadow-indigo-500/25 min-h-[48px] w-full sm:w-auto"
          >
            Try SpecSentinel Studio
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href={BRAND.npmUrl}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 hover:border-indigo-300 dark:hover:border-indigo-700 font-mono text-sm text-zinc-700 dark:text-zinc-300 transition-colors min-h-[48px] w-full sm:w-auto"
            target="_blank"
            rel="noreferrer"
          >
            {BRAND.npmInstall}
          </a>
        </div>
      </div>
    </section>
  )
}
