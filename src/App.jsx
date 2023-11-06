import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./components/Inicio";
import Captacion from "./components/Captacion";
import Grupos from "./components/Grupos";
import Promos from "./components/Promos";
import Ventas from "./components/Ventas";
import Header from "./components/Header";
import Error from "./components/Error"

import "./style/App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="principal ">
          <div className="fondo"></div>
          <Routes>
            <Route exact path="/" element={<Inicio />} />
            <Route exact path="/captacion" element={<Captacion />} />
            <Route exact path="/grupos" element={<Grupos />} />
            <Route exact path="/promos" element={<Promos />} />
            <Route exact path="/ventas" element={<Ventas />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
