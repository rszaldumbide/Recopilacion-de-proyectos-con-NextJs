import Articulo from "@/components/Main/P_Articulo";

function Proyectos() {
  return (
    <div className="mx-auto grid grid-cols-1 gap-x-16 xl:px-40 gap-y-16 border-gray-200 sm:mt-16 sm:pt-16 lg:mx-0 lg:grid-cols-2 mt-16 lg:mt-[-10px]">
        <Articulo 
        enlace="proyecto_1"
        titulo="Participantes de Webcats"
        texto="Descripción personal de cada uno de los participantes de Webcats."
        />
        <Articulo 
        enlace="proyecto_2"
        titulo="Contador de Clicks"
        texto="Contador de Clicks, con botones de incremento, decremento y reiniciar."
        />
        <Articulo 
        enlace="proyecto_3"
        titulo="Calculadora"
        texto="Simulación de una calculadora de operaciones básicas."
        />
        <Articulo 
        enlace="proyecto_4"
        titulo="Lista de Tareas"
        texto="Lista de tareas con funcionalidades como agregar, eliminar y marcar completada."
        />
    </div>
  );
}

export default Proyectos;
