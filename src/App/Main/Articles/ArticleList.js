import React from "react"
import ArticleItem from './ArticleItem'




const ArticleList = ({post}) => {

    return (
        <section className="articles">
            <div className="articles__inner">
               
                        <ArticleItem
                        key = {post.id}
                        name = {post.name}
                        body = {post.body}
                        category = {post.category}
                        user = {post.user}
                        img = {post.img}
                        />
      
            </div>
        </section>
    )
  }
  
  export default ArticleList;