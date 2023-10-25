import Articulo from "@/components/P_Articulo";

function Proyectos() {
  return (
    <div class="mx-auto grid grid-cols-1 gap-x-8 gap-y-16 border-gray-200 sm:mt-16 sm:pt-16 lg:mx-0 lg:grid-cols-2">
        <Articulo 
        enlace="proyecto_1"
        titulo="Proyecto 1"
        texto="Replicación de la página de testimonios de FreecodeCamp."
        />
        <Articulo 
        enlace="proyecto_2"
        titulo="Proyecto 2"
        texto="Contador de Clicks"
        />
        <Articulo 
        enlace="proyecto_3"
        titulo="Proyecto 3"
        texto="Simulación de una calculadora de operaciones básicas."
        />
        <Articulo 
        enlace="proyecto_4"
        titulo="Proyecto 4"
        texto="Lista de tareas con funcionalidad de agregar, eliminar y marcar como completada."
        />
    </div>
  );
}

export default Proyectos;
