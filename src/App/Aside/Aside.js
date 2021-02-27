import React from "react"
import "./aside.scss"

import Profile from './Profile/Profile'
import RecentPostList from './RecentPosts/RecentPostList'
import CategoriesList from './Categories/CategoriesList'
import Decor from './Decor/Decor'
import Video from './Video/Video'
import FlickrList from './Flickr/FlickrList'

import decorData from './Decor/decorData'
import videosData from './Video/videosData'



const decorDataObj = decorData.reduce((obj, decor) => ({
    ...obj,
    [decor.name] : decor
}), {})

const videosDataObj = videosData.reduce((obj, video) => ({
    ...obj,
    [video.name] : video
}),{})


const Aside = ({width}) => {
   
    const profile = width < 600 ? '' : <Profile/>
    const categories = width < 600 ? '' : <CategoriesList/>
    return (
        <aside className="aside">
            {profile}
            <RecentPostList/>
            {categories}
            <Decor
            decor = {decorDataObj['man']}
            />
            <Video
            video = {videosDataObj['bali']}
            />
            <FlickrList/>
            <Video
             video = {videosDataObj['to visit']}
            />
            <Decor
            decor = {decorDataObj['road']}
            />
            <Video
             video = {videosDataObj['siargao']}
            />
        </aside>
    )
  }
  
  export default Aside;