const express = require("express");
const morgan = require("morgan")
const mongoose = require("mongoose")
const Blog = require("./models/blogs")

const app = express();

const dbURI = 'mongodb+srv://root:12345@omarcluster.wfgmony.mongodb.net/BlogsDB'

mongoose.connect(dbURI).then((result) => {
    app.listen(3000);
    app.use(morgan("dev"))
    console.log("Connected to the Database")
}).catch((err) => {
    console.log(err)
})

app.set("view engine", "ejs")
app.use(express.static("assets"))
app.use(express.static("styles"))
app.use(express.urlencoded({ extended: true }));

app.use((request, response, next) => {
    // console.log("New Middleware is made.")
    // console.log("Host: ", request.hostname)
    // console.log("Method: ", request.method)
    // console.log("URL: ", request.url)
    next()
})

app.post("/new-blog", (request, response) => {
    console.log("New Post Request is Made")
    console.log(request.body)

    const blog = new Blog(request.body)
    blog.save().then((result) => {
        response.redirect("/about")
    }).catch((error) => {
        console.log(error)
    })
})

app.get("/blogs/:id", (request, response) => {
    const id = request.params.id;
    Blog.findById(id).then((result) => {
        response.render("blogInfo", {title: "Blog Info", blog: result});
    }).catch((error) => {
        console.log(error)
    })
})


app.get("/delete-blog/:id", (request, response) => {
    const id = request.params.id;
    Blog.findByIdAndDelete(id).then((result) => {
        response.redirect("/about")
    }).catch((error) => {
        console.log(error)
    })
})

app.get("/add-blog", (request, response) => {

    const blog = new Blog({
        title: "Blog 2",
        author: "Author 2",
        content: "Blog 2 Content"
    });
    blog.save().then((result) => {
        response.send(result)
    }).catch((error) => {
        console.log(error)
    })
})

app.get("/all-blogs", (request, response) => {

    Blog.find().sort({ createdAt: -1 }).then((result) => {
        response.send(result)
    }).catch((error) => {
        console.log(error)
    })
})

// app.get("/blogByID", (request, response) => {

//     Blog.findById("65b43177c60fe4d087cb16ea").then((result) => {
//         response.send(result)
//     }).catch((error) => {
//         console.log(error)
//     })
// })

app.get("/", (request, response) => {
    // response.send("<h1> Hello From Express </h1>");
    // response.sendFile("./views/index.html", { root: __dirname })
    const message = "This text is retrieved from App.js File"
    response.render("index", { message })
})

app.get("/about", (request, response) => {
    // response.sendFile("./views/about.html", { root: __dirname })

    // const title = "About Page Title Retrieved from App.js"
    // const blogs = [
    //     { title: "Blog 1", content: "Blog 1 Content" },
    //     { title: "Blog 2", content: "Blog 2 Content" },
    //     { title: "Blog 3", content: "Blog 3 Content" }
    // ]

    Blog.find().sort({ createdAt: -1 }).then((result) => {
        // response.send(result)
        const title = "All Blogs"
        response.render("about", { title, blogs: result })
    }).catch((error) => {
        console.log(error)
    })
})

app.get("/create", (request, response) => {
    // response.sendFile("./views/about.html", { root: __dirname })
    response.render("create")
})

app.get("/aboutus", (request, response) => {
    response.redirect("/about")
})

app.use((request, response) => {
    // response.status(404).sendFile("./views/notFound.html", {root: __dirname})
    response.status(404).render("notFound")
})