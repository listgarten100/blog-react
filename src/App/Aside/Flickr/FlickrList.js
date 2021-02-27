import React from "react"
import FlickrItem from './FlickrItem'

import flickrsData from './flickrsData'

const FlickrList = () => {
    return (
            <section className="flickr">
                <div className="flickr__inner">
                    <h4 className="aside-title">flickr</h4>
                    <ul className="flickr__list">
                       {
                           flickrsData.map(({
                              id, img
                           }) => (
                                <FlickrItem
                                key = {id}
                                img = {img}
                            />
                           ))
                       }


                    
                    </ul>
                </div>
            </section>
    )
  }
  
  export default FlickrList;