const SPEC_GUARD_EXAMPLE = `# specguard.yml

approvedChanges:
  - type: endpointRemoved
    path: "/legacy/users"
    owner: "platform-team"
    approvedBy: "architecture-board"
    reason: "Migrated to v2 API. See ADR-2024-07."
    expires: "2027-01-01"

  - type: fieldRemoved
    path: "/users"
    method: "post"
    owner: "auth-team"
    approvedBy: "backend-lead"
    reason: "email field moved to profile service"
    expires: "2026-12-31"

suppressions:
  - rule: ENDPOINT_ADDED
    reason: "New endpoints are always safe"

  - rule: FIELD_ADDED
    reason: "Additive changes are non-breaking"`

const PILLS = ['Approved Changes', 'Suppression Rules', 'Ownership', 'Expiration']

export function GovernanceHighlight() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-16" aria-labelledby="governance-heading">
      <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-2">
        Governance
      </p>
      <h2 id="governance-heading" className="text-2xl font-bold tracking-tight mb-2">
        Policy-driven API reviews
      </h2>
      <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-8 max-w-xl">
        SpecSentinel&apos;s strongest differentiator — encode your team&apos;s approval process in version-controlled policy.
      </p>

      <div className="flex flex-wrap gap-2 mb-8">
        {PILLS.map(pill => (
          <span
            key={pill}
            className="text-xs font-medium px-3 py-1.5 rounded-full bg-violet-100 dark:bg-violet-950/40 text-violet-700 dark:text-violet-300 border border-violet-200 dark:border-violet-800"
          >
            {pill}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">Why governance matters</h3>
          <ul className="space-y-3 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            <li>
              <strong className="text-zinc-800 dark:text-zinc-200">Approved changes</strong> — document who approved a breaking change, why, and when it expires.
            </li>
            <li>
              <strong className="text-zinc-800 dark:text-zinc-200">Suppression rules</strong> — filter noise from reports so reviewers focus on real risk.
            </li>
            <li>
              <strong className="text-zinc-800 dark:text-zinc-200">Ownership</strong> — assign teams to paths and methods for accountable reviews.
            </li>
            <li>
              <strong className="text-zinc-800 dark:text-zinc-200">Expiration</strong> — catch stale approvals before they silently expire in production.
            </li>
          </ul>
          <p className="text-xs text-zinc-500 dark:text-zinc-500">
            Works in CLI, GitHub Action, and Studio — same <code className="font-mono bg-zinc-100 dark:bg-zinc-800 px-1 rounded">specguard.yml</code> everywhere.
          </p>
        </div>

        <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-950 overflow-hidden">
          <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-zinc-800 bg-zinc-900">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            <span className="ml-2 text-[11px] text-zinc-500 font-mono">specguard.yml</span>
          </div>
          <pre className="p-4 text-[11px] sm:text-xs text-zinc-300 font-mono leading-relaxed overflow-x-auto">
            {SPEC_GUARD_EXAMPLE}
          </pre>
        </div>
      </div>
    </section>
  )
}
