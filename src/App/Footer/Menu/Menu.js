import React from "react"
import {Link} from 'react-router-dom'



const Menu = () => {
  return (
        <nav className="menu">
              <ul className="menu__list">
                    <li className="menu__item"><Link to="/" className="menu__link">home</Link></li>
                    <li className="menu__item"><Link to="/about" className="menu__link">about me</Link></li>      
                    <li className="menu__item"><Link to="/categories" className="menu__link">categories</Link></li>
                    <li className="menu__item"><Link to="/recentposts" className="menu__link">recent posts</Link></li>
                    <li className="menu__item"><Link to="/contact" className="menu__link">contact</Link></li>
                </ul>
        </nav>
  )
}

export default Menu;