import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import MenuBar from '../components/MenuBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Apoyo para la tesis',
  description: 'Sitio de apoyo para tesis doctoral en Logopedia',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-gray-50 min-h-screen`}>
        <MenuBar />
        <main className="pt-4">
          {children}
        </main>
        <footer className="mt-16 bg-gray-900 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-xl font-semibold mb-2">Tesis de Logopedia</p>
            <p className="text-gray-400">© {new Date().getFullYear()} - Melissa</p>
          </div>
        </footer>
      </body>
    </html>
  )
}