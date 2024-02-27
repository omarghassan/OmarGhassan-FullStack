import Navbar from "../components/Navbar"
import { useEffect, useState } from "react"

const Home = () => {

    const [blogs, setBlogs] = useState(null);

    useEffect(() => {
        fetch("/blogs").then(response => response.json()).then(
            blogs => setBlogs(blogs)
        ).catch(error => console.log(error))
    }, [])

    return (
        <div className="Home">
            <Navbar> </Navbar>
            {blogs && blogs.map((blog) => (
                <p key={blog._id}> {blog.author}</p>
            ))}
            <div>
                <h1>Hello</h1>
            </div>
        </div>
    )
}

export default Home