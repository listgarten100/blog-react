import React from "react"


import google from '../../../img/img-google.svg'
import linkedin from '../../../img/img-linkedin.svg'
import pinterest from '../../../img/img-pinterest.svg'
import twitter from '../../../img/img-twitter.svg'
import fb from '../../../img/img-fb.svg'

const ContactPage = () => {
    return (
        <section className="contact">
            <div className="contact__inner">
                <h2 className="contact__main-title">Contact me</h2>
                <ul className="contact__list">
                    <li className="contact__item">
                        <h3 className="contact__title">
                            Drop me a line
                        </h3>
                        <form className="contact__form">
                        <input type="text" className="contact__input contact__input--name" placeholder="Name"/>
                        <input type="text" className="contact__input contact__input--email" placeholder="Email"/>
                        <textarea  cols="30" rows="10" className="contact__input contact__input--mess" placeholder="Message"></textarea>
                        <button className="contact__btn">Send message</button>
                        </form>               
                    </li>
                    <li className="contact__item">
                        <h3 className="contact__title">
                            I'm here
                        </h3>
                        <iframe title="map" className="contact__map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d928.6305043082643!2d-71.06796266393859!3d42.35919189657826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3709957ff1f37%3A0x5f11525c3dd87352!2zOTBBIE15cnRsZSBTdCwgQm9zdG9uLCBNQSAwMjExNCwg0KHQqNCQ!5e0!3m2!1sru!2sua!4v1615297004911!5m2!1sru!2sua" width="600" height="450"  allowFullScreen="true" loading="lazy"></iframe>
                    </li>
                    <li className="contact__item">
                        <h3 className="contact__title">
                            Contact info
                        </h3>
                        <ul className="contact__desc">
                            <li className="contact__desc-item">
                                <span className="contact__desc-item--bold">Address:</span>221 Baker Street, London,
                            </li>
                            <li className="contact__desc-item">
                            <span className="contact__desc-item--bold">Email:</span>richard.doe@gmail.com
                            </li>
                            <li className="contact__desc-item">
                            <span className="contact__desc-item--bold">Phone:</span>+12 346-678-90
                            </li>
                        </ul>
                        <ul className="social">
                    <li className="social__item social__item--twitter">
                        <a href="/" className="social__link">
                            <img src={twitter} alt="twitter" className="social__img"/>
                        </a>
                    </li>
                    <li className="social__item social__item--fb">
                        <a href="/" className="social__link">
                            <img src={fb} alt="fb" className="social__img"/>
                        </a>
                    </li>
                    <li className="social__item social__item--google">
                        <a href="/" className="social__link">
                            <img src={google} alt="google" className="social__img"/>
                        </a>
                    </li>
                    <li className="social__item social__item--linkedin">
                        <a href="/" className="social__link social__link">
                            <img src={linkedin} alt="linkedin" className="social__img"/>
                        </a>
                    </li>
                    <li className="social__item social__item--pinterest">
                        <a href="/" className="social__link">
                            <img src={pinterest} alt="pinterest" className="social__img"/>
                        </a>
                    </li>
                </ul>
                    </li>
                </ul>
            </div>
        </section>
    )
}


export default ContactPage