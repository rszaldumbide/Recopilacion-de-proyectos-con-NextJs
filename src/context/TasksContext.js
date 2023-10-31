"use client";
import { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const TasksContext = createContext();

export const useTasks = () => {
  const context = useContext(TasksContext);
  if (!context)
    throw new Error("useTasks debe estar dentro del proveedor TasksContext");
  return context;
};

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Tarea 1",
      description: "Descripcion de la tarea 1",
    },
    {
      id: 2,
      title: "Tarea 2",
      description: "Descripcion de la tarea 2",
    },
    {
      id: 3,
      title: "Tarea 3",
      description: "Descripcion de la tarea 3",
    },
  ]);

  const deleteTask = (id) =>
    setTasks([...tasks.filter((task) => task.id !== id)]);

  const createTask = (title, description) =>
    setTasks([...tasks, { id: uuidv4(), title, description }]);

  return (
    <TasksContext.Provider value={{ tasks, createTask, deleteTask }}>
      {children}
    </TasksContext.Provider>
  );
};
