
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("#bulbOn").addEventListener("click", function () {
        document.querySelector("#bulb").src = "assets/bulbon.gif";
    })

    document.querySelector("#bulbOff").addEventListener("click", function () {
        document.querySelector("#bulb").src = "assets/bulboff.gif";
    })
})