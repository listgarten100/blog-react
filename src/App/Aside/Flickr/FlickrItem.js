import React from "react"
import {Link} from 'react-router-dom'

const FlickrItem = ({id, img}) => {
    return (
        <li className="flickr__item">
            <Link to={`/posts/${id}`} className="flickr__link">
                <img src={img} alt="portfolio" className="flickr__img"/>
            </Link>
        </li>
    )
  }
  
  export default FlickrItem;