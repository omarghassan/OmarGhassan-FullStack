const newNode = document.createElement("li");

const textNode = document.createTextNode("Water");

newNode.appendChild(textNode);

const list = document.getElementById("myList");
list.insertBefore(newNode, list.children[0])