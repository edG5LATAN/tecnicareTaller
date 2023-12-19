import React from "react";
import "./Mision.css";
import Informacion from "../informacion/Informacion";

const Mision = () => {
  return (
    <div className="mision">
      <h2>Información sobre Tecnicare</h2>
      <p>
        Tecnicare es centro de servicio especializado con técnicos capacitados,
        dedicados a la reparación, activación, desbloqueo, la configuración y
        software de todo tipo del teléfono celular. Trabajamos con las
        herramientas y los equipos mas actuales en el mercado y actualizándolos
        constantemente.
      </p>
      <div className="mision-contenedor">
        <div className="mision-contenedor1">
          <h2>Nuestra Mision</h2>
          <p>
            Tecnicare, está comprometida a satisfacer todas las necesidades de
            los clientes, superando las expectativas día a día, entregándoles un
            servicio de calidad y confianza. Trabajamos para proveer los
            servicios técnicos y profesionales de la mejor calidad del país en
            la industria de las tecnologías de telefonía móvil. Este desafío nos
            compromete a contar con personal capaz para enfrentar cualquier
            desafío del mercado de las telecomunicaciones
          </p>
        </div>
        <div className="mision-contenedor1">
          <h2>Nuestra Vision</h2>
          <p>
            Ofrecer máxima calidad en nuestros servicios, esto nos permitirá ser
            el líder en servicios técnicos de reparación y que nuestros clientes
            pueda asociarnos con productos y soluciones confiables. Ser la
            empresa de reparación de celulares de referencia en el mercado de
            telefonía celular a nivel nacional, satisfaciendo las necesidades de
            nuestros clientes y poniendo a su alcance soluciones y servicios de
            calidad.
          </p>
        </div>
      </div>
      <div className="fallaOpciones fott">
        <div className="home-opciones-caja">
          <Informacion />
        </div>
      </div>
    </div>
  );
};

export default Mision;
