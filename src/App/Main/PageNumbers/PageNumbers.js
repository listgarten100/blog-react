import React from "react"
import imgArrow from './img-arrowRight-numb.svg'


const PageNumbers = () => {
    return (
        <section className="page-numbers">
            <div className="page-numbers__inner">
              <ul className="page-numbers__list">
                <li className="page-numbers__item"><a href="/" className="page-numbers__link page-numbers__link--active">1</a></li>
                <li className="page-numbers__item"><a href="/" className="page-numbers__link">2</a></li>
                <li className="page-numbers__item"><a href="/" className="page-numbers__link">3</a></li>
                <li className="page-numbers__item"><a href="/" className="page-numbers__link--dots">...</a></li>
                <li className="page-numbers__item"><a href="/" className="page-numbers__link">10</a></li>
                <li className="page-numbers__item"><a href="/" className="page-numbers__link"><img src={imgArrow} alt="arrow" className="page-numbers__img"/></a></li>
              </ul>
            </div>
          </section>
    )
  }
  
  export default PageNumbers;