'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"

const MenuBar = () => {
  const pathname = usePathname()
  
  const links = [
    { path: "/", label: "Inicio" },
    { path: "/introduccion", label: "Introducción" },
    { path: "/metodologia", label: "Metodología" },
    { path: "/resultados", label: "Resultados" },
    { path: "/bibliografia", label: "Bibliografía" },
    { path: "/conclusiones", label: "Conclusiones" },
  ]

  return (
    <nav className="bg-white shadow-lg border-b">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-blue-800">
            📚 Tesis Logopedia
          </div>
          <ul className="flex space-x-2 md:space-x-6">
            {links.map(({ path, label }) => (
              <li key={path}>
                <Link 
                  href={path}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    pathname === path 
                      ? "bg-blue-600 text-white" 
                      : "text-gray-700 hover:bg-blue-50"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default MenuBar
'@ | Out-File -FilePath "MenuBar.tsx" -Encoding UTF8'