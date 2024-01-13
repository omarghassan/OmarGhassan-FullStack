import { useState } from "react";
import { useNavigate } from "react-router-dom"

const Create = () => {

    const [title, setTitle] = useState();
    const [content, setContent] = useState();
    const [author, setAuthor] = useState();
    const [Loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, content, author };
        setLoading(true);
        setTimeout(() => {
            fetch("http://localhost:8000/blogs", {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(blog)
            }).then(() => {
                setLoading(false)
                navigate("/")
            })
        }, 1000)
    }

    return (
        <div className="create">
            <form onSubmit={handleSubmit}>
                <label className="blog-name">Blog Name</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />

                <label className="blog-details">Blog Content</label>
                <textarea name="blog-content" id="blog-content" value={content} onChange={(e) => setContent(e.target.value)} required></textarea>

                <label className="author-name">Select Author Name</label>
                <select value={author} onChange={(e) => setAuthor(e.target.value)} required>
                    <option value="select author" defaultValue disabled>Select Author</option>
                    <option value="x">X</option>
                    <option value="y">Y</option>
                    <option value="z">Z</option>
                </select>

                {!Loading && <button>Add Blog</button>}
                {Loading && <button>Adding Blog...</button>}
            </form>
        </div>
    )
}

export default Create;