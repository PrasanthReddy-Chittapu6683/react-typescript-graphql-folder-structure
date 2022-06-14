import { PostData } from "../../../../common/styles/interfaces/post.interface"

const PostsGridItem: React.FC<{ post: PostData }> = ({ post }: { post: PostData }) => {
    return (
        <div >
            <p>{'ID: '}{post.id}</p>

            <p>{'Title: '}{post.title}</p>

            <p>{'Body: '}{post.body}</p>
        </div>
    )
}

export default PostsGridItem