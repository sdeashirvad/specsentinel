import type { ElementType } from 'react'
import { Star, Download, Tag, Calendar, CheckCircle2 } from 'lucide-react'
import { BRAND } from '../../brand/tokens'

interface StatProps {
  icon: ElementType
  label: string
  value: string
  hidden?: boolean
}

function Stat({ icon: Icon, label, value, hidden }: StatProps) {
  if (hidden) return null
  return (
    <div className="flex flex-col items-center text-center p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 min-w-[120px] flex-1">
      <Icon className="w-4 h-4 text-indigo-500 mb-2" aria-hidden />
      <p className="text-lg font-bold text-zinc-900 dark:text-zinc-100">{value}</p>
      <p className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-0.5">{label}</p>
    </div>
  )
}

function formatValue(val: string | number | boolean | null, fallback = '—'): string {
  if (val === null || val === undefined) return fallback
  if (typeof val === 'boolean') return val ? 'Passing' : 'Failing'
  if (typeof val === 'number') return val.toLocaleString()
  return val
}

export function SocialProofStrip() {
  const sp = BRAND.socialProof

  return (
    <section
      className="border-y border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30"
      aria-labelledby="social-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-16">
        <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-2 text-center">
          Community
        </p>
        <h2 id="social-heading" className="text-2xl font-bold tracking-tight mb-8 text-center">
          Built for production API teams
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          <Stat
            icon={Star}
            label="GitHub Stars"
            value={formatValue(sp.githubStars)}
            hidden={sp.githubStars === null}
          />
          <Stat
            icon={Download}
            label="npm Downloads"
            value={formatValue(sp.npmDownloads)}
            hidden={sp.npmDownloads === null}
          />
          <Stat icon={Tag} label="Latest Version" value={`v${sp.latestVersion}`} />
          <Stat
            icon={Calendar}
            label="Latest Release"
            value={formatValue(sp.latestReleaseDate)}
            hidden={sp.latestReleaseDate === null}
          />
          <Stat
            icon={CheckCircle2}
            label="Tests"
            value={formatValue(sp.testsPassing)}
            hidden={sp.testsPassing === null}
          />
        </div>
      </div>
    </section>
  )
}
