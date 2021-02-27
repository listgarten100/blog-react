import React from "react"



const RecentPostItem = ({name, body}) => {
    return (
            <li className="recentPost__item">
                <a href="/" className="recentPost__link">
                    <div className="date-articles">
                        <p className="date-articles__day">14</p>
                        <p className="date-articles__month">february</p>
                    </div>
                    <h5 className="recentPost__item-title">{name}</h5>
                    <p className="recentPost__item-text">
                    {body}
                    </p>
                </a>
            </li>
    )
  }
  
  export default RecentPostItem;