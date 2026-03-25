'use client'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Tesis Doctoral en Logopedia
        </h1>
        <p className="text-2xl text-gray-600">
          [Título completo de tu investigación]
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <Link href="/introduccion" className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
          <div className="text-blue-600 text-3xl mb-4">📖</div>
          <h3 className="text-xl font-bold text-gray-800 mb-3">Introducción</h3>
          <p className="text-gray-600">Contexto y objetivos de la investigación</p>
        </Link>
        
        <Link href="/metodologia" className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
          <div className="text-green-600 text-3xl mb-4">🔬</div>
          <h3 className="text-xl font-bold text-gray-800 mb-3">Metodología</h3>
          <p className="text-gray-600">Diseño y métodos utilizados</p>
        </Link>
        
        <Link href="/tesis-consultadas" className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
          <div className="text-purple-600 text-3xl mb-4">📚</div>
          <h3 className="text-xl font-bold text-gray-800 mb-3">Bibliografía</h3>
          <p className="text-gray-600">Base teórica y referencias</p>
        </Link>
      </div>
    </div>
  )
}