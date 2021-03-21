import React from "react"
import "./aside.scss"
import { Route } from "react-router"
import { getObjOfDataArrByName } from '../Main/Articles/articlesData'

import Profile from './Profile/Profile'
import RecentPostList from './RecentPosts/RecentPostList'
import CategoriesList from './Categories/CategoriesList'
import Decor from './Decor/Decor'
import Video from './Video/Video'
import FlickrList from './Flickr/FlickrList'

import decorData from './Decor/decorData'
import videosData from './Video/videosData'





const Aside = ({width}) => {
    
    const decorDataObj = getObjOfDataArrByName(decorData)
    const videosDataObj = getObjOfDataArrByName(videosData)
   
    const profile = width < 600 ? '' : <Profile/>
    const categories = width < 600 ? '' : <CategoriesList/>
    return (
        <>
        <Route path="/" exact render={() => (

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
        
         )}/>

         <Route path="/posts/:id" exact render={() => (

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
        
         )}/>

            <Route path="/postssm/:id" exact render={() => (
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

            )}/>
         </>
    )
  }
  
  export default Aside;