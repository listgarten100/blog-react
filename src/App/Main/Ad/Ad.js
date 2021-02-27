import React from "react"
// import img from './img-ads.jpg'


const Ad = ({ad}) => {
    return (
            <section className="advertisement">
                <div className="advertisement__inner">
                    <div className="advertisement__block">
                        <a href="/" className="advertisement__link"> 
                            <img src={ad.img} alt="/" className="advertisement__img"/>
                        </a>     
                    </div>
                </div>
            </section>
    )
  }
  
  export default Ad;