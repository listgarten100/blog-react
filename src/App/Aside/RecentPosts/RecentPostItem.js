import React from "react"
import {Link} from 'react-router-dom'


const RecentPostItem = ({name, body, showPost, classname}) => {
    const text = body.length > 120 ? body.substr(0, body.length - (body.length - 120)) + ' . . .' : body
    return (
            <li className={`recentPost__item ${classname}`}>
                <Link to="/post" onClick={() => showPost(name)} className="recentPost__link">
                    <div className="date-articles">
                        <p className="date-articles__day">14</p>
                        <p className="date-articles__month">february</p>
                    </div>
                    <h5 className="recentPost__item-title">{name}</h5>
                    <p className="recentPost__item-text">
                    {text}
                    </p>
                </Link>
            </li>
    )
  }
  
  export default RecentPostItem;