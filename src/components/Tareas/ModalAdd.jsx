"use client";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
  Textarea,
} from "@nextui-org/react";
import { useState } from "react";
import { useTasks } from "@/context/TasksContext";
import { useRouter } from "next/navigation";

export default function ModalAdd() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [tasks, setTasks] = useState();
  const { createTask } = useTasks();
  const router = useRouter();

  const handleChange = (e) => {
    setTasks({
      ...tasks,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(tasks);
    createTask(tasks.title, tasks.descripcion);
    router.push("/proyectos/proyecto_4");
  };

  return (
    <div className="text-center my-5">
      <Button onPress={onOpen} size="lg">
        Agregar Tarea
      </Button>
      <Modal
        backdrop="blur"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        /* isDismissable={false} */
        placement="center"
      >
        <ModalContent>
          {(onClose) => (
            <form onSubmit={handleSubmit}>
              <ModalHeader className="flex flex-col gap-1 bg-slate-800 text-white">
                Nueva Tarea
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
                />
                <Textarea
                  label="Description"
                  labelPlacement="outside"
                  placeholder="Escibe la descripcion de la tarea"
                  variant="underlined"
                  isRequired
                  minRows={1}
                  name="descripcion"
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
      </Modal>
    </div>
  );
}
