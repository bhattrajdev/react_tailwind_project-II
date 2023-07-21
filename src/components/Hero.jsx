import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import images from '../../data';

const Hero = () => {
       var settings = {
         dots: false,
         Infinite: true,
         speed: 500,
         slidesToShow: 1,
         slidesToScroll: 1,
         autoplay: true,
       };
       return (
         <Slider {...settings}>
           {images.map((images, index) => (
             <div key={index} className="w-full">
               <img src={images.src} className="w-full h-full z-10" />
             </div>
           ))}
         </Slider>
       );
}

export default Hero