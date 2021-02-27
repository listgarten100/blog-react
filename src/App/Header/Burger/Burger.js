import React, { Component } from "react"


class Burger extends Component{

    // state = {
    //     isActive: false
    // }

   

    render() {
        const {onChangeClass, isActive} = this.props
        // console.log(onChangeClass)
        let className = 'burger'
        if(isActive) className += ' active'

        return (
            <div 
            className={className}
            onClick={() => onChangeClass()}>
                <span></span>
            </div>
    )
    }
  }
  
  export default Burger;