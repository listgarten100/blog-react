import React from "react"
import search from './img-search.svg'


const Form = () => {
    return (
        <form className="form">
            <fieldset className="form__list">
                <input type="text" className="form__input" placeholder="Search..."/>
                <a className="form__btn" href="/"><img className="form__img" src={search} alt="search"/></a>
            </fieldset>
        </form>
    )
  }

  export default Form