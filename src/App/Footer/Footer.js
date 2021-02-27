import React from "react"

import './footer.scss'
import Logo from './Logo/Logo'
import Menu from './Menu/Menu'



const Footer = () => {
  return (
        <footer className="footer full-bg">
            <div className="footer__inner full-styles">
                <Logo/>
                <Menu/>
                <p className="footer__copywrites">
                    © 017 All rights reserved - createuiux
                </p>
            </div>
        </footer>
  )
}

export default Footer;
