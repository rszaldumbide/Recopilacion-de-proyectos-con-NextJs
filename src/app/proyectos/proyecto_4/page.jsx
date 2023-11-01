"use client";
import { Modal, Button, useDisclosure, Input } from "@nextui-org/react";
import { CiSearch } from "react-icons/ci";
import { IoMdAdd } from "react-icons/io";
import ModalAdd from "@/components/Tareas/ModalAdd";
import { useTasks } from "@/context/TasksContext";
import { CardTask } from "@/components/Tareas/CardTask";

export default function Proyecto_4() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { tasks } = useTasks();

  return (
    <section className="my-10 mx-5">
      <h1 className="text-slate-800 text-3xl leading-9 text-center font-bold my-3">
        Lista de Tareas con LocalStorage
      </h1>
      {/* AGREGAR TAREAS */}
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
          placement="center"
        >
          <ModalAdd />
        </Modal>
      </div>
      {/* VISUALIZAR TAREAS */}
      <div className="text-center my-3">
        {tasks.map((task) => (
          <CardTask key={task.id} task={task} />
        ))}
      </div>
    </section>
  );
}
