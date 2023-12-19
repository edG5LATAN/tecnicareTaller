import React from 'react'
import './Reparaciones.css'


function Reparaciones() {
  return (
    <div className='reparaciones'>
      <div className='reparaciones-caja'>
        <p>Memoriras</p>
        <img src="img/reparaciones/memoria.jpg" alt="memorias" />
      </div>
      <div className='reparaciones-caja'>
        <p>disco duro solido</p>
        <img src="img/reparaciones/hdd.jpeg" alt="hdd" />
      </div>
      <div className='reparaciones-caja'>
        <p>Hub ligntning</p>
        <img src="img/reparaciones/hub.jpg" alt="hub" />
      </div>
      <div className='reparaciones-caja'>
        <p>Cable HDMI</p>
        <img src="img/reparaciones/cableHdmi.jpg" alt="hdmi cable" />
      </div>
      <div className='reparaciones-caja'>
        <p>Variedad de baterias</p>
        <img src="img/reparaciones/bateria.jpg" alt="bateria" />
      </div>
      <div className='reparaciones-caja'>
        <p>Teclados y Mouse</p>
        <img src="img/reparaciones/teclados.jpg" alt="bateria" />
      </div>
      
    </div>
  )
}

export default Reparaciones
