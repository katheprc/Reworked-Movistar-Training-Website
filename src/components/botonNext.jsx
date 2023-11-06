import { Link } from "react-router-dom";

export default function botonNext(LinkTo, tof, mostrar) {
  var caracter;
  if (tof) {
    caracter = "bx bxs-chevron-right";
  } else {
    caracter = "bx bxs-chevron-left";
  }

  if (!mostrar) {
    return <div className="boton2"></div>;
  }

  return (
    <Link to={LinkTo} className="boton">
      <i className={caracter}></i>
    </Link>
  );
}
