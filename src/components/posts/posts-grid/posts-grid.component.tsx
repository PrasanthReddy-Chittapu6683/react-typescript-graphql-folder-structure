import React from "react"
import { PostData } from "../../../common/styles/interfaces/post.interface"
import PostsGridItem from "./posts-grid-item/posts-grid-item.component"

interface PostGridProps {
    posts: PostData[]
}


const PostsGrid: React.FC<PostGridProps> = ({ posts }: PostGridProps) => {
    return (
        <div className="post-grid">

            {posts.map(post => (
                <React.Fragment key={post.id}>
                    <PostsGridItem post={post} />
                </React.Fragment>
            ))}

        </div>
    )
}

export default PostsGrid