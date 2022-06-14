import { useForm } from "react-hook-form";
import { useCreatePosts } from "../../../hooks/postsData/useCreatePosts";
import './posts-form.component.css'
interface formData {
    title: string;
    body: string
}
const PostsForm: React.FC = () => {
    const { register, handleSubmit } = useForm<formData>();
    const createPost = useCreatePosts()
    const onSubmitClick = handleSubmit(({ title, body }) => {
        console.log(`${title} - ${body}`)
        createPost({
            variables: {
                input: {
                    title,
                    body
                }
            }
        })
    })
    return (<>
        Posts Form
        <div className="postform">
            <form onSubmit={onSubmitClick}>
                <input type="text"  {...register("title")} />
                <br />
                <textarea  {...register("body")} />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    </>)
}

export default PostsForm;