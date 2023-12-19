class Car {
    name;
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    setName(name) {
        this.name = name;
    }

    setYear(year) {
        this.year = year;
    }

    getName() {
        return this.name;
    }

    getYear() {
        return this.year;
    }

    static getCurrentYear() {

        const date = new Date();
        var currentYear = date.getFullYear();
        return currentYear;
    }

    getAge() {

        const date = new Date();
        var fullYear = date.getFullYear();
        return fullYear - this.year; 
    }
}

const car1 = new Car("Mercedes", 2015);
document.writeln(car1.name)
document.writeln(car1.year + "<br>")

document.writeln("The car's age is: " + car1.getAge() + " years" + "<br>");

var result = Car.getCurrentYear();
document.writeln(result + "<br>")

car2 = new Car();
car2.setName("Porshce");
car2.setYear(2024)

document.writeln("The car's type is " + car2.getName() + " and it's a " + car2.getYear() + " model" + "<br>")

document.writeln("<br>")

dateObj = new Date("2000-03-25");
var month = dateObj.getMonth();
document.writeln(month + 1)

document.writeln("<br>")

/*
userName = "Omar Ghassan";

if (userName <= 5) {
    alert("Invalid User Name");
} else {
    alert("Valid User Name")
}
*/

class Person {
    firstName;
    lastName;
    dateOfBirth;

    constructor(firstName, lastName, dateOfBirth) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
    }

    getAge() {
        const dateObj = new Date();
        const currentYear = dateObj.getFullYear();

        const birthYear = this.dateOfBirth;
        var x = birthYear.getFullName();
        return currentYear - x;
    }

    getFullName() {
        return this.firstName + " " + this.lastName
    }
}

person1 = new Person("Omar", "Ghassan", "2001-05-24")
document.writeln(person1.getFullName() + "<br>")

class Student extends Person {
    constructor(firstName, lastName, dateOfBirth, major, gpa) {
        super(firstName, lastName, dateOfBirth);
        this.major = major;
        this.gpa = gpa;
    }

    getGPA() {
        return this.gpa;
    }
}

student1 = new Student("Samer", "Al-Ghally", 2001, "SWE", 3.5)
document.writeln(student1.getFullName());
document.writeln(student1.getGPA());