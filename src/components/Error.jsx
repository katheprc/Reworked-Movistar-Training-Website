import warning from "../assets/img/warning.png";

export default function Error() {
  return (
    <>
      <div className="error-div ">
        <img src={warning} alt="warning sign" className="warning" />
        <h1>ESTA PÁGINA NO EXISTE</h1>
      </div>
    </>
  );
}
