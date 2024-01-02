import { useEffect, useState } from "react"
import BlogList from "./BlogList"

const Home = () => {

    //List of Objects
    const [title, setTitle] = useState(["Our Blogs"])
    const [blogs, setBlogs] = useState(null);

    const deleteBlog = (id) => {
        const updatedBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(updatedBlogs);
    }

    useEffect(() => {
        fetch("http://localhost:8000/blogs")
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);
                setBlogs(data);
            })
    }, [])

    return (
        <div className="Home">
            {blogs && <BlogList blogs={blogs} title={title} deleteBlog={deleteBlog}/>}
            {/* <BlogList blogs={blogs} title={title} deleteBlog={deleteBlog} />
            <button onClick={() => setTitle("Updated Title")}>Update Title</button> */}
            {/* <BlogList blogs={blogs.filter((blog) => (blog.author === "x"))} title={title} /> */}
        </div>
    )
}

export default Home;