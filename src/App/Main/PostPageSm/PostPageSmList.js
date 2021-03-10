import React from "react"
import PostPageSmItem from './PostPageSmItem'


const PostPageList = ({postSm}) => {
    return (
        <PostPageSmItem
            key = {postSm.id}
            name = {postSm.name}
            body = {postSm.body}
            img = {postSm.img}
        />
    )
}


export default PostPageList