import ListaDeTareas from "@/components/Tareas/ListaDeTareas";
import "@/app/proyectos/proyecto_4/global.css"

export default function Proyecto_4() {
  return (
    <div className="flex flex-wrap items-center justify-center">
      <div className="contenedor-tareas mt-10">
        <h1>Lista de tareas </h1>
        <ListaDeTareas  />
      </div>
    </div>
  );
}
