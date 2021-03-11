import React from "react"
import {Link} from 'react-router-dom'

import google from '../../../img/img-google.svg'
import linkedin from '../../../img/img-linkedin.svg'
import pinterest from '../../../img/img-pinterest.svg'
import twitter from '../../../img/img-twitter.svg'
import fb from '../../../img/img-fb.svg'


import userImg from '../../../img/img-user.svg'
import folderImg from '../../../img/img-folder.svg'
import commentImg from '../../../img/img-comment.svg'
import viewImg from '../../../img/img-view.svg'

const PostPageItem = ({name, body, user, category, img, getFilterCategory}) => {
    return (
        <>
        <h3 className="article-headline">{name}</h3>
        <div className="articles__item">
                <div className="articles__img">
                <img src={img} alt="article" className="articles__img-item"/>
                <div className="articles__title">
                    <h3 className="articles__title-headline">{name}</h3>
                    <ul className="articles__title-tags-list">
                    <li className="articles__title-tags">
                        <img src={userImg} alt="user" className="articles__title-tags-img"/>
                        <a href="/" className="articles__title-tags-link">{user}</a>
                    </li>
                    <li className="articles__title-tags">
                    <img src={folderImg} alt="folder" className="articles__title-tags-img"/>
                        <Link to="/category" onClick={() => getFilterCategory(category)} className="articles__title-tags-link">{category}</Link>
                    </li>
                    <li className="articles__title-tags">
                        <img src={commentImg} alt="comment" className="articles__title-tags-img"/>
                        <a href="/" className="articles__title-tags-link">20 comment</a>
                    </li>
                    <li className="articles__title-tags">
                         <img src={viewImg} alt="view" className="articles__title-tags-img"/>
                        <a href="/" className="articles__title-tags-link">250 view</a>
                    </li>
                    </ul>
                    <div className="date-articles">
                    <p className="date-articles__day">14</p>
                    <p className="date-articles__month">september</p>
                    </div>
                </div>
                </div>
                <p className="articles__text">
                {body}
                </p>
                <div className="articles__links">
                <p className="articles__links-text">share:</p>
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
            </div>
      </>
    )
}

export default PostPageItem