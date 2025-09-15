"use client"

import { cn } from 'lib/util'
import React, { useEffect } from 'react'

type  Theme       = 'light' | 'dark'
const STORAGE_KEY = 'theme'

function getPreferredTheme(): Theme {
  if (typeof window === 'undefined') return 'light'
  const saved = (localStorage.getItem(STORAGE_KEY) || '').toLowerCase()
  if (saved === 'light' || saved === 'dark') return saved as Theme
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  return prefersDark ? 'dark' : 'light'
}

function applyTheme(theme: Theme) {
  if (typeof document === 'undefined') return
  document.documentElement.setAttribute('data-theme', theme)
}

const ThemeToggle: React.FC<{ className?: string }> = ({ className }) => {
  const [theme, setTheme] = React.useState<Theme>(() => getPreferredTheme())

  useEffect(() => {
    applyTheme(theme)
    try { localStorage.setItem(STORAGE_KEY, theme) } catch {}
  }, [theme])

  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY && (e.newValue === 'light' || e.newValue === 'dark')) {
        setTheme(e.newValue as Theme)
      }
    }
    window.addEventListener('storage', onStorage)
    return () => window.removeEventListener('storage', onStorage)
  }, [])

  const toggle = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'))

  return (
    <button type={"button"} aria-label={'toggle-dark/light mode'} onClick={toggle} className={cn('toggle', className ?? '')}>
      <span className={"text-sm"}>{theme === 'dark' ? 'Dark' : 'Light'}</span>
    </button>
  )
}

export default ThemeToggle

