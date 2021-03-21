import React, {Component} from "react"
import search from './img-search.svg'


class Form extends Component {

    state = {
        term: '',
    }

    onUpdateSearch = (e) => {
        const term = e.target.value;
        
        this.props.onUpdateSearch(term)
        this.setState({
            term: term,
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
    }


    render() {

         return (
            <form 
                className="form"
                onSubmit={this.onSubmit}
            >
                <fieldset className="form__list">
                    <input type="text" 
                        className="form__input" 
                        placeholder="Search..."
                        onChange = {this.onUpdateSearch}
                        value={this.state.term}
                    />
                    <a className="form__btn" href="/">
                        <img className="form__img" src={search} alt="search"/>
                    </a>
                </fieldset>
            </form>
        )
  }
}

  export default Form