'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import BackToHome from '@/components/BackToHome';

export default function AnalisisResultados() {
  const [openSections, setOpenSections] = useState<Set<string>>(new Set());

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
        <h1 className="results__title">
          Análisis de los resultados de las tesis consultadas, entre los años
          2015-2025, acerca de los trastornos de la comunicación oral
        </h1>
        <div className="results__rule" />
      </header>

      {/* Contenedor principal de acordeones */}
      <div className="results__list">
        {SECCIONES.map(({ id, titulo, contenido }) => {
          const open = isOpen(id);
          return (
            <div key={id} className={`accordion${open ? ' is-open' : ''}`}>
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
    id: 'intro',
    titulo: 'Análisis de los resultados de las investigaciones',
    contenido: (
      <>
        <p>
          El análisis de los resultados de las investigaciones orientadas al
          estudio de la comunicación oral y sus trastornos durante el período{' '}
          <strong>2015-2025</strong>, basado en <strong>80 documentos</strong>,
          revela una serie de hallazgos significativos y tendencias claras que
          reflejan tanto avances como desafíos en el campo de la logopedia y la
          intervención en trastornos comunicativos. Dicho análisis permite
          identificar patrones, avances y desafíos que caracterizan esta década
          en el contexto cubano.
        </p>
        <p>
          Este corpus de investigaciones se sustenta en un marco teórico robusto
          que integra el enfoque <strong>dialéctico-materialista</strong> y el{' '}
          <strong>histórico-cultural</strong>, con una fuerte influencia de las
          teorías de <strong>Lev Vygotsky</strong>. Según este marco, el
          lenguaje se concibe como un proceso integral de naturaleza{' '}
          <strong>biopsicosocial</strong>, donde convergen dimensiones{' '}
          <strong>cognitivas</strong>, <strong>afectivas</strong> y{' '}
          <strong>contextuales</strong>, como el entorno familiar, escolar y
          comunitario.
        </p>
        <p>
          Dicho enfoque subraya la importancia de la mediación social en el
          desarrollo lingüístico, entendiendo que el lenguaje no solo es una
          herramienta de comunicación, sino también un medio para la formación
          de conceptos, la organización del pensamiento y la internalización de
          habilidades sociales.
        </p>
      </>
    ),
  },
  {
    id: 'primer',
    titulo:
      'Primer quinquenio (2015-2019): consolidación de bases teóricas y metodológicas',
    contenido: (
      <>
        <p>
          En el primer quinquenio, la investigación sobre comunicación oral en
          Cuba se caracterizó por la consolidación de un marco teórico robusto,
          basado principalmente en el enfoque dialéctico-materialista y el
          histórico-cultural, con una fuerte influencia de las teorías de Lev
          Vygotsky. Este marco concebía el lenguaje como un proceso{' '}
          <strong>biopsicosocial</strong> en el que convergían dimensiones
          cognitivas, afectivas y contextuales (entorno familiar, escolar y
          comunitario).
        </p>
        <p>
          La mediación social se identificó como un elemento clave en el
          desarrollo lingüístico, entendiendo el lenguaje no solo como una
          herramienta de comunicación, sino también como un medio para la
          formación de conceptos y la organización del pensamiento.
        </p>
        <p>
          En cuanto a las metodologías, se observó una preferencia por la{' '}
          <strong>triangulación de técnicas</strong>, combinando métodos
          cualitativos (observación directa, entrevistas a padres y docentes) y
          cuantitativos (pruebas logopédicas estandarizadas y análisis
          documental), lo que permitió obtener una visión holística del
          desarrollo comunicativo del niño, evaluando tanto sus habilidades
          lingüísticas como los factores contextuales que influían en su
          progreso.
        </p>
        <p>
          Las estrategias de intervención en este período se centraron en el{' '}
          <strong>enfoque lúdico</strong>, utilizando juegos, poesía, cuentos
          interactivos y manualidades para motivar el aprendizaje de habilidades
          comunicativas. La <strong>personalización</strong> de las actividades
          fue un elemento clave, reconociendo que cada niño tenía un ritmo de
          desarrollo y necesidades únicas. También se destacó la importancia de
          la <strong>participación familiar</strong>, aunque su implementación
          práctica aún presentaba limitaciones.
        </p>
        <p>
          Se desarrollaron herramientas prácticas como manuales, folletos, guías
          de actividades y materiales didácticos adaptados, que facilitaban la
          implementación de las intervenciones y empoderaban a los actores
          involucrados (familias, docentes y terapeutas).
        </p>
        <p>A pesar de los avances, el primer quinquenio presentó vacíos significativos:</p>
        <ul>
          <li>
            <strong>Falta de evaluación a largo plazo</strong> de los resultados
            de las intervenciones.
          </li>
          <li>Limitaciones en zonas rurales o marginadas.</li>
          <li>
            <strong>Subutilización de tecnologías especializadas</strong>{' '}
            (software de entrenamiento auditivo, dispositivos de comunicación
            aumentativa).
          </li>
          <li>
            <strong>Falta de capacitación sistemática para las familias</strong>.
          </li>
          <li>Coordinación interdisciplinaria incipiente.</li>
        </ul>
        <p>
          Entre los hitos más relevantes del primer quinquenio, destacan: la
          consolidación del marco teórico mediante la adopción del enfoque
          dialéctico-materialista e histórico-cultural; el desarrollo de
          herramientas prácticas como manuales, folletos y guías de actividades;
          el reconocimiento de la importancia de la participación familiar; y la
          popularización del enfoque lúdico.
        </p>
      </>
    ),
  },
  {
    id: 'segundo',
    titulo:
      'Segundo quinquenio (2020-2025): innovación y diversificación de enfoques',
    contenido: (
      <>
        <p>
          En el segundo quinquenio, se observó una evolución hacia enfoques más
          innovadores y diversificados. El marco teórico se amplió para incluir
          nuevos elementos, como el <strong>ideario pedagógico martiano</strong>,
          que promovía valores como la identidad nacional, la justicia social y
          la inclusión. Además, se consolidó el <strong>enfoque bilingüe</strong>{' '}
          para la intervención en niños sordos, integrando la lengua de señas
          cubana (LSC) y el español oral.
        </p>
        <p>
          Las metodologías de investigación incorporaron un mayor uso de
          tecnologías, como presentaciones digitales, software de entrenamiento
          auditivo y plataformas en línea, lo que permitió una evaluación más
          estructurada y precisa. También se observó un{' '}
          <strong>enfoque comunitario</strong>, con el desarrollo de actividades
          preventivas y estimuladoras en contextos comunitarios, especialmente
          para niños prematuros o en riesgo.
        </p>
        <p>Las estrategias de intervención se volvieron más sofisticadas:</p>
        <ul>
          <li>
            <strong>Enfoque multisensorial</strong>: estímulos visuales,
            auditivos y táctiles.
          </li>
          <li>
            <strong>Secuencia progresiva</strong>: concienciación del error →
            producción guiada → generalización.
          </li>
          <li>
            <strong>Recursos innovadores</strong>: pictogramas, comunicación
            aumentativa, canciones.
          </li>
          <li>
            <strong>Participación familiar activa</strong>: talleres, folletos y
            manuales.
          </li>
          <li>
            <strong>Trabajo interdisciplinario</strong>: mayor integración entre
            logopedas, docentes, psicólogos.
          </li>
        </ul>
        <p>
          En cuanto a los trastornos primarios abordados, las investigaciones se
          centraron en alteraciones que afectan directamente el desarrollo
          lingüístico sin estar asociadas a condiciones secundarias graves:
        </p>
        <div className="results-card">
          <h4 className="results-card__title">Trastornos primarios abordados:</h4>
          <ul>
            <li>
              <strong>Dislalia funcional:</strong> dificultades articulatorias
              sin causa orgánica.
            </li>
            <li>
              <strong>Retraso simple del lenguaje:</strong> desarrollo inferior
              al esperado para la edad.
            </li>
            <li>
              <strong>Mutismo selectivo:</strong> incapacidad de hablar en
              ciertos contextos por ansiedad.
            </li>
            <li>
              <strong>Trastornos de la fluidez:</strong> como la tartamudez.
            </li>
            <li>
              <strong>Disglosia:</strong> asociada a malformaciones anatómicas.
            </li>
            <li>
              <strong>Trastornos de la comunicación en sordera.</strong>
            </li>
          </ul>
          <p>
            Para cada uno de ellos se propusieron estrategias específicas:
            ejercicios de motricidad orofacial y entrenamiento fonético para la
            dislalia; creación de entornos seguros y refuerzo positivo para el
            mutismo selectivo; técnicas de respiración y habla rítmica para la
            tartamudez; terapia prequirúrgica y ejercicios adaptados para la
            disglosia; y modelos bilingües (lengua de señas y español oral) para
            la sordera.
          </p>
        </div>
        <p>
          Los resultados reportados en las investigaciones muestran mejoras
          cuantificables en áreas como la{' '}
          <strong>inteligibilidad del habla</strong>, la{' '}
          <strong>ampliación del vocabulario</strong> y la{' '}
          <strong>fluidez comunicativa</strong>. También se observa un impacto
          positivo en el ámbito emocional, con un aumento de la{' '}
          <strong>autoestima</strong> y la <strong>motivación</strong> de los
          niños tras las terapias.
        </p>
        <p>A pesar de los avances, el segundo quinquenio aún presentó vacíos y desafíos:</p>
        <ul>
          <li>
            <strong>Falta de evaluación a largo plazo</strong>.
          </li>
          <li>
            <strong>Barreras de acceso</strong> a tecnologías en zonas rurales y
            marginadas.
          </li>
          <li>
            <strong>Formación docente insuficiente</strong>.
          </li>
          <li>
            <strong>Falta de atención a grupos vulnerables</strong>{' '}
            (discapacidades múltiples, pobreza extrema).
          </li>
          <li>
            Falta de <strong>protocolos estandarizados</strong> para
            colaboración interdisciplinaria.
          </li>
        </ul>
        <p>
          Entre los hitos más relevantes del segundo quinquenio, destacan: la
          ampliación del marco teórico con la integración del ideario pedagógico
          martiano y el enfoque bilingüe para la sordera; la incorporación de
          tecnologías como software, aplicaciones móviles y plataformas en
          línea; el desarrollo de un enfoque comunitario; la mayor sofisticación
          de las estrategias de intervención; y el empoderamiento familiar.
          Además, se destaca que la{' '}
          <strong>revisión por especialistas ha sido un aspecto constante</strong>
          , con el 100% de las propuestas recibiendo evaluaciones positivas por
          su claridad, pertinencia y aplicabilidad.
        </p>
      </>
    ),
  },
  {
    id: 'comparacion',
    titulo: 'Comparación entre quinquenios: evolución de la comunicación oral',
    contenido: (
      <>
        <p>
          La comunicación oral en Cuba experimentó una evolución notable entre
          los dos quinquenios. En el primer período (2015-2019), el enfoque se
          centró en la consolidación de bases teóricas y metodológicas, con un
          énfasis en el uso de estrategias lúdicas y la participación incipiente
          de la familia. Las intervenciones eran principalmente correctivas,
          dirigidas a niños en edad preescolar y escolar temprana, y se
          enfocaban en trastornos como la dislalia, el retraso simple del
          lenguaje y la tartamudez.
        </p>
        <p>
          En el segundo quinquenio (2020-2025), la comunicación oral se abordó
          desde una perspectiva más innovadora y diversificada, incorporando
          nuevos marcos teóricos y un enfoque bilingüe para la intervención en
          niños sordos. Las metodologías de investigación se enriquecieron con el
          uso de tecnologías, y las estrategias de intervención se volvieron más
          sofisticadas, adoptando enfoques multisensoriales y secuencias
          progresivas.
        </p>
        <p>
          Además, la participación familiar adquirió mayor relevancia, y las
          intervenciones se extendieron a grupos más diversos, como adolescentes,
          niños con implantes cocleares, TEA y síndrome de Down.
        </p>

        <div className="compare-table-wrap">
          <div className="compare-table-scroll">
          <table className="compare-table">
            <thead>
              <tr>
                <th scope="col">Aspecto</th>
                <th scope="col" className="is-period-a">
                  2015-2019
                </th>
                <th scope="col" className="is-period-b">
                  2020-2025
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Enfoque</th>
                <td>Consolidación de bases teóricas y metodológicas</td>
                <td>Innovación y diversificación de enfoques</td>
              </tr>
              <tr>
                <th scope="row">Marcos teóricos</th>
                <td>Dialéctico-materialista e histórico-cultural (Vygotsky)</td>
                <td>Ideario martiano + enfoque bilingüe para sordera</td>
              </tr>
              <tr>
                <th scope="row">Metodologías</th>
                <td>Triangulación de técnicas (cuali + cuanti)</td>
                <td>Uso de tecnologías + enfoque comunitario</td>
              </tr>
              <tr>
                <th scope="row">Estrategias</th>
                <td>
                  Lúdico, personalización incipiente, participación familiar
                  limitada
                </td>
                <td>
                  Multisensorial, secuencias progresivas, participación activa
                </td>
              </tr>
              <tr>
                <th scope="row">Población objetivo</th>
                <td>Niños preescolares y escolar temprana</td>
                <td>Adolescentes, TEA, síndrome de Down, implantes cocleares</td>
              </tr>
              <tr>
                <th scope="row">Tecnologías</th>
                <td>Subutilizadas (barreras económicas)</td>
                <td>Software, apps, plataformas en línea</td>
              </tr>
              <tr>
                <th scope="row">Participación familiar</th>
                <td>Reconocimiento de importancia (limitada)</td>
                <td>Empoderamiento activo (talleres, manuales)</td>
              </tr>
              <tr>
                <th scope="row">Trabajo interdisciplinario</th>
                <td>Incipiente</td>
                <td>Fortalecido (mayor integración)</td>
              </tr>
            </tbody>
          </table>
          </div>
        </div>

        <div className="results-card">
          <p>
            <strong>Regularidades que se mantuvieron en ambos quinquenios:</strong>
          </p>
          <ul>
            <li>
              El marco dialéctico-materialista e histórico-cultural siguió siendo
              la base.
            </li>
            <li>
              Se reconoció el papel clave del entorno familiar, escolar y
              comunitario.
            </li>
            <li>
              Juegos, cuentos y actividades creativas como herramientas
              fundamentales.
            </li>
            <li>Necesidad de adaptar las estrategias a cada niño.</li>
          </ul>
        </div>

        <p>
          <strong className="prose__danger">Vacíos persistentes:</strong>
        </p>
        <ul>
          <li>Falta de evaluación a largo plazo.</li>
          <li>Limitaciones tecnológicas en zonas rurales.</li>
          <li>Formación docente insuficiente.</li>
          <li>Poca representación de niños con discapacidades múltiples.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'hallazgos',
    titulo: 'Hallazgos complementarios del análisis',
    contenido: (
      <>
        <p>
          De manera transversal, las investigaciones analizadas reflejan una{' '}
          <strong>adaptación creativa y contextualizada</strong> a las
          necesidades de diferentes poblaciones y escenarios. Se observan{' '}
          <strong>enfoques teórico-metodológicos innovadores</strong>, como la
          integración del ideario pedagógico martiano, y una{' '}
          <strong>atención especializada a grupos singulares</strong> (niños con
          implantes cocleares, estudiantes ciegos con dislalia, familias de
          educandos sordos).
        </p>
        <p>
          La creación de{' '}
          <strong>materiales terapéuticos personalizados</strong> —folletos para
          familias de niños con mutismo selectivo, sistemas bilingües, cuadernos
          multisensoriales para niños con síndrome de Down— evidencia un
          compromiso con la <strong>accesibilidad</strong> y la{' '}
          <strong>inclusión</strong>. Estos materiales no solo facilitan la
          intervención, sino que empoderan a familias y docentes.
        </p>
        <p>
          Los <strong>contextos de aplicación</strong> incluyen escuelas
          emblemáticas y centros especializados, lo que permite adaptar las
          intervenciones a las particularidades institucionales y poblacionales.
          La integración de <strong>elementos culturales</strong>, como la
          educación sexual para el desarrollo del lenguaje o el uso del
          patrimonio literario cubano, fortalece el vínculo emocional y la
          identidad de los participantes.
        </p>
        <p>
          Se observa un avance en la aplicación de{' '}
          <strong>herramientas tecnológicas</strong>, especialmente en el
          entrenamiento auditivo para usuarios de implantes cocleares, así como
          la adecuación de técnicas tradicionales para contextos grupales.
        </p>
        <p>
          En cuanto a la <strong>validación</strong>, el{' '}
          <strong>100% de las propuestas</strong> recibieron evaluaciones
          positivas por su claridad, pertinencia y aplicabilidad. La
          adaptabilidad contextual de los materiales ha permitido que
          herramientas como los cuadernos para niños con síndrome de Down sean
          replicables en otras escuelas cubanas y contextos latinoamericanos.
        </p>
        <p>Sin embargo, persisten <strong>retos técnicos</strong>:</p>
        <ul>
          <li>
            Necesidad de intervenciones prolongadas para abordar fonemas
            complejos.
          </li>
          <li>Limitaciones tecnológicas en escuelas rurales.</li>
          <li>Barreras socioculturales como la sobreprotección familiar.</li>
          <li>
            Estigmas hacia la discapacidad en comunidades con bajo nivel
            educativo.
          </li>
        </ul>
        <p>Las <strong>recomendaciones</strong> derivadas de estas investigaciones apuntan a:</p>
        <ul>
          <li>
            Fortalecer la <strong>capacitación docente</strong> en estrategias
            innovadoras.
          </li>
          <li>
            Promover <strong>políticas públicas</strong> que prioricen la
            detección temprana.
          </li>
          <li>
            Fomentar el uso de <strong>tecnologías accesibles</strong>{' '}
            (aplicaciones móviles, plataformas digitales).
          </li>
        </ul>
        <p>
          Los estudios concluyen que la{' '}
          <strong>
            corrección y compensación de los trastornos de la comunicación oral
            en la infancia dependen de estrategias estructuradas y creativas
          </strong>
          , que integren lo lúdico, lo pedagógico y lo tecnológico, junto con la
          participación activa de familias, comunidades y profesionales de
          diversas disciplinas.
        </p>
      </>
    ),
  },
];
