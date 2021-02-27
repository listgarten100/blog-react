import React from "react"


const Menu = ({isActive}) => {

    let className = 'menu'
    if (isActive) className += ' active'

    return (
            <nav className={className}>
                <ul className="menu__list">
                    <li className="menu__item"><a href="/" className="menu__link">home</a></li>
                    <li className="menu__item"><a href="/" className="menu__link">pages</a></li>
                    <li className="menu__item"><a href="/" className="menu__link">post types</a></li>
                    <li className="menu__item"><a href="/" className="menu__link">categories</a></li>
                    <li className="menu__item"><a href="/" className="menu__link">contacts</a></li>
                </ul>
            </nav>
    )
  }
  
  export default Menu;