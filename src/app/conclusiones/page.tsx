import BackToHome from '@/components/BackToHome';

export default function Conclusiones() {
  return (
    <div className="results">
      <header className="results__header">
        <span className="hero__kicker">Cierre de la investigación</span>
        <h1 className="results__title">Conclusiones</h1>
        <div className="results__rule" />
      </header>

      <div className="results__list">
        <div
          className="glass"
          style={{
            borderRadius: 'var(--radius-xl)',
            padding: 'var(--space-xl)',
          }}
        >
          <div className="prose">
            <p>
              <strong>1.</strong> La sistematización de los referentes teóricos y
              metodológicos que sustentan el desarrollo de la comunicación oral y
              sus trastornos revela la importancia de su abordaje desde una
              perspectiva integral, interdisciplinaria y contextualizada. Autores
              como Piaget, Vygotsky y Luria, entre otros, permiten comprender la
              comunicación oral como un proceso dinámico, bidireccional y esencial
              para el desarrollo cognitivo, social y educativo de la persona;
              desde un enfoque científico, inclusivo y colaborativo de los avances
              de la investigación, la experiencia educativa y el marco legal
              vigente.
            </p>
            <p>
              <strong>2.</strong> El estudio revela que los trastornos más
              estudiados, entre los años 2015-2025, se hallan: la dislalia
              funcional; el retraso del lenguaje; los trastornos de la fluidez (la
              tartamudez); la disglosia (asociada a malformaciones anatómicas) y
              los trastornos de la comunicación en educandos sordos.
            </p>
            <p>
              <strong>3.</strong> Entre las estrategias principales identificadas
              se sitúan: el enfoque lúdico; la intervención multisensorial; la
              personalización de las actividades; la participación activa de la
              familia y la escuela; la colaboración entre logopedas, familia y
              docentes es clave para el éxito de la intervención. Se promueve la
              utilización de la tecnología y recursos digitales; así como técnicas
              de modelado, materiales didácticos adaptados, juegos de mesa y
              actividades grupales y de refuerzo positivo, que favorecen la
              adquisición y generalización de habilidades para la comunicación
              oral.
            </p>
            <p>
              <strong>4.</strong> El sitio web: Trastornos de la comunicación
              oral: una década de estudios, un apoyo especializado que fortalece
              la formación académica, la práctica profesional y la participación
              social. Este recurso no solo responde a las exigencias de la
              transformación digital, sino que también consolida la identidad del
              campo de la logopedia en Cuba y en el mundo, contribuyendo a la
              inclusión, al fortalecimiento de la investigación y a la mejora de
              la calidad de vida de los educandos con trastornos de la
              comunicación oral.
            </p>
          </div>
        </div>
      </div>

      <BackToHome />
    </div>
  );
}
