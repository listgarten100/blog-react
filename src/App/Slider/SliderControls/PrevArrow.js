import React from "react"


import arrowLeft from './img-arrowLeft.svg'


const PrevArrow = (props) => {
    const {onClick } = props;

    return (
            <a
                className="slider__controls-left"
                onClick={onClick}
                href="/">
                <img 
                src={arrowLeft} 
                alt="arrowLeft" 
                className="slider__controls-img"/>
            </a>
    );
  }


  export default PrevArrow