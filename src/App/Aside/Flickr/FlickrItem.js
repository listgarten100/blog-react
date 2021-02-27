import React from "react"
// import img from './img-flickr3.jpg'

const FlickrItem = ({img}) => {
    return (
        <li className="flickr__item">
            <a href="/" className="flickr__link">
                <img src={img} alt="portfolio" className="flickr__img"/>
            </a>
        </li>
    )
  }
  
  export default FlickrItem;