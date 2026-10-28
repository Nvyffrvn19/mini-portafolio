function TarjetaProyecto({ titulo, descripcion, enlace }) {
  return (
    <article className="tarjeta-proyecto">
      <div className="proyecto-imagen">Imagen</div>
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