const express = require("express");
require("dotenv").config();

const mongoose = require("mongoose")

// Import Express Router
const BlogsRouter = require('./routes/blogs')

const app = express();

// To read the Data passed in the body of the request (POST, PUT, PATCH)
app.use(express.json())

mongoose.connect(process.env.dbURI).then(() => {
    console.log(`Connected to the Database ${process.env.dbURI}`)
    app.listen(process.env.PORT, () => {
        console.log("Listening on port: ", process.env.PORT);
    })
}).catch((error) => {
    console.log(error)
})

app.use((request, response, next) => {
    console.log("Request URL: ", request.url);
    console.log("Request Method: ", request.method);
    next();
})


app.get("/", (request, response) => {
    response.json({ message: "Hello from server.js" })
})

app.use("/blogs", BlogsRouter)

// app.get("/delete", (request, response) => {
//     response.json({ message: "Delete All" })
// })

// app.get("/add", (request, response) => {
//     response.json({ message: "Add New Item" })
// })