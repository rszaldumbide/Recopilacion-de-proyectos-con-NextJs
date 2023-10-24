export default function Testimonios(props) {
  return (
    <div className="text-center p-[40px] font-normal leading-6 styles.section">
      <p className="text-xl">
        <strong>{props.nombre}</strong> en {props.pais}
      </p>
      <p className="text-xl mt-4 pb-7">
        {props.cargo} en <b>{props.empresa}</b>
      </p>
      <p className="text-justify text-base">{props.testimonio}</p>
    </div>
  );
}
