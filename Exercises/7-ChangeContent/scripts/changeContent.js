function changeColor() {
    document.getElementById("p1").style.backgroundColor = "red";
    document.getElementById("p2").style.backgroundColor = "grey";
    document.getElementById("p3").style.backgroundColor = "royalblue";
}

function resetColor() {
    document.getElementById("p1").style.backgroundColor = "black";
    document.getElementById("p2").style.backgroundColor = "black";
    document.getElementById("p3").style.backgroundColor = "black";
}

function changeContent() {
    document.querySelector("#p3").innerHTML = "Use the buttons below to change the content CHANGED".toUpperCase()
}