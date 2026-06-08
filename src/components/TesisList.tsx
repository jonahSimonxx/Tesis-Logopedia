// components/TesisList.tsx
'use client'
import { Tesis } from '@/types/tesis'
import TesisCard from './TesisCard'
import { useState } from 'react'

interface TesisListProps {
  tesis: Tesis[]
  onConsultarTesis: (tesis: Tesis) => void
  onDescargarTesis: (tesis: Tesis) => void
}

export default function TesisList({ tesis, onConsultarTesis, onDescargarTesis }: TesisListProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [añoFiltro, setAñoFiltro] = useState('todos')
  const [tipoFiltro, setTipoFiltro] = useState('todos')

  const añosUnicos = Array.from(new Set(tesis.map((t) => t.año))).sort((a, b) => b - a)
  const tiposUnicos = Array.from(new Set(tesis.map((t) => t.tipo)))

  const tesisFiltradas = tesis.filter((item) => {
    const searchLower = searchTerm.toLowerCase()
    const matchesSearch =
      searchTerm === '' ||
      item.tema.toLowerCase().includes(searchLower) ||
      item.autor.toLowerCase().includes(searchLower) ||
      item.universidad.toLowerCase().includes(searchLower)
    const matchesYear = añoFiltro === 'todos' || item.año.toString() === añoFiltro
    const matchesType = tipoFiltro === 'todos' || item.tipo === tipoFiltro
    return matchesSearch && matchesYear && matchesType
  })

  const limpiarFiltros = () => {
    setSearchTerm('')
    setAñoFiltro('todos')
    setTipoFiltro('todos')
  }

  return (
    <div className="space-y-8">
      {/* Panel de filtros estilo Glass */}
      <div className="glass glass-form" style={{ padding: '24px' }}>
        <div className="glass-form__row" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <div style={{ flex: '2 1 250px' }}>
            <div className="glass-table-search">
              <span className="glass-table-search__icon">🔍</span>
              <input
                type="search"
                placeholder="Buscar por tema, autor o universidad..."
                className="glass-table-search__input"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ width: '100%' }}
              />
            </div>
          </div>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <select
              className="glass-select"
              value={añoFiltro}
              onChange={(e) => setAñoFiltro(e.target.value)}
            >
              <option value="todos">Todos los años</option>
              {añosUnicos.map((año) => (
                <option key={año} value={año.toString()}>
                  {año}
                </option>
              ))}
            </select>
            <select
              className="glass-select"
              value={tipoFiltro}
              onChange={(e) => setTipoFiltro(e.target.value)}
            >
              <option value="todos">Todos los tipos</option>
              {tiposUnicos.map((tipo) => (
                <option key={tipo} value={tipo}>
                  {tipo}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div
          className="glass-form__row"
          style={{ justifyContent: 'space-between', marginTop: '16px' }}
        >
          <span>
            Mostrando <strong>{tesisFiltradas.length}</strong> de <strong>{tesis.length}</strong>{' '}
            tesis
          </span>
          {(searchTerm || añoFiltro !== 'todos' || tipoFiltro !== 'todos') && (
            <button
              onClick={limpiarFiltros}
              className="glass glass-btn glass-btn--ghost glass-btn--sm"
            >
              Limpiar filtros
            </button>
          )}
        </div>
      </div>

      {/* Lista de tesis */}
      <div className="card-grid" style={{ marginTop: '32px' }}>
        {tesisFiltradas.map((t) => (
          <TesisCard
            key={t.id}
            tesis={t}
            onConsultar={onConsultarTesis}
            onDescargar={onDescargarTesis}
          />
        ))}
      </div>

      {/* Mensaje si no hay resultados */}
      {tesisFiltradas.length === 0 && (
        <div className="glass glass-card" style={{ textAlign: 'center' }}>
          <div className="glass-card__title">No se encontraron tesis</div>
          <p className="glass-card__body">Prueba con otros términos de búsqueda</p>
          <button onClick={limpiarFiltros} className="glass glass-btn glass-btn--primary">
            Limpiar filtros
          </button>
        </div>
      )}
    </div>
  )
}