import React from "react"
import CategoriesItem from './CategoriesItem'
import categoriesData from './categoriesData'



const CategoriesList = () => {
    return ( 
            <section className="categories">
                <div className="categories__inner">
                <h4 className="aside-title">categories</h4>
                <ul className="categories__list">
                    {
                        categoriesData.map(({name, id}) => (
                            <CategoriesItem
                                key = {id}
                                name = {name}
                            />
                        ))
                    }
                </ul>
                </div>
            </section>
    )
  }
  
  export default CategoriesList;