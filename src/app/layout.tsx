import type { Metadata } from 'next'
import { Italiana, DM_Sans } from 'next/font/google'
import './globals.css'
import MenuBar from '@/components/MenuBar'
import RippleProvider from '@/components/RippleProvider'

const italiana = Italiana({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
})

export const metadata: Metadata = {
  title: 'Memoria Logopédica',
  description: 'Sitio de apoyo para tesis doctoral en Logopedia',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${italiana.variable} ${dmSans.variable}`}>
      <body className={dmSans.className}>
        {/* Fondo animado del kit */}
        <div className="scene" aria-hidden="true">
          <div className="scene__blob scene__blob--1"></div>
          <div className="scene__blob scene__blob--2"></div>
          <div className="scene__blob scene__blob--3"></div>
        </div>

        <RippleProvider>
          <MenuBar />
          <main>{children}</main>
          <footer className="footer">
            <p className="footer__text">
              © {new Date().getFullYear()} - Melissa · Tesis de Logopedia
            </p>
          </footer>
        </RippleProvider>
      </body>
    </html>
  )
}