
import React from "react"
import ArticleSmItem from './ArticleSmItem'


const ArticleSmList = ({posts, showPost}) => {
    
    return (
        <section className="articles-sm">
            <div className="articles-sm__inner">

                {
                   posts.map(({id, name, body, img}) => (
                      <ArticleSmItem
                       key = {id}
                       name = {name}
                       body = {body}
                       img = {img}
                       showPost = {showPost}
                       />
                   ))
                }
            </div>
        </section>
    )

  }
  
  export default ArticleSmList;