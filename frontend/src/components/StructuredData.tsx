import { useEffect } from 'react'

const SCRIPT_ID = 'specsentinel-jsonld'

export function StructuredData({ data }: { data: Record<string, unknown> }) {
  useEffect(() => {
    const json = JSON.stringify(data)
    let el = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null
    if (!el) {
      el = document.createElement('script')
      el.id = SCRIPT_ID
      el.type = 'application/ld+json'
      document.head.appendChild(el)
    }
    el.textContent = json
  }, [data])

  return null
}
