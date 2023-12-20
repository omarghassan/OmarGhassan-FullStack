var x = document.getElementById("p1");
x.style.color = "red";

var y = document.getElementsByTagName("p");
var text = y[0].innerHTML;
document.writeln(text + '<br>')

for (var i = 0; y < y.length; i++) {
    y[i].style.color = "red";
}

var z = document.getElementsByClassName("paragragh");
var text = z[0].innerHTML;
document.writeln(text + '<br>');

for (var i = 0; i < z.length; i++) {
    z[i].style.color = "coral"
}

var shit = document.querySelector("#p1");
shit.innerHTML = "Paragragh with the id attribute called p1 UPDATED";

var co = document.querySelectorAll(".paragragh");

for (var i = 0; i < co.length; i++) {
    co[i].style.color = "royalblue"
}

function changeContent() {
    document.querySelector("#demo").innerHTML = "JavaScript Changed The Content";
    document.querySelector("#demo").style.color = "violet"
}

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("#btn1").addEventListener("click", function () {
        var x = document.querySelectorAll("p")
        x[0].style.backgroundColor = "whitesmoke"
        x[1].style.backgroundColor = "violet"
    })
})