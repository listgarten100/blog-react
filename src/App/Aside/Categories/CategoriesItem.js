import React from "react"



const CategoriesItem = ({name}) => {
    return (
            <li className="categories__item">
                <a href="/" className="categories__item-link">
                    <div className="categories__arrow">
                    </div>
                    <p className="categories__item-text">
                    {name}
                    </p>
                    <div className="categories__item-likes">
                        <p className="categories__item-likes-text">25</p>
                    </div>
                </a>
            </li>
    )
  }
  
  export default CategoriesItem;