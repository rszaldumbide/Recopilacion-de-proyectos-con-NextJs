import Testimonio from "@/components/Testimonios";
import Image from "next/image";
import TestimonioRicardo from "@/assets/imgs/testimonio_Richie.jpg";
import TestimonioOrlo from "@/assets/imgs/testimonio_Orlo.jpg";
import TestimonioCris from "@/assets/imgs/testimonio_Gris.jpg";

function Proyecto1() {
  return (
    <div className="my-5 flex flex-wrap items-center justify-center text-center">
      <div className="mx-5 items-center justify-center">
        <h1 className="leading-snug my-10 mx-auto font-bold text-4xl text-center">
          Descripción personal de los miembros de Webcats:
        </h1>
        <div className="xl:flex lg:flex items-center justify-center mx-auto mt-12 mb-3 bg-white shadow-2xl xl:w-[1170px] lg:w-[1170px] sm:w-[700px] md:w-[700px]">
          <div className="w-auto h-full">
            <Image
              src={TestimonioCris}
              alt="Picture of the author"
              width={1500}
            />
          </div>
          <div>
            <Testimonio
              nombre="Cristhian Recalde"
              pais="Ecuador - Ibarra"
              cargo="Ingeniero "
              empresa="Tecnologías de la Información"
              testimonio={
                <>
                  Tengo una pasión por la programación, trato de encontrar la
                  mejor solución y no me gusta rendirme. Me gusta dar valor en
                  donde me encuentre y a la vez puedan contar conmigo, por ello
                  he creado algunos proyectos interesantes que se pueden
                  vislumbrar en este portafolio. Del mismo modo me gusta
                  trabajar en solitario o en grupo, siempre que haya pasión por
                  el trabajo o proyecto cuentan con mi voluntad a cumplirlo de
                  la mejor manera.
                </>
              }
            />
          </div>
        </div>
        <div className="xl:flex lg:flex items-center justify-center mx-auto mt-12 mb-3 bg-white shadow-2xl xl:w-[1170px] lg:w-[1170px] sm:w-[700px] md:w-[700px]">
          <div className="w-auto h-full">
            <Image
              src={TestimonioOrlo}
              alt="Picture of the author"
              width={905}
            />
          </div>
          <Testimonio
            nombre="Orlidan Montesdeoca"
            pais="Ecuador - Ibarra"
            cargo="Ingeniero "
            empresa="Tecnologías de la Información"
            testimonio={
              <>
                Soy un joven apasionado por la tecnología y participe de esta
                nueva era digital, me encanta explorar el vasto mundo
                tecnológico y encontrar formas creativas de dar vida a ideas a
                través del código y el diseño. Siempre estoy buscando nuevos
                desafíos y oportunidades para seguir aprendiendo y creciendo en
                este emocionante campo.
              </>
            }
          />
        </div>
        <div className="xl:flex lg:flex items-center justify-center mx-auto mt-12 mb-3 bg-white shadow-2xl xl:w-[1170px] lg:w-[1170px] sm:w-[700px] md:w-[700px]">
          <div className="w-auto h-full">
            <Image
              src={TestimonioRicardo}
              alt="Picture of the author"
              width={555}
            />
          </div>
          <Testimonio
            nombre="Ricardo Zaldumbide"
            pais="Ecuador - Otavalo"
            cargo="Ingeniero "
            empresa="Tecnologías de la Información"
            testimonio={
              <>
                Soy un joven apasionado por la programación y la electrónica. Mi
                orgullo radica en mi capacidad para perseguir objetivos con
                tenacidad y habilidad para colaborar eficazmente con otros
                desarrolladores.
              </>
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Proyecto1;
