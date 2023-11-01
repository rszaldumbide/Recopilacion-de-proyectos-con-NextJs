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
import { CiSearch } from "react-icons/ci";
import { IoMdAdd } from "react-icons/io";
/* hooks */
import { useState, useEffect } from "react";
import { useTasks } from "@/context/TasksContext";
import { useRouter } from "next/navigation";

export default function ModalAdd({ params }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [tasks, setTasks] = useState({ title: "", descripcion: "" });
  const { createTask } = useTasks();
  const router = useRouter();
  /* para saber si hay algun eefecto en el input */
  const handleChange = (e) => {
    setTasks({
      ...tasks,
      [e.target.name]: e.target.value,
    });
  };
  /* cuando se da el evento crea la tarea con los parametros que esta y redirige a la misma pagina */
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(tasks);
    createTask(tasks.title, tasks.descripcion);
    router.push("/proyectos/proyecto_4");
  };


  return (
    <div className="text-center my-5">
      <div className="max-w-3xl mx-auto flex justify-between gap-3 items-end">
        <Input
          isClearable
          className="w-full sm:max-w-[44%] "
          placeholder="Search by name..."
          startContent={<CiSearch />}
          color="primary"
        />
        <div className="flex gap-3">
          <Button
            onPress={onOpen}
            className="bg-[#015B7E] text-white"
            endContent={<IoMdAdd />}
          >
            Agregar Tarea
          </Button>
        </div>
      </div>
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
                  value={tasks.title}
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
                  value={tasks.descripcion}
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
