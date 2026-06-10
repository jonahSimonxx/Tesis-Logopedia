import Link from 'next/link'

export default function Home() {
  return (
    <>
      <header className="hero">
        <span className="hero__kicker">Tesis Doctoral en Logopedia</span>
        <h1 className="hero__title">
          Trastornos de la comunicación oral en perspectiva:
          <br />
          una década de estudios
        </h1>
        <div className="hero__sub" style={{ textAlign: 'center', lineHeight: '1.6' }}>
          Desarrolladores:<br />
          Melissa Ruenes Bergareche<br />
          Jonathan A. Simón González
        </div>
      </header>

      <div className="container page" style={{ paddingBottom: '64px' }}>
        <section className="section">
          <div className="section__header">
            <h2 className="section__title">Explora la investigación</h2>
            <span className="section__subtitle">Navega por las secciones</span>
          </div>

          <div className="card-grid">
            <Link href="/introduccion" className="glass glass-card">
              <div className="glass-card__label">Capítulo 1</div>
              <h3 className="glass-card__title">Introducción</h3>
              <p className="glass-card__body">
                Contexto, justificación y objetivos de la tesis.
              </p>
              <div style={{ marginTop: '20px' }}>
                <span className="glass-badge glass-badge--aqua">Leer más →</span>
              </div>
            </Link>

            <Link href="/trastornosComOral" className="glass glass-card">
              <div className="glass-card__label">Capítulo 2</div>
              <h3 className="glass-card__title">
                Fichas descriptivas de los principales trastornos de la
                comunicación oral
              </h3>
              <p className="glass-card__body">
                Caracterización de los principales trastornos: dislalia,
                rinolalia, disartria y más.
              </p>
              <div style={{ marginTop: '20px' }}>
                <span className="glass-badge glass-badge--violet">Leer más →</span>
              </div>
            </Link>

            <Link href="/procederMetodologico" className="glass glass-card">
              <div className="glass-card__label">Capítulo 3</div>
              <h3 className="glass-card__title">Proceder Metodológico</h3>
              <p className="glass-card__body">
                Diseño de investigación, participantes e instrumentos.
              </p>
              <div style={{ marginTop: '20px' }}>
                <span className="glass-badge glass-badge--rose">Leer más →</span>
              </div>
            </Link>

            <Link href="/estrategiasRecursos" className="glass glass-card">
              <div className="glass-card__label">Capítulo 4</div>
              <h3 className="glass-card__title">
                Estrategias y recursos logopédicos
              </h3>
              <p className="glass-card__body">
                Enfoques de intervención y materiales de apoyo logopédico.
              </p>
              <div style={{ marginTop: '20px' }}>
                <span className="glass-badge glass-badge--amber">Leer más →</span>
              </div>
            </Link>

            <Link href="/resultados" className="glass glass-card">
              <div className="glass-card__label">Capítulo 5</div>
              <h3 className="glass-card__title">Resultados</h3>
              <p className="glass-card__body">
                Análisis de datos y hallazgos principales.
              </p>
              <div style={{ marginTop: '20px' }}>
                <span className="glass-badge glass-badge--lime">Leer más →</span>
              </div>
            </Link>

            <Link href="/conclusiones" className="glass glass-card">
              <div className="glass-card__label">Cierre</div>
              <h3 className="glass-card__title">Conclusiones</h3>
              <p className="glass-card__body">
                Síntesis de los hallazgos y proyecciones de la investigación.
              </p>
              <div style={{ marginTop: '20px' }}>
                <span className="glass-badge glass-badge--aqua">Leer más →</span>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}