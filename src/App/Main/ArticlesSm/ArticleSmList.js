
import React from "react"
import ArticleSmItem from './ArticleSmItem'


const ArticleSmList = ({posts}) => {
    
    return (
        <section className="articles-sm">
            <div className="articles-sm__inner">
                {
                   posts.map(({id, name, body, img}) => (
                      <ArticleSmItem
                            id = {id}
                            key = {id}
                            name = {name}
                            body = {body}
                            img = {img}
                       />
                   ))
                }
            </div>
        </section>
    )

  }
  
  export default ArticleSmList;