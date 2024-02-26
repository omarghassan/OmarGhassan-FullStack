const express = require("express")
const router = express.Router()

const BlogsController = require("../controllers/blogController")

router.get("/", (request, response) => {
    response.json({ message: "Hello From Blogs Router." })
})

router.get("/allblogs", BlogsController.getAllBlogs)

router.get("/getById/:id", BlogsController.getById)

router.post("/addBlog", BlogsController.addBlog)

router.delete("/deleteblog/:id", BlogsController.deleteBlog)

router.put("/updateblog/:id", BlogsController.updateBlog)

router.patch("/updateblog/:id", BlogsController.updateBlog)

module.exports = router