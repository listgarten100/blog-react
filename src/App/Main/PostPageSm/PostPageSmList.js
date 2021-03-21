import React from "react"
import ArticleItem from '../Articles/ArticleItem'
import articlesSmData from '../ArticlesSm/articlesSmData'

import PostPageCommentsList from '../../Components/PostPageComments/PostPageCommentsList'

const PostPageList = ({match}) => {
    return (
        <>
            { articlesSmData.filter((post) => {
                return post.id === match.params.id
                    }).map(({
                        id,
                        name,
                        body,
                        img,
                    }) => (
                        <ArticleItem
                            id = {id}
                            key = {id}
                            name = {name}
                            body = {body}
                            img = {img}
                            clazzName = {'articles__title-headline--sm'}
                            articleSm = {true}
                            isBtnLike = {false}
                        />
                    )
                )
            }
            <PostPageCommentsList
                id = {match.params.id}
                articleSm = {true}
            />   
        </>   
    )
}


export default PostPageList