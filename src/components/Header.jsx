import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Header() {

  const {pathname} = useLocation();

  return (
    <>
      <nav className="header navbar navbar-expand-lg navbar-dark bg-dark align-items-start">
        <Link to="/">
          <span className="navbar-brand position-absolute mx-0">
            CAPACITACIÓN
          </span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="container-fluid">
          <div
            className="collapse navbar-collapse justify-content-center text-center"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <Link className={(pathname === '/') ? 'active' : ''} to="/">
                  <li className="nav-item nav-link active">
                    <span>BIENVENIDA</span>
                  </li>
                </Link>
                <Link className={(pathname === '/captacion') ? 'active' : ''} to="/captacion">
                  <li className="nav-item nav-link active">
                    <span>CAPTACIÓN</span>
                  </li>
                </Link>
                <Link className={(pathname === '/grupos') ? 'active' : ''} to="/grupos">
                  <li className="nav-item nav-link active">
                    <span>GRUPOS</span>
                  </li>
                </Link>
                <Link className={(pathname === '/promos') ? 'active' : ''} to="/promos">
                  <li className="nav-item nav-link active">
                    <span>PROMOS</span>
                  </li>
                </Link>
                <Link className={(pathname === '/ventas') ? 'active' : ''} to="/ventas">
                  <li className="nav-item nav-link active">
                    <span>VENTAS</span>
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
