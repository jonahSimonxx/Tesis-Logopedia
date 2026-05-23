// lib/tesis-service.ts
import { Tesis } from '@/types/tesis';
import tesisData from '@/data/tesis-data.json'; 

export function cargarTesis(): Tesis[] {
  return tesisData as Tesis[];
}

export function obtenerEstadisticas(tesis: Tesis[]) {
  return {
    total: tesis.length,
    trabajoDiploma: tesis.filter(t => t.tipo === 'Trabajo de Diploma').length,
    examenEstatal: tesis.filter(t => t.tipo === 'Examen Estatal').length,
  };
}

export function obtenerAñosUnicos(tesis: Tesis[]): number[] {
  return Array.from(new Set(tesis.map(t => t.año)))
    .filter(año => año && año > 1900)
    .sort((a, b) => b - a);
}

export function obtenerUniversidadesUnicas(tesis: Tesis[]): string[] {
  return Array.from(new Set(tesis.map(t => t.universidad))).sort();
}