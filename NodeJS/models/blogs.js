const mongoose = require("mongoose")

// Create Schema Class: Properities, Types
const Schema = mongoose.Schema;

// Create object of the schema
const blogs = new Schema();

// Create Schema
const blogSchema = new Schema(
    {
        title: { type: String, required: true },
        author: { type: String, required: true },
        content: { type: String, required: true }
    }, { timestamps: true }
)

// Create Model
const Blog = mongoose.model("Blog", blogSchema);

// Export Model
module.exports = Blog