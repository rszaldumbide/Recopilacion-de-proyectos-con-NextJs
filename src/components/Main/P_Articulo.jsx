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
      <Card className="bg-slate-800 mx-5" shadow="lg" radius="md">
        <CardHeader className="ml-2 last:text-center font-semibold leading-6 ">
          <BsBoxArrowRight className="inline-block mr-2 text-white font-bold" size={20} />
          <h3 className="text-2xl text-center text-orange-500">{props.titulo}</h3>
        </CardHeader>
        <Divider className="bg-white" />
        <CardBody className="overflow-visible">
          <p className="text-justify line-clamp-3 text-base leading-6 text-white">
            {props.texto}
          </p>
        </CardBody>
      </Card>
    </Link>
  );
}

export default Articulo;
