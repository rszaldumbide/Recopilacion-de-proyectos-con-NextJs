import Testimonio from "@/components/Testimonios";
import Image from "next/image";
import profilePic from "@/assets/imgs/bg_banner.jpg";

function Proyecto1() {
  return (
    <div className="flex flex-wrap items-center justify-center text-center min-h-screen">
      <div className=" items-center justify-center min-[600px]">
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
        <div className="flex items-center justify-center mx-auto mt-12 mb-3 bg-white shadow-2xl w-[1170px] sm:w-80 md:w-80 h-[368px]">
          <div className="w-auto h-full">
            <Image src={profilePic} alt="Picture of the author" />
          </div>
          <Testimonio
            nombre="Shawn Wang"
            pais="Singapur"
            cargo="Ingeniero de Software"
            empresa="Amazon"
            testimonio={
              <>
                "Da miedo cambiar de carrera. Solo gané la confianza de que
                podía programar trabajando a través de los cientos de horas de
                lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un
                trabajo de seis cifras como ingeniero de software.{" "}
                <strong>freeCodeCamp cambió mi vida.</strong>"
              </>
            }
          />
        </div>
        <div className="flex items-center justify-center mx-auto mt-12 mb-3 bg-white shadow-2xl w-[1170px] sm:w-80 md:w-80 h-[368px]">
          <div className="w-auto h-full">
            <Image src={profilePic} alt="Picture of the author" />
          </div>
          <Testimonio
            nombre="Sarah Chima"
            pais="Nigeria"
            cargo="Ingeniera de Software"
            empresa="ChatDesk"
            testimonio={
              <>
                <strong>
                  "freeCodeCamp fue la puerta de entrada a mi carrera
                </strong>{" "}
                como desarrollador de software. El plan de estudios bien
                estructurado llevó mis conocimientos de programación de un nivel
                de principiante total a un nivel muy seguro. Era todo lo que
                necesitaba para conseguir mi primer trabajo de desarrollador en
                una empresa increíble."'{" "}
              </>
            }
          />
        </div>
        <div className="flex items-center justify-center mx-auto mt-12 mb-3 bg-white shadow-2xl w-[1170px] sm:w-80 md:w-80 h-[368px]">
          <div className="w-auto h-full">
            <Image src={profilePic} alt="Picture of the author" />
          </div>
          <Testimonio
            nombre="Emma Bostian"
            pais="Suecia"
            cargo="Ingeniera de Software"
            empresa="Spotify"
            testimonio={
              <>
                "Siempre he tenido problemas para aprender JavaScript. He tomado
                muchos cursos, pero el curso de freeCodeCamp fue el que se
                quedó. Estudiar JavaScript, así como estructuras de datos y
                algoritmos en
                <strong>freeCodeCamp me dio las habilidades</strong> y la
                confianza que necesitaba para conseguir el trabajo de mis sueños
                como ingeniero de software en Spotify."
              </>
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Proyecto1;
