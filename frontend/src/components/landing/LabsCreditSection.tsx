import { Link } from 'react-router-dom'
import { CheckCircle2 } from 'lucide-react'
import { BRAND } from '../../brand/tokens'

export function LabsCreditSection() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 text-center">
      <CheckCircle2 className="w-8 h-8 text-indigo-500 mx-auto mb-4" aria-hidden />
      <h2 className="text-xl font-bold">Built by {BRAND.labs}</h2>
      <p className="mt-3 text-sm text-zinc-500 dark:text-zinc-400 max-w-lg mx-auto leading-relaxed">
        SpecSentinel is part of the SdeAshirvad Labs product ecosystem — engineering tools for observable, deterministic systems.
        Created by{' '}
        <a href={BRAND.personalUrl} className="text-indigo-600 dark:text-indigo-400 hover:underline" target="_blank" rel="noreferrer">
          {BRAND.personalName}
        </a>.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a href={BRAND.labsUrl} className="text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:underline" target="_blank" rel="noreferrer">
          Explore {BRAND.labs} →
        </a>
        <Link to="/studio" className="text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:underline">
          Open SpecSentinel Studio →
        </Link>
      </div>
    </section>
  )
}
