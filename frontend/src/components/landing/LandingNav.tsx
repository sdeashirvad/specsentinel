import { Link } from 'react-router-dom'
import { Moon, Sun } from 'lucide-react'
import { useState, useEffect } from 'react'
import { LabMark } from '../../brand/LabMark'
import { BRAND } from '../../brand/tokens'

export function LandingNav() {
  const [dark, setDark] = useState(() => localStorage.getItem('acd_theme') !== 'light')

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('acd_theme', dark ? 'dark' : 'light')
  }, [dark])

  return (
    <nav className="sticky top-0 z-30 border-b border-zinc-200/80 dark:border-zinc-800/80 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        <Link to="/" className="hover:opacity-90 transition-opacity">
          <LabMark showLabs size="sm" />
        </Link>
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={BRAND.npmUrl}
            className="hidden sm:inline-flex items-center gap-1.5 text-[11px] font-medium px-2.5 py-1 rounded-md bg-red-50 dark:bg-red-950/30 text-red-700 dark:text-red-400 border border-red-200 dark:border-red-900/60 hover:border-red-300 dark:hover:border-red-800 transition-colors"
            target="_blank"
            rel="noreferrer"
          >
            npm v{BRAND.npmVersion}
          </a>
          <a
            href={BRAND.labsUrl}
            className="hidden sm:inline text-xs text-zinc-500 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            target="_blank"
            rel="noreferrer"
          >
            {BRAND.labs}
          </a>
          <Link
            to="/studio"
            className="text-xs font-medium px-3 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white transition-colors min-h-[44px] inline-flex items-center"
          >
            Open Studio
          </Link>
          <button
            onClick={() => setDark(d => !d)}
            className="w-11 h-11 rounded-md border border-zinc-200 dark:border-zinc-700 flex items-center justify-center text-zinc-500 dark:text-zinc-400"
            aria-label="Toggle theme"
          >
            {dark ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>
    </nav>
  )
}
