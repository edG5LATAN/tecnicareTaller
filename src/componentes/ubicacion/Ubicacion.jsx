import React from "react";
import './Ubicacion.css'
import Informacion from "../informacion/Informacion";



function Ubicacion() {
  return (<>
  <div className="ubicacion">
      <h2>Ubicacion Exacta como llegar</h2>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3869.905630269414!2d-87.18751272609285!3d14.082747789547687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f6fbde6a77f99bf%3A0x66ac7caa0d3f96c3!2sReparaci%C3%B3n%20de%20celulares%2CTECNICARE.!5e0!3m2!1ses!2shn!4v1701233489083!5m2!1ses!2shn" frameborder="0"></iframe>
      
    </div>
    <div className="ubicacion-info">
       <h2>Centro Comercial Centro America</h2>
      <p>TEGUCIGALPA Centro comercial centro america una cuadra antes
        de emisoras unidas y una cuadra despues de Plaza Miraflores
        3 nivel cubiculos a mano derecha TECNICARE centro especializado
        en reparacion de Telefonia.
      </p>
    </div>
  <div className="fallaOpciones fott" >
        <div className="home-opciones-caja">
          <Informacion />
        </div>
      </div>
  </>
    
  );
}

export default Ubicacion;
