import React from "react";
import "./Liberaciones.css";

function Liberaciones() {
  return (
    <div className="liberacion-caj">
      <div className="servicios">
        <h2>Liberacion por codigos MetropcsByTmobile</h2>
        <div className="servicios-caja">
          <img src="img/servicios/apple/mtopcsByTmobile.png" alt="" />
          <div className="servicios-info">
            <h3>Liberacion cualquier marca de Metropcs by Tmobile</h3>
            <p>
              Liberacion directa de cualquier marca ( Motorola, Huawei , LG , SAMSUNG
              , HTC ....) para poder usar dentro y fuera del pais sin ningun problema
              ingresa a informacion para darte mas detalles de las liberacion remotas.
            </p>
            <button>Informacion</button>
          </div>
        </div>
      </div>

      <div className="servicios">
        <h2>Liberacion por codigos Apple</h2>
        <div className="servicios-caja">
          <img src="img/servicios/apple/unlockApple.jpg" alt="" />
          <div className="servicios-info">
            <h3>Liberacion de Iphone</h3>
            <p>
              Contamos con liberacion de telefono de la marca Apple por codigo
              remoto asi te evitas danar tu telefono con software de terceros sin 
              tener que abrir tu telefono con la ventaja de poder usar cualquier operador
              de sem.
            </p>
            <button>Informacion</button>
          </div>
        </div>
      </div>

      <div className="servicios">
        <h2>Reparaciones y actualizacion de marcas</h2>
        <div className="servicios-caja">
          <img src="img/servicios/apple/marcas.jpg" alt="" />
          <div className="servicios-info">
            <h3>Repraciones varias</h3>
            <p>
              Contamos con asistencia tecnica para varias marcas de telefonia
              con sus repuestos originales, cambios de pantalla,flex de carga, microfono
              auriculares cambios de tapaderas housing actualizaciones de software.
            </p>
            <button>Informacion</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Liberaciones;
