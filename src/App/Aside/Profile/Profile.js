import React from "react"

import google from '../../../img/img-google.svg'
import linkedin from '../../../img/img-linkedin.svg'
import pinterest from '../../../img/img-pinterest.svg'
import twitter from '../../../img/img-twitter.svg'
import fb from '../../../img/img-fb.svg'


const Profile = () => {
    return (
            <section className="profile">
                <div className="profile__inner">
                    <div className="profile__img"></div>
                    <div className="profile__title">
                        <h4 className="profile__title-name">hannah robinson</h4>
                        <p className="profile__title-major">traveller & lifestyle blogger</p>
                    </div>
                    <div className="social-profile">
                        <p className="social-profile__text">follow me</p>
                        <ul className="social social-links--profile">
                            <li className="social__item social__item--twitter"><a href="/" className="social__link"><img src={twitter} alt="twitter" className="social__img"/></a></li>
                            <li className="social__item social__item--fb"><a href="/" className="social__link"><img src={fb} alt="fb" className="social__img"/></a></li>
                            <li className="social__item social__item--google"><a href="/" className="social__link"><img src={google} alt="google" className="social__img"/></a></li>
                            <li className="social__item social__item--linkedin"><a href="/" className="social__link social__link"><img src={linkedin} alt="linkedin" className="social__img"/></a></li>
                            <li className="social__item social__item--pinterest"><a href="/" className="social__link"><img src={pinterest} alt="pinterest" className="social__img"/></a></li>
                        </ul>
                    </div>
                </div>
            </section>
    )
  }
  
  export default Profile;