import React from "react"



const PostPageCommentsItem = ({name,email, text}) => {

    return (
                <>
                    <li className="comments__item">
                        <div className="comments__item-top">
                            <h5 className="comments__name">{name} <span className="comments__email">({email})</span></h5>
                            <p className="comments__date">20:30 November, 2013</p>
                        </div>
                        <div className="comments__item-bottom">
                            <p className="comments__text">{text}</p>
                        </div>
                    </li>
                </>
    )
}


export default PostPageCommentsItem
