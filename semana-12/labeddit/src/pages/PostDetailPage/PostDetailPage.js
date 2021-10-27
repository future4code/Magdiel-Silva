import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage"

const PostDetailPage = () => {
    useProtectedPage()
    return(
        <div>
            <h2>PostDetailPage</h2>
        </div>
    )
}

export default PostDetailPage