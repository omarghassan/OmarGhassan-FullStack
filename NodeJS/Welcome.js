console.log("Hello World")

console.log("The sum of 5 + 17 is: ", 5 + 17)

const userName = "Samer"

const sayHello = (userName) => {
    console.log(`Hello ${userName}`)
}

sayHello(userName)
sayHello("Omar")

global.setTimeout(() => {
    console.log(sayHello(userName))
}, 1000);

global.setTimeout(() => {
    console.log("Bye")
}, 2000);

console.log(global)
console.log("The Directory Path is: ", __dirname)
console.log("The File Path is: ", __filename)