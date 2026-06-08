'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function TrastornosComOral() {
  const [openSections, setOpenSections] = useState<Set<string>>(
    new Set(['dislalia'])
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
        <span className="hero__kicker">Marco teórico</span>
        <h1 className="results__title">Trastornos de la comunicación oral</h1>
        <div className="results__rule" />
        <p
          className="hero__sub"
          style={{ margin: '24px auto 0', maxWidth: '820px' }}
        >
          Teniendo en cuenta los niveles de la comunicación oral, dentro del
          nivel habla se considera la alteración de los componentes
          articulatorios y del ritmo y la fluidez verbal. En el primer grupo se
          encuentran los siguientes trastornos.
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
    </div>
  );
}

const SECCIONES: { id: string; titulo: string; contenido: React.ReactNode }[] = [
  {
    id: 'dislalia',
    titulo: 'Dislalia',
    contenido: (
      <>
        <p>
          La dislalia es un trastorno en la pronunciación de los fonemas que se
          caracteriza por la incapacidad para articular correctamente ciertos
          sonidos o grupos de sonidos del habla. Este trastorno se presenta sin
          que exista una afectación en la inervación de la musculatura
          articulatoria, ni otras alteraciones acompañantes en los componentes
          del lenguaje; es decir, no tiene una base neurológica ni orgánica
          grave.
        </p>
        <p>
          La dislalia puede manifestarse por la omisión, sustitución, distorsión
          o adición de fonemas, lo que dificulta la correcta producción de los
          sonidos del idioma. Además, se clasifica en diferentes tipos según su
          causa:
        </p>
        <ul>
          <li>
            <strong>Dislalia evolutiva o fisiológica:</strong> propia del
            desarrollo normal del lenguaje en los niños pequeños y suele
            desaparecer con el tiempo.
          </li>
          <li>
            <strong>Dislalia funcional:</strong> un defecto en la articulación
            sin alteraciones orgánicas.
          </li>
          <li>
            <strong>Dislalia audiógena:</strong> se debe a problemas auditivos.
          </li>
          <li>
            <strong>Dislalia orgánica:</strong> se relaciona con alteraciones
            físicas en los órganos del habla, pero sin daño neurológico central.
          </li>
        </ul>
        <p>
          Por la diversidad de sonidos pueden ser: simples/monomorfas o
          complejas/polimorfas.
        </p>

        <p>
          <strong>Dislalia funcional.</strong> Constituyen alteraciones en la
          articulación y pronunciación de los sonidos, originadas por el
          debilitamiento en los procesos neurodinámicos superiores de excitación
          e inhibición, que dificultan el funcionamiento de los órganos
          periféricos del habla. Esta puede ser causada por:
        </p>
        <ul>
          <li>Escasa habilidad motora.</li>
          <li>Falta de comprensión y/o discriminación auditiva.</li>
          <li>
            Imitación de patrones lingüísticos incorrectos en el habla de la
            familia u otras personas que rodean al educando.
          </li>
          <li>Factores psicológicos y ambientales.</li>
          <li>
            El bilingüismo mal empleado en las etapas de evolución y desarrollo
            del lenguaje en el educando.
          </li>
          <li>Un retraso madurativo general.</li>
        </ul>

        <p>
          <strong>Dislalia orgánica.</strong> Constituyen alteraciones en la
          articulación y pronunciación de los sonidos, originadas por
          afectaciones en los órganos del nivel periférico del habla y de origen
          no neurológico central. Pueden aparecer en el período normal del
          desarrollo del individuo o adquirirse en el curso de la vida por las
          siguientes causas: enfermedades infecciosas, traumas, malformaciones,
          disglosias (labial, mandibular y lingual), alteraciones del sistema
          máxilo-dental, alteraciones de la lengua y la bóveda palatina.
        </p>
        <p>
          Es uno de los trastornos más frecuentes en la infancia, ya que durante
          el desarrollo del lenguaje es común que los niños presenten
          dificultades temporales en la pronunciación de algunos fonemas. Sin
          embargo, cuando estas dificultades persisten más allá de la edad
          esperada para su superación (generalmente después de los 4 o 5 años),
          se considera que existe un trastorno que requiere intervención
          logopédica.
        </p>
      </>
    ),
  },
  {
    id: 'rinolalia',
    titulo: 'Rinolalia',
    contenido: (
      <>
        <p>
          La rinolalia es un trastorno del habla que se caracteriza por una
          alteración en la resonancia nasal durante la emisión de los sonidos,
          debido a un desequilibrio en el paso del aire entre la cavidad nasal y
          la bucal. Este trastorno puede manifestarse como una resonancia nasal
          excesiva o insuficiente, lo que afecta la calidad y claridad del
          habla, y está asociado a dificultades en la articulación de ciertos
          fonemas.
        </p>

        <p>
          <strong>Rinolalia orgánica.</strong> Se producen cambios estructurales
          de los órganos de la articulación y la fonación (paladar óseo, velo del
          paladar, cavidad nasal, insuficiente inervación velar), que provocan
          una inadecuada distribución del flujo de aire en los resonadores, así
          como una incorrecta articulación de los sonidos del idioma. Entre sus
          causas:
        </p>
        <ul>
          <li>
            <strong>Fisuras palatinas:</strong> malformación del paladar,
            congénitas o adquiridas por traumas. Pueden ser completas o
            incompletas (paladar óseo, paladar blando, úvula).
          </li>
          <li>
            <strong>Fisuras submucosas:</strong> una membrana mucosa que no
            permite detectar el defecto por simple exploración visual, por lo que
            es necesario un examen táctil-digital.
          </li>
          <li>
            <strong>Úvula bífida o doble:</strong> no provoca forzosamente una
            alteración resonancial, pero evidencia un elemento hereditario.
          </li>
          <li>
            <strong>Velo corto:</strong> el velo tiene poca extensión e impide el
            contacto con la pared faríngea posterior.
          </li>
          <li>
            <strong>Parálisis y paresias velares:</strong> orgánicas cuando son
            provocadas por lesiones o enfermedades del Sistema Nervioso Central o
            periférico, o por traumatismos posquirúrgicos.
          </li>
          <li>
            <strong>Problemas nasales orgánicos:</strong> crestas pronunciadas,
            desviaciones del tabique, pólipos y vegetaciones adenoideas.
          </li>
        </ul>
        <p>
          Las fisuras palatinas congénitas se dividen en exógenas (influencia de
          virus, bacterias y toxinas durante el desarrollo del embrión —
          toxoplasmosis, alteraciones nutricionales, déficit de oxígeno,
          radiaciones, venenos teratógenos, alcoholismo, madres añosas) y
          endógenas (factor hereditario dominante o recesivo, y orificios
          palatinos por alteraciones adquiridas).
        </p>

        <p>
          <strong>Rinolalia funcional.</strong> Se produce un mal funcionamiento
          del velo del paladar o de la pared posterior de la faringe en el
          proceso de emisión de los sonidos verbales, provocando una incorrecta
          realización del anillo velofaríngeo y el rompimiento del equilibrio
          entre los resonadores nasal y bucal. Entre sus causas:
        </p>
        <ul>
          <li>Parálisis y paresias velares funcionales posquirúrgicas.</li>
          <li>
            Dificultades atencionales (falta de atención del individuo sobre su
            habla).
          </li>
          <li>
            Discapacidad auditiva (personas sordas e hipoacúsicas que no perciben
            su propia habla).
          </li>
          <li>Imitación de patrones lingüísticos incorrectos.</li>
        </ul>

        <p>
          <strong>Clasificación según el momento de aparición:</strong>
        </p>
        <ul>
          <li>
            <strong>Congénita:</strong> su etiología ya está presente en el
            momento del nacimiento; más severas que las adquiridas (fisura
            palatina congénita, velo corto).
          </li>
          <li>
            <strong>Adquirida:</strong> la base etiológica aparece después del
            nacimiento (procesos inflamatorios de la cavidad nasal, tumores).
          </li>
        </ul>

        <p>
          <strong>
            Clasificación por la alteración del mecanismo anatomofisiológico:
          </strong>
        </p>
        <ul>
          <li>
            <strong>Rinolalia cerrada o hiporrinolalia:</strong> disminución de
            la función del resonador nasal por obstrucción del paso del aire. Se
            afectan los sonidos nasales (/m/, /n/, /ñ/), que se sustituyen por
            oclusivos y africados. El timbre de la voz es hiponasal, apagado.
          </li>
          <li>
            <strong>Rinolalia abierta o hiperrinolalia:</strong> marcada
            resonancia nasal por el paso libre del aire por la cavidad nasal.
            Cambios de consonantes (/p/ y /b/ por /m/; /t/ y /d/ por /n/) y
            dificultades con fricativos /s/ y /f/.
          </li>
          <li>
            <strong>Rinolalia espástica:</strong> hiperrinolalia funcional
            activa, por contracción muscular de la parte superior de la faringe;
            habla "amanerada".
          </li>
          <li>
            <strong>Rinolalia mixta:</strong> combina una hiperrinolalia
            funcional y una hiporrinolalia orgánica.
          </li>
        </ul>

        <p>
          <strong>
            Regularidades del habla, la voz y la conducta de los niños con
            rinolalia por fisura palatina congénita.
          </strong>{' '}
          El deterioro del aspecto físico, las frecuentes enfermedades
          respiratorias y digestivas y un lenguaje incomprensible provocan
          rechazo del colectivo escolar, aislamiento y negativismo verbal. Se
          observan apatía social, dificultades en el aprendizaje, retraso
          escolar, ansiedad, hiperactividad, baja autoestima, trastornos del
          sueño y fatiga. A nivel lingüístico, se altera todo el componente
          sonoro del lenguaje: timbre nasal muy marcado, voz monótona y apagada.
        </p>
      </>
    ),
  },
  {
    id: 'disartria',
    titulo: 'Disartria',
    contenido: (
      <>
        <p>
          Constituye un trastorno de la comunicación oral en el nivel habla; es
          un trastorno orgánico del lenguaje de carácter neurológico, debido a
          lesiones en regiones centrales y en las vías conductoras del sistema
          motor verbal. Se presenta una insuficiencia en la inervación de los
          órganos que intervienen en la emisión del habla; en consecuencia se
          producen trastornos en la pronunciación, acompañados de alteraciones
          respiratorias, del ritmo, la velocidad, la entonación, la voz y el
          aspecto léxico-gramatical de la lengua. Por sus particularidades se
          considera la alteración más compleja del componente sonoro del
          lenguaje.
        </p>
        <p>
          Es resultado de una lesión del sistema nervioso central, que surge por
          lo general como síntoma de las parálisis cerebrales, motivada por
          trauma o procesos inflamatorios del cerebro (meningitis,
          meningoencefalitis, trastornos vasculares, embriopatías). En el 80% se
          reconocen por traumas prenatales y se hacen más complejas en el parto
          (traumas físicos del cerebro, hemorragias, anoxias). Según la
          localización de la lesión se clasifica en: bulbar, pseudobulbar,
          cerebelar o cerebelosa, subcortical y cortical.
        </p>
        <p>
          <strong>Características generales:</strong>
        </p>
        <ul>
          <li>
            Se afectan los procesos neuropsicológicos y psicolingüísticos
            (dificultades comprensivas y expresivas del lenguaje).
          </li>
          <li>Variaciones bruscas e incontroladas del tono.</li>
          <li>Voz temblorosa y alteraciones en la intensidad.</li>
          <li>Inspiración frecuente por gasto excesivo.</li>
          <li>Aceleración o lentificación del ritmo en segmentos del habla.</li>
          <li>Reducción de la acentuación.</li>
          <li>Marcha incoordinada y precaria, con muecas constantes.</li>
        </ul>
        <p>
          <strong>Trastornos de carácter primario asociados:</strong>
        </p>
        <ul>
          <li>
            <strong>Motricidad articulatoria:</strong> movimientos superficiales,
            poco fluidos, insuficientes y débiles; la lengua se desvía y no
            consigue el movimiento.
          </li>
          <li>
            <strong>Pronunciación:</strong> por las paresias y parálisis se
            omiten sonidos, se producen sustituciones y distorsiones e
            inconstancia articulatoria.
          </li>
          <li>
            <strong>Respiración:</strong> superficial, frecuentemente clavicular;
            tienden a hablar durante la inspiración (sensación de ahogo).
          </li>
          <li>
            <strong>Voz:</strong> ronca, nasal, poco modulada; trastornos en la
            intensidad, el tono y el timbre.
          </li>
          <li>
            <strong>Entonación:</strong> habla monótona y poco modulada;
            velocidad alterada y pausas innecesarias.
          </li>
          <li>
            <strong>Motricidad general:</strong> torpeza, imprecisión de los
            movimientos y dificultades en la coordinación motriz fina (escribir,
            pintar, atarse los zapatos).
          </li>
        </ul>
        <p>
          El insuficiente desarrollo del lenguaje y del pensamiento dificulta su
          ubicación en el marco de la escuela regular, por ello son tributarios
          de la escuela específica para trastornos severos del lenguaje.
        </p>
      </>
    ),
  },
  {
    id: 'retraso',
    titulo: 'Retraso del lenguaje',
    contenido: (
      <>
        <p>
          Se considera que un educando está retrasado en el lenguaje cuando,
          desde el punto de vista cuantitativo (cantidad de vocabulario) o
          cualitativo (diferentes áreas del lenguaje), está por debajo de la edad
          cronológica.
        </p>
        <p>
          El retraso del lenguaje se considera un <strong>trastorno primario</strong>{' '}
          cuando se caracteriza principalmente por un retardo en la adquisición
          de las habilidades lingüísticas de acuerdo a la edad cronológica, sin
          asociación a causas orgánicas. En cambio, es un{' '}
          <strong>trastorno secundario</strong> cuando el desarrollo enlentecido
          se relaciona con un déficit sensorial (sordera o hipoacusia,
          sordoceguera), motor, cognitivo (retraso mental), con el autismo o con
          disfunciones cerebrales evidentes (disfasia).
        </p>
        <p>
          <strong>Causas endógenas (orgánicas):</strong> discapacidad
          intelectual, hipoacusias, parálisis cerebral, lesión focal o inmadurez
          neurológica, trastornos de lateralidad.
        </p>
        <p>
          <strong>Causas exógenas (funcionales):</strong> pobre estimulación
          lingüística (jerga familiar, uso indiscriminado de diminutivos),
          problemas afectivo-relacionales (sobreprotección, privación,
          sobrecorrección lingüística), negativismo, institucionalismo u
          hospitalización prolongada, bilingüismo mal establecido.
        </p>
        <p>Se puede clasificar en:</p>
        <ul>
          <li>
            <strong>Retraso específico severo del lenguaje:</strong> la
            manifestación más grave. Reducción considerable de los patrones
            fonológicos (en "estado embrionario"), afectación de casi todos los
            sonidos del idioma y vocabulario reducido a un pequeño grupo de
            palabras mal estructuradas, en ocasiones inentendibles fuera de
            contexto. Hay ausencia total o casi total de comunicación con
            lenguaje articulado, sustituido por mímica, jerga y sonidos
            onomatopéyicos.
          </li>
          <li>
            <strong>Retraso simple del lenguaje:</strong> la forma más leve. Los
            componentes fonológico, morfosintáctico, semántico y pragmático
            reflejan un desbalance cualitativo y cuantitativo respecto a otros
            niños del mismo período evolutivo.
          </li>
        </ul>
        <p>
          <strong>Características de la expresión (retraso simple):</strong>
        </p>
        <ul>
          <li>
            <strong>Nivel fonológico:</strong> patrones desviados, habla
            infantilizada, omisión de consonantes y sílabas iniciales; el grupo
            más afectado es el fricativo.
          </li>
          <li>
            <strong>Nivel semántico:</strong> vocabulario reducido a objetos del
            entorno y problemas con conceptos abstractos (colores, forma,
            espacio, tiempo).
          </li>
          <li>
            <strong>Nivel morfosintáctico:</strong> lenguaje telegráfico, frases
            cortas, dificultades con artículos, pronombres, plurales y tiempos
            verbales; predominio de coordinación con "y".
          </li>
          <li>
            <strong>Nivel pragmático:</strong> alteración de la intencionalidad
            comunicativa, dificultad para adaptarse al interlocutor y escaso uso
            del lenguaje en su función lúdica o narrativa.
          </li>
        </ul>
        <p>
          <strong>Comprensión:</strong> dificultades con órdenes sencillas o
          complejas, insuficiente discriminación de fonemas cercanos y una
          comprensión aproximativa y contextual.
        </p>
        <p>
          Suele asociarse a una inmadurez generalizada: ligero retraso motor y
          de la expresión gráfica, retraso en la dominancia lateral, dificultades
          cognitivas (pensamiento-lenguaje, memoria-atención), problemas
          psicoafectivos (baja autoestima, timidez, introversión, hiperactividad)
          y dificultades en el aprendizaje de la lectoescritura.
        </p>
      </>
    ),
  },
  {
    id: 'tartamudez',
    titulo: 'Tartamudez',
    contenido: (
      <>
        <p>
          La tartamudez es un trastorno complejo del habla que se caracteriza
          fundamentalmente por la interrupción de la fluidez verbal, manifestada
          a través de repeticiones, prolongaciones y bloqueos involuntarios de
          sonidos, sílabas o palabras. Estas interrupciones se producen como
          resultado de contracciones espasmódicas de la musculatura implicada en
          la articulación, que pueden ser <strong>tónicas</strong> (tensiones
          sostenidas que impiden la emisión del sonido) o{' '}
          <strong>clónicas</strong> (movimientos rápidos y repetitivos). Suelen
          ir acompañadas de movimientos accesorios o concomitantes en mandíbula,
          labios o cuello.
        </p>
        <p>
          Desde una perspectiva funcional y clínica, no solo afecta la producción
          del habla, sino que tiene un impacto significativo en la comunicación
          interpersonal, la autoestima y la calidad de vida. Las personas que
          tartamudean experimentan con frecuencia frustración, ansiedad y
          preocupación, lo que puede derivar en evitación de situaciones
          comunicativas y deterioro de sus relaciones sociales, académicas o
          laborales.
        </p>
        <p>
          Según sus manifestaciones clínicas, la <strong>tartamudez clónica</strong>{' '}
          se caracteriza por repeticiones rápidas y reiteradas de sonidos o
          sílabas, mientras que la <strong>tartamudez tónica</strong> se
          manifiesta por bloqueos o pausas prolongadas en la emisión del habla.
        </p>
        <p>
          Es un trastorno multifactorial en el que confluyen aspectos
          neurobiológicos (control motor del habla), factores genéticos, variables
          emocionales (estrés y ansiedad) y el contexto social y comunicativo.
          Requiere un abordaje interdisciplinario que integre la intervención
          logopédica con el apoyo psicológico y, en ocasiones, médico.
        </p>
      </>
    ),
  },
  {
    id: 'tartaleo',
    titulo: 'Tartaleo',
    contenido: (
      <>
        <p>
          El tartaleo es un trastorno de la comunicación oral y escrita de
          carácter heredoconstitucional y central, que se manifiesta generalmente
          en la emisión rápida y atropellada del lenguaje (taquifrasia o
          taquilalia). Se caracteriza por repeticiones, titubeos, vacilaciones y
          prolongaciones de sonidos o sílabas. Aparece comúnmente en la infancia,
          entre los 3 y 6 años, cuando el educando está madurando las estructuras
          corticales y periféricas implicadas en el lenguaje.
        </p>
        <p>
          Refleja un desequilibrio temporal en el lenguaje central. A diferencia
          de la tartamudez, suele ser transitorio y no está asociado a una
          afectación psicopatológica o neurológica.
        </p>
        <p>
          <strong>Síntomas obligatorios:</strong> repeticiones de sílabas o
          palabras, ausencia de conciencia sobre la forma de hablar, dificultades
          de concentración, limitación del campo de atención, debilidad
          perceptiva y pensamiento desorganizado.
        </p>
        <p>
          <strong>Síntomas facultativos:</strong> interjecciones, detenciones
          antes de vocales sin contracción muscular, incapacidad articulatoria
          motriz, dificultades gramaticales, monotonía, trastornos respiratorios
          durante el habla y, en algunos casos, desarrollo tardío del lenguaje.
          Puede asociarse a problemas de lectoescritura, hiperactividad e
          incapacidad rítmico-musical.
        </p>
        <p>
          El tartaleo fisiológico es un proceso evolutivo que suele resolverse
          espontáneamente con la maduración del sistema nervioso. Sin embargo, si
          persiste o se agrava, puede evolucionar hacia una tartamudez más
          definida, por lo que la observación, el seguimiento y la intervención
          temprana (orientación a la familia y estimulación del lenguaje) son
          clave.
        </p>
        <p>
          Desde el punto de vista psicológico y pedagógico, el educando con
          tartaleo suele mostrar intranquilidad, descuido en las tareas
          escolares, impuntualidad y cambios frecuentes de actividad. A nivel
          social es activo y sociable, aunque carece de talento narrativo; los
          fracasos escolares y sociales no suelen afectar su ánimo, a diferencia
          de los niños con tartamudez.
        </p>

        <p>
          <strong>Tartamudez frente a tartaleo:</strong>
        </p>
        <div className="compare-table-wrap">
          <table className="compare-table">
            <thead>
              <tr>
                <th scope="col">Aspecto</th>
                <th scope="col" className="is-period-a">
                  Tartamudez
                </th>
                <th scope="col" className="is-period-b">
                  Tartaleo
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Conciencia del trastorno</th>
                <td>Alta, con estrategias encubridoras</td>
                <td>Generalmente ausente</td>
              </tr>
              <tr>
                <th scope="row">Ritmo del lenguaje</th>
                <td>Interrumpido</td>
                <td>Acelerado, rápido (taquilalia)</td>
              </tr>
              <tr>
                <th scope="row">Movimientos concomitantes</th>
                <td>Ausentes</td>
                <td>Presentes (ojos, labios, mejillas, extremidades)</td>
              </tr>
              <tr>
                <th scope="row">Fonemas fóbicos</th>
                <td>Frecuentes (/p/, /t/, /k/)</td>
                <td>Ausentes</td>
              </tr>
              <tr>
                <th scope="row">Concentración en el habla</th>
                <td>Mal</td>
                <td>Bien</td>
              </tr>
              <tr>
                <th scope="row">Lectura de texto conocido</th>
                <td>Bien</td>
                <td>Mal</td>
              </tr>
              <tr>
                <th scope="row">Lectura de texto desconocido</th>
                <td>Mal</td>
                <td>Bien</td>
              </tr>
              <tr>
                <th scope="row">Ortografía y escritura</th>
                <td>Generalmente buena</td>
                <td>Deficiente, irregular, con errores frecuentes</td>
              </tr>
              <tr>
                <th scope="row">Capacidad narrativa</th>
                <td>Buena</td>
                <td>Dificultad para estructurar narraciones</td>
              </tr>
              <tr>
                <th scope="row">Atención y concentración</th>
                <td>Normal</td>
                <td>Deficiente</td>
              </tr>
              <tr>
                <th scope="row">Actividad motora</th>
                <td>Normal</td>
                <td>Intranquilidad, hiperactividad</td>
              </tr>
              <tr>
                <th scope="row">Aprendizaje escolar</th>
                <td>Generalmente buen estudiante</td>
                <td>Tendencia a bajo rendimiento</td>
              </tr>
              <tr>
                <th scope="row">Vivencias psicológicas</th>
                <td>Infelicidad, hipersensibilidad</td>
                <td>Indiferencia</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    ),
  },
  {
    id: 'resumen',
    titulo: 'Cuadro resumen',
    contenido: (
      <div className="compare-table-wrap">
        <table className="compare-table">
          <thead>
            <tr>
              <th scope="col">Trastorno</th>
              <th scope="col">Etiología</th>
              <th scope="col">Tipología</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Dislalia</th>
              <td>
                Alteración funcional de los órganos articulatorios sin daño
                neurológico ni malformaciones graves. Malos hábitos, imitación,
                déficit auditivo leve o inmadurez.
              </td>
              <td>
                Evolutiva, funcional, audiógena y orgánica (además,
                simples/monomorfas o complejas/polimorfas).
              </td>
            </tr>
            <tr>
              <th scope="row">Rinolalia</th>
              <td>
                Alteración en la resonancia de la voz por el desequilibrio en el
                paso del aire entre la cavidad oral y la nasal; puede deberse a
                malformaciones anatómicas.
              </td>
              <td>
                Abierta (hiperrinolalia), cerrada (hiporrinolalia), espástica y
                mixta (orgánica o funcional; congénita o adquirida).
              </td>
            </tr>
            <tr>
              <th scope="row">Disartria</th>
              <td>
                Trastorno neuromotor del habla por lesiones en el sistema
                nervioso central o periférico (parálisis cerebral, accidentes
                cerebrovasculares, traumatismos craneoencefálicos, enfermedades
                neurodegenerativas).
              </td>
              <td>
                Espástica, flácida, atáxica, hipocinética, hipercinética y mixta
                (según la localización: bulbar, pseudobulbar, cerebelosa,
                subcortical, cortical).
              </td>
            </tr>
            <tr>
              <th scope="row">Retraso del lenguaje</th>
              <td>
                Endógenas (discapacidad intelectual, hipoacusias, parálisis
                cerebral, lesión focal o inmadurez neurológica, trastornos de
                lateralidad) y exógenas/funcionales (pobre estimulación,
                problemas afectivo-relacionales, negativismo, institucionalismo,
                bilingüismo mal establecido).
              </td>
              <td>
                Retraso específico severo del lenguaje y retraso simple del
                lenguaje.
              </td>
            </tr>
            <tr>
              <th scope="row">Tartamudez</th>
              <td>
                Multifactorial: factores neurobiológicos (control motor del
                habla), genéticos, emocionales (estrés y ansiedad) y sociales.
              </td>
              <td>
                Clónica (repeticiones rápidas de sonidos o sílabas) y tónica
                (bloqueos o pausas prolongadas).
              </td>
            </tr>
            <tr>
              <th scope="row">Tartaleo</th>
              <td>
                Heredoconstitucional y central; desequilibrio temporal del
                lenguaje central por inmadurez de las estructuras corticales y
                periféricas (3 a 6 años).
              </td>
              <td>
                Fisiológico o evolutivo (transitorio); puede evolucionar hacia
                una tartamudez definida si persiste.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
];
