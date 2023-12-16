for (i = 1; i <= 100; i++) {
    if (i % 5 == 0)
        document.writeln(i);
}

document.write("<br>");
document.write("<br>");

for (i = 1; i <= 5; i++) {
    for (j = 1; j <= i; j++) {
        document.write("*");
    }
    document.write("<br>");
}

document.write("<br>");

var i = 1;
while (i <= 12) {
    document.writeln("5 * " + i + " = " + (5*i) +"<br>")
    // document.write((5*i) + "<br>");
    // if (i % 5 == 0) {
    //     document.writeln(i + "<br>")
    // }

    i++;
}

// Write a function that copy the work of power (ex. 2**3)
var base = 2
var power = 3
var result = 1

document.write("<br>" + "Using for" + "<br>");

for (j = 1; j <= power; j++) {
    result *= base
    document.writeln("The power of the " + base + " is " + "raised to the power " + power + " is " + result + "<br>")
}
document.writeln("The final result of the " + base + " is " + "raised to the power " + power + " is " + result + "<br>")

document.write("<br>");

var k = 1
var result2 = 1

document.write("Using while" + "<br>");

while (k <= power) {
    result2 *= base
    document.writeln("The power of the " + base + " is " + "raised to the power " + power + " is " + result2 + "<br>")

    k++
}
document.writeln("The final result of the " + base + " is " + "raised to the power " + power + " is " + result2 + "<br>")

document.write("<br>" + "Using Do While" + "<br>");

let s = 1
do {
    document.writeln(s);
    s++;
} while (s <= 10)

document.write("<br>" + "Sentenantal Loops" + "<br>");

var input = Number(prompt("Enter a value"))
var sum = 0

while (input != -1) {
    sum += input
    input = Number(prompt("Enter a value"))
    document.writeln(sum + "<br>")
}
document.writeln("Final Result:" + sum + "<br>")