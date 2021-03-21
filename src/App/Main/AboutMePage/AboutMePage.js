import React from "react"


import google from '../../../img/img-google.svg'
import linkedin from '../../../img/img-linkedin.svg'
import pinterest from '../../../img/img-pinterest.svg'
import twitter from '../../../img/img-twitter.svg'
import fb from '../../../img/img-fb.svg'

import userImg from '../../../img/img-man.png'


const AboutMePage = () => {
    return (
        <section className="aboutMe">
            <div className="aboutMe__inner">
                <h3 className="aboutMe__greeting">
                    Hello, I am <span className="aboutMe__name">HANNAH ROBINSON</span>
                </h3>
                <img src={userImg} className="aboutMe__img" alt="user"></img>
                <p className="aboutMe__text aboutMe__text--italic">I’m an adventure travel blogger, photographer & digital nomad who’s been exploring the world for over 10-years.</p>
                <p className="aboutMe__text">Welcome to my travel blog! This is where I share entertaining stories, <span className="aboutMe__text--highlighted">budget travel tips</span>, fun YouTube videos, inspiring <span className="aboutMe__text--highlighted">travel photography</span>, advice on nomadic living, and plenty of outdoor adventures with you from my travels around the world.</p>
                <p className="aboutMe__text aboutMe__text--bold">It’s a place for people like you who are looking for daily inspiration & motivation to live a life full of adventure.</p>
                <p className="aboutMe__text">Or just some helpful travel tips for planning your next vacation.</p>
                <p className="aboutMe__text"> I want to show you how to travel the world, to seek experiences over possessions, and open your mind to new possibilities.</p>
                <p className="aboutMe__text aboutMe__text--bold">To visit places that you didn’t even know existed!</p>
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
            </div> 
        </section>
    )
}

export default AboutMePage