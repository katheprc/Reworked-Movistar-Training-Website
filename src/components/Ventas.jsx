import botonNext from "./botonNext";
import { Link } from "react-router-dom";

export default function Ventas() {
  return (
    <>
      <div className="scrollablee" id="style-10">
        <div className="force-overflow">
          <div className="sections">
            <center>
              <h1>GESTION VIA WHATSAPP</h1>
            </center>
          </div>
          <hr />
          <div className="sections sectionss">
            <center>
              <iframe
                src="https://drive.google.com/file/d/1-wvpg6Pm2rlJx_pr3pDPo5oi-zAbPYZ8/preview"
                width="150%"
                height="340rem"
                allow="autoplay"
              ></iframe>
            </center>
            <br />
            <div className="botoness">
              <div className="abutton">
                <Link
                  to="https://docs.google.com/document/d/167cG4rhyNhsAcv9s1HJrpwGEfaj8XTLlDuko-rG-t7U/edit"
                  rel="noreferrer"
                  target="_blank"
                >
                  <button className="button">
                    <div className="svg-wrapper-1">
                      <div className="svg-wrapper">
                        <i className="bx bxs-download .svg"></i>
                      </div>
                    </div>
                    <span>Facturación</span>
                  </button>
                </Link>
              </div>
              <div className="abutton">
                <Link
                  to="https://docs.google.com/document/d/17und5wamciFcpNf30qX1g1NwaLC6Vh2GEVL_j1FZq30/edit"
                  rel="noreferrer"
                  target="_blank"
                >
                  <button className="button deb">
                    <div className="svg-wrapper-1">
                      <div className="svg-wrapper">
                        <i className="bx bxs-download .svg"></i>
                      </div>
                    </div>
                    <span>Débito automático</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="botones">
        <div className="prev">{botonNext("/promos", false, true)}</div>
        <div className="next">{botonNext("/ventas", true, false)}</div>
      </div>
    </>
  );
}
