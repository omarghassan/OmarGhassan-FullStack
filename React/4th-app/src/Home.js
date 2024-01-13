import BlogList from "./BlogList"
import useFetch from "./useFetch";

const Home = () => {
    const { title, data: blogs, isLoading, error } = useFetch("http://localhost:8000/blogs");
    //  console.log(blogs);
    // const deleteBlog = (id) => {
    //     const updatedBlogs = blogs.filter(blog => blog.id !== id);
    //     setBlogs(updatedBlogs);
    // }

    return (
        <div className="Home">
            {isLoading && <div> <h1> Loading... </h1> </div>}
            {error && <div> {error} </div>}
            {blogs && <BlogList blogs={blogs} title={title} />}
            {/* {blogs && <BlogList blogs={blogs} title={title} deleteBlog={deleteBlog} />} */}
            {/* <BlogList blogs={blogs} title={title} deleteBlog={deleteBlog} />
            <button onClick={() => setTitle("Updated Title")}>Update Title</button> */}
            {/* <BlogList blogs={blogs.filter((blog) => (blog.author === "x"))} title={title} /> */}
        </div>
    )
}

export default Home;