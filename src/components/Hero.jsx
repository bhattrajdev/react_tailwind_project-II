import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
       var settings = {
         dots: true,
         Infinite: true,
         speed: 500,
         slidesToShow: 1,
         slidesToScroll: 1,
         autoplay: true,
       };
       return (
           <Slider {...settings}>
             <div>
               <img src="/images/banner1.jpg" className='w-full h-full z-10' />
             </div>
             <div>
               <img src="/images/banner2.jpg" className='w-full h-full' />
             </div>
             <div>
               <img src="/images/banner3.jpg" className='w-full h-full' />
             </div>
             <div>
               <img src="/images/banner4.jpg" className='w-full h-full' />
             </div>
           </Slider>
       );
}

export default Hero