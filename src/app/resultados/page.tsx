'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function AnalisisResultados() {
  const [openSections, setOpenSections] = useState<Set<string>>(new Set());

  const toggleSection = (id: string) => {
    const newSet = new Set(openSections);
    if (newSet.has(id)) {
      newSet.delete(id);
    } else {
      newSet.add(id);
    }
    setOpenSections(newSet);
  };

  const isOpen = (id: string) => openSections.has(id);

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
      {/* Cabecera */}
      <header className="mb-12 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Análisis de los resultados de las tesis consultadas, entre los años 2015-2025, acerca de los trastornos de la comunicación oral
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-accent-aqua to-accent-violet mx-auto rounded-full"></div>
      </header>

      {/* Contenedor principal de acordeones */}
      <div className="space-y-4">
        
        {/* Acordeón 1 */}
        <div className={`glass rounded-2xl transition-all duration-300 border border-transparent hover:border-white/20 dark:hover:border-white/10 ${
          isOpen('intro') ? 'shadow-glow' : ''
        }`}>
          <button
            onClick={() => toggleSection('intro')}
            className="w-full flex justify-between items-center p-5 text-left font-semibold text-gray-800 dark:text-gray-200 hover:bg-white/5 dark:hover:bg-white/5 rounded-2xl transition-colors"
          >
            <span className="text-lg">Análisis de los resultados de las investigaciones</span>
            {isOpen('intro') ? (
              <ChevronUp className="w-5 h-5 text-accent-aqua transition-transform" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-400 transition-transform" />
            )}
          </button>
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              isOpen('intro') ? 'max-h-[3000px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="p-5 pt-0 border-t border-glass-border space-y-4 text-gray-700 dark:text-gray-300">
              <p className="mb-4">
                El análisis de los resultados de las investigaciones orientadas al estudio de la comunicación oral y sus
                trastornos durante el período <strong>2015-2025</strong>, basado en <strong>80 documentos</strong>, revela una serie de
                hallazgos significativos y tendencias claras que reflejan tanto avances como desafíos en el campo de la
                logopedia y la intervención en trastornos comunicativos. Dicho análisis permite identificar patrones, avances y
                desafíos que caracterizan esta década en el contexto cubano.
              </p>
              <p className="mb-4">
                Este corpus de investigaciones se sustenta en un marco teórico robusto que integra el enfoque
                <strong>dialéctico-materialista</strong> y el <strong>histórico-cultural</strong>, con una fuerte influencia de las
                teorías de <strong>Lev Vygotsky</strong>. Según este marco, el lenguaje se concibe como un proceso integral de
                naturaleza <strong>biopsicosocial</strong>, donde convergen dimensiones <strong>cognitivas</strong>, <strong>afectivas</strong> y
                <strong>contextuales</strong>, como el entorno familiar, escolar y comunitario. Dicho enfoque subraya la importancia de la
                mediación social en el desarrollo lingüístico, entendiendo que el lenguaje no solo es una herramienta de
                comunicación, sino también un medio para la formación de conceptos, la organización del pensamiento y la
                internalización de habilidades sociales.
              </p>
            </div>
          </div>
        </div>

        {/* Acordeón 2 */}
        <div className={`glass rounded-2xl transition-all duration-300 border border-transparent hover:border-white/20 dark:hover:border-white/10 ${
          isOpen('primer') ? 'shadow-glow' : ''
        }`}>
          <button
            onClick={() => toggleSection('primer')}
            className="w-full flex justify-between items-center p-5 text-left font-semibold text-gray-800 dark:text-gray-200 hover:bg-white/5 rounded-2xl transition-colors"
          >
            <span className="text-lg">Primer quinquenio (2015-2019): consolidación de bases teóricas y metodológicas</span>
            {isOpen('primer') ? <ChevronUp className="w-5 h-5 text-accent-aqua" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
          </button>
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              isOpen('primer') ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="p-5 pt-0 border-t border-glass-border space-y-4 text-gray-700 dark:text-gray-300">
              <p className="mb-4">
                En el primer quinquenio, la investigación sobre comunicación oral en Cuba se caracterizó por la
                consolidación de un marco teórico robusto, basado principalmente en el enfoque dialéctico-materialista y el
                histórico-cultural, con una fuerte influencia de las teorías de Lev Vygotsky. Este marco concebía el lenguaje
                como un proceso <strong>biopsicosocial</strong> en el que convergían dimensiones cognitivas, afectivas y contextuales
                (entorno familiar, escolar y comunitario). La mediación social se identificó como un elemento clave en el desarrollo
                lingüístico, entendiendo el lenguaje no solo como una herramienta de comunicación, sino también como un medio para la
                formación de conceptos y la organización del pensamiento.
              </p>
              <p className="mb-4">
                En cuanto a las metodologías, se observó una preferencia por la <strong>triangulación de técnicas</strong>, combinando
                métodos cualitativos (observación directa, entrevistas a padres y docentes) y cuantitativos (pruebas logopédicas
                estandarizadas y análisis documental), lo que permitió obtener una visión holística del desarrollo comunicativo del
                niño, evaluando tanto sus habilidades lingüísticas como los factores contextuales que influían en su progreso.
              </p>
              <p className="mb-4">
                Las estrategias de intervención en este período se centraron en el <strong>enfoque lúdico</strong>, utilizando juegos, poesía,
                cuentos interactivos y manualidades para motivar el aprendizaje de habilidades comunicativas. La
                <strong>personalización</strong> de las actividades fue un elemento clave, reconociendo que cada niño tenía un ritmo de desarrollo y
                necesidades únicas. También se destacó la importancia de la <strong>participación familiar</strong>, aunque su implementación práctica
                aún presentaba limitaciones.
              </p>
              <p className="mb-4">
                Se desarrollaron herramientas prácticas como manuales, folletos, guías de actividades y materiales didácticos adaptados,
                que facilitaban la implementación de las intervenciones y empoderaban a los actores involucrados (familias, docentes y terapeutas).
              </p>
              <p className="mb-4">
                A pesar de los avances, el primer quinquenio presentó vacíos significativos:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Falta de evaluación a largo plazo</strong> de los resultados de las intervenciones.</li>
                <li>Limitaciones en zonas rurales o marginadas.</li>
                <li><strong>Subutilización de tecnologías especializadas</strong> (software de entrenamiento auditivo, dispositivos de comunicación aumentativa).</li>
                <li><strong>Falta de capacitación sistemática para las familias</strong>.</li>
                <li>Coordinación interdisciplinaria incipiente.</li>
              </ul>
              <p className="mb-4">
                Entre los hitos más relevantes del primer quinquenio, destacan: la consolidación del marco teórico mediante la
                adopción del enfoque dialéctico-materialista e histórico-cultural; el desarrollo de herramientas prácticas como manuales,
                folletos y guías de actividades; el reconocimiento de la importancia de la participación familiar; y la popularización del enfoque lúdico.
              </p>
            </div>
          </div>
        </div>

        {/* Acordeón 3 */}
        <div className={`glass rounded-2xl transition-all duration-300 border border-transparent hover:border-white/20 dark:hover:border-white/10 ${
          isOpen('segundo') ? 'shadow-glow' : ''
        }`}>
          <button
            onClick={() => toggleSection('segundo')}
            className="w-full flex justify-between items-center p-5 text-left font-semibold text-gray-800 dark:text-gray-200 hover:bg-white/5 rounded-2xl transition-colors"
          >
            <span className="text-lg">Segundo quinquenio (2020-2025): innovación y diversificación de enfoques</span>
            {isOpen('segundo') ? <ChevronUp className="w-5 h-5 text-accent-aqua" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
          </button>
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              isOpen('segundo') ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="p-5 pt-0 border-t border-glass-border space-y-4 text-gray-700 dark:text-gray-300">
              <p className="mb-4">
                En el segundo quinquenio, se observó una evolución hacia enfoques más innovadores y diversificados. El marco teórico
                se amplió para incluir nuevos elementos, como el <strong>ideario pedagógico martiano</strong>, que promovía valores como la
                identidad nacional, la justicia social y la inclusión. Además, se consolidó el <strong>enfoque bilingüe</strong> para la intervención
                en niños sordos, integrando la lengua de señas cubana (LSC) y el español oral.
              </p>
              <p className="mb-4">
                Las metodologías de investigación incorporaron un mayor uso de tecnologías, como presentaciones digitales, software de
                entrenamiento auditivo y plataformas en línea, lo que permitió una evaluación más estructurada y precisa. También se observó un
                <strong>enfoque comunitario</strong>, con el desarrollo de actividades preventivas y estimuladoras en contextos comunitarios,
                especialmente para niños prematuros o en riesgo.
              </p>
              <p className="mb-4">
                Las estrategias de intervención se volvieron más sofisticadas:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Enfoque multisensorial</strong>: estímulos visuales, auditivos y táctiles.</li>
                <li><strong>Secuencia progresiva</strong>: concienciación del error → producción guiada → generalización.</li>
                <li><strong>Recursos innovadores</strong>: pictogramas, comunicación aumentativa, canciones.</li>
                <li><strong>Participación familiar activa</strong>: talleres, folletos y manuales.</li>
                <li><strong>Trabajo interdisciplinario</strong>: mayor integración entre logopedas, docentes, psicólogos.</li>
              </ul>
              <p className="mb-4">
                En cuanto a los trastornos primarios abordados, las investigaciones se centraron en alteraciones que afectan directamente el
                desarrollo lingüístico sin estar asociadas a condiciones secundarias graves:
              </p>
              <div className="bg-white/10 dark:bg-gray-800/20 p-5 rounded-xl space-y-3 mb-4">
                <h4 className="font-bold text-gray-800 dark:text-gray-200">Trastornos primarios abordados:</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Dislalia funcional:</strong> dificultades articulatorias sin causa orgánica.</li>
                  <li><strong>Retraso simple del lenguaje:</strong> desarrollo inferior al esperado para la edad.</li>
                  <li><strong>Mutismo selectivo:</strong> incapacidad de hablar en ciertos contextos por ansiedad.</li>
                  <li><strong>Trastornos de la fluidez:</strong> como la tartamudez.</li>
                  <li><strong>Disglosia:</strong> asociada a malformaciones anatómicas.</li>
                  <li><strong>Trastornos de la comunicación en sordera.</strong></li>
                </ul>
                <p>
                  Para cada uno de ellos se propusieron estrategias específicas: ejercicios de motricidad orofacial y entrenamiento fonético
                  para la dislalia; creación de entornos seguros y refuerzo positivo para el mutismo selectivo; técnicas de respiración y habla
                  rítmica para la tartamudez; terapia prequirúrgica y ejercicios adaptados para la disglosia; y modelos bilingües (lengua de señas y
                  español oral) para la sordera.
                </p>
              </div>
              <p className="mb-4">
                Los resultados reportados en las investigaciones muestran mejoras cuantificables en áreas como la
                <strong>inteligibilidad del habla</strong>, la <strong>ampliación del vocabulario</strong> y la <strong>fluidez comunicativa</strong>. También
                se observa un impacto positivo en el ámbito emocional, con un aumento de la <strong>autoestima</strong> y la
                <strong>motivación</strong> de los niños tras las terapias.
              </p>
              <p className="mb-4">
                A pesar de los avances, el segundo quinquenio aún presentó vacíos y desafíos:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Falta de evaluación a largo plazo</strong>.</li>
                <li><strong>Barreras de acceso</strong> a tecnologías en zonas rurales y marginadas.</li>
                <li><strong>Formación docente insuficiente</strong>.</li>
                <li><strong>Falta de atención a grupos vulnerables</strong> (discapacidades múltiples, pobreza extrema).</li>
                <li>Falta de <strong>protocolos estandarizados</strong> para colaboración interdisciplinaria.</li>
              </ul>
              <p className="mb-4">
                Entre los hitos más relevantes del segundo quinquenio, destacan: la ampliación del marco teórico con la integración del ideario
                pedagógico martiano y el enfoque bilingüe para la sordera; la incorporación de tecnologías como software, aplicaciones móviles
                y plataformas en línea; el desarrollo de un enfoque comunitario; la mayor sofisticación de las estrategias de intervención; y el
                empoderamiento familiar. Además, se destaca que la <strong>revisión por especialistas ha sido un aspecto constante</strong>, con el 100% de las
                propuestas recibiendo evaluaciones positivas por su claridad, pertinencia y aplicabilidad.
              </p>
            </div>
          </div>
        </div>

        {/* Acordeón 4 - Tabla comparativa mejorada */}
        <div className={`glass rounded-2xl transition-all duration-300 border border-transparent hover:border-white/20 dark:hover:border-white/10 ${
          isOpen('comparacion') ? 'shadow-glow' : ''
        }`}>
          <button
            onClick={() => toggleSection('comparacion')}
            className="w-full flex justify-between items-center p-5 text-left font-semibold text-gray-800 dark:text-gray-200 hover:bg-white/5 rounded-2xl transition-colors"
          >
            <span className="text-lg">Comparación entre quinquenios: evolución de la comunicación oral</span>
            {isOpen('comparacion') ? <ChevronUp className="w-5 h-5 text-accent-aqua" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
          </button>
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              isOpen('comparacion') ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="p-5 pt-0 border-t border-glass-border space-y-6 text-gray-700 dark:text-gray-300">
              <p className="mb-4">
                La comunicación oral en Cuba experimentó una evolución notable entre los dos quinquenios. En el primer período
                (2015-2019), el enfoque se centró en la consolidación de bases teóricas y metodológicas, con un énfasis en el uso de
                estrategias lúdicas y la participación incipiente de la familia. Las intervenciones eran principalmente correctivas, dirigidas a
                niños en edad preescolar y escolar temprana, y se enfocaban en trastornos como la dislalia, el retraso simple del lenguaje y la
                tartamudez.
              </p>
              <p className="mb-4">
                En el segundo quinquenio (2020-2025), la comunicación oral se abordó desde una perspectiva más innovadora y diversificada,
                incorporando nuevos marcos teóricos y un enfoque bilingüe para la intervención en niños sordos. Las metodologías de investigación se
                enriquecieron con el uso de tecnologías, y las estrategias de intervención se volvieron más sofisticadas, adoptando enfoques
                multisensoriales y secuencias progresivas. Además, la participación familiar adquirió mayor relevancia, y las intervenciones se
                extendieron a grupos más diversos, como adolescentes, niños con implantes cocleares, TEA y síndrome de Down.
              </p>

              {/* Tabla con bordes visibles y estructura clara */}
              <div className="overflow-x-auto rounded-xl border border-glass-border">
                <table className="min-w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-glass-border bg-white/10 dark:bg-gray-800/20">
                      <th className="p-4 text-left font-semibold text-gray-800 dark:text-gray-200 border-r border-glass-border">Aspecto</th>
                      <th className="p-4 text-left font-semibold text-gray-800 dark:text-gray-200 border-r border-glass-border">2015-2019</th>
                      <th className="p-4 text-left font-semibold text-gray-800 dark:text-gray-200">2020-2025</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-glass-border hover:bg-white/5">
                      <td className="p-4 font-medium border-r border-glass-border">Enfoque</td>
                      <td className="p-4 border-r border-glass-border">Consolidación de bases teóricas y metodológicas</td>
                      <td className="p-4">Innovación y diversificación de enfoques</td>
                    </tr>
                    <tr className="border-b border-glass-border hover:bg-white/5">
                      <td className="p-4 font-medium border-r border-glass-border">Marcos Teóricos</td>
                      <td className="p-4 border-r border-glass-border">Dialéctico-materialista e histórico-cultural (Vygotsky)</td>
                      <td className="p-4">Ideario martiano + enfoque bilingüe para sordera</td>
                    </tr>
                    <tr className="border-b border-glass-border hover:bg-white/5">
                      <td className="p-4 font-medium border-r border-glass-border">Metodologías</td>
                      <td className="p-4 border-r border-glass-border">Triangulación de técnicas (cuali + cuanti)</td>
                      <td className="p-4">Uso de tecnologías + enfoque comunitario</td>
                    </tr>
                    <tr className="border-b border-glass-border hover:bg-white/5">
                      <td className="p-4 font-medium border-r border-glass-border">Estrategias</td>
                      <td className="p-4 border-r border-glass-border">Lúdico, personalización incipiente, participación familiar limitada</td>
                      <td className="p-4">Multisensorial, secuencias progresivas, participación activa</td>
                    </tr>
                    <tr className="border-b border-glass-border hover:bg-white/5">
                      <td className="p-4 font-medium border-r border-glass-border">Población Objetivo</td>
                      <td className="p-4 border-r border-glass-border">Niños preescolares y escolar temprana</td>
                      <td className="p-4">Adolescentes, TEA, síndrome de Down, implantes cocleares</td>
                    </tr>
                    <tr className="border-b border-glass-border hover:bg-white/5">
                      <td className="p-4 font-medium border-r border-glass-border">Tecnologías</td>
                      <td className="p-4 border-r border-glass-border">Subutilizadas (barreras económicas)</td>
                      <td className="p-4">Software, apps, plataformas en línea</td>
                    </tr>
                    <tr className="border-b border-glass-border hover:bg-white/5">
                      <td className="p-4 font-medium border-r border-glass-border">Participación Familiar</td>
                      <td className="p-4 border-r border-glass-border">Reconocimiento de importancia (limitada)</td>
                      <td className="p-4">Empoderamiento activo (talleres, manuales)</td>
                    </tr>
                    <tr className="hover:bg-white/5">
                      <td className="p-4 font-medium border-r border-glass-border">Trabajo Interdisciplinario</td>
                      <td className="p-4 border-r border-glass-border">Incipiente</td>
                      <td className="p-4">Fortalecido (mayor integración)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="space-y-4">
                <p className="mb-2"><strong>Regularidades que se mantuvieron en ambos quinquenios:</strong></p>
                <ul className="list-disc pl-6 space-y-1 mb-4">
                  <li>El marco dialéctico-materialista e histórico-cultural siguió siendo la base.</li>
                  <li>Se reconoció el papel clave del entorno familiar, escolar y comunitario.</li>
                  <li>Juegos, cuentos y actividades creativas como herramientas fundamentales.</li>
                  <li>Necesidad de adaptar las estrategias a cada niño.</li>
                </ul>
                <p className="mb-2 text-red-500 dark:text-red-400"><strong>Vacíos persistentes:</strong></p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Falta de evaluación a largo plazo.</li>
                  <li>Limitaciones tecnológicas en zonas rurales.</li>
                  <li>Formación docente insuficiente.</li>
                  <li>Poca representación de niños con discapacidades múltiples.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Acordeón 5 */}
        <div className={`glass rounded-2xl transition-all duration-300 border border-transparent hover:border-white/20 dark:hover:border-white/10 ${
          isOpen('hallazgos') ? 'shadow-glow' : ''
        }`}>
          <button
            onClick={() => toggleSection('hallazgos')}
            className="w-full flex justify-between items-center p-5 text-left font-semibold text-gray-800 dark:text-gray-200 hover:bg-white/5 rounded-2xl transition-colors"
          >
            <span className="text-lg">Hallazgos complementarios del análisis</span>
            {isOpen('hallazgos') ? <ChevronUp className="w-5 h-5 text-accent-aqua" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
          </button>
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              isOpen('hallazgos') ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="p-5 pt-0 border-t border-glass-border space-y-4 text-gray-700 dark:text-gray-300">
              <p className="mb-4">
                De manera transversal, las investigaciones analizadas reflejan una <strong>adaptación creativa y contextualizada</strong> a las
                necesidades de diferentes poblaciones y escenarios. Se observan <strong>enfoques teórico-metodológicos innovadores</strong>, como la
                integración del ideario pedagógico martiano, y una <strong>atención especializada a grupos singulares</strong> (niños con implantes
                cocleares, estudiantes ciegos con dislalia, familias de educandos sordos).
              </p>
              <p className="mb-4">
                La creación de <strong>materiales terapéuticos personalizados</strong> —folletos para familias de niños con mutismo selectivo,
                sistemas bilingües, cuadernos multisensoriales para niños con síndrome de Down— evidencia un compromiso con la
                <strong>accesibilidad</strong> y la <strong>inclusión</strong>. Estos materiales no solo facilitan la intervención, sino que empoderan a familias y
                docentes.
              </p>
              <p className="mb-4">
                Los <strong>contextos de aplicación</strong> incluyen escuelas emblemáticas y centros especializados, lo que permite adaptar las
                intervenciones a las particularidades institucionales y poblacionales. La integración de <strong>elementos culturales</strong>, como la
                educación sexual para el desarrollo del lenguaje o el uso del patrimonio literario cubano, fortalece el vínculo emocional y la
                identidad de los participantes.
              </p>
              <p className="mb-4">
                Se observa un avance en la aplicación de <strong>herramientas tecnológicas</strong>, especialmente en el entrenamiento auditivo para
                usuarios de implantes cocleares, así como la adecuación de técnicas tradicionales para contextos grupales.
              </p>
              <p className="mb-4">
                En cuanto a la <strong>validación</strong>, el <strong>100% de las propuestas</strong> recibieron evaluaciones positivas por su claridad,
                pertinencia y aplicabilidad. La adaptabilidad contextual de los materiales ha permitido que herramientas como los cuadernos para
                niños con síndrome de Down sean replicables en otras escuelas cubanas y contextos latinoamericanos.
              </p>
              <p className="mb-4">
                Sin embargo, persisten <strong>retos técnicos</strong>:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Necesidad de intervenciones prolongadas para abordar fonemas complejos.</li>
                <li>Limitaciones tecnológicas en escuelas rurales.</li>
                <li>Barreras socioculturales como la sobreprotección familiar.</li>
                <li>Estigmas hacia la discapacidad en comunidades con bajo nivel educativo.</li>
              </ul>
              <p className="mb-4">
                Las <strong>recomendaciones</strong> derivadas de estas investigaciones apuntan a:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Fortalecer la <strong>capacitación docente</strong> en estrategias innovadoras.</li>
                <li>Promover <strong>políticas públicas</strong> que prioricen la detección temprana.</li>
                <li>Fomentar el uso de <strong>tecnologías accesibles</strong> (aplicaciones móviles, plataformas digitales).</li>
              </ul>
              <p className="mb-4">
                Los estudios concluyen que la <strong>corrección y compensación de los trastornos de la comunicación oral en la infancia dependen de
                estrategias estructuradas y creativas</strong>, que integren lo lúdico, lo pedagógico y lo tecnológico, junto con la participación activa
                de familias, comunidades y profesionales de diversas disciplinas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}