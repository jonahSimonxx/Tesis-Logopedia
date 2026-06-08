'use client'
import TesisList from '@/components/TesisList'
import { cargarTesis } from '@/lib/tesis-service'

export default function TesisConsultadasPage() {
  const tesis = cargarTesis()

  return (
    <div className="container page" style={{ paddingTop: '40px' }}>
      <header className="hero" style={{ minHeight: 'auto', padding: '40px 0' }}>
        <span className="hero__kicker">Base teórica y referencias</span>
        <h1 className="hero__title" style={{ fontSize: 'clamp(2rem, 6vw, 4rem)' }}>
          Bibliografía
        </h1>
        <p className="hero__sub">Tesis consultadas durante la investigación doctoral</p>
      </header>

      <TesisList
        tesis={tesis}
        onConsultarTesis={(t) => window.open(t.descarga, '_blank')}
        onDescargarTesis={(t) => {
          const link = document.createElement('a')
          link.href = t.descarga
          link.download = t.descarga.split('/').pop() || 'tesis.pdf'
          link.click()
        }}
      />
    </div>
  )
}