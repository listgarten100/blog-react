import React from "react"
import PostPageItem from './PostPageItem'


const PostPageList = ({post, getFilterCategory}) => {
    return (
        <PostPageItem
            key = {post.id}
            name = {post.name}
            body = {post.body}
            category = {post.category}
            user = {post.user}
            img = {post.img}
            getFilterCategory = {getFilterCategory}
        />
    )   
}


export default PostPageList