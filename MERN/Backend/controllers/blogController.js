const BlogsModel = require("../models/blogsModel")

const addBlog = async (request, response) => {
    // response.json({message: "New Blog will be added."})
    const { title, author, content } = request.body
    try {
        const blog = await BlogsModel.create({ title, author, content })
        response.status(200).json(blog)
    } catch {
        response.status(400).json(error.message)
    }
}

const getAllBlogs = async (request, response) => {
    try {
        const blogs = await BlogsModel.find().sort({ createdAt: 1 });
        response.status(200).json(blogs);
    } catch (error) {
        response.status(400).json(error.message);
    }
}

const getById = async (request, response) => {
    id = request.params.id
    try {
        const blog = await BlogsModel.findById(id);
        response.status(200).json(blog);
    } catch (error) {
        response.status(400).json(error.message);
    }
}

const deleteBlog = async (request, response) => {
    const id = request.params.id
    const blog = await BlogsModel.deleteOne({ _id: id })
    if (!blog) {
        response.status(404).json({ error: "No Such Blog" })
    } else {
        response.status(200).json(blog)
    }
}

const updateBlog = async (request, response) => {
    const id = request.params.id;
    const blog = await BlogsModel.updateOne({_id: id}, {...request.body})
    if (!blog) {
        response.status(404).json({ error: "No Such Blog" })
    } else {
        response.status(200).json(blog)
    }
}

module.exports = { addBlog, getAllBlogs, getById, deleteBlog, updateBlog }