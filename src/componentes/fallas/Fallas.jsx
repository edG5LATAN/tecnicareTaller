import React from 'react'
import './Fallas.css'


function Fallas() {
  return (
    <div className='opciones'>
       <div className='opciones1'>
          <img src="img/fallas/calienta.jpg" alt="" />

          <h3>Tel calienta</h3>
          <p>La falla mas comun en telefonos que llegan al taller es que se calienta demasiado y no le dura la carga de bateria esta falla se debe a sobre cargas electricas la falla se puede reparar cambiando los circuitos de amplificadores y de carga y muchas veces de red. si desea mas informacion para poder reparar su telefono puede ingresar al enlace para poder darle mas informacion de los costos de reparacion. 
          </p>
          <button>Tecnicare</button>
        </div>

        <div className='opciones1'>
          <img src="img/fallas/mojado.png" alt="" />

          <h3>Tel mojado</h3>
          <p>A nuestro taller llegan muchos telefonos con falla de humedad para ese tipo de fallas contamos con el quipo para poder hacer una limpieza interna de trajeta donde se utiliza equipo especializado en limpieza como limpiadores sonicos. y la mayor variedad de repuestos para la reparacion de cualquier falla. Contactenos dando click al enlace para darle informacion y el tiempo para su reparacion. 
          </p>
          <button>Tecnicare</button>
        </div>

        <div className='opciones1'>
          <img src="img/fallas/quebrado.jpg" alt="" />

          <h3>pantalla quebrada</h3>
          <p>Telefono con falla de pantalla y touch dañadas por golpes, Para este tipo de fallas contamos con una gran variedad de pantallas originales y semioriginales ayudando ala economia de su bolsillo los precios varian dependiendo de su modelo si desea cotizar y el tiempo de duracion de la reparacion puede darle click al enlace para informacion sobre los precios darle click en el enlace. 
          </p>
          <button>Tecnicare</button>
        </div>
    </div>
  )
}

export default Fallas
