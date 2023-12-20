document.addEventListener("DOMContentLoaded", function () {
    flag = 0;
    document.querySelector("#bulbOn").addEventListener("click", function () {
        if (flag == 0) {
            document.querySelector("#bulb").src = "assets/bulbon.gif";
            flag = 1;
        } else if (flag != 0) {
            document.querySelector("#bulb").src = "assets/bulboff.gif";
            flag = 0;
        }
    })
})