function BlogList({blogs, title, deleteBlog}) {
    // const blogs = props.blogs;
    // const title = props.title;

    return (
        <div className="blog-list">
            <h1> {title} </h1>
            {blogs.map((blog) => (
                <div className="blog-info" key={blog.id}>
                    <h2> {blog.title} </h2>
                    <h3> By: {blog.author} </h3>
                    <p> {blog.content} </p>
                    <button onClick={() => deleteBlog(blog.id)}>Delete</button>
                </div>
            ))}
        </div>
    )
}

export default BlogList;