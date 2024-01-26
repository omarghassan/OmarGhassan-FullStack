const express = require("express");

const app = express();

app.set("view engine", "ejs")
app.use(express.static("assets"))
app.use(express.static("styles"))

app.listen(3000);

app.get("/", (request, response) => {
    // response.send("<h1> Hello From Express </h1>");
    // response.sendFile("./views/index.html", { root: __dirname })
    const message = "This text is retrieved from App.js File"
    response.render("index", { message })
})

app.get("/about", (request, response) => {
    // response.sendFile("./views/about.html", { root: __dirname })

    const title = "About Page Title Retrieved from App.js"
    const blogs = [
        { title: "Blog 1", content: "Blog 1 Content" },
        { title: "Blog 2", content: "Blog 2 Content" },
        { title: "Blog 3", content: "Blog 3 Content" }
    ]
    response.render("about", { title, blogs })
})

app.get("/blogs/create", (request, response) => {
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