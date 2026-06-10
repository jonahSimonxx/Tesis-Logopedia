'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import BackToHome from '@/components/BackToHome';

export default function Introduccion() {
  const [openSections, setOpenSections] = useState<Set<string>>(
    new Set(['encontraras'])
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
      {/* Cabecera de bienvenida */}
      <header className="results__header">
        <span className="hero__kicker">Capítulo 1 · Bienvenida</span>
        <h1 className="results__title">Bienvenidos a nuestro sitio web</h1>
        <div className="results__rule" />
        <p
          className="hero__sub"
          style={{ margin: '24px auto 0', maxWidth: '760px' }}
        >
          El presente constituye un espacio digital académico diseñado para
          centralizar, sistematizar y difundir los resultados de investigaciones
          sobre los trastornos de la comunicación oral en la infancia,
          desarrolladas durante la última década (2015-2025).
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

      {/* Lema de cierre */}
      <div className="glass intro-tagline">
        <div className="intro-tagline__cta">
          Explora, descarga, aprende y comparte
        </div>
        <p className="intro-tagline__quote">
          La comunicación oral es un derecho.
          <br />
          La información, una herramienta.
        </p>
        <div className="hero__cta" style={{ marginTop: '24px' }}>
          <Link
            href="/tesis_consultadas"
            className="glass glass-btn glass-btn--primary"
          >
            Ver Bibliografía →
          </Link>
          <Link href="/resultados" className="glass glass-btn glass-btn--ghost">
            Ver Resultados
          </Link>
        </div>
      </div>

      <BackToHome />
    </div>
  );
}

const SECCIONES: { id: string; titulo: string; contenido: React.ReactNode }[] = [
  {
    id: 'encontraras',
    titulo: '¿Qué encontrarás aquí?',
    contenido: (
      <>
        <span className="intro-stat">
          <span className="intro-stat__num">80</span>
          <span className="intro-stat__label">tesis consultadas</span>
        </span>
        <p>
          Este repositorio reúne <strong>80 tesis</strong> (trabajos de diploma,
          maestrías y doctorados) consultadas y analizadas en el marco de la
          investigación titulada{' '}
          <em>
            «Estudio de los trastornos de la comunicación oral a partir de tesis
            consultadas (2015-2025)»
          </em>
          .
        </p>
        <p className="intro-meta">
          Realizada por <strong>Melissa Ruenes Bergareche</strong>, estudiante de
          la Licenciatura en Educación Logopedia en la Universidad de Ciencias
          Pedagógicas Enrique José Varona, bajo la tutoría de la{' '}
          <strong>Dra. C. Deysi González Piedrafita</strong>.
        </p>
      </>
    ),
  },
  {
    id: 'dirigido',
    titulo: '¿A quién va dirigido?',
    contenido: (
      <ul>
        <li>
          Estudiantes universitarios (pregrado y posgrado) de Logopedia,
          Educación Especial, Psicología y carreras afines.
        </li>
        <li>Docentes y tutores.</li>
        <li>Logopedas.</li>
        <li>
          Familias y cuidadores de niños con trastornos de la comunicación oral.
        </li>
        <li>Instituciones educativas y de salud.</li>
      </ul>
    ),
  },
  {
    id: 'compromiso',
    titulo: 'Nuestro compromiso',
    contenido: (
      <p>
        Democratizar el acceso al conocimiento logopédico, fortalecer la
        formación académica y profesional, y contribuir a la mejora de la calidad
        de vida de los niños con trastornos de la comunicación oral mediante la
        sistematización y difusión de investigaciones rigurosas, actualizadas y
        contextualizadas.
      </p>
    ),
  },
  {
    id: 'marcos',
    titulo: 'Marcos legales de referencia',
    contenido: (
      <ul className="intro-legal">
        <li>Agenda 2030 para el Desarrollo Sostenible (2015).</li>
        <li>Constitución de la República de Cuba (2019).</li>
        <li>
          Lineamientos de la Política Económica y Social del Partido y la
          Revolución (2021–2025).
        </li>
        <li>Código de las Familias (2022).</li>
        <li>
          Anteproyecto del Código de la Niñez, Adolescencias y Juventudes (2024).
        </li>
        <li>Tercer Perfeccionamiento del Sistema Nacional de Educación (2016).</li>
      </ul>
    ),
  },
];
