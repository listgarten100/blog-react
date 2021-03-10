import React from "react"
import {Link} from 'react-router-dom'

const FlickrItem = ({img, name, showPost}) => {
    return (
        <li className="flickr__item">
            <Link to="/post" onClick={() => showPost(name)} className="flickr__link">
                <img src={img} alt="portfolio" className="flickr__img"/>
            </Link>
        </li>
    )
  }
  
  export default FlickrItem;