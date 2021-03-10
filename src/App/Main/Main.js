import React, { Component } from "react"
import { Route } from "react-router"
import Pagination from "react-js-pagination";

import "./main.scss"

import Profile from '../Aside/Profile/Profile'
import Categories from '../Aside/Categories/CategoriesList'
import ArticleList from './Articles/ArticleList'
import ArticleSmList from './ArticlesSm/ArticleSmList'
import AdList from './Ad/AdList'

import articlesData from './Articles/articlesData'
import articlesSmData from './ArticlesSm/articlesSmData'
import adsData from './Ad/adsData'

import CategoriesPage from "./CategoriesPage/CategoriesPage"
import PostPageList from "./PostPage/PostPageList"
import PostPageSmList from './PostPageSm/PostPageSmList'
import RecentPostsPage from "./RecentPostsPage/RecentPostsPage"
import ContactPage from "./ContactPage/ContactPage"
import AboutMePage from "./AboutMePage/AboutMePage"

import GetArrayPerPage from '../Components/GetArrayPerPage'



class Main extends Component {

    state = {
        adsDataPag: adsData.slice(0),
        currentPage: 1,
        articlesPerPage: 3,
        articlesSmPerPage: 2,
        adsPerPage: 1,
    };

    handlePageChange = (pageNumber) => {
        window.scrollTo(0, 0)
        this.setState({currentPage: pageNumber});
    }


    render() {
        const {width, visiblePosts, visiblePostsSm, showPost, getFilterCategory, category, post, postSm} = this.props

        let currentDataArticles;
        let currentDataArticlesSm;

        if(visiblePosts.length < articlesData.length) currentDataArticles = visiblePosts
        else currentDataArticles = GetArrayPerPage(this.state.currentPage, this.state.articlesPerPage, visiblePosts)
              
        if(visiblePostsSm.length < articlesSmData.length) currentDataArticlesSm = visiblePostsSm
        else currentDataArticlesSm = GetArrayPerPage(this.state.currentPage, this.state.articlesSmPerPage, visiblePostsSm)
          
        const currentDataAds = GetArrayPerPage(this.state.currentPage, this.state.adsPerPage, this.state.adsDataPag)

        
        const profileSm = width < 600 ? <Profile/> : ''
        const categories = width < 600 ? <Categories/> : ''

        return (
            <main className="main">
                <Route path="/" exact render={() => {
                 if(visiblePosts.length < articlesData.length || visiblePostsSm.length < articlesSmData.length){
                     return  (
                     <>
                        <ArticleList
                            posts = {currentDataArticles}
                            showPost = {showPost}
                            getFilterCategory = {getFilterCategory}
                        />
                        <ArticleSmList
                            posts = {currentDataArticlesSm}
                            showPost = {showPost}
                        />
                    </>
                     )
                 } else {
                     return (
                        <>
                        {profileSm}
                        {categories}
                        
                        <ArticleList
                            posts = {currentDataArticles}
                            showPost = {showPost}
                            getFilterCategory = {getFilterCategory}
                        />

                        <ArticleSmList
                            posts = {currentDataArticlesSm}
                            showPost = {showPost}
                        />

                        <AdList
                            posts = {currentDataAds}
                        />
                      
                        <Pagination
                            activePage={this.state.currentPage}
                            itemsCountPerPage={5}
                            totalItemsCount={articlesData.length + articlesSmData.length/2 + adsData.length}
                            pageRangeDisplayed={5}
                            onChange={this.handlePageChange}
                            />
                        </>
                     )
                 }
                 
                }}/>

    
    
                <Route path="/about" exact render={() => (
                    <AboutMePage/>
                )}/>

                <Route path="/categories" exact render={() => (
                    <CategoriesPage
                        getFilterCategory = {getFilterCategory}
                    />
                )}/>

                <Route path="/category" exact render={() => (
                    <ArticleList
                        category = {category}
                        getFilterCategory = {getFilterCategory}
                        showPost = {showPost}
                    />
                )}/>

                <Route path="/post" exact render={() => (
                    <PostPageList
                        post = {post}
                        getFilterCategory = {getFilterCategory}
                    />
                )}/>

                
                <Route path="/postsm" exact render={() => (
                    <PostPageSmList
                        postSm = {postSm}
                    />
                )}/>

                <Route path="/recentposts" exact render={() => (
                    <RecentPostsPage
                        showPost = {showPost} 
                    />
                )}/>

                <Route path="/contact" exact render={() => (
                    <ContactPage/>
                )}/>
            
            </main>
        )
  }
}

  
  export default Main;