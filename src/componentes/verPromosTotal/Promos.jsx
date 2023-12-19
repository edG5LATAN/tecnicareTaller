import React from 'react'
import './Promos.css'
import Buscador from '../buscador/Buscador'
import Promociones from '../promociones/Promociones.jsx'

function Promos() {
  return (
    <div className='promos'>
      <div className='promos-buscador'>
        <Buscador />
      </div>
      <div className="fallaOpciones">
        <h2 className="menu-subtitulo">Promociones</h2>
        <div className="home-opciones-caja">
          <Promociones />
        </div>
      </div>
    </div>
  )
}

export default Promos
