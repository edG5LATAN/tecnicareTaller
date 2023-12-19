import React, { useEffect, useState } from "react";
import "./Promociones.css";
import { getAllTelefonos } from "../../services/services";



function Promociones() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    getAllTelefonos(setdata)
  },[])
  

  console.log(data)

  return (
    <div className="promociones">
      {
        data.map((res,index)=>{
          return <div key={index} className="promociones-caja">
        <img src={res.imagen} alt="promo" />
        <h3>{res.marca}</h3>
        <h4>{res.moldeo}</h4>
        <p>{res.especificaciones}</p>
        <p>
          precio <span>{res.precio}</span>Lps
        </p>
        <button>Cotizar</button>
      </div>
        })
      } 

    </div>
  );
}

export default Promociones;
