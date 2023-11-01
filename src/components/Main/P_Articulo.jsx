import Link from "next/link";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
} from "@nextui-org/react";
import { BsBoxArrowRight } from "react-icons/bs";

function Articulo(props) {
  return (
    <Link href={`./proyectos/${props.enlace}`}>
      <Card
        className="bg-slate-800 mx-5 text-white hover:text-orange-500 hover:bg-slate-700 cursor-pointer"
        shadow="lg"
        radius="md"
      >
        <CardHeader className="ml-2 justify-center font-semibold leading-6 ">
          <h3 className="text-2xl text-center ">{props.titulo}</h3>
        </CardHeader>
        <Divider className="bg-white" />
        <CardBody className="overflow-visible">
          <p className="text-justify line-clamp-3 text-base leading-6">
            {props.texto}
          </p>
        </CardBody>
      </Card>
    </Link>
  );
}

export default Articulo;
