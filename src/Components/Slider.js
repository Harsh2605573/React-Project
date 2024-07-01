import React from 'react'
import Slider from "react-slick";
import Img from "./Image/1.jpg"
import image from "./Image/2.jpg"
import pic from "./Image/3.jpg"
import photo from "./Image/4.jpg"
import img from "./Image/5.jpg"


function Sliderr() {

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
      <div className="slider-container">
      <Slider {...settings}>
        <div>
          <h3><img src={Img} alt="" /></h3>
        </div>
        <div>
          <h3><img src={image} alt="" /></h3>
        </div>
        <div>
          <h3><img src={pic} alt="" /></h3>
        </div>
        <div>
          <h3><img src={photo} alt="" /></h3>
        </div>
        <div>
          <h3><img src={img} alt="" /></h3>
        </div>
      </Slider>
    </div>
    
  );
}

export default Sliderr
