import React from "react"


import arrowRight from './img-arrowRight.svg'

const NextArrow = (props) => {
    const {onClick } = props;

    return (
            <a
                className="slider__controls-right"
                onClick={onClick}
                href="/">
                <img 
                src={arrowRight} 
                alt="arrowRight" 
                className="slider__controls-img"/>
            </a>
    );
  }



  export default NextArrow