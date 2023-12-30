function myFunction() {
    const att = document.createAttribute("class");

    att.value = "demoClass";

    let el = document.getElementsByTagName("h1")[0];
    el.setAttributeNode(att);
}

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("#addAtt").addEventListener("click", function () {
        const att = document.createAttribute("class");

        att.value = "demoClass";

        let el = document.getElementsByTagName("h1")[0];
        el.setAttributeNode(att);
    })

    document.querySelector("#changeAtt").addEventListener("click", function () {
        
        let el = document.getElementsByTagName("h2")[0];
        el.setAttribute("class", "heading2");
    })
})