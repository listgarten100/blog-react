import React from "react"
import {Link} from 'react-router-dom'
import articlesData from '../../Main/Articles/articlesData'


const CategoriesItem = ({name, getFilterCategory}) => {

    const articlesLength = (articlesData.filter(item => item.category === name)).length

    return (
            <li className="categories__item">
                <Link to="/category" onClick={() => getFilterCategory(name)} className="categories__item-link">
                    <div className="categories__arrow">
                    </div>
                    <p className="categories__item-text">
                    {name}
                    </p>
                    <div className="categories__item-likes">
                        <p className="categories__item-likes-text">{articlesLength}</p>
                    </div>
                </Link>
            </li>
    )
  }
  
  export default CategoriesItem;