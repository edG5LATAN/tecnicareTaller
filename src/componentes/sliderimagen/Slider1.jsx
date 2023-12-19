import React from 'react'
import Slider from 'react-slick';
import './Slider1.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Slider1() {

  const settings = {
    dots: true,
    className: "slider variable-width",
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    centerMode: true,
    initialSlide: 0,
    adaptiveHeight: true,
    speed: 10,
    autoplaySpeed: 5000,
    cssEase: "linear",
    autoplay: true,
    pauseOnHover: true,
    appendDots: dots => (
      <div
        style={{
          // backgroundColor: "#16aae42b",
          borderRadius: "1px",
          padding: "5px",
          border:"none",
          paddingBottom:"30px"
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    )
  
  };
  
  return (
    <div className='contenedor-slider'>
    {/* <h2> Single Item</h2> */}
    <Slider {...settings}>
      <div className='caja1'>
        <img src="img/slider/imgSlider2.jpg" alt="alura" />
      </div>
      <div className='caja1'>
       <img src="img/slider/imgSlider3.jpg" alt="alura" />
      </div>
      <div className='caja1'>
        <img src="img/slider/imgSlider4.jpg" alt="alura" />
      </div>
      <div className='caja1'>
        <img src="img/slider/imgSlider5.jpg" alt="alura" />
      </div>
      {/* <div className='caja1'>
        <img src="img/slider/imgSlider6.jpg" alt="alura" />
      </div> */}
      
    </Slider>
  </div>
  )
}

export default Slider1
