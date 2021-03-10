import React from "react"



const Ad = ({img}) => {
    return (
            <section className="advertisement">
                <div className="advertisement__inner">
                    <div className="advertisement__block">
                        <a href="/" className="advertisement__link"> 
                            <img src={img} alt="/" className="advertisement__img"/>
                        </a>     
                    </div>
                </div>
            </section>
    )
  }
  
  export default Ad;