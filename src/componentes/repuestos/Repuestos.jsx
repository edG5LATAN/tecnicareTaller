import React from 'react'
import './Repuestos.css'
import ImageGallery from 'react-image-gallery'
import "react-image-gallery/styles/css/image-gallery.css";

function Repuestos() {

  const images=[
    {
      original:'img/repuestos/flex-cargar-s23.jpg',
      thumbnail:'img/repuestos/flex-cargar-s23.jpg'
    },
    {
      original:'img/repuestos/lcs-lg-k51.png',
      thumbnail:'img/repuestos/lcs-lg-k51.png'
    },
    {
      original:'img/repuestos/flex-huawei-p40.jpg',
      thumbnail:'img/repuestos/flex-huawei-p40.jpg'
    },
    {
      original:'img/repuestos/lcd-sam-a14.jpg',
      thumbnail:'img/repuestos/lcd-sam-a14.jpg'
    },
    {
      original:'img/repuestos/huaweyp20.jpg',
      thumbnail:'img/repuestos/huaweyp20.jpg'
    },
    {
      original:'img/repuestos/gtc-lcd.jpg',
      thumbnail:'img/repuestos/gtc-lcd.jpg'
    }
  ]
  return (
    <div className='repuestos'>
      <div className='repuesto-cajaSlider'>
        <ImageGallery 
      items={images}
      autoPlay={true}
      showPlayButton={false}
      showFullscreenButton={false}
       />
      </div>
      
      <div className='repuestos-info'>
        <h3>Variedad de repuestos</h3>
        <p>
          Contamos con una gran variedad de repuestos originales
          de SAMSUNG, APPLE, NOKIA, LG, HUAWEY... 
          flex de carga, Flex de camara, flex de audio
          pantallas originales con marcos 
        </p>
        <button>Cotiza tu reparacion</button>
      </div>
    </div>
  )
}

export default Repuestos
