import React, { Component } from "react"
import ArticleItem from './ArticleItem'
import articlesData from './articlesData'
import { Route } from "react-router"





class ArticleList extends Component {


    render() {
       const {posts, showPost, getFilterCategory, category} = this.props 
        return (
            <section className="articles">
                <div className="articles__inner">

                    <Route path="/" exact render={() => (
                            posts.map(({name, id, body, category, user, img}) => (   
                                <ArticleItem
                                    key = {id}
                                    name = {name}
                                    body = {body}
                                    category = {category}
                                    user = {user}
                                    img = {img}
                                    getFilterCategory = {getFilterCategory}
                                    showPost = {showPost}
                                />
                          
                            ))
                    )}/> 


                        <Route path="/category" exact render={() => {
                            return (
                                <>
                                <h1 className="category-headline">{category}</h1>
                                {articlesData.filter(item => item.category === category).map(({name, id, body, category, user, img}) => (
                                  
                                    <ArticleItem
                                        key = {id}
                                        name = {name}
                                        body = {body}
                                        category = {category}
                                        user = {user}
                                        img = {img}
                                        getFilterCategory = {getFilterCategory}
                                        showPost = {showPost}
                                    />
                              
                                ))}
                                </>
                            )
                        }}/> 
                </div>
            </section>
        )
    }
}
  
  export default ArticleList;