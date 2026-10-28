const tecnologias = [
  { nombre: "HTML", nivel: 90 },
  { nombre: "CSS", nivel: 85 },
  { nombre: "JavaScript", nivel: 75 },
  { nombre: "React", nivel: 70 },
  { nombre: "TypeScript", nivel: 60 },
  { nombre: "Python", nivel: 70 },
];

const herramientas = ["Git", "GitHub", "VS Code", "React", "Node.js"];

function Habilidades() {
  return (
    <section>
      <h1>Habilidades y Lenguajes</h1>

      <h2 className="subtitulo">Tecnologías</h2>
      <div className="grilla-habilidades">
        {tecnologias.map((t) => (
          <div className="tarjeta-habilidad" key={t.nombre}>
            <h3>{t.nombre}</h3>
            <div className="barra">
              <div className="barra-relleno" style={{ width: `${t.nivel}%` }} />
            </div>
            <span className="porcentaje">{t.nivel}%</span>
          </div>
        ))}
      </div>

      <h2 className="subtitulo">Herramientas</h2>
      <ul className="chips">
        {herramientas.map((h) => (
          <li key={h}>{h}</li>
        ))}
      </ul>
    </section>
  );
}

export default Habilidades;