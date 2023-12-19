import React, { useEffect, useState } from "react";
import "./Agregar.css";
import { getAllTelefonos } from "../../services/services.js";

function Agregar() {

  const [data,setdata]=useState([])

  useEffect(() => {
    getAllTelefonos(setdata)
  }, [])
  



  return (
    <div className="agregar">
      <h2>Agregar Promociones</h2>
      <div className="agregar-formulario">
        <form>
          <input required type="text" placeholder="Ingrese Marca" />
          <input required type="text" placeholder="Ingrese Modelo" />
          <input required type="text" placeholder="Ingrese Especificaciones" />
          <input required type="text" placeholder="Ingrese Imagen" />
          <input required type="text" placeholder="Ingrese Precio" />
          <div className="agregar-formulario-botones">
            <button>agregar</button>
            <button>editar</button>
            <button>eliminar</button>
            <button>limpiar</button>
          </div>
        </form>
      </div>
      <div className="agregar-tabla">
        <table>
          <thead>
            <tr>
              <td>id</td>
              <td>marca</td>
              <td>modelo</td>
              <td>especificaciones</td>
              <td>imagen</td>
              <td>precio</td>
            </tr>
          </thead>
          <tbody>
            {
              data.map((res,index)=>{
                return <tr key={index}>
              <td>{res.id}</td>
              <td>{res.marca}</td>
              <td>{res.modelo}</td>
              <td>{res.especificaciones}</td>
              <td>{res.imagen}</td>
              <td>{res.precio}</td>
            </tr>
              })
            }
            
            {/* <tr>
              <td>01</td>
              <td>samusng</td>
              <td>a03</td>
              <td>telefonos con falls memoria ram de d asdasdasd</td>
              <td>https://mui.com/static/ads-in-house/themes.png</td>
              <td>6777</td>
            </tr>
            <tr>
              <td>01</td>
              <td>samusng</td>
              <td>a03</td>
              <td>telefonos con falls memoria ram de d asdasdasd</td>
              <td>https://mui.com/static/ads-in-house/themes.png</td>
              <td>6777</td>
            </tr>
            <tr>
              <td>01</td>
              <td>samusng</td>
              <td>a03</td>
              <td>telefonos con falls memoria ram de d asdasdasd</td>
              <td>https://mui.com/static/ads-in-house/themes.png</td>
              <td>6777</td>
            </tr>
            <tr>
              <td>01</td>
              <td>samusng</td>
              <td>a03</td>
              <td>telefonos con falls memoria ram de d asdasdasd</td>
              <td>https://mui.com/static/ads-in-house/themes.png</td>
              <td>6777</td>
            </tr>
            <tr>
              <td>01</td>
              <td>samusng</td>
              <td>a03</td>
              <td>telefonos con falls memoria ram de d asdasdasd</td>
              <td>https://mui.com/static/ads-in-house/themes.png</td>
              <td>6777</td>
            </tr>
            <tr>
              <td>01</td>
              <td>samusng</td>
              <td>a03</td>
              <td>telefonos con falls memoria ram de d asdasdasd</td>
              <td>https://mui.com/static/ads-in-house/themes.png</td>
              <td>6777</td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Agregar;
