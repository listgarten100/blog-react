import React from "react"


const Burger = ({
    onChangeClass, isActive
}) => {

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
  
  export default Burger;