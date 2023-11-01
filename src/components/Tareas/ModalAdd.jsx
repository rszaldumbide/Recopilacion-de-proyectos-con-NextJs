"use client";
import {
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Textarea,
} from "@nextui-org/react";
/* hooks */
import { useState } from "react";
import { useTasks } from "@/context/TasksContext";
import { useRouter } from "next/navigation";

export default function ModalAdd() {
  const [task, setTasks] = useState();
  const { createTask } = useTasks();
  const router = useRouter();
  /* para saber si hay algun eefecto en el input */
  const handleChange = (e) => {
    setTasks({
      ...task,
      [e.target.name]: e.target.value,
    });
  };
  /* cuando se da el evento crea la tarea con los parametros que esta y redirige a la misma pagina */
  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(task.title, task.description);
    router.push("/proyectos/proyecto_4");
  };

  return (
    <ModalContent>
      {(onClose) => (
        <form onSubmit={handleSubmit}>
          <ModalHeader className="bg-slate-800 text-white">
            Formulario de tareas
          </ModalHeader>
          <ModalBody className="border-t-5 border-orange-400">
            <Input
              autoFocus
              label="Title"
              labelPlacement="outside"
              placeholder="Escribe el titulo de la tarea"
              variant="underlined"
              className="mt-2"
              name="title"
              onChange={handleChange}
            />
            <Textarea
              label="Description"
              labelPlacement="outside"
              placeholder="Escibe la descripcion de la tarea"
              variant="underlined"
              minRows={1}
              name="description"
              onChange={handleChange}
            />
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="flat" onPress={onClose}>
              Cerrar
            </Button>
            <Button
              className="bg-slate-700 text-white "
              onClick={handleSubmit}
              onPress={onClose}
            >
              Agregar Tarea
            </Button>
          </ModalFooter>
        </form>
      )}
    </ModalContent>
  );
}
