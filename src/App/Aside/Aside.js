import React from "react"
import "./aside.scss"
import { Route } from "react-router"
import {getObjOfDataArr} from '../Main/Articles/articlesData'

import Profile from './Profile/Profile'
import RecentPostList from './RecentPosts/RecentPostList'
import CategoriesList from './Categories/CategoriesList'
import Decor from './Decor/Decor'
import Video from './Video/Video'
import FlickrList from './Flickr/FlickrList'

import decorData from './Decor/decorData'
import videosData from './Video/videosData'





const Aside = ({width, getFilterCategory, showPost}) => {
    
    const decorDataObj = getObjOfDataArr(decorData)
    const videosDataObj = getObjOfDataArr(videosData)
   
    const profile = width < 600 ? '' : <Profile/>
    const categories = width < 600 ? '' : <CategoriesList
    getFilterCategory = {getFilterCategory}
    />
    return (
        <>
        <Route path="/" exact render={() => (

            <aside className="aside">
                {profile}  
                <RecentPostList
                    showPost = {showPost}
                />
                {categories}
                <Decor
                    decor = {decorDataObj['man']}
                />
                <Video
                    video = {videosDataObj['bali']}
                />
                <FlickrList
                    showPost = {showPost}
                />
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
        
         )}/>

         <Route path="/post" exact render={() => (

            <aside className="aside">
                {profile}  
                <RecentPostList
                    showPost = {showPost}
                />
                {categories}
                <Decor
                    decor = {decorDataObj['man']}
                />
                <Video
                    video = {videosDataObj['bali']}
                />
                <FlickrList
                    showPost = {showPost}
                />
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
        
         )}/>

            <Route path="/postsm" exact render={() => (

            <aside className="aside">
                {profile}  
                <RecentPostList
                    showPost = {showPost}
                />
                {categories}
                <Decor
                    decor = {decorDataObj['man']}
                />
                <Video
                    video = {videosDataObj['bali']}
                />
                <FlickrList
                    showPost = {showPost}
                />
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

            )}/>
         </>
    )
  }
  
  export default Aside;