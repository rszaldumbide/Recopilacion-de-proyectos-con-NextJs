"use client";
import { createContext, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { useLocalStorage } from "@/hooks/useLocalStorage";

export const TasksContext = createContext();

export const useTasks = () => {
  const context = useContext(TasksContext);
  if (!context)
    throw new Error("useTasks debe estar dentro del proveedor TasksContext");
  return context;
};

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useLocalStorage("tasks", []);

  const createTask = (title, description) =>
    setTasks([...tasks, { id: uuidv4(), title, description }]);

  const deleteTask = (id) =>
    setTasks([...tasks.filter((task) => task.id !== id)]);

  const updateTask = (id, datosAActualizar) =>
    setTasks([
      ...tasks.map((task) =>
        task.id === id ? { ...task, ...datosAActualizar } : task
      ),
    ]);

  return (
    <TasksContext.Provider
      value={{ tasks, createTask, deleteTask, updateTask }}
    >
      {children}
    </TasksContext.Provider>
  );
};
