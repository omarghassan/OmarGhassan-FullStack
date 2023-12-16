const students = ["Omar", "Sally", "Samer", "Ahmad", "Lamar"]
document.writeln("Length of the array: " + students.length)

document.writeln("<h3>" + students[0] + "</h3>")
document.writeln("<h3>" + students[1] + "</h3>")
document.writeln("<h3>" + students[2] + "</h3>")
document.writeln("<h3>" + students[3] + "</h3>")
document.writeln("<h3>" + students[4] + "</h3>")

document.writeln("<br>" + "Print elements of array using for loop" + "<br>")

for (var i = 0; i < students.length; i++) {
    document.writeln("<h3>" + students[i] + "</h3>")
}

document.writeln("<br>" + "Print elements of array using for in loop" + "<br>")

for (var i in students) {
    document.writeln("<h3>" + students[i] + "</h3>")
}

document.writeln("<br>" + "Print elements of array using for of loop" + "<br>")

for (var student of students) {
    document.writeln("<h3>" + student + "</h3>")
}

var languages = "JavaScript"

for (var language of languages) {
    document.writeln(language)
}

document.writeln("<br>")

document.writeln("<br>" + "Print elements of array after using push" + "<br>")
students.push("Anstasia")
students.push("Maya")
for (var student of students) {
    document.writeln("<h3>" + student + "</h3>")
}
document.writeln("<br>")

const grades = [100, 100, 87, 89, 75, 80, 79]

document.write("<table>")
document.write("<tr>")
document.write("<th> Name </th>")
document.write("<th> Grade </th>")
document.write("</tr>")

for (var i = 0; i < students.length; i++) {
    document.write("<tr> <td> ")
    document.write(students[i])
    document.write("</td> <td>")
    document.write(grades[i])
    document.write("</td> </tr>")
}

document.write("</table")

document.writeln("<br>")

let shoppingList = ["Milk", "Bread", "Chocolate", "Tea", "Coffee"]

document.write("<h3> The Shopping List </h3>")
document.write("<ul>")

for (var item of shoppingList) {
    document.write("<li>" + item + "</li>")
}
document.write("</ul>")

document.writeln("<br>")

function calculateSum(num, num2, num3) {
    sum = num + num2 + num3
    return sum
}

document.write("<h3> The sum is: " + calculateSum(7, 10, 12) + "</h3>")
document.write("<h3> The GPA is: " + calculateGPA(29, 3) + "</h3>")
document.write("<h3> The num is Odd: " + isOdd(12) + "</h3>")

function calculateGPA(sum, num) {
    var gpa = sum / num
    return gpa
}

function isOdd(num) {
    flag = false
    if (num % 2 != 0) {
        flag = true
    }
    return flag
}

function calculatePower(base, power) {
    var theResult
    for (j = 1; j <= power; j++) {

        theResult *= base
    }
    return theResult
}

document.write("<h3> The result of 2 raised to the power of 3 is: " + calculatePower(2, 3) + "</h3>")