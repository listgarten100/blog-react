import React, { Component } from "react"


class Burger extends Component{

   
    render() {
        const {onChangeClass, isActive} = this.props
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