// components/RippleProvider.tsx
'use client'
import { useEffect } from 'react'

export default function RippleProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as Element).closest('.glass-btn, .glass-card, .notif')
      if (!target) return

      const el = target as HTMLElement
      if (el.querySelectorAll('[data-ripple]').length > 3) return

      const ripple = document.createElement('span')
      ripple.setAttribute('data-ripple', '')
      const rect = el.getBoundingClientRect()
      const size = Math.max(rect.width, rect.height) * 1.2
      const x = e.clientX - rect.left - size / 2
      const y = e.clientY - rect.top - size / 2

      Object.assign(ripple.style, {
        position: 'absolute',
        left: x + 'px',
        top: y + 'px',
        width: size + 'px',
        height: size + 'px',
        borderRadius: '50%',
        background: 'rgba(255,255,255,0.18)',
        transform: 'scale(0)',
        pointerEvents: 'none',
        animation: 'ripple 600ms ease-out forwards',
        zIndex: '999',
      })

      el.style.position = 'relative'
      el.style.overflow = 'hidden'
      el.appendChild(ripple)

      ripple.addEventListener('animationend', () => ripple.remove(), { once: true })
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  return <>{children}</>
}