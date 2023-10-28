import ListaDeTareas from "@/components/Tareas/ListaDeTareas";
import "@/app/proyectos/proyecto_5/global.css"

export default function Proyecto_5() {
  return (
    <div className="flex flex-wrap items-center justify-center">
      <div className="contenedor-tareas mt-10">
        <h1>Lista de tareas </h1>
        <ListaDeTareas  />
      </div>
    </div>
  );
}
