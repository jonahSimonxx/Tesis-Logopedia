import Link from 'next/link';

export default function Introduccion() {
  return (
    <div className="container page" style={{ paddingBottom: '64px' }}>
      <header className="hero intro-hero">
        <span className="hero__kicker">Capítulo 1 · Bienvenida</span>
        <h1 className="hero__title">Bienvenidos a nuestro sitio web</h1>
        <p className="hero__sub">
          El presente constituye un espacio digital académico diseñado para
          centralizar, sistematizar y difundir los resultados de investigaciones
          sobre los trastornos de la comunicación oral en la infancia,
          desarrolladas durante la última década (2015-2025).
        </p>
      </header>

      <section className="section">
        <div className="intro-grid">
          {/* ¿Qué encontrarás aquí? */}
          <article className="glass glass-card intro-card">
            <div className="intro-card__head">
              <span className="intro-card__icon" aria-hidden="true">
                📚
              </span>
              <h2 className="intro-card__title">¿Qué encontrarás aquí?</h2>
            </div>
            <div className="prose">
              <span className="intro-stat">
                <span className="intro-stat__num">80</span>
                <span className="intro-stat__label">tesis consultadas</span>
              </span>
              <p>
                Este repositorio reúne <strong>80 tesis</strong> (trabajos de
                diploma, maestrías y doctorados) consultadas y analizadas en el
                marco de la investigación titulada{' '}
                <em>
                  «Estudio de los trastornos de la comunicación oral a partir de
                  tesis consultadas (2015-2025)»
                </em>
                .
              </p>
              <p className="intro-meta">
                Realizada por <strong>Melissa Ruenes Bergareche</strong>,
                estudiante de la Licenciatura en Educación Logopedia en la
                Universidad de Ciencias Pedagógicas Enrique José Varona, bajo la
                tutoría de la <strong>Dra. C. Deysi González Piedrafita</strong>.
              </p>
            </div>
          </article>

          {/* ¿A quién va dirigido? */}
          <article className="glass glass-card intro-card intro-card--violet">
            <div className="intro-card__head">
              <span className="intro-card__icon" aria-hidden="true">
                👥
              </span>
              <h2 className="intro-card__title">¿A quién va dirigido?</h2>
            </div>
            <div className="prose">
              <ul>
                <li>
                  Estudiantes universitarios (pregrado y posgrado) de Logopedia,
                  Educación Especial, Psicología y carreras afines.
                </li>
                <li>Docentes y tutores.</li>
                <li>Logopedas.</li>
                <li>
                  Familias y cuidadores de niños con trastornos de la
                  comunicación oral.
                </li>
                <li>Instituciones educativas y de salud.</li>
              </ul>
            </div>
          </article>

          {/* Respaldo institucional y legal (primera aparición) */}
          <article className="glass glass-card intro-card intro-card--rose">
            <div className="intro-card__head">
              <span className="intro-card__icon" aria-hidden="true">
                ⚖️
              </span>
              <h2 className="intro-card__title">
                Respaldo institucional y legal
              </h2>
            </div>
            <div className="prose">
              <p>
                Este sitio se sustenta en los marcos legales nacionales e
                internacionales que promueven la inclusión, la equidad y el
                derecho a la educación y la salud:
              </p>
              <ul>
                <li>Agenda 2030.</li>
                <li>Constitución de la República de Cuba (2019).</li>
                <li>Código de las Familias (2022).</li>
                <li>
                  Anteproyecto del Código de la Niñez, Adolescencias y
                  Juventudes (2024).
                </li>
                <li>
                  Tercer Perfeccionamiento del Sistema Nacional de Educación
                  (2016).
                </li>
              </ul>
            </div>
          </article>

          {/* Nuestro compromiso */}
          <article className="glass glass-card intro-card intro-card--amber">
            <div className="intro-card__head">
              <span className="intro-card__icon" aria-hidden="true">
                ✨
              </span>
              <h2 className="intro-card__title">Nuestro compromiso</h2>
            </div>
            <div className="prose">
              <p>
                Democratizar el acceso al conocimiento logopédico, fortalecer la
                formación académica y profesional, y contribuir a la mejora de la
                calidad de vida de los niños con trastornos de la comunicación
                oral mediante la sistematización y difusión de investigaciones
                rigurosas, actualizadas y contextualizadas.
              </p>
            </div>
          </article>

          {/* Marcos legales de referencia (segunda aparición, con años) */}
          <article className="glass glass-card intro-card intro-card--lime intro-card--wide">
            <div className="intro-card__head">
              <span className="intro-card__icon" aria-hidden="true">
                📜
              </span>
              <h2 className="intro-card__title">Marcos legales de referencia</h2>
            </div>
            <ul className="intro-legal">
              <li>Agenda 2030 para el Desarrollo Sostenible (2015).</li>
              <li>Constitución de la República de Cuba (2019).</li>
              <li>
                Lineamientos de la Política Económica y Social del Partido y la
                Revolución (2021–2025).
              </li>
              <li>Código de las Familias (2022).</li>
              <li>
                Anteproyecto del Código de la Niñez, Adolescencias y Juventudes
                (2024).
              </li>
              <li>
                Tercer Perfeccionamiento del Sistema Nacional de Educación
                (2016).
              </li>
            </ul>
          </article>
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
            <Link
              href="/resultados"
              className="glass glass-btn glass-btn--ghost"
            >
              Ver Resultados
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
