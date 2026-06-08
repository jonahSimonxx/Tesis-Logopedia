'use client'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')

  useEffect(() => {
    const saved = localStorage.getItem('glass-theme') as 'light' | 'dark' | null
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const initial = saved || (prefersDark ? 'dark' : 'light')
    setTheme(initial)
    document.documentElement.setAttribute('data-theme', initial)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
    localStorage.setItem('glass-theme', newTheme)
  }

  return (
    <button
      className="glass glass-btn theme-toggle-btn fixed-theme-btn"
      onClick={toggleTheme}
      aria-label="Toggle colour scheme"
      title="Toggle light / dark mode"
    >
      <span className="icon-dark" aria-hidden="true">☀️</span>
      <span className="icon-light" aria-hidden="true">🌙</span>
    </button>
  )
}