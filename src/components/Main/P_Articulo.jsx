import Link from "next/link";

function Articulo(props) {
  return (
    <Link href={`./proyectos/${props.enlace}`} >
      <article className="block bg-slate-800 p-3 rounded-lg shadow-md mx-5">
        <div className="group relative">
          <h3 className="mt-3 text-2xl text-center font-semibold leading-6 text-orange-500 ">
            {props.titulo}
          </h3>
          <p className="my-5 text-center line-clamp-3 text-base leading-6 text-white">
            {props.texto}
          </p>
        </div>
      </article>
    </Link>
  );
}

export default Articulo;
