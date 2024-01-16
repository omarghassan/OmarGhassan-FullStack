const http = require("http");
const fs = require("fs");

const server = http.createServer((request, response) => {
    console.log("Request is made");
    // console.log(request);
    console.log("The Request URL: ", request.url)
    console.log(request.method)
    // response.setHeader("Content-type", "Text/plain")
    response.setHeader("Content-type", "Text/HTML")
    // response.write("<h1> Hello All </h1>")

    const path = "./views/"

    if (request.url == "/") {
        // path+= "index.html";
        fs.readFile("./views/index.html", (error, data) => {
            if (error) {
                console.log(err)
                response.end()
            } else {
                response.statusCode = 200
                response.write(data)
                response.end()
            }
        })
    } else if (request.url == "/about") {
        // path+= "path.html"
        fs.readFile("./views/about.html", (error, data) => {
            if (error) {
                console.log(err)
                response.end()
            } else {
                response.statusCode = 200
                response.write(data)
                response.end()
            }
        })
    } else {
        fs.readFile("./views/notFound.html", (error, data) => {
            if (error) {
                console.log(err)
                response.end()
            } else {
                response.statusCode = 404
                response.write(data)
                response.end()
            }
        })
    }

    // response.end()
})

server.listen(8080, "localhost", () => {
    console.log("Listening to requests using port 8080")
})