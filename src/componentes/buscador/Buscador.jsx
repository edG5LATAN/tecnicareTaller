import React from 'react'
import './Buscador.css'

function Buscador() {
  return (
    <div className='buscador'>
      <input placeholder='buscar por marca' type="search" name="buscar" id="buscar" />
      <button>Buscar</button>
    </div>
  )
}

export default Buscador
