import { Link } from "react-router-dom";
import botonNext from "./botonNext";

export default function Grupos() {
  return (
    <>
      <div className="scrollable" id="style-10">
        <div className="force-overflow">
          <div className="sections">
            <center>
              <h1>GRUPOS ADMINISTRATIVOS DE WHATSAPP</h1>
            </center>
          </div>
          <hr />
          <div className="sections">
            <center>
              <h2>DISPONIBILIDAD</h2>
            </center>
            <p>
              Este grupo nos brinda informacion respecto a si la direccion de
              nuestro cliente tiene cobertura disponible para instalar el
              servicio en su manzana. <br />
              <br />
              Tene en cuenta que si bien muchas localidades tienen cobertura. En
              todas las localidades se da la misma circunstancia. Hay manzanas
              con cobertura y manzanas que no. <br />
              <br /> Por día te estarán llegando siempre mas cliente sin
              cobertura. Los mejores vendedores manejan la estadistica de que :
              1 o 2 de cada 10 cliente que piden el servicio tienen cobertura.{" "}
              <br />
            </p>
            <div className="abutton">
              <Link
                to="https://docs.google.com/document/d/1KHB0dizPEVHEV5GNFJMb8ET5ihfSvDmWbENNRfiF3gk/edit"
                rel="noreferrer"
                target="_blank"
              >
                <button className="button">
                  <div className="svg-wrapper-1">
                    <div className="svg-wrapper">
                      <i className="bx bxs-download .svg"></i>
                    </div>
                  </div>
                  <span>Descargar</span>
                </button>
              </Link>
            </div>
          </div>
          <hr />
          <div className="sections">
            <center>
              <h2>SCORE Y TOTA</h2>
            </center>
            <p>
              Este grupo te brindara la información respecto al DNI con el cual
              se dará de alta el servicio solicitado. <br /> <br />
              Vale destacar que el servicio puede estar a nombre de cualquier
              persona mayor a 18 años. Siempre y cuando el puntaje del DNI de
              mayor a 301.
            </p>
            <center>
              <p className="card3 telefono">
                <p>
                  <strong>SCORE</strong>
                  <br />
                  El score es un puntaje que van acumulando las personas y está
                  relacionado a cómo se comportan financieramente con servicios
                  de este tipo. Es decir, se tendrá en cuenta cómo manejan el
                  dinero que perciben y de qué manera cumplen con las
                  obligaciones que hayan contraído. por ejemplo: Otras empresas
                  de servicios, celulares. Luz, agua, gas. etc
                </p>
              </p>
            </center>
            <p>
              Este puntaje puede variar a lo largo de la vida de una persona y
              son varios factores los que influyen para hacer crecer o disminuir
              ese número. <br /> <br />
              En Argentina existen varias compañías que se encargan de almacenar
              la información histórica de los usuarios y generan con estos datos
              los ranking de score que consultan las empresas como movistar
              antes de otorgarte un servicio. Es un requisito de contratacion.{" "}
              <br /> <br />
              (Alguien que tiene pocas cosas a su nombre tambien puede tener
              puntaje bajo debido a que no tiene manera de demostrar su buen
              puntaje o si sera cumplidor) También podrás consultar si un número
              es apto para la bonificación de &quot;tota&quot;{" "}
            </p>
            <div className="abutton">
              <Link
                to="https://docs.google.com/document/d/1zh_vXMKZ7NzvbnGFx2ESVIpQArRKzf241noFiihJRm8/edit"
                rel="noreferrer"
                target="_blank"
              >
                <button className="button">
                  <div className="svg-wrapper-1">
                    <div className="svg-wrapper">
                      <i className="bx bxs-download .svg"></i>
                    </div>
                  </div>
                  <span>Descargar</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <hr />
        <div className="sections">
          <center>
            <h2>ADAPTACION</h2>
          </center>{" "}
          Este es un grupo en el cual formaras parte solo los primeros dias de
          prueba. Este es el grupo para hacer preguntas el resto no. <br />
          <br />
          Concretada la primer venta ascenderás al Grupo Mega Red donde estan el
          resto de los vendedores de tu equipo a cargo de Elias Mugas.
          <br /> <br />
          <center>
            <p className="card3 telefono">
              *RECORDATORIO* <br />
              tendrás 14 dias para concretar una venta.{" "}
            </p>
          </center>
        </div>
        <hr />
        <div className="sections">
          <center>
            <h2>EQUIPO MEGA RED</h2>
          </center>
          <ul>
            <li>Grupo principal del equipo.</li>
            <li>Se dan avisos importantes.</li>
            <li>Se lleva un conteo de las ventas durante el día.</li>
          </ul>

          <center>
            <p className="card3 telefono div-error">
              Este es el grupo para hacer preguntas el resto no.
            </p>
          </center>
        </div>
        <hr />
        <div className="sections">
          <center>
            <h2>SOLICITUDES Y RECHAZOS</h2>
          </center>
          En este grupo se brinda la información del seguimiento de cada venta
          cargada, se te agrega una vez que concretas tu primer venta cargada.
        </div>
      </div>
      <div className="botones">
        <div className="prev">{botonNext("/captacion", false, true)}</div>
        <div className="next">{botonNext("/promos", true, true)}</div>
      </div>
    </>
  );
}
