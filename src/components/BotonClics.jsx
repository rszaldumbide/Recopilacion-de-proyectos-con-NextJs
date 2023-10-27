import React from "react";

export default function BotonClics({ texto, estadoBoton, manejarClic }) {
    return <button 
    className={estadoBoton ? 'boton-clic' : 'boton-reiniciar'}
    onClick={manejarClic}>
        {texto}
    </button>;
}