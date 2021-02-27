import React from "react"
import SlickSlider from "react-slick"
import sliderData from './sliderData'
import NextArrow from './SliderControls/NextArrow'
import PrevArrow from './SliderControls/PrevArrow'
import SliderItem from './SliderItem'

import "./slick.scss";
import './slider.scss'



const SliderList = () =>  {

    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <PrevArrow/>,
        nextArrow: <NextArrow/>,
        };

    return (
        <section className="slider">
            <div className="wrapper">
                <div className="slider__inner">
                   <SlickSlider {...settings}>
                        {
                            sliderData.map(({img, id}) => (
                                <SliderItem
                                key = {id}
                                img = {img}
                                />
                            ))
                        }               
                    </SlickSlider>
                </div>
            </div>
      </section>
    )
  }


  export default SliderList;