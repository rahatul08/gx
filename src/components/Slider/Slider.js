import React, {useEffect} from 'react';
import Slider from "react-slick";
import styled from 'styled-components'
import AOS from 'aos'
import 'aos/dist/aos.css'
import SliderItem from './Slider_item';
import ImageData from '../../assets/ImageData';

const Wrapper = styled.div`
    background-image:url(${ImageData.tokenBg});
    background-repeat: no-repeat;
    background-size: cover;
    padding: 50px 20px;

    .slider-container{
        button.slick-arrow{
            display:none !important;
        }
        .slick-dots li button:before{
            opacity:0.5;
            color:white;
            content:"-";
            font-size:92px;
            display: none !important;
        }
        .slider-items{

        }
    }
    .slick-dots li{
        button{
            display: block;
            width: 100%;
        }
    }
    h3{
            font-size:40px;
            color: white;
    }
`
const HeroSlider = () => {
    useEffect(() => {
        AOS.init(
            {
                offset:100,
                duration:1000,
                easing:'ease-in'

            }
        )
    })
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
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
        <Wrapper>
             <div className="py-14">
                    <Slider {...settings} className="slider-container">
                    <div>
                        <div className="slider-items px-2" data-aos="fade-up">
                            <SliderItem/>
                        </div>
                    </div>
                    <div>
                         <div className="slider-items px-2" data-aos="fade-up">
                            <SliderItem/>
                         </div>
                    </div>
                    <div>
                         <div className="slider-items px-2" data-aos="fade-up">
                             <SliderItem/>
                         </div>
                    </div>
                    <div>
                          <div className="slider-items px-2" data-aos="fade-up">
                             <SliderItem/>
                          </div>
                    </div>
                    <div>
                         <div className="slider-items px-2" data-aos="fade-up">
                             <SliderItem/>
                         </div>
                    </div>
                    <div>
                        <div className="slider-items px-2" data-aos="fade-up">
                             <SliderItem/>
                        </div>
                    </div>
                    <div>
                         <div className="slider-items px-2" data-aos="fade-up">
                             <SliderItem/>
                         </div>
                    </div>
                    <div>
                         <div className="slider-items px-2" data-aos="fade-up">
                             <SliderItem/>
                         </div>
                    </div>
                    <div>
                          <div className="slider-items px-2" data-aos="fade-up">
                             <SliderItem/>
                          </div>
                    </div>
                    <div>
                         <div className="slider-items px-2" data-aos="fade-up">
                            <SliderItem/>
                         </div>
                    </div>
                    <div>
                        <div className="slider-items px-2" data-aos="fade-up">
                         <SliderItem/>
                        </div>
                    </div>
                    <div>
                         <div className="slider-items px-2" data-aos="fade-up">
                         <SliderItem/>
                         </div>
                    </div>
                    </Slider>
             </div>
        </Wrapper>
    );
};

export default HeroSlider;