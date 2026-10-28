import { FiImage } from "react-icons/fi";

function TarjetaProyecto({ titulo, descripcion, enlace, imagen }) {
  return (
    <article className="tarjeta-proyecto">
      {imagen ? (
        <img className="proyecto-imagen" src={imagen} alt={`Captura de ${titulo}`} />
      ) : (
        <div className="placeholder proyecto-imagen"><FiImage /></div>
      )}
      <div className="proyecto-info">
        <h3>{titulo}</h3>
        <p>{descripcion}</p>
        <a href={enlace} target="_blank" rel="noopener noreferrer" className="boton">
          Ver proyecto →
        </a>
      </div>
    </article>
  );
}

export default TarjetaProyecto;