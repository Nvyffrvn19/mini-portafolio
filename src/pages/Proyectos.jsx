import TarjetaProyecto from "../components/TarjetaProyecto";
import Proyecto1 from "../assets/proyecto1.png";
import Proyecto2 from "../assets/proyecto2.png";

const proyectos = [
  {
    id: 1,
    titulo: "Calculadora de Limites",
    descripcion:
      "Esta herramienta es una calculadora de límites algebraicos desarrollada en Python que, a diferencia de las librerías tradicionales de cálculo simbólico (como SymPy), procesa los límites simulando el razonamiento y la lógica del cálculo paso a paso.",
    enlace: "https://github.com/Nvyffrvn19",
    imagen: Proyecto1,
  },
  {
    id: 2,
    titulo: "Portafolio Personal",
    descripcion:
      "Sitio web personal para mostrar mis habilidades y proyectos. Desarrollado con HTML5 y CSS.",
    enlace: "https://github.com/Nvyffrvn19",
    imagen: Proyecto2,
  },
];

function Proyectos() {
  return (
    <section className="contenedor">
      <h1>Mis Proyectos</h1>
      <p>Algunos de los proyectos en los que he trabajado.</p>

      <div className="lista-proyectos">
        {proyectos.map((p) => (
          <TarjetaProyecto
            key={p.id}
            titulo={p.titulo}
            descripcion={p.descripcion}
            enlace={p.enlace}
            imagen={p.imagen}
          />
        ))}
      </div>
    </section>
  );
}

export default Proyectos;