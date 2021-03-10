import React, { Component } from "react"
import { Route } from "react-router"
import "../common/style/reset.scss"
import "../common/style/styles.scss"
import articlesData, {getObjOfDataArr} from './Main/Articles/articlesData'
import articlesSmData from './Main/ArticlesSm/articlesSmData'


import Header from './Header/Header'
import SliderList from './Slider/SliderList'
import Main from './Main/Main'
import Aside from './Aside/Aside'
import Footer from './Footer/Footer'



class App extends Component {

    state = {
        width: 0,
        currentPost: '',
        category: '',
        term: '' 
    }

    updateDimensions = () => {
        this.setState({
            width: window.innerWidth
        })
    }

    

    UNSAFE_componentWillMount = () => {
        this.updateDimensions();
    }

    componentDidMount = () => {
        window.addEventListener("resize", this.updateDimensions);
    }

    componentWillUnmount = () => {
        window.removeEventListener("resize", this.updateDimensions);
    }


    showPost = (post) => {
        this.setState(() => ({
            currentPost: post
        })) 
    }

    updateTerm = () => {
        this.setState(() => ({
            term: ''
        })) 
    }
    

    getFilterCategory = (category) => {
        this.setState(() => ({
            category: category
        })) 
    }

    searchPost = (items, term) => {
        if(term.length === 0) {
            return items
        }

       return items.filter((item) => {
            return item.body.toLowerCase().indexOf(term.toLowerCase()) > -1 || item.name.toLowerCase().indexOf(term.toLowerCase()) > -1
        })

    }

    onUpdateSearch = (term) => {
        this.setState({term})
    }


  
  render() {
    const articlesDataObj = getObjOfDataArr(articlesData)
    const articlesSmDataObj = getObjOfDataArr(articlesSmData)

    const visiblePosts = this.searchPost(articlesData, this.state.term)
    const visiblePostsSm = this.searchPost(articlesSmData, this.state.term)

    return (
            <div className="page">
                <Route path="/" render={() => (
                    <Header
                        onUpdateSearch = {this.onUpdateSearch}
                        updateTerm = {this.updateTerm}
                    />
                )}/>

                <Route path="/" exact component={SliderList}/>  

                <div className="content">
                    <div className="wrapper">
                        <Route path="/" exact render={() => (
                                <div className="content__inner">
                                    <Main
                                        width = {this.state.width}
                                        showPost = {this.showPost}
                                        getFilterCategory = {this.getFilterCategory}
                                        visiblePosts = {visiblePosts}
                                        visiblePostsSm = {visiblePostsSm}
                                    />
                                    <Aside
                                        width = {this.state.width}
                                        getFilterCategory = {this.getFilterCategory}
                                        showPost = {this.showPost}

                                    />
                            </div>
                        )}/>

                        <Route path="/categories" exact render={() => (
                            <Main
                                width = {this.state.width}
                                category = {this.state.category}
                                getFilterCategory = {this.getFilterCategory}
                                visiblePosts = {visiblePosts}
                                visiblePostsSm = {visiblePostsSm}
                            />
                        )}/>

                        <Route path="/category" exact render={() => (
                            <Main
                                width = {this.state.width}
                                category = {this.state.category}
                                getFilterCategory = {this.getFilterCategory}
                                showPost = {this.showPost}
                                visiblePosts = {visiblePosts}
                                visiblePostsSm = {visiblePostsSm}
                            />
                        )}/>

                        <Route path="/recentposts" exact render={() => (
                            <Main
                                width = {this.state.width}
                                showPost = {this.showPost}
                                visiblePosts = {visiblePosts}
                                visiblePostsSm = {visiblePostsSm}
                            />
                        )}/>  
        
                        <Route path="/about" exact render={() => (
                            <Main
                                width = {this.state.width}
                                visiblePosts = {visiblePosts}
                                visiblePostsSm = {visiblePostsSm}
                            />
                        )}/>  

                        <Route path="/contact" exact render={() => (
                            <Main
                                width = {this.state.width}
                                visiblePosts = {visiblePosts}
                                visiblePostsSm = {visiblePostsSm}
                            />
                        )}/>  


                        <Route path="/post" exact render={() => (
                            <div className="content__inner">
                                <Main
                                    post = {articlesDataObj[this.state.currentPost]}
                                    getFilterCategory = {this.getFilterCategory}
                                    visiblePosts = {visiblePosts}
                                    visiblePostsSm = {visiblePostsSm}
                                />
                                <Aside
                                    width = {this.state.width}
                                    getFilterCategory = {this.getFilterCategory}
                                    showPost = {this.showPost}
                                    visiblePosts = {visiblePosts}
                                />
                        </div>
                        )}/>

                        <Route path="/postsm" exact render={() => (
                            <div className="content__inner">
                                <Main
                                    postSm = {articlesSmDataObj[this.state.currentPost]}
                                    visiblePosts = {visiblePosts}
                                    visiblePostsSm = {visiblePostsSm}
                                />
                                <Aside
                                    width = {this.state.width}
                                    getFilterCategory = {this.getFilterCategory}
                                    showPost = {this.showPost}
                                    visiblePosts = {visiblePosts}
                                />
                            </div>
                        )}/>            
                    </div>
            </div>
                <Route path="/" component={Footer}/> 
            </div>
        )
    }
}


export default App;
