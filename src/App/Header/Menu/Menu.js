import React, { Component } from "react"
import {Link} from 'react-router-dom'

class Menu extends Component  {

  
    render() {
        const {isActive, updateTerm} = this.props
        let className = 'menu'
        if (isActive) className += ' active'
        
        return (
            <nav className={className}>
                <ul className="menu__list">
                    <li className="menu__item"><Link to="/" onClick={() => updateTerm()}   className="menu__link">home</Link></li>
                    <li className="menu__item"><Link to="/about" className="menu__link">about me</Link></li>      
                    <li className="menu__item"><Link to="/categories" className="menu__link">categories</Link></li>
                    <li className="menu__item"><Link to="/recentposts" className="menu__link">recent posts</Link></li>
                    <li className="menu__item"><Link to="/contact" className="menu__link">contact</Link></li>
                </ul>
            </nav>
    )
    }
    
  }
  
  export default Menu;