import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <div className='header'> 
     <div className='header-logo'>
      <img src="img/logo.jpg" alt="logo" />
      <h1>tecnicare</h1>
     </div>
     <nav className='header-nav'>
      <ul>
      <li>
        <Link to='/'>
          Inicio
        </Link>
       </li>
       <li>
        <Link to='promos'>
          Promociones
        </Link>
       </li>
       <li>
        <Link to='/ubicacion'>
          Ubicacion
        </Link>
       </li>
       <li>
        <Link to='mision'>
          Mision
        </Link>
       </li>
      </ul>
     </nav>
    </div>
  )
}

export default Header
