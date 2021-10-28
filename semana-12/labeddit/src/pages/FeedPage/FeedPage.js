import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import { PostCard } from "../../components/PostsCard/PostCard";
import useRequestData from "../../hooks/useResquestData";
import {BASE_URL} from "../../constants/urls"


const FeedPage = () => {
    useProtectedPage()
    const feedPosts = useRequestData([],`${BASE_URL}/posts`)
    console.log(feedPosts)

    const postFeed = feedPosts.map((post)=>{
        return(
            <PostCard name ={post.body}/>
        )
    })
    return(
        <div>
            {postFeed}
        </div>
    )
}

export default FeedPage