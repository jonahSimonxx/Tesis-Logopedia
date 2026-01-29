'use client'
import TesisList from '@/components/TesisList'
import { cargarTesis, obtenerEstadisticas } from '@/lib/tesis-service'
import { BookOpen, GraduationCap, FileText } from 'lucide-react'

export default function TesisConsultadasPage() {
  const tesis = cargarTesis()
  const estadisticas = obtenerEstadisticas(tesis)
  
  const handleConsultarTesis = (tesis: any) => {
    window.open(tesis.enlace, '_blank', 'noopener,noreferrer')
  }
  
  const handleDescargarTesis = (tesis: any) => {
    alert(`Descargando: ${tesis.tema}\n\nRuta: ${tesis.descarga}`)
  }
  
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            📋 Tesis Consultadas
          </h1>
          <p className="text-lg text-gray-600">
            Referencias bibliográficas de la investigación
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">{estadisticas.total}</div>
                <div className="text-gray-600">Total de tesis</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">{estadisticas.doctorales}</div>
                <div className="text-gray-600">Tesis doctorales</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">{estadisticas.master}</div>
                <div className="text-gray-600">Tesis de máster</div>
              </div>
            </div>
          </div>
        </div>
        
        <TesisList
          tesis={tesis}
          onConsultarTesis={handleConsultarTesis}
          onDescargarTesis={handleDescargarTesis}
        />
      </div>
    </div>
  )
}