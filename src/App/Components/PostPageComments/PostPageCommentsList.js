import React, { useState } from "react"
import './PostPageComments.scss'
import PostPageCommentsItem from './PostPageCommentsItem'
import articlesData, { getObjOfDataArrById } from '../../Main/Articles/articlesData'
import articlesSmData from '../../Main/ArticlesSm/articlesSmData'

import nextId from "react-id-generator";





const PostPageCommentsList = ({id, articleSm}) => {


    let articlesDataObj;
    
    if(!articleSm) articlesDataObj = getObjOfDataArrById(articlesData)
    else articlesDataObj = getObjOfDataArrById(articlesSmData)


    
    const [testimonials, setTestimonials] = useState(articlesDataObj[id].comments)

    console.log('наш id', id)
    console.log('наш обєкт з начальним масивом', articlesDataObj[id].comments)
    console.log('наш state', testimonials)
 
    const [newTestimonials, setNewTestimonials] = useState({
        name: "",
        email: "",
        text: ""
    })

  
    const handleNameChange = (e) => {
        setNewTestimonials((value) => ({
            ...value,
            name: e.target.value
        }))
    }

    const handleEmailChange = (e) => {
        setNewTestimonials((value) => ({
            ...value,
            email: e.target.value
        }))
    }


    const handleTextChange = (e) => {
        setNewTestimonials((value) => ({
            ...value,
            text: e.target.value
        }))
    }

    const sendForm = (e) => {
        e.preventDefault();
        setTestimonials(value => {
            return [...value, newTestimonials]
        })

        setNewTestimonials({
            name: "",
            email: "",
            text: '',
        })
    }


    articlesDataObj[id].comments = testimonials;
    

    const formCord = React.createRef();

    const getFormCord = () => {
        formCord.current.scrollIntoView({block: "center", behavior: "smooth" })
    }

    return (
        <>
            <section className="comments">
                <div className="comments__inner">
                    <div className="comments__title">
                        <p className="comments__count">{articlesDataObj[id].comments.length} comments</p>
                        <button onClick={() => getFormCord()} className="comments__btn-leave">Leave a comment now </button>
                    </div>
                    <ul className="comments__list">
                        {
                            testimonials.map((item) => {
                                return(
                                    <PostPageCommentsItem
                                        key = {nextId()}
                                        name = {item.name}
                                        email = {item.email}
                                        text = {item.text}
                                    />
                                )
                                })
                        }
                    </ul>
                    <div className="comments__leave-comment">
                        <h3 ref={formCord} className="comments__title-leave">Leave a comment</h3>
                        <form 
                            className="comments__form"
                            onSubmit={sendForm}
                            >
                            <fieldset className="comments__fieldset">
                                <input 
                                    type="text" 
                                    className="comments__input comments__input--name" 
                                    placeholder="Your Name"
                                    value={newTestimonials.name}
                                    onChange={handleNameChange}
                                />
                                
                                <input 
                                    type="text" 
                                    className="comments__input comments__input--email"
                                    placeholder="Email"
                                    value={newTestimonials.email}
                                    onChange={handleEmailChange}
                                />
                                
                                <textarea 
                                    className="comments__textarea" 
                                    placeholder="Write your message"
                                    value={newTestimonials.text}
                                    onChange={handleTextChange}  
                                    > 
                                </textarea>
                                <button
                                    type="submit" 
                                    className="comments__btn-submit"
                                    onClick={sendForm}
                                >Submit</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}


export default PostPageCommentsList