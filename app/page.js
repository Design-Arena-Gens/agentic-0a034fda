import Hero from "./components/Hero";
import Section from "./components/Section";
import {
  hero,
  propuestaValor,
  segmentosClientes,
  canales,
  propuestaIngresos,
  campaniasReclutamiento,
  indicadores,
  plan90Dias,
  proyecciones,
  diferenciadores,
} from "./data/businessModel";

export default function Page() {
  return (
    <main>
      <Hero {...hero} />

      <Section
        id="propuesta-valor"
        badge="Propuesta Integral"
        title="Arquitectura de valor para clientes y socios"
        description="Combinamos una experiencia omnicanal con formación continua y campañas data-driven que habilitan el crecimiento sostenible del ecosistema Atomy."
      >
        <div className="grid two">
          {propuestaValor.map((block) => (
            <div key={block.title} className="card">
              <h3>{block.title}</h3>
              <ul>
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="segmentos"
        badge="Audiencias Clave"
        title="Segmentos prioritarios y narrativas específicas"
        description="Cada segmento recibe mensajes, ofertas y rutas personalizadas para maximizar conversión y retención dentro de la red."
      >
        <div className="grid two">
          {segmentosClientes.map((segmento) => (
            <div key={segmento.label} className="card">
              <strong>{segmento.label}</strong>
              <p>
                <em>{segmento.meta}</em>
              </p>
              <p>{segmento.detalle}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="canales"
        badge="Go-To-Market"
        title="Canales de comercialización y construcción de comunidad"
        description="Activamos canales digitales y presenciales coordinados, con storytelling consistente y métricas compartidas."
      >
        <ul>
          {canales.map((canal) => (
            <li key={canal}>{canal}</li>
          ))}
        </ul>
      </Section>

      <Section
        id="ingresos"
        badge="Monetización"
        title="Flujos de ingresos balanceados"
        description="Combinamos ingresos recurrentes y variables con visibilidad de KPIs y reinversión estratégica."
      >
        <div className="grid two">
          {propuestaIngresos.map((categoria) => (
            <div key={categoria.title} className="card">
              <h3>{categoria.title}</h3>
              <ul>
                {categoria.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="reclutamiento"
        badge="Campañas"
        title="Sistema de reclutamiento y duplicación"
        description="Tres fases enlazadas que convierten prospectos en socios activos y comprometidos con la cultura de la red."
      >
        <div className="progression">
          {campaniasReclutamiento.map((campania) => (
            <div key={campania.fase} className="step">
              <strong>{campania.fase}</strong>
              <p>{campania.objetivo}</p>
              <ul>
                {campania.tacticas.map((tactica) => (
                  <li key={tactica}>{tactica}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="indicadores"
        badge="KPIs"
        title="Indicadores críticos de desempeño"
        description="Tablero semanal con foco en adquisición, activación, retención y productividad por socio."
      >
        <div className="table-scroll">
          <table>
            <thead>
              <tr>
                <th>Indicador</th>
                <th>Meta</th>
                <th>Acción correctiva</th>
              </tr>
            </thead>
            <tbody>
              {indicadores.map((indicador) => (
                <tr key={indicador.indicador}>
                  <td>{indicador.indicador}</td>
                  <td>{indicador.meta}</td>
                  <td>{indicador.accion}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section
        id="plan-90-dias"
        badge="Ejecución"
        title="Plan operacional de 90 días"
        description="Tres sprints que estructuran la implementación, el escalamiento y la consolidación del modelo."
      >
        <div className="progression">
          {plan90Dias.map((fase) => (
            <div key={fase.titulo} className="step">
              <strong>{fase.titulo}</strong>
              <ul>
                {fase.pasos.map((paso) => (
                  <li key={paso}>{paso}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="proyecciones"
        badge="Finanzas"
        title="Proyecciones de crecimiento anual"
        description="Estimaciones basadas en ratios de activación y ventas promedio con reinversión del 20 % en marketing y formación."
      >
        <div className="table-scroll">
          <table>
            <thead>
              <tr>
                <th>Periodo</th>
                <th>Socios activos</th>
                <th>Ticket promedio (USD)</th>
                <th>Facturación estimada (USD)</th>
                <th>Margen</th>
                <th>Foco estratégico</th>
              </tr>
            </thead>
            <tbody>
              {proyecciones.map((fila) => (
                <tr key={fila.periodo}>
                  <td>{fila.periodo}</td>
                  <td>{fila.sociosActivos}</td>
                  <td>{fila.ticketPromedio}</td>
                  <td>{fila.facturacion}</td>
                  <td>{fila.margen}</td>
                  <td>{fila.foco}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section
        id="diferenciadores"
        badge="Ventaja Competitiva"
        title="Diferenciadores clave del modelo"
        description="Pilares que elevan la propuesta frente a redes de mercadeo tradicionales y fomentan la profesionalización continua."
      >
        <ul>
          {diferenciadores.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Section>

      <footer>
        © {new Date().getFullYear()} Red Atomy · Crecimiento sostenible y liderazgos transformadores.
      </footer>
    </main>
  );
}
