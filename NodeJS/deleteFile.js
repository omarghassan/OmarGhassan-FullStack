const fs = require("fs");

if (fs.existsSync("./files/hello1.txt")) {
    fs.unlink("./files/hello1.txt", (error) => {
        if (error) {
            console.log("An error occured")
        } 
        console.log("The File is deleted")
    })
}