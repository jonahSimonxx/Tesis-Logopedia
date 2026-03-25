'use client'
import { Tesis } from '@/types/tesis'
import TesisCard from './TesisCard'
import { Search, Filter } from 'lucide-react'
import { useState } from 'react'

interface TesisListProps {
  tesis: Tesis[];
  onConsultarTesis: (tesis: Tesis) => void;
  onDescargarTesis: (tesis: Tesis) => void;
}

export default function TesisList({ 
  tesis, 
  onConsultarTesis, 
  onDescargarTesis 
}: TesisListProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [añoFiltro, setAñoFiltro] = useState('todos')
  const [tipoFiltro, setTipoFiltro] = useState('todos')
  
  // Obtener opciones para filtros
  const añosUnicos = Array.from(new Set(tesis.map(t => t.año))).sort((a, b) => b - a)
  const tiposUnicos = Array.from(new Set(tesis.map(t => t.tipo)))
  
  // Filtrar tesis
  const tesisFiltradas = tesis.filter(item => {
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
  
  // Limpiar filtros
  const limpiarFiltros = () => {
    setSearchTerm('')
    setAñoFiltro('todos')
    setTipoFiltro('todos')
  }
  
  if (tesis.length === 0) {
    return (
      <div className="text-center py-16 bg-gray-50 rounded-xl">
        <div className="text-4xl mb-4">📚</div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          No hay tesis disponibles
        </h3>
      </div>
    )
  }
  
  return (
    <div className="space-y-8">
      {/* Panel de filtros */}
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="flex-1 w-full">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Buscar por tema, autor o universidad..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                aria-label="Buscar tesis"
              />
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            {/* Select con label para accesibilidad */}
            <div className="flex items-center gap-2">
              <Filter className="text-gray-400 w-5 h-5" />
              <div className="relative">
                <label htmlFor="filtro-año" className="sr-only">
                  Filtrar por año
                </label>
                <select
                  id="filtro-año"
                  className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={añoFiltro}
                  onChange={(e) => setAñoFiltro(e.target.value)}
                  aria-label="Filtrar por año"
                  title="Seleccionar año"
                >
                  <option value="todos">Todos los años</option>
                  {añosUnicos.map(año => (
                    <option key={año} value={año.toString()}>{año}</option>
                  ))}
                </select>
              </div>
            </div>
            
            {/* Select con label para accesibilidad */}
            <div className="relative">
              <label htmlFor="filtro-tipo" className="sr-only">
                Filtrar por tipo de tesis
              </label>
              <select
                id="filtro-tipo"
                className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={tipoFiltro}
                onChange={(e) => setTipoFiltro(e.target.value)}
                aria-label="Filtrar por tipo de tesis"
                title="Seleccionar tipo de tesis"
              >
                <option value="todos">Todos los tipos</option>
                {tiposUnicos.map(tipo => (
                  <option key={tipo} value={tipo}>
                    {tipo === 'doctoral' ? 'Doctorales' : 'Máster'}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        
        {/* Info de resultados */}
        <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
          <span>
            Mostrando <span className="font-bold">{tesisFiltradas.length}</span> de{' '}
            <span className="font-bold">{tesis.length}</span> tesis
          </span>
          
          {searchTerm || añoFiltro !== 'todos' || tipoFiltro !== 'todos' ? (
            <button
              onClick={limpiarFiltros}
              className="text-blue-600 hover:text-blue-800 font-medium"
              aria-label="Limpiar todos los filtros"
            >
              Limpiar filtros
            </button>
          ) : null}
        </div>
      </div>
      
      {/* Lista de tesis */}
      <div className="space-y-6">
        {tesisFiltradas.map((tesisItem) => (
          <TesisCard
            key={tesisItem.id}
            tesis={tesisItem}
            onConsultar={onConsultarTesis}
            onDescargar={onDescargarTesis}
          />
        ))}
      </div>
      
      {/* Mensaje si no hay resultados */}
      {tesisFiltradas.length === 0 && (
        <div className="text-center py-16 bg-white rounded-xl border border-gray-200">
          <div className="text-4xl mb-4">🔍</div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            No se encontraron tesis
          </h3>
          <p className="text-gray-600 mb-6">
            Prueba con otros términos de búsqueda
          </p>
          <button
            onClick={limpiarFiltros}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg"
            aria-label="Limpiar filtros de búsqueda"
          >
            Limpiar filtros
          </button>
        </div>
      )}
    </div>
  )
}