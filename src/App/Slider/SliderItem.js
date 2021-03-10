import React from "react"


const SliderItem = ({img}) => {

    return (
            <div className="slider__item">
                <img src={img} alt="slider-img" className="slider__img"/>
            </div>
            
    )
  
}

  export default SliderItem;