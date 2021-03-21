import React from "react"
import ArticleItem from '../Articles/ArticleItem'
import articlesData from '../Articles/articlesData'

import PostPageCommentsList from '../../Components/PostPageComments/PostPageCommentsList'

const PostPageList = ({match}) => {

    return (    
                <>
                    { articlesData.filter((post) => {
                        return post.id === match.params.id
                            }).map(({
                                id,
                                name,
                                body,
                                category,
                                user,
                                img,
                            }) => (

                                    <ArticleItem
                                        id = {id}
                                        key = {id}
                                        name = {name}
                                        body = {body}
                                        category = {category}
                                        user = {user}
                                        img = {img}
                                        isTags= {true}
                                        isBtnLike = {true}
                                    />
                            )
                        )
                    }   
            <PostPageCommentsList
                id = {match.params.id}
            />
        </>
    )
}

export default PostPageList