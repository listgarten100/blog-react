import React from "react"



const Decor = ({decor}) => {
    return (
            <section className="decor">
                <div className="decor__inner">
                    <div className="decor__item">
                        <img src={decor.img} alt="decor" className="decor__img"/>
                        <p className="decor__item-text">
                        {decor.firstLetter}<span className="decor__item-text--span">{decor.secondLetter}</span><span className="decor__item-text--span">{decor.thirdLetter}</span>
                        </p>
                    </div>
                </div>
        </section>
    )
  }
  
  export default Decor;