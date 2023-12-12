var sum = 0;
var gpa = 0;
for (var i = 0; i < 3; i++) {
    grade = window.prompt("Enter a number");
    value = Number(grade);
    sum += value;
    console.log(sum);
}

console.log("The sum is: " + sum);
gpa = sum / 3;

console.log("The GPA is: " + gpa);

//=====================================
//=====================================
//=====================================

var number;
var factorialNum;

for (var i = 1; i <= number; i++) {
    factorialNum *= number;
}

// for (var i = )

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}