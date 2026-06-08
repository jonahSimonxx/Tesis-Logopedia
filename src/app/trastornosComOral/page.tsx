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
    id: 'comparativo',
    titulo: 'Cuadro comparativo',
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
                neurológico ni malformaciones graves. Puede deberse a malos
                hábitos, imitación, déficit auditivo leve o inmadurez.
              </td>
              <td>
                Evolutiva (propia de ciertas etapas del desarrollo infantil),
                funcional (por mal uso de los órganos articulatorios), audiógena
                (por problemas auditivos leves) y orgánica (alteraciones físicas
                menores).
              </td>
            </tr>
            <tr>
              <th scope="row">Rinolalia</th>
              <td>
                Alteración en la resonancia de la voz por problemas en la
                comunicación entre la cavidad oral y nasal. Puede ser causada por
                malformaciones anatómicas.
              </td>
              <td>
                Abierta (exceso de salida de aire por la nariz), cerrada
                (obstrucción nasal) y mixta (combinación de ambas).
              </td>
            </tr>
            <tr>
              <th scope="row">Disartria</th>
              <td>
                Trastorno neuromotor del habla causado por lesiones en el sistema
                nervioso central o periférico. Puede deberse a parálisis
                cerebral, accidentes cerebrovasculares, traumatismos
                craneoencefálicos o enfermedades neurodegenerativas.
              </td>
              <td>
                Espástica (lesiones en vías piramidales), flácida (lesión en
                nervios periféricos), atáxica (daño cerebeloso), hipocinética
                (asociada a Parkinson), hipercinética (movimientos
                involuntarios) y mixta (combinación de varios tipos).
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
];
