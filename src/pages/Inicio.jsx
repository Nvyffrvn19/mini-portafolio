import { Link } from "react-router-dom";

const destacados = [
    {icono: "</>", texto: "Desarrollo de Frontend"},
    {icono: <i class="nf-md-remote_desktop"></i>, texto: "Proyectos" },
    {icono: <i class="nf-md-remote_desktop"></i>, texto: "Aprendizaje" },
    {icono: <i class="nf-md-remote_desktop"></i>, texto: "Compromisos" },
];


function Inicio() {
  return (
    <>
      <section className="hero">
        <div>
          <h1>Hola, Soy Gabriel!</h1>
          <h2>Desarrollador Frontend</h2>
          <p>
            Bienvenido a mi portafolio. Aquí puedes conocer más sobre mí, mis
            habilidades y proyectos.
          </p>
          <Link to="/sobre-mi" className="boton">Explorar</Link>
        </div>
        <div className="hero-imagen">Tu foto aquí</div>
      </section>

      <section className="destacados">
        {destacados.map((d) => (
          <div className="destacado" key={d.texto}>
            <span className="destacado-icono">{d.icono}</span>
            <p>{d.texto}</p>
          </div>
        ))}
      </section>
    </>
  );
}

export default Inicio;