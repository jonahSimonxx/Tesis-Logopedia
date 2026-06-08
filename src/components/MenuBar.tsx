// components/MenuBar.tsx
'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const MenuBar = () => {
  const pathname = usePathname()

  const links = [
    { path: '/', label: 'Inicio' },
    { path: '/introduccion', label: 'Introducción' },
    { path: '/metodologia', label: 'Proceder Metodológico' },
    { path: '/resultados', label: 'Resultados' },
    { path: '/tesis_consultadas', label: 'Bibliografía' },
    { path: '/conclusiones', label: 'Conclusiones' },
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
    </nav>
  )
}

export default MenuBar