import React from "react"
// import img from './img-travel.jpg'


const ArticleSmItem = ({
    name, body, img
}) => {

    const text = body.length > 250 ? body.substr(0, body.length - (body.length - 250)) + ' . . .' : body
    return (
            <div className="articles-sm__item">
                <img src={img} alt="article" className="articles-sm__item-img"/>
                <div className="date-articles">
                    <p className="date-articles__day">14</p>
                    <p className="date-articles__month">february</p>
                </div>
                <h3 className="articles-sm__item-title">
                {name}
                </h3>
                <p className="articles-sm__item-text">
                {text}
                </p>
                <a href="/" className="btn-more">read more +</a>
        </div>
    )
  }
  
  export default ArticleSmItem;