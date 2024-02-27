require("dotenv").config()
const express = require("express");

const tasksRouter = require("./routes/tasks")

const mongoose = require("mongoose")

const app = express();

app.use(express.json())

app.use((request, response, next) => {
    console.log("Request Path: ", request.path)
    console.log("Request Method: ", request.method)
    next()
})

app.use("/", tasksRouter)

mongoose.connect(process.env.dbURI).then(() => {
    console.log("Connected to the Database Successfully")
    app.listen(process.env.PORT, () => {
        console.log(`Listening on Port: ${process.env.PORT}`)
    })
}).catch((error) => {
    console.log(error)
})
