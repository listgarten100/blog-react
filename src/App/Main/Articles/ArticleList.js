import React from "react"
import { Route } from "react-router"
import ArticleItem from './ArticleItem'
import articlesData from './articlesData'
import FavoritePage from '../FavoritePage/FavoritePage'





const ArticleList = ({
    posts, match
}) => {
  
        return (
            <section className="articles">
                <div className="articles__inner">

                    <Route path="/" exact render={() => (
                            posts.map(({name, id, body, category, user, img}) => (   
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
                          
                            ))
                    )}/> 

                        <Route path="/category/:category" exact render={() => {
                            return (
                                <>
                                <h1 className="category-headline">{match.params.category}</h1>
                                {articlesData.filter(item => item.category === match.params.category).map(({name, id, body, category, user, img}) => (
                                  
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
                              
                                ))}
                                </>
                            )
                        }}/>

                        <Route path="/favorites" exact render={() => (
                            <FavoritePage/>
                        )}/>  
                </div>
            </section>
        )
    }

  
  export default ArticleList;