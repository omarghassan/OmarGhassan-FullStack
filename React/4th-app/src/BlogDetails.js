import { useParams, useNavigate } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {

    const { id } = useParams();
    const { title, data: blog, isLoading, error } = useFetch('http://localhost:8000/blogs/' + id);
    const navigate = useNavigate();

    const deleteBlog = () => {
        fetch("http://localhost:8000/blogs/" + blog.id, {
            method: "DELETE"
        })
        .then(() => {
            navigate("/")
        })
    }

    const editBlog = () => {
        navigate("/editBlog/" + blog.id)
    }

    return (
        <div>
            {isLoading && <div> Loading...</div>}
            {error && <div> {error} </div>}
            {blog && (<article>
                <h2> {blog.title} </h2>
                <h2>by {blog.author}</h2>
                <p> {blog.content} </p>
                <button onClick={deleteBlog}>Delete Blog</button>
                <button onClick={editBlog}>Edit Blog</button>
            </article>)}
        </div>
    )
}

export default BlogDetails;