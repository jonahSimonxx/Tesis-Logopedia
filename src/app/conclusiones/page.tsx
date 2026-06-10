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
              El análisis sistemático de las tesis consultadas en el período
              2015-2025 permite establecer las siguientes conclusiones.
            </p>
            <p>
              <strong>En primer lugar</strong>, los referentes teóricos que
              sustentan el estudio de los trastornos de la comunicación oral en
              la infancia se articulan predominantemente en torno al enfoque
              histórico-cultural de Vygotsky, complementado por la teoría
              dialéctico-materialista y el enfoque cognitivo comunicativo. Dichos
              marcos conceptualizan el lenguaje como un fenómeno biopsicosocial y
              contextualizado, donde la mediación social y la actividad
              compartida constituyen ejes fundamentales para la intervención
              logopédica.
            </p>
            <p>
              <strong>En segundo lugar</strong>, los trastornos de mayor
              prevalencia identificados en las investigaciones revisadas son la
              dislalia funcional, la rinolalia, la disartria, el retraso simple
              del lenguaje, la tartamudez y el tartaleo. Cada uno de estos
              trastornos presenta una etiología y manifestaciones clínicas
              particulares, lo que exige procedimientos diagnósticos
              diferenciados y planes de intervención individualizados.
            </p>
            <p>
              <strong>En tercer lugar</strong>, las estrategias de intervención
              con mayor respaldo empírico incluyen el enfoque lúdico, la
              estimulación multisensorial, la personalización de las actividades,
              la participación activa de la familia y la escuela, así como la
              incorporación progresiva de recursos tecnológicos. Los resultados
              reportados evidencian mejoras en la inteligibilidad del habla, la
              amplitud léxica, la fluidez comunicativa y el bienestar emocional
              de los educandos.
            </p>
            <p>
              No obstante, la comparación entre el primer quinquenio (2015-2019)
              y el segundo (2020-2025) revela la persistencia de vacíos
              metodológicos: ausencia de seguimiento a largo plazo, limitaciones
              en el acceso a tecnologías en contextos rurales, formación
              insuficiente del profesorado y escasa atención a grupos en
              situación de vulnerabilidad múltiple.
            </p>
            <p>
              Como aporte práctico derivado de la investigación, se desarrolló un
              sitio web especializado que centraliza y difunde las tesis
              consultadas. Dicho recurso facilita la consulta, la descarga de
              documentos y la actualización del conocimiento, beneficiando a
              estudiantes, docentes, logopedas, investigadores y familias.
            </p>
            <p>
              Finalmente, se concluye que la atención logopédica a los trastornos
              de la comunicación oral en la infancia requiere un enfoque
              interdisciplinario, temprano e inclusivo, sustentado en marcos
              legales que garantizan la igualdad de oportunidades.
            </p>
          </div>
        </div>
      </div>

      <BackToHome />
    </div>
  );
}
