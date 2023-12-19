import React from 'react'
import './Informacion.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useNavigate } from 'react-router-dom';


function Informacion() {

  const navAdmin=useNavigate()

  const administrador=()=>{
    navAdmin('/admin')
  }

  return (
    <div className='informacion'>
      <div className="informacion-contenedor-cajas">
        <a href="https://maps.app.goo.gl/mFA9LJX5PwpYnhdr8" target='_blank'>Ubicacion</a>
        <p>Terminos de garantia</p>
        <p>mision y vicio</p>
        <p onClick={administrador}>Admin</p>

      </div>
      <div className="informacion-contenedor-cajas">
        <form action="">
          <input type="text" required placeholder='Ingrese su nombre' name="name" id="" />
          <input type="text" required placeholder='Correo Electronico' name="name" id="" />
          <input type="text" required placeholder='Asunto ' name="name" id="" />
          <input type="text" required placeholder='Comentarios' name="name" id="" />
          <button>Enviar</button>
        </form>
      </div>
      <div className="informacion-contenedor-cajas">
       <p>
       <FacebookIcon titleAccess='faceboock' color='primary' fontSize='large' className='face-icon'/>
       </p>
       <p>
        <InstagramIcon titleAccess='Instagran' fontSize='large' className='insta-icon'/>
       </p>
       <a href="https://api.whatsapp.com/send?phone=50433692369" target='_blank'>
        <WhatsAppIcon titleAccess='Whatsapp' color="success" fontSize='large' className='whatsapp-icon' />
       </a>
      </div>
    </div>
  )
}

export default Informacion
