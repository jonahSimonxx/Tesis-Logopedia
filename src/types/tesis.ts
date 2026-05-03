export interface Tesis {
    id: number;
    tema: string;
    autor: string;
    año: number;
    universidad: string;
    enlace: string;
    descarga: string;
    tipo: 'Examen Estatal' | 'Trabajo de Diploma';
}