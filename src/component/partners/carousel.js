import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import PartnerPhotoOne from '../../media/images/partners/logo_1.png';
import PartnerPhotoTwo from '../../media/images/partners/logo_2.png';
import PartnerPhotoThree from '../../media/images/partners/logo_3.png';
import PartnerPhotoFour from '../../media/images/partners/logo_4.png';
import PartnerPhotoFive from '../../media/images/partners/logo_5.png';
import PartnerPhotoSix from '../../media/images/partners/logo_6.png';

export const ResponsiveUi = () =>{

    const settings = {
      dots: true,
      autoplay:true,
      infinite: true,
      speed: 600,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
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
      <div>
        <h2> </h2>
        <Slider {...settings}>
          <div>
          <img className='firstPhoto' src={PartnerPhotoOne} alt=''/> 
          </div>
          <div>
          <img className='firstPhoto' src={PartnerPhotoTwo} alt=''/> 
          </div>
          <div>
          <img className='firstPhoto' src={PartnerPhotoThree} alt=''/>  
          </div>
          <div>
          <img className='firstPhoto' src={PartnerPhotoFour} alt=''/> 
          </div>
          <div>
          <img className='firstPhoto' src={PartnerPhotoFive} alt=''/> 
          </div>
          <div>
          <img className='firstPhoto' src={PartnerPhotoSix} alt=''/> 
          </div>
         
        </Slider>
      </div>
    );
}
  
