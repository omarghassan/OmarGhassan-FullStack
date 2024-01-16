const fs = require("fs")

fs.writeFile("./files/hello1.txt", "New Content", () => {
    console.log("New Content")
})