"use client";
import React from "react";
import { Button } from "@nextui-org/react";

export default function Proyecto2() {
  const [contadorClics, setContadorClics] = React.useState(0);
  /* en donde esta el 0 es el valor inicial al que se va a reiniciar siempre */

  const aumentarContador = () => {
    setContadorClics(contadorClics + 1);
    /* aqui se esta diciendo que cada vez que se de clic, se sume 1 */
  };

  const reducirContador = () => {
    setContadorClics(contadorClics - 1);
    /* aqui se esta diciendo que cada vez que se de clic, se reste 1 */
  };

  const reiniciarContador = () => {
    setContadorClics(0);
    /* aqui se esta diciendo que cada vez que se de clic, se reinicie a 0 */
  };

  return (
    <div className="my-5 flex flex-wrap items-center justify-center text-center">
      <div className="items-center justify-center lg:min-w-[400px] lg:h-[550px]">
        <h1 className="leading-snug my-10 mx-auto font-bold text-4xl text-center">
          Contador de clicks
        </h1>
        <div className="mx-3  min-w-[300px] h-[300px] text-[160px] p-6 bg-slate-900 text-cyan-100 flex items-center justify-center mb-2 border-solid border-[9px] border-cyan-200 rounded-3xl cursor-none select-none">
          {contadorClics}
        </div>
        <div className="mx-3  flex flex-wrap items-center justify-center text-center">
          <Button
            className="m-1 bg-slate-800 text-white font-semibold"
            radius="lg"
            size="lg"
            variant="shadow"
            onClick={aumentarContador}
          >
            Aumentar
          </Button>
          <Button
            className="m-1 bg-slate-800 text-white font-semibold"
            radius="lg"
            size="lg"
            variant="shadow"
            onClick={reducirContador}
          >
            Disminuir
          </Button>
          <Button
            className="m-1 bg-red-600 text-white font-semibold"
            radius="lg"
            size="lg"
            variant="shadow"
            onClick={reiniciarContador}
          >
            Reiniciar
          </Button>
        </div>
      </div>
    </div>
  );
}
