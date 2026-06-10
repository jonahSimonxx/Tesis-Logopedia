// components/MenuBar.tsx
'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ThemeToggle from './ThemeToggle'

const MenuBar = () => {
  const pathname = usePathname()

  const links = [
    { path: '/', label: 'Inicio' },
    { path: '/tesis_consultadas', label: 'Bibliografía' },
  ]

  return (
    <nav className="glass glass-nav" aria-label="Main navigation">
      {links.map(({ path, label }) => (
        <Link
          key={path}
          href={path}
          className={`glass-nav__item ${pathname === path ? 'glass-nav__item--active' : ''}`}
        >
          {label}
        </Link>
      ))}
      <ThemeToggle />
    </nav>
  )
}

export default MenuBar