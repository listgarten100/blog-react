import React from "react"
import RecentPostItem from './RecentPostItem'

import recentPostsData from './recentPostsData'


const RecentPostList = () => {
    return (
            <section className="recentPost">
                <div className="recentPost__inner">
                    <h4 className="aside-title">recent post</h4>
                    <ul className="recentPost__list">
                        {
                            recentPostsData.map(({name, body, id}) => (
                                <RecentPostItem
                                    key = {id}
                                    name = {name}
                                    body = {body}
                                />
                            ))
                        }
                    </ul>
                </div>
            </section>
    )
  }
  
  export default RecentPostList;