
import React from "react"
import ArticleSmItem from './ArticleSmItem'


const ArticleSmList = ({firstPost, secondPost}) => {
    
    return (
        <section className="articles-sm">
            <div className="articles-sm__inner">
                <ArticleSmItem
                name = {firstPost.name}
                body = {firstPost.body}
                img = {firstPost.img}
                />
                <ArticleSmItem
                 name = {secondPost.name}
                 body = {secondPost.body}
                 img = {secondPost.img}
                />
            </div>
        </section>
    )

  }
  
  export default ArticleSmList;