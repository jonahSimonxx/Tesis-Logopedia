// lib/tesis-service.ts
import { Tesis } from '@/types/tesis';
import tesisData from '@/data/tesis-data.json'; 

export function cargarTesis(): Tesis[] {
  return tesisData as Tesis[];
}

export function obtenerAñosUnicos(tesis: Tesis[]): number[] {
  return Array.from(new Set(tesis.map(t => t.año)))
    .filter(año => año && año > 1900)
    .sort((a, b) => b - a);
}

export function obtenerUniversidadesUnicas(tesis: Tesis[]): string[] {
  return Array.from(new Set(tesis.map(t => t.universidad))).sort();
}