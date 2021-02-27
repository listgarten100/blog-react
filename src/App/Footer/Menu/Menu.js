import React from "react"




const Menu = () => {
  return (
        <nav className="menu">
            <ul className="menu__list">
                <li className="menu__item"><a href="/" className="menu__link">home</a></li>
                <li className="menu__item"><a href="/" className="menu__link">pages</a></li>
                <li className="menu__item"><a href="/" className="menu__link">post types</a></li>
                <li className="menu__item"><a href="/" className="menu__link">categories</a></li>
                <li className="menu__item"><a href="/" className="menu__link">contact</a></li>
            </ul>
        </nav>
  )
}

export default Menu;