'use client'
import { Tesis } from '@/types/tesis'
import { ExternalLink, Download, GraduationCap, Calendar, User, BookOpen } from 'lucide-react'

interface TesisCardProps {
  tesis: Tesis;
  onConsultar: (tesis: Tesis) => void;
  onDescargar: (tesis: Tesis) => void;
}

export default function TesisCard({ tesis, onConsultar, onDescargar }: TesisCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-200">
      <div className="p-6">
        <div className="flex flex-col md:flex-row md:items-start gap-6">
          {/* Información de la tesis */}
          <div className="flex-1">
            {/* Título y tipo */}
            <div className="flex items-start justify-between mb-4">
              <div>
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-3 ${
                  tesis.tipo === 'doctoral' 
                    ? 'bg-blue-100 text-blue-800' 
                    : 'bg-green-100 text-green-800'
                }`}>
                  <BookOpen className="w-4 h-4 mr-2" />
                  {tesis.tipo === 'doctoral' ? 'Tesis Doctoral' : 'Tesis de Máster'}
                </span>
                <h3 className="text-xl font-bold text-gray-900 leading-tight">
                  {tesis.tema}
                </h3>
              </div>
              <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">
                {tesis.año}
              </span>
            </div>

            {/* Metadatos */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-gray-700">
                <User className="w-4 h-4 text-gray-400" />
                <span className="font-medium">Autor:</span>
                <span>{tesis.autor}</span>
              </div>
              
              <div className="flex items-center gap-3 text-gray-700">
                <GraduationCap className="w-4 h-4 text-gray-400" />
                <span className="font-medium">Universidad:</span>
                <span className="text-blue-600">{tesis.universidad}</span>
              </div>
              
              <div className="flex items-center gap-3 text-gray-700">
                <Calendar className="w-4 h-4 text-gray-400" />
                <span className="font-medium">ID:</span>
                <code className="text-sm bg-gray-100 px-2 py-1 rounded">
                  T-{tesis.id.toString().padStart(3, '0')}
                </code>
              </div>
            </div>
          </div>

          {/* Botones de acción */}
          <div className="flex flex-col gap-3 md:w-48">
            <button
              onClick={() => window.open(tesis.descarga, '_blank')}
              className="inline-flex items-center justify-center gap-2 
                       bg-blue-600 hover:bg-blue-700 text-white 
                       font-medium py-3 px-4 rounded-lg transition-colors duration-200"
              aria-label={`Ver tesis: ${tesis.tema}`}
              title={`Abrir enlace de la tesis: ${tesis.tema}`}
            >
              <span>Ver Tesis</span>
            </button>
            
            <a
  href={tesis.descarga}
  download
  className="inline-flex items-center justify-center gap-2
           border-2 border-gray-300 hover:border-blue-500
           hover:bg-blue-50 text-gray-700 hover:text-blue-700
           font-medium py-3 px-4 rounded-lg transition-all duration-200"
  aria-label={`Descargar PDF de: ${tesis.tema}`}
  title={`Descargar archivo PDF: ${tesis.tema}`}
>
  <Download className="w-5 h-5" />
  <span>Descargar PDF</span>
</a>
          </div>
        </div>
      </div>
    </div>
  )
}