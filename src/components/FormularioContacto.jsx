import { useState } from "react";

const valoresIniciales = { nombre: "", correo: "", mensaje: "" };

function validar(valores) {
  const errores = {};

  if (!valores.nombre.trim()) {
    errores.nombre = "El nombre es obligatorio.";
  }

  if (!valores.correo.trim()) {
    errores.correo = "El correo es obligatorio.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valores.correo)) {
    errores.correo = "Ingresa un correo válido.";
  }

  if (!valores.mensaje.trim()) {
    errores.mensaje = "El mensaje es obligatorio.";
  } else if (valores.mensaje.trim().length < 10) {
    errores.mensaje = "El mensaje debe tener al menos 10 caracteres.";
  }

  return errores;
}

function FormularioContacto() {
  const [valores, setValores] = useState(valoresIniciales);
  const [errores, setErrores] = useState({});
  const [enviado, setEnviado] = useState(false);

  function manejarCambio(e) {
    const { name, value } = e.target;
    setValores({ ...valores, [name]: value });
    setEnviado(false);
  }

  function manejarEnvio(e) {
    e.preventDefault();
    const nuevosErrores = validar(valores);
    setErrores(nuevosErrores);

    if (Object.keys(nuevosErrores).length === 0) {
      setEnviado(true);
      setValores(valoresIniciales);
    }
  }

  return (
    <form className="formulario" onSubmit={manejarEnvio} noValidate>
      <div className="campo">
        <label htmlFor="nombre">Nombre *</label>
        <input
          id="nombre"
          name="nombre"
          type="text"
          placeholder="Tu nombre"
          value={valores.nombre}
          onChange={manejarCambio}
        />
        {errores.nombre && <span className="error">{errores.nombre}</span>}
      </div>

      <div className="campo">
        <label htmlFor="correo">Correo electrónico *</label>
        <input
          id="correo"
          name="correo"
          type="email"
          placeholder="tu@email.com"
          value={valores.correo}
          onChange={manejarCambio}
        />
        {errores.correo && <span className="error">{errores.correo}</span>}
      </div>

      <div className="campo">
        <label htmlFor="mensaje">Mensaje *</label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows="5"
          placeholder="Escribe tu mensaje aquí..."
          value={valores.mensaje}
          onChange={manejarCambio}
        />
        {errores.mensaje && <span className="error">{errores.mensaje}</span>}
      </div>

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