import React from "react"
import articlesData from '../Articles/articlesData'
import ArticleItem from '../Articles/ArticleItem'
import { connect } from "react-redux"


import favorites from '../../../img/img-favorites.png'
import heartPink from '../../../img/img-heart-pink.svg'


const favoriteStyle = {
    width: "50px",
    height: "50px",
    backgroundImage: `url(${heartPink})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  };


const FavoritePage = ({isLikedState, resetLikes}) => {

   
    let likedArr = [];
    let articlesLikePosts = [];


    for(let key in isLikedState){
        if(isLikedState[key] === true){
            likedArr.push(key)
        }
    }

    articlesData.forEach((article) => { 
        likedArr.forEach((like) => {
            if(article.id === like) {
                articlesLikePosts.push(article)
            }
        })
    })


    return (
        <>
            <div className="favorites">
                <h1 className="favorites__headline">Favorites</h1>
                <div className="favorites__heart" style={favoriteStyle}>
                    <p className="favorites__text">{articlesLikePosts.length}</p>
                </div>
                <button onClick={() => resetLikes()} className="favorites-reset">Reset posts</button>
            </div>
        
            {articlesLikePosts.length >= 1 ?  articlesLikePosts.map(({name, id, body, category, user, img}) => (
            
                <ArticleItem
                    key = {id}
                    id = {id}
                    name = {name}
                    body = {body}
                    category = {category}
                    user = {user}
                    img = {img}
                    isTags = {true}
                    isReadMore = {true}
                    isBtnLike = {true}
                />
            ))  : <div className="favorites-error">
                    <img src={favorites} className="favorites-error__img" alt="favorites"/>
                    <p className="favorites-error__text">You don't have any favorite posts, please select something</p>
                </div> }  
        </>
    )
}





const mapState = (state) => ({
    isLikedState: state.postsLikeState,
})

const mapDispatch = dispatch => ({
    resetLikes: () => dispatch({
        type: 'RESET',
    }),

})

export default connect(
    mapState,
    mapDispatch
) (FavoritePage)