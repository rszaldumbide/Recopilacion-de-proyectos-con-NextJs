"use client";
import React from "react";
import ModalAdd from "@/components/Tareas/ModalAdd";
import { useTasks } from "@/context/TasksContext";
import { CardTask } from "@/components/Tareas/CardTask";

export default function Proyecto_4() {
  const { tasks } = useTasks();
  console.log(tasks);

  return (
    <section className="my-10 mx-5">
      <h1 className="text-slate-800 text-3xl leading-6 text-center font-bold">
        Lista de Tareas con LocalStorage
      </h1>
      <ModalAdd />
      <div className="text-center  ">
        {tasks.map((task) => (
          <CardTask key={task.id} task={task} />
        ))}
      </div>
    </section>
  );
}
