class Student {
    constructor(name, studentId) {
        this.name = name
        this.studentId = studentId
    }
}

let student1 = new Student("Omar", 191433)
let student2 = new Student("Sally", 191434)

document.writeln("Student Name: " + student1.name + "<br>")
document.writeln("Student ID: " + student1.studentId + "<br>")

document.writeln("Student Name: " + student2.name + "<br>")
document.writeln("Student ID: " + student2.studentId + "<br>")

car = {carType: "Mercedes", color: "black", year: 2015}

document.writeln("Car Type: " + car.carType + "<br>")
document.writeln("Car Type: " + car["carType"]+ "<br>")

student3 = {studentName: "Omar", grade: 100}
student4 = {studentName: "Sally", grade: 100}
student5 = {studentName: "Lamar", grade: 80}

students = [student3, student4, student5]

for (var student of students) {
    document.writeln(student.studentName + " " + student.grade + "<br>")
}