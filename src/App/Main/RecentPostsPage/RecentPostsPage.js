import React from "react"
import RecentPostList from "../../Aside/RecentPosts/RecentPostList"



const RecentPostsPage = ({showPost}) => {
    return (
        <RecentPostList
            showPost = {showPost}
            classname = {'align-center'}
        />
    )
}


export default RecentPostsPage