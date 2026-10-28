import { Link } from "react-router-dom";
import { FiCode, FiMonitor, FiUsers, FiStar } from "react-icons/fi";
import Logo from "../assets/logo.png";

const destacados = [
  { icono: <FiCode />, texto: "Desarrollo Frontend" },
  { icono: <FiMonitor />, texto: "Proyectos Reales" },
  { icono: <FiUsers />, texto: "Aprendizaje Continuo" },
  { icono: <FiStar />, texto: "Compromiso" },
];

function Inicio() {
  return (
    <>
      <section className="hero">
        <div className="hero-contenido">
          <div>
            <h1>Hola, soy Gabriel!</h1>
            <h2>Desarrollador Frontend</h2>
            <p>
              Bienvenido a mi portafolio. Aquí puedes conocer más sobre mí, mis
              habilidades y proyectos.
            </p>
            <Link to="/sobre-mi" className="boton">Explorar</Link>
          </div>
          <img className="hero-imagen" src={Logo} alt="Logo de Marca Personal" />
        </div>
      </section>

      <section className="contenedor">
        <div className="destacados">
          {destacados.map((d) => (
            <div className="destacado" key={d.texto}>
              <span className="destacado-icono">{d.icono}</span>
              {d.texto}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Inicio;