const fs = require("fs");

if (!fs.existsSync("./assets")) {
    fs.mkdir("./assets", (error) => {
        if (error) {
            console.log("The Folder could not be created");
            console.log(error.message)
        } else {
            console.log("The folder is Created")
        }
    })
} else {
    fs.rmdir("./assets", (error) => {
        if (error) {
            console.log("An error occured while removing the directory")
        }
    })
}
