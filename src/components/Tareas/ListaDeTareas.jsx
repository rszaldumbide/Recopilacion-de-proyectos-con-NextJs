"use client";
import React from "react";
import TareaFormulario from "@/components/Tareas/TareaFormulario";
import Tarea from "@/components/Tareas/Tarea";
import Swal from "sweetalert2";

export default function ListaDeTareas() {
  const [tareas, setTareas] = React.useState([]); //uso del hook usestate para cambiar de estados las tareas

  const agregarTarea = (tarea) => {
    // Define una función llamada agregarTarea que recibe una tarea como argumento.
    if (tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim(); // Elimina los espacios en blanco al principio y al final del texto de la tarea.
      const tareasActualizadas = [tarea, ...tareas]; // Crea un nuevo arreglo que incluye la tarea ingresada al principio y todas las tareas existentes.
      setTareas(tareasActualizadas); // Actualiza el estado de tareas con el nuevo arreglo de tareas.
    } else {
      Swal.fire({
        title: "Error!",
        text: "No has ingresado caracteres",
        icon: "error",
        confirmButtonText: "Ok",
      });
    }
  };

  const eliminarTarea = (id) => {
    const tareasActualizadas = tareas.filter((tarea) => tarea.id !== id); // Crea un nuevo arreglo de tareas que excluye la tarea con el ID especificado.
    setTareas(tareasActualizadas); // Actualiza el estado de tareas con el nuevo arreglo de tareas.
  };

  const completarTarea = (id) => {
    const tareasActualizadas = tareas.map((tarea) => {
      // Crea un nuevo arreglo de tareas aplicando una función de mapeo.
      if (tarea.id === id) {
        tarea.completada = !tarea.completada; // Si la tarea tiene el ID especificado, invierte el valor de la propiedad "completada".
      }
      return tarea;
    });
    setTareas(tareasActualizadas); // Actualiza el estado de tareas con el nuevo arreglo de tareas.
  };

  return (
    <>
      <TareaFormulario onSubmit={agregarTarea} />
      <div className="tareas-lista-contenedor">
        {tareas.map((tarea) => (
          <Tarea
            key={tarea.id}
            id={tarea.id}
            texto={tarea.texto}
            completada={tarea.completada}
            completarTarea={completarTarea}
            eliminarTarea={eliminarTarea}
          />
        ))}
      </div>
    </>
  );
}
