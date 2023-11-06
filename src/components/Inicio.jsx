import botonNext from "./botonNext";

export default function Inicio() {
  return (
    <>
      <div className="scrollable2" id="style-10">
        <div className="force-overflow">
          <div className="sections">
            <center>
              <h1>CAPACITACIÓN INICIAL DEL EQUIPO MEGA RED</h1>
            </center> <br />
            <iframe
              src="https://drive.google.com/file/d/1gim7JOHOeGTNRfDFXxqrw4yhbDcZ1kNh/preview"
              width="75%"
              height="340rem"
              allow="autoplay"
            ></iframe>
            <br />  <br />
          </div>
        </div>
      </div>

      <div className="botones">
        <div className="prev">{botonNext("/captacion", false, false)}</div>
        <div className="next">{botonNext("/captacion", true, true)}</div>
      </div>
    </>
  );
}
