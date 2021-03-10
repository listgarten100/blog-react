import React from "react"
import articlesData from '../../Main/Articles/articlesData'
import FlickrItem from './FlickrItem'


const FlickrList = ({showPost}) => {

    let counter = 0;

    return (
            <section className="flickr">
                <div className="flickr__inner">
                    <h4 className="aside-title">flickr</h4>
                    <ul className="flickr__list">
                       {
                           articlesData.slice(0).map(({
                              id, name, img
                           }) => {
                               let flickrItem;
                                if(counter < 9) {
                                    counter++
                                        flickrItem = <FlickrItem
                                            key = {id}
                                            img = {img}
                                            name = {name}
                                            showPost = {showPost}
                                        />
                                }  
                                return flickrItem
                            })
                       }
                    </ul>
                </div>
            </section>
    )
  }
  
  export default FlickrList;