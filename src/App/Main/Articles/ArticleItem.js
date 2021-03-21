import React from "react"
import {Link} from 'react-router-dom'
import { connect } from "react-redux"
import articlesData from './articlesData'

import google from '../../../img/img-google.svg'
import linkedin from '../../../img/img-linkedin.svg'
import pinterest from '../../../img/img-pinterest.svg'
import twitter from '../../../img/img-twitter.svg'
import fb from '../../../img/img-fb.svg'

import heartPink from '../../../img/img-heart-pink.svg'
import heartRed from '../../../img/img-heart-red.svg'

import userImg from '../../../img/img-user.svg'
import folderImg from '../../../img/img-folder.svg'
import commentImg from '../../../img/img-comment.svg'





const getObjOfDataArr = array => array.reduce((obj, article) => ({
    ...obj,
    [article.id] : article
}), {})


const articlesDataObj = getObjOfDataArr(articlesData)




const ArticleItem = ({
    id, name, body, user, category, img, isTags, isReadMore, clazzName, isLiked, addLike, removeLike,  isBtnLike
}) => {
        const text = body.length > 600 ? body.substr(0, body.length - (body.length - 600)) + ' . . .' : body
        const clazz = clazzName ?  'articles__title-headline ' + clazzName : 'articles__title-headline';
        const heart = isLiked ? heartRed : heartPink

        
        let countComments;
        let commentWord;
        if(articlesDataObj[id]) countComments = articlesDataObj[id].comments.length;
        else countComments = '';
        countComments <= 1 ? commentWord = 'comment' : commentWord = 'comments'
      

        return (
        
            <div className="articles__item">
                <div className="articles__img">
                <img src={img} alt="article" className="articles__img-item"/>
                <div className="articles__title">
                <h3 className={clazz}>{name}</h3>
                    {isTags ? 
                        <> 
                            <ul className="articles__title-tags-list">
                            <li className="articles__title-tags">
                                <img src={userImg} alt="user" className="articles__title-tags-img"/>
                                <a href="/" className="articles__title-tags-link">{user}</a>
                            </li>
                            <li className="articles__title-tags">
                            <img src={folderImg} alt="folder" className="articles__title-tags-img"/>
                                <Link to={`/category/${category}`} className="articles__title-tags-link">{category}</Link>
                            </li>
                            <li className="articles__title-tags">
                                <img src={commentImg} alt="comment" className="articles__title-tags-img"/>
                                <Link to={`/posts/${id}`} className="articles__title-tags-link">{countComments} {commentWord}</Link>
                            </li>
                            {/* <li className="articles__title-tags">
                                <img src={viewImg} alt="view" className="articles__title-tags-img"/>
                                <a href="/" className="articles__title-tags-link">250 view</a>
                            </li> */}
                            </ul> 
                        </> : ''
                    }
                    
                    <div className="date-articles">
                    <p className="date-articles__day">14</p>
                    <p className="date-articles__month">september</p>
                    </div>
                </div>
                </div>
                <p className="articles__text">
                {text}
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
                {isBtnLike ? <div className="like" onClick={() => isLiked ? removeLike(id) : addLike(id)}>
                    <p className="like__text">Add to favorites:</p>
                    <img src={heart} className="like__img" alt="like"/>
                </div> : ''}
                
               
                {isReadMore ? <div className="btn"><Link to={`/posts/${id}`} className="btn-more">read more +</Link></div> : ''}  
            </div>
        )
    }
  


    const mapState = (state, {id}) => ({
        isLiked: state.postsLikeState[id],
    })
    
    const mapDispatch = dispatch => ({
        addLike: (id) => dispatch({
            type: 'LIKE',
            id
        }),
    
        removeLike: (id) => dispatch({
            type: 'DISLIKE',
            id
        }),

    })
    
    
    export default connect(
        mapState,
        mapDispatch
    ) (ArticleItem)


