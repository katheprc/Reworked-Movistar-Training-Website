import botonNext from "./botonNext";
import movtv from "../assets/img/movistartv.png";
import movtv2 from "../assets/img/movistartv2.png";
import movtv3 from "../assets/img/movistartv3.png";
import movtv4 from "../assets/img/movistartv4.png";
import movtv5 from "../assets/img/movistartv5.png";
import movtv6 from "../assets/img/movistartv6.png";
import movtv7 from "../assets/img/movistartv7.png";
import movtv8 from "../assets/img/movistartv8.png";
import movtv9 from "../assets/img/movistartv9.png";
import altacomp from "../assets/img/altacompetencia.png";

export default function Promos() {
  return (
    <>
      <div className="scrollable" id="style-10">
        <div className="force-overflow">
          <div className="sections">
            <center>
              <h1>PROMOCIONES</h1>
            </center>
          </div>
          <hr />
          <div className="sections">
            <center>
              <iframe
                src="https://drive.google.com/file/d/1K7t5hulCOpIe9pM4VuqYxx5LvsVCcpbB/preview"
                width="75%"
                height="340rem"
                allow="autoplay"
              ></iframe>
            </center>
          </div>
          <hr />
          <div className="sections">
            <center>
              <h2>QUÉ ES MOVISTAR FIBRA?</h2>
            </center>
            <p>
              Movistar Fibra directa al hogar se basa en la utilización de
              cables de fibra óptica y sistemas ópticos adaptados a esta
              tecnología para la distribución de servicios de internet con mayor
              capacidad de transmisión de información y una altísima estabilidad
              a condiciones extremas tales como el calor, la humedad o ruido
              eléctrico. <br /> <br />
              Este cable transmite a través de una delgada hebra de vidrio o
              silicio fundido que conduce la luz, mejorando no sólo la
              velocidad, sino la calidad de la conexión: un cable de fibra
              óptica equivale a 110 hilos de cobre. <br /> <br />
              <center>
                <p className="card3 telefono">
                  Con Movistar Fibra la velocidad real es 100% igual a la
                  contratada.
                </p>
              </center>
              <ul>
                <li>
                  Contratando Fibra 300Mb simétricos la velocidad de subida y de
                  bajada será de hasta 300Mb
                </li>
                <li>
                  Contratando Fibra 500Mb simétricos la velocidad de subida y de
                  bajada será de hasta 500Mb
                </li>
                <li>
                  Contratando Fibra 700Mb simétricos la velocidad de subida y de
                  bajada será de hasta 700Mb
                </li>
                <li>
                  Contratando Fibra 1GIGA (1000 MEGAS) simétricos la velocidad
                  de subida y de bajada será de hasta 1GIGA (1000 MEGAS)
                </li>
              </ul>
              <br />
              Con Movistar Fibra podés:
              <ol>
                <li>
                  Navegar con todos tus dispositivos al mismo tiempo y a toda
                  velocidad
                </li>
                <li>Subir y bajar archivos mucho más rápido</li>
                <li>
                  Jugar online, escuchar música y mirar videos y películas en
                  alta definición
                </li>
                <li>Conectar a tu hogar con la última tecnología</li>
                <li>
                  Tener en tu hogar la mayor velocidad WiFi con el módem de
                  última generación.
                </li>
                <li>
                  Doble red WiFi: Cuenta con dos redes para conectarse, una de
                  2,4GHz (Red WiFi) y otra de 5GHz (Red WiFi Plus) que te
                  permitirán tener una mejor experiencia.
                </li>
                <li>Llamadas ilimitadas a fijos de todo el país.</li>
              </ol>
              <center>
                <img src={movtv} alt="" className="imagenMov" />
              </center>
            </p>
          </div>
          <hr />
          <div className="sections">
            <center>
              <h2>TOTALIZACIÓN</h2>
            </center>
            <p>
              El cliente puede acceder al valor de &quot;cliente movistar&quot;
              a través de la promo totalización. <br />
              <br />
              Para esto el cliente debera brindar un numero de linea movistar
              para que el vendedor corrobore en el grupo administrativo de score
              y tota si esta apto para la bonificacion.
            </p>
            <ol>
              <li>
                La linea para la bonificación puede estar a nombre de cualquier
                persona
              </li>
              <li>
                No hace falta que viva en el domicilio o que sea familiar.
              </li>
              <li>
                Solo se necesita el numero, no hay que hacer ningún tramite
                extra.
              </li>
              <li>
                El que contrata la fibra recibe el descuento de $1000, la linea
                es la que recibe los 4 gb de regalo mientras este activo el
                servicio de fibra.
              </li>
              <li>No tiene ningún gasto extra</li>
              <li>
                En caso de no tener linea apta para tota a la hora de hacer el
                tramite, una vez instalado el servicio si hace un traspaso de
                linea de otra empresa a movistar podrá reclamar ese descuento.
                (en el área de atención al cliente)
              </li>
            </ol>
          </div>
          <hr />
          <div className="sections">
            <center>
              <h2>EJEMPLOS PROMOS SOLO WIFI</h2>
              <br />
              <p className="card3 telefono">
                *Estos valores son a modo ejemplo, NO estan
                actualizados*
              </p>{" "}
              <br />
              <img src={movtv2} alt="" className="imagenMov2" />
              <img src={movtv3} alt="" className="imagenMov2" />
              <br />
              <br />
              <img src={movtv4} alt="" className="imagenMov" />
              <br />
              <br />
              <img src={movtv5} alt="" className="imagenMov" />
              <br />
              <br />
              <img src={movtv6} alt="" className="imagenMov" />
              <br />
              <br />
              <img src={movtv7} alt="" className="imagenMov" />
              <br />
              <br />
              <img src={movtv8} alt="" className="imagenMov" />
            </center>
          </div>
        </div>
        <hr />
        <div className="sections">
          <center>
            <h2>EJEMPLO WIFI + TV CON 1 DECO</h2>
            <br />
            <p className="card3 telefono">
              En caso de necesitar más decos, se sumará $1.099 por cada deco
              mensualmente
            </p>{" "}
            <br />
            <img src={movtv9} alt="" className="imagenMov2" />
          </center>
        </div>
        <hr />
        <div className="sections">
          <center>
            <h2>ZONA TECO / ALTA COMPETENCIA</h2>
            <br />
            <p className="card3 telefono">
              Zona teco y alta competencia son algunas localidades que tienen un
              descuento extra de $500 sobre el valor total.
            </p>{" "}
          </center>
          <br />
          En las listas de precios podrás ver directamente los precios con este
          descuento según indique la zona teco. <br /> <br />A la hora de
          consultar la direccion del cliente en el grupo administrativo se te
          indicara si es zona teco y en caso de que sea alta competencia te
          brindarán un numero de central y antes de pasar los precios al
          clientes lo corroboraras en la lista de localidades siguiente:
          <br /> <br />
          <center>
            <img src={altacomp} alt="" className="imagenMov2" />
          </center>
        </div>
      </div>

      <div className="botones">
        <div className="prev">{botonNext("/grupos", false, true)}</div>
        <div className="next">{botonNext("/ventas", true, true)}</div>
      </div>
    </>
  );
}
