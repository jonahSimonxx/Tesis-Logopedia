'use client'
import { Tesis } from '@/types/tesis'
import { Download } from 'lucide-react'

interface TesisCardProps {
  tesis: Tesis
  onConsultar: (tesis: Tesis) => void
  onDescargar: (tesis: Tesis) => void
}

export default function TesisCard({ tesis, onConsultar, onDescargar }: TesisCardProps) {
  const getBadgeClass = (tipo: string) => {
    if (tipo.toLowerCase().includes('doctoral')) return 'glass-badge--aqua'
    if (tipo.toLowerCase().includes('máster') || tipo.toLowerCase().includes('master'))
      return 'glass-badge--violet'
    if (tipo.toLowerCase().includes('trabajo')) return 'glass-badge--lime'
    return 'glass-badge--amber'
  }

  return (
    <div className="glass glass-card">
      <div className="glass-card__label">Tesis · {tesis.año}</div>
      <h3 className="glass-card__title">{tesis.tema}</h3>

      <div style={{ marginBottom: '16px' }}>
        <span className={`glass-badge ${getBadgeClass(tesis.tipo)}`}>
          <span className="glass-badge__dot"></span>
          {tesis.tipo}
        </span>
      </div>

      <p className="glass-card__body" style={{ marginBottom: '20px' }}>
        <strong>{tesis.autor}</strong>
        <br />
        {tesis.universidad}
      </p>

      <div style={{ display: 'flex', gap: '12px', marginTop: 'auto' }}>
        <button onClick={() => onConsultar(tesis)} className="glass glass-btn glass-btn--primary">
          Ver Tesis
        </button>
        <button onClick={() => onDescargar(tesis)} className="glass glass-btn glass-btn--ghost">
          <Download size={16} style={{ marginRight: '6px' }} />
          PDF
        </button>
      </div>
    </div>
  )
}