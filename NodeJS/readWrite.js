const fs = require("fs");

let fileContent;
fs.readFile("./files/hello.txt", (error, data) => {
    if (error) {
        console.log("The File could not be read")
    } else {
        fileContent = data.toString()

        fs.writeFile("./files/hello1.txt", fileContent + "New Content UPDATED", () => {
            console.log("New Content")
        })
    }
})

