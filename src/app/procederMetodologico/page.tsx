'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import BackToHome from '@/components/BackToHome';

export default function ProcederMetodologico() {
  const [openSections, setOpenSections] = useState<Set<string>>(
    new Set(['etapa-1'])
  );

  const toggleSection = (id: string) => {
    setOpenSections((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const isOpen = (id: string) => openSections.has(id);

  return (
    <div className="results">
      {/* Cabecera */}
      <header className="results__header">
        <span className="hero__kicker">Capítulo 2 · Metodología</span>
        <h1 className="results__title">Proceder Metodológico</h1>
        <div className="results__rule" />
        <p
          className="hero__sub"
          style={{ margin: '24px auto 0', maxWidth: '820px' }}
        >
          El proceder metodológico en la investigación sobre trastornos de la
          comunicación oral de carácter primario entre 2015 y 2025 se distingue
          por su enfoque sistemático, riguroso y adaptado a las particularidades
          de cada estudio. Está conformado por varias etapas:
        </p>
      </header>

      {/* Acordeones */}
      <div className="results__list">
        {SECCIONES.map(({ id, titulo, contenido }) => {
          const open = isOpen(id);
          return (
            <div key={id} className={`glass accordion${open ? ' is-open' : ''}`}>
              <h2>
                <button
                  type="button"
                  className="accordion__trigger"
                  aria-expanded={open}
                  aria-controls={`panel-${id}`}
                  id={`trigger-${id}`}
                  onClick={() => toggleSection(id)}
                >
                  <span>{titulo}</span>
                  <ChevronDown className="accordion__icon" aria-hidden="true" />
                </button>
              </h2>
              <div
                id={`panel-${id}`}
                role="region"
                aria-labelledby={`trigger-${id}`}
                className="accordion__body"
              >
                <div className="accordion__body-inner">
                  <div className="accordion__content prose">{contenido}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <BackToHome />
    </div>
  );
}

const SECCIONES: { id: string; titulo: string; contenido: React.ReactNode }[] = [
  {
    id: 'etapa-1',
    titulo: '1. Definición del problema y delimitación conceptual',
    contenido: (
      <ul>
        <li>
          <strong>Acción:</strong> se parte de la identificación del problema
          científico mencionado anteriormente en la introducción.
        </li>
        <li>
          <strong>Fundamento:</strong> se precisan los conceptos claves:
          comunicación oral, trastorno de la comunicación oral, lenguaje, habla
          y voz, según los antecedentes tanto nacionales como internacionales.
        </li>
      </ul>
    ),
  },
  {
    id: 'etapa-2',
    titulo: '2. Selección y análisis documental de las tesis',
    contenido: (
      <ul>
        <li>
          <strong>Acción:</strong> revisión y selección de tesis defendidas
          entre el 2015 y 2025.
        </li>
        <li>
          <strong>Fundamento:</strong> permite identificar las regularidades,
          tendencias y vacíos en la investigación sobre los trastornos de la
          comunicación oral en el contexto educativo cubano.
        </li>
      </ul>
    ),
  },
  {
    id: 'etapa-3',
    titulo: '3. Aplicación de los métodos teóricos seleccionados',
    contenido: (
      <ul>
        <li>Analítico-sintético.</li>
        <li>Inductivo-deductivo.</li>
        <li>Modelación.</li>
        <li>Enfoque sistémico estructural funcional.</li>
      </ul>
    ),
  },
  {
    id: 'etapa-4',
    titulo:
      '4. Identificación de las regularidades y tendencias a partir de las tesis consultadas',
    contenido: (
      <ul>
        <li>
          <strong>Acción:</strong> determinación de patrones comunes en el
          desarrollo de la comunicación oral y la intervención de los
          trastornos, a partir del análisis cruzado de las tesis.
        </li>
        <li>
          <strong>Fundamento:</strong> permite establecer avances, retos y áreas
          prioritarias para la intervención y la práctica educativa.
        </li>
      </ul>
    ),
  },
  {
    id: 'etapa-5',
    titulo: '5. Conclusiones',
    contenido: (
      <ul>
        <li>
          <strong>Acción:</strong> integración de los hallazgos en una síntesis
          conclusiva que destaque las regularidades, aportes y proyecciones para
          la intervención en los trastornos de la comunicación oral.
        </li>
        <li>
          <strong>Fundamento:</strong> permite orientar futuras investigaciones
          y prácticas educativas en el área.
        </li>
      </ul>
    ),
  },
];
