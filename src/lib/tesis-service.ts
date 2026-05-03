import { Tesis } from '@/types/tesis';
import tesisData from '@/data/tesis-data.json'; 

// Cargar datos desde el JSON
export function cargarTesis(): Tesis[] {
  return tesisData as Tesis[];
}

// Obtener estadísticas básicas
export function obtenerEstadisticas(tesis: Tesis[]): {
  total: number;
  doctorales: number;
  master: number;
} {
  return {
    total: tesis.length,
    estatales: tesis.filter(t => t.tipo === 'Examen Estatal').length,
    TDiploma: tesis.filter(t => t.tipo === 'Trabajo de Diploma').length
  };
}

// Obtener años únicos para filtros
export function obtenerAñosUnicos(tesis: Tesis[]): number[] {
  return Array.from(new Set(tesis.map(t => t.año))).sort((a, b) => b - a);
}

// Obtener universidades únicas para filtros
export function obtenerUniversidadesUnicas(tesis: Tesis[]): string[] {
  return Array.from(new Set(tesis.map(t => t.universidad))).sort();
}