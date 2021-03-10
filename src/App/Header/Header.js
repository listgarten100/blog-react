import React, { Component } from "react"
import "./header.scss"

import Logo from './Logo/Logo'
import Burger from './Burger/Burger'
import Menu from './Menu/Menu'
import Form from './Form/Form'

class Header extends Component {

    state = {
        isActive: false,
    }

    
    onChangeClass= () => {
        this.setState((prevState) => {
            return {
                isActive: !prevState.isActive
            }
        })
    }

    render() {
        const {onUpdateSearch, updateTerm} = this.props
        return (
            <header className="header full-bg">
                <div className="header__inner full-styles">
                    <Logo/>
                    <Burger
                        onChangeClass = {this.onChangeClass}
                        isActive = {this.state.isActive}
                    />
                    <Menu
                        isActive = {this.state.isActive}
                        updateTerm = {updateTerm}
                    />
                    <Form
                        onUpdateSearch = {onUpdateSearch}
                    />
                </div>
            </header>
        )
    }
}
  
  export default Header;