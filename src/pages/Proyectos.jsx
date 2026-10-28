import TarjetaProyecto from "../components/TarjetaProyecto";

const proyectos = [
  {
    id: 1,
    titulo: "Calculadora de Limites",
    descripcion:
      "Aplicación Desarrollada en Python, la cual combina la logica matematica para resolver Limites indicando el paso a paso de como resolvio el Limite.",
    enlace: "https://github.com/Nvyffrvn19",
  },
  {
    id: 2,
    titulo: "Portafolio Personal",
    descripcion:
      "Sitio web personal para mostrar mis habilidades y proyectos. Desarrollado con HTML y CSS.",
    enlace: "https://github.com/Nvyffrvn19",
  },
];

function Proyectos() {
  return (
    <section>
      <h1>Mis Proyectos</h1>
      <p>Algunos de los proyectos en los que he trabajado.</p>

      <div className="lista-proyectos">
        {proyectos.map((p) => (
          <TarjetaProyecto
            key={p.id}
            titulo={p.titulo}
            descripcion={p.descripcion}
            enlace={p.enlace}
          />
        ))}
      </div>
    </section>
  );
}

export default Proyectos;