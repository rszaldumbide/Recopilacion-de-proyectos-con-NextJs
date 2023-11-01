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
      id: "1",
      title: "Tarea de prueba 1",
      description: "Descripción de la tarea de prueba 1",
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
