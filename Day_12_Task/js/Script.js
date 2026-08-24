
// If / Else If / Else
var grade = 85;

if (grade >= 90) {
    console.log("Excellent");
} else if (grade >= 80) {
    console.log("very Good");  
}
else if (grade >= 70) {
    console.log("Good");
}
else if (grade >= 60) {
    console.log("pass");
}
 else {
    console.log("Fail");
}

// Ternary
var age=20;
var result = age >= 18 ? "Adult" : "Child";
console.log(result);

// Switch
var day = 2;

switch (day) {
    case 1:
        console.log("Saturday");
        break;
    case 2:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}

// For Loop
for (var i = 0; i <= 5; i++) {
    console.log(i);
}

// While Loop
var i = 0;

while (i <= 5) {
    console.log(i);
    i++;
}

// Do While Loop
var x = 0;

do {
    console.log(x);
    x++;
} while (x <= 5);

// Function
function add(num1, num2) {
    return num1 + num2;
}

console.log(add(10, 20));

// Arrow Function
const multiply = (num1, num2) => num1 * num2;

console.log(multiply(5, 4));

// Array
var subjects = ["JavaScript", "HTML", "CSS"];

console.log(subjects[0]);



// Object
let student = {
    name: "Youssef",
    age: 22,
    grade: 85
};

console.log(student.name);
console.log(student.grade);