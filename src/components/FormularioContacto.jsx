import { useState } from "react";

function FormularioContacto() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState("");
  const [enviado, setEnviado] = useState(false);

  function manejarEnvio(e) {
    e.preventDefault();

    if (!nombre.trim() || !correo.trim() || !mensaje.trim()) {
      setError("Por favor completa todos los campos.");
      setEnviado(false);
      return;
    }

    setError("");
    setEnviado(true);
    setNombre("");
    setCorreo("");
    setMensaje("");
  }

  return (
    <form className="formulario" onSubmit={manejarEnvio} noValidate>
      <div className="campo">
        <label htmlFor="nombre">Nombre *</label>
        <input
          id="nombre"
          type="text"
          placeholder="Tu nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </div>

      <div className="campo">
        <label htmlFor="correo">Correo electrónico *</label>
        <input
          id="correo"
          type="email"
          placeholder="tu@email.com"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
        />
      </div>

      <div className="campo">
        <label htmlFor="mensaje">Mensaje *</label>
        <textarea
          id="mensaje"
          rows="5"
          placeholder="Escribe tu mensaje aquí..."
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
        />
      </div>

      {error && <p className="error">{error}</p>}

      <button type="submit" className="boton boton-ancho">Enviar mensaje</button>

      {enviado && (
        <p className="confirmacion">
          ¡Gracias! Tu mensaje fue enviado correctamente.
        </p>
      )}
    </form>
  );
}

export default FormularioContacto;