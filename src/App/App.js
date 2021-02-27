import React, { Component } from "react"


import "../common/style/reset.scss"
// import "../common/style/font-face.scss"
// import "../common/style/variables.scss"
import "../common/style/styles.scss"

import Header from './Header/Header'
import SliderList from './Slider/SliderList'
import Main from './Main/Main'
import Aside from './Aside/Aside'
import Footer from './Footer/Footer'


class App extends Component {

    state = {
        width: 0,
    }

    updateDimensions = () => {
        this.setState({
            width: window.innerWidth
        })
    }


    componentWillMount = () => {
        this.updateDimensions();
    }

    componentDidMount = () => {
        window.addEventListener("resize", this.updateDimensions);
    }

    componentWillUnmount = () => {
        window.removeEventListener("resize", this.updateDimensions);
    }  
  
  render() {
  return (
        <div className="page">
            <Header/>
            <SliderList/>
            <div className="content">
                <div className="wrapper">
                    <div className="content__inner">
                        <Main
                        width = {this.state.width}
                        />
                        <Aside
                        width = {this.state.width}
                        />
                    </div>
                </div>
          </div>
          <Footer/>
        </div>
  )
}
}

export default App;
