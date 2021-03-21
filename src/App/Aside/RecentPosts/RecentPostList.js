import React from "react"
import RecentPostItem from './RecentPostItem'

import articlesData from '../../Main/Articles/articlesData'



const RecentPostList = ({classname}) => {
    let counter = 0;
    
    return (
            <section className="recentPost">
                <div className="recentPost__inner">
                    <h4 className="aside-title">recent post</h4>
                    <ul className="recentPost__list">
                        {   
                         articlesData.slice(0).map(({name, body, id}) => { 
                            let recentPost;   
                            if(counter < 5) {
                                counter++
                                recentPost = <RecentPostItem
                                    id = {id}
                                    key = {id}
                                    name = {name}
                                    body = {body}
                                    classname = {classname}
                                />
                            }
                            return recentPost    
                         })   
                        }
                    </ul>
                </div>
            </section>
    )
  }
  
  export default RecentPostList;