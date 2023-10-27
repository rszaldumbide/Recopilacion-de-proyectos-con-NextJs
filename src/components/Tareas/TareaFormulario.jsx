import React from "react";
import { v4 as uuidv4 } from "uuid";

function TareaFormulario(props) {
  const [input, setInput] = React.useState("");

  const manejarCambio = (e) => {
    setInput(
      e.target.value
    ); /* esta linea nos permite recopilar todo lo que contiene el input y pasarlo acorde a una funcion */
  };

  const manejarEnvio = (e) => {
    e.preventDefault(); /* esto hace que la pagina no se recargue cuando se use el formulario */

    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false,
    };
    props.onSubmit(tareaNueva);
  };

  return (
    <form onSubmit={manejarEnvio} className="tarea-formulario">
      <input
        className="tarea-input"
        type="text"
        placeholder="Escribe una tarea"
        name="texto"
        onChange={manejarCambio}
      />
      <button className="tarea-boton">Agregar</button>
    </form>
  );
}


export default TareaFormulario;