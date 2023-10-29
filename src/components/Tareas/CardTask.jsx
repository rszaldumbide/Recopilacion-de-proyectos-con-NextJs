import React from "react";
import { Button } from "@nextui-org/react";
import Link from "next/link";

export const CardTask = ({ task }) => {
  return (
    <Link href={`/proyectos/proyecto_4/editar/${task.id}`}>
      <h2 className="text-2xl">{task.title}</h2>
      <Button color="danger" auto>
        Eliminar
      </Button>
      <p>{task.description}</p>
    </Link>
  );
};
