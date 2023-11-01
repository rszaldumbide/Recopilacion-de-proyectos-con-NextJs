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
import { useState, useEffect } from "react";
import { useTasks } from "@/context/TasksContext";
import { useRouter } from "next/navigation";

export default function ModalEdit({ data }) {
  const [task, setTasks] = useState({
    title: "",
    description: "",
  });
  const { tasks, updateTask } = useTasks();
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
    if (data.task.id) {
      updateTask(data.task.id, task);
      console.log(task);
    }
    router.push("/proyectos/proyecto_4");
  };

  useEffect(() => {
    if (data.task.id) {
      const tareaEncontrada = tasks.find((task) => task.id === data.task.id);
      console.log(tareaEncontrada);
      if (tareaEncontrada) {
        setTasks({
          title: tareaEncontrada.title,
          description: tareaEncontrada.description,
        });
        console.log(data.task);
      }
    }
  }, []);

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
              label="Titulo"
              labelPlacement="outside"
              placeholder="Escribe el titulo de la tarea"
              variant="underlined"
              isRequired
              className="mt-2"
              name="title"
              onChange={handleChange}
              value={task.title}
            />
            <Textarea
              label="Description"
              labelPlacement="outside"
              placeholder="Escibe la descripcion de la tarea"
              variant="underlined"
              isRequired
              minRows={1}
              name="description"
              onChange={handleChange}
              value={task.description}
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
              Actualizar Tarea
            </Button>
          </ModalFooter>
        </form>
      )}
    </ModalContent>
  );
}
