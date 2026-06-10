import BackToHome from '@/components/BackToHome';

export default function EstrategiasRecursos() {
  return (
    <div className="results">
      <header className="results__header">
        <span className="hero__kicker">Capítulo 4 · Intervención</span>
        <h1 className="results__title">Estrategias y recursos logopédicos</h1>
        <div className="results__rule" />
        <p
          className="hero__sub"
          style={{ margin: '24px auto 0', maxWidth: '820px' }}
        >
          Contenido en preparación. Esta sección reunirá las estrategias de
          intervención y los recursos logopédicos sistematizados a partir de las
          tesis consultadas.
        </p>
      </header>

      <BackToHome />
    </div>
  );
}
