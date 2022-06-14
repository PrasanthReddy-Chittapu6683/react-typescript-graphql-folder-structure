import { PostData } from "../../common/styles/interfaces/post.interface"
import PostsGrid from "../../components/posts/posts-grid/posts-grid.component"
import { useGetPosts } from "../../hooks/postsData/useGetPosts"

const HomePage: React.FC = () => {
    const postsList: PostData[] = useGetPosts() || []
    //     [
    //     {
    //         id: '1',
    //         title: 'Title 1',
    //         body: 'body 1'
    //     },
    //     {
    //         id: '2',
    //         title: 'Title 2',
    //         body: 'body 2'
    //     }
    // ]
    return (
        <div className="home">
            <h1>
                Home
            </h1>
            <PostsGrid posts={postsList} />
        </div>
    )
}

export default HomePage