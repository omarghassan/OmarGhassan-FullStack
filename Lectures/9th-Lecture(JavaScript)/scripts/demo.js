theName = "Samer";
flag = false;

num = 20;
num2 = 30;

add = num + num2;
subtract = num2 - num;
multiply = num * num2;
division = num2 / 2;
power = num ** 3;
modulus = num2 % 2;

document.write("<h2> The result of addition is: " + add + "</h2>");
document.write("<h2> The result of subtraction is: " + subtract + "</h2>");
document.write("<h2> The result of multiplication is: " + multiply + "</h2>");
document.write("<h2> The result of division is: " + division + "</h2>");
document.write("<h2> The result of power is: " + power + "</h2>");
document.write("<h2> The result of modulus is: " + modulus + "</h2>");

document.write("<h2> The type of num is: " + typeof (num) + "</h2>");
document.write("<h2> The type of num2 is: " + typeof (num2) + "</h2>");
document.write("<h2> The type of the name is: " + typeof (theName) + "</h2>");
document.write("<h2> The type of the flag is: " + typeof (flag) + "</h2>");

//=========================================
//=========================================
/*
var try1 = 25;
var try1 = 36;

let try2 = 49;
let try2 = 64;

const try3 = 4;
const try3 = 9;
*/
//=========================================
//=========================================

/*
let age = 22;
document.getElementById("message").innerHTML = "<h2> The student name is " + theName + " and his age is " + age + "</h2>";

var message = document.getElementById("message").innerHTML;

console.log(message)
*/

var num3 = 2;
num++;
console.log(num3);

var num4 = 2;
++num4;
console.log(num4);

num3+=4;
console.log(num3);

comp = 5 > 2;
console.log(comp);

comp = 5 >+ 2;
console.log(comp);

comp = 5 < 2;
console.log(comp);

comp = 5 <= 2;
console.log(comp);

comp = 5 == 2;
console.log(comp);

comp = 5 === 2;
console.log(comp);

comp = 5 != 2;
console.log(comp);

comp = 5 !== 2;
console.log(comp);

comp = (5 > 2) && (6 < 2);
console.log(comp);

comp = (5 > 2) || (6 < 2);
console.log(comp);

value1 = 20;
value2 = 30;

if (value2 > value1) {
    console.log("Value2 is greater than Value1")
} else if (value1 > value2) {
    console.log("Value1 is greater than value1")
} else if (value1 === value2) {
    console.log("Value1 and Value2 are equal")
}