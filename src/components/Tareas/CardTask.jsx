import {
  Card,
  CardHeader,
  CardBody,
  Divider,
  Button,
  Checkbox,
  Modal,
  useDisclosure,
} from "@nextui-org/react";

import { AiFillEdit, AiTwotoneDelete } from "react-icons/ai";
import Swal from "sweetalert2";
import ModalEdit from "@/components/Tareas/ModalEdit";

import { useTasks } from "@/context/TasksContext";

export const CardTask = ({ task }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const { deleteTask } = useTasks();

  return (
    <Card className="max-w-3xl mx-auto my-10 shadow-xl text-white">
      <CardHeader className="justify-center bg-slate-700">
        <h2 className="text-2xl font-semibold">{task.title}</h2>
      </CardHeader>
      <Divider className="bg-white" />
      <CardBody className="bg-white">
        <div className="flex items-center justify-between space-x-4">
          <Checkbox
            defaultSelected={false}
            lineThrough
            size="lg"
            color="success"
          >
            <p className="text-gray-500 text-justify break-words">
              {task.description}
            </p>
          </Checkbox>
          <div className=" flex justify-end h-10">
            <Divider orientation="vertical" className="bg-slate-800" />
            <Button
              color="warning"
              aria-label="Editar"
              isIconOnly
              className="mx-2 ml-4 text-warning"
              variant="ghost"
              onPress={onOpen}
            >
              <AiFillEdit size={25} radius={"full"} />
            </Button>
            <Modal
              backdrop="blur"
              isOpen={isOpen}
              onOpenChange={onOpenChange}
              placement="center"
            >
              <ModalEdit data={{task}} />
            </Modal>

            <Button
              onClick={(e) => {
                Swal.fire({
                  title: "Estas seguro de eliminar esta tarea?",
                  icon: "warning",
                  showCancelButton: true,
                  confirmButtonColor: "#d33",
                  cancelButtonColor: "#3085d6",
                  cancelButtonText: "Cancelar",
                  confirmButtonText: "¡Sí!, Borralo",
                }).then((result) => {
                  if (result.isConfirmed) {
                    deleteTask(task.id);
                  }
                });
              }}
              color="danger"
              isIconOnly
              aria-label="Eliminar"
              className="text-danger"
              variant="ghost"
            >
              <AiTwotoneDelete size={25} radius={"full"} />
            </Button>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};
