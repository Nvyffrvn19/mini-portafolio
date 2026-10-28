import Foto from "../assets/foto.jpg";

function SobreMi() {
  return (
    <section className="sobre-mi contenedor">
      <img className="foto" src={Foto} alt="Foto de Gabriel Rivas" />

      <div>
        <h1>Sobre mí</h1>
        <p>
          Soy Gabriel Rivas, estudiante de Ingeniería Civil Informática. Me gusta
          el desarrollo web y me interesa crear soluciones tecnológicas que
          mejoren la experiencia de las personas.
        </p>

        <h3>¿Qué estudio?</h3>
        <p>
          Estudio Ingeniería Civil Informática en la Universidad Católica de Temuco.
        </p>

        <h3>¿Qué me interesa?</h3>
        <ul>
          <li>Desarrollo web y tecnologías frontend</li>
          <li>Aprender nuevas herramientas y frameworks</li>
          <li>Construir proyectos que generen un impacto real</li>
        </ul>
      </div>
    </section>
  );
}

export default SobreMi;