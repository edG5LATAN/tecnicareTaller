import React from 'react'
import './Admin.css'
import { useNavigate } from 'react-router-dom'


function Admin() {

  let navAdminAdd= useNavigate()

  const ingresar =(e)=>{
    e.preventDefault()
    console.log(e.target)
    const name=e.target[0].value
    const pass=e.target[1].value
    const error=e.target.lastChild
    if(name==='Admin' && pass==='1234'){
      navAdminAdd('/agregar')
      error.textContent=''

    }else{
      error.textContent='no es la clave'
      return
    }
    
  }

  return (
    <div className='admin'>
      <div className='admin-contenedor'>
      <h2>Administrador</h2>

         <form onSubmit={ingresar} >
          <input required type='text' placeholder='ingrese su nombre' />
          <input required type='passsword' placeholder='ingrese su contrasena' />
          <button type='submit'>Login</button>
          <p></p>
         </form>

      </div>
    </div>
  )
}

export default Admin
