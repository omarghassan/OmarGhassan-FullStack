const fs = require("fs");

fs.readFile("./files/hello.txt", (error, data) => {
    if (error) {
        console.log("The File could not be read")
    } else {
        console.log(data.toString())
    }
})

console.log("After Read File Block")