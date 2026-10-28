import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";

const tecnologias = [
  { nombre: "HTML", nivel: 85, icono: <FaHtml5 /> },
  { nombre: "CSS", nivel: 70, icono: <FaCss3Alt /> },
  { nombre: "JavaScript", nivel: 70, icono: <FaJs /> },
  { nombre: "React", nivel: 60, icono: <FaReact /> },
  { nombre: "TypeScript", nivel: 50, icono: <SiTypescript /> },
  { nombre: "Python", nivel: 80, icono: <FaPython /> },
];

const herramientas = ["Git", "GitHub", "VS Code", "Figma", "Node.js"];

function Habilidades() {
  return (
    <section className="contenedor">
      <h1>Habilidades y Lenguajes</h1>

      <h2 className="subtitulo">Tecnologías</h2>
      <div className="grilla-habilidades">
        {tecnologias.map((t) => (
          <div className="tarjeta-habilidad" key={t.nombre}>
            <div className="habilidad-icono">{t.icono}</div>
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