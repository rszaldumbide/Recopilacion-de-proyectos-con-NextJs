import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Button,
  Link,
} from "@nextui-org/react";
import { useTasks } from "@/context/TasksContext";

import { TiDelete, TiEdit } from "react-icons/ti";

export const CardTask = ({ task }) => {
  const { deleteTask } = useTasks();

  return (
    <Card className="my-5">
      <CardHeader className="justify-center">
        <h2 className="text-2xl font-semibold">{task.title}</h2>
      </CardHeader>
      <CardBody className="flex gap-3">
        <div className="flex justify-between">
          <div>
            <p>{task.description}</p>
          </div>

          <div className="px-5">
            <Button
              onClick={() => deleteTask(task.id)}
              color="warning"
              className="text-default-900/60 data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2"
                radius="full"
                variant="light"
              aria-label="Editar"
            >
              <TiEdit size={25} radius={"full"} />
            </Button>
            <Button
              onClick={() => deleteTask(task.id)}
              color="danger"
              isIconOnly
              aria-label="Eliminar"
            >
              <TiDelete size={25} radius={'full'} />
            </Button>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};
