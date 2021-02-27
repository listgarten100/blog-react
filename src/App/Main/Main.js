import React from "react"
import "./main.scss"

import Profile from '../Aside/Profile/Profile'
import Categories from '../Aside/Categories/CategoriesList'
import ArticleList from './Articles/ArticleList'
import ArticleSmList from './ArticlesSm/ArticleSmList'
import Ad from './Ad/Ad'
import PageNumbers from './PageNumbers/PageNumbers'

import articlesData from './Articles/articlesData'
import articlesSmData from './ArticlesSm/articlesSmData'
import adsData from './Ad/adsData'


const articlesDataObj = articlesData.reduce((obj, article) => ({
    ...obj,
    [article.name] : article
}), {})


const articlesSmDataObj = articlesSmData.reduce((obj, articleSm) => ({
    ...obj,
    [articleSm.name] : articleSm
}), {})

const adsDataSmObj = adsData.reduce((obj, ad) => ({
    ...obj,
    [ad.name] : ad
}), {})


const Main = ({width}) =>  {

    const profileSm = width < 600 ? <Profile/> : ''
    const categories = width < 600 ? <Categories/> : ''

    return (
        <main className="main">
            {profileSm}
            {categories}
            <ArticleList
            post = {articlesDataObj['italy']}
            />
            <ArticleList
            post = {articlesDataObj['Czech Republic day trips']}
            />
            <ArticleSmList
            firstPost = {articlesSmDataObj['Singapore']}
            secondPost = {articlesSmDataObj['London']}
            />
            <Ad
            ad = {adsDataSmObj['favorit']}
            />
            <ArticleList
            post = {articlesDataObj['Bosnia and Herzegovina']}
            />
            <Ad
             ad = {adsDataSmObj['place for ad']}
            />
            <ArticleSmList
             firstPost = {articlesSmDataObj['Turkey']}
             secondPost = {articlesSmDataObj['Kyiv']}
            />
            <PageNumbers/>
        </main>
    )
  }

  
  export default Main;