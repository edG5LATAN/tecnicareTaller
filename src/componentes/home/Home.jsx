import React from "react";
import "./Home.css";
import Slider1 from "../sliderimagen/Slider1.jsx";
import Fallas from "../fallas/Fallas.jsx";
import Reparaciones from "../reparaciones/Reparaciones.jsx";
import Liberaciones from "../liberaciones/Liberaciones.jsx";
import Repuestos from "../repuestos/Repuestos.jsx";
import Informacion from "../informacion/Informacion.jsx";

function Home() {
  return (
    <div className="home">
      <div className="slidercaja">
        <Slider1 />
      </div>

      <div className="fallaOpciones">
        <h2 className="menu-subtitulo">Falla comunes</h2>
        <Fallas />
      </div>

      <div className="fallaOpciones">
        <h2 className="menu-subtitulo">Repuestos</h2>
        <div className="home-opciones-caja">
          <Repuestos />
        </div>
      </div>

      <div className="fallaOpciones">
        <h2 className="menu-subtitulo">Servicios</h2>
        <div className="home-opciones-caja">
          <Liberaciones />
        </div>
      </div>

      <div className="fallaOpciones">
        <h2 className="menu-subtitulo">Variedad de equipo de computo</h2>

        <Reparaciones />
      </div>

      <div className="fallaOpciones fott">
        <div className="home-opciones-caja">
          <Informacion />
        </div>
      </div>
    </div>
  );
}

export default Home;
