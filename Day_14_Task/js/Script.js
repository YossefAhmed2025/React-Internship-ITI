// Part 1 - Choose

// 1) map() بترجع Array جديدة بنفس الطول

// 2) find() بترجع أول عنصر يحقق الشرط

// 3) filter() بترجع Array جديدة بالعناصر اللي حققت الشرط

// 4) forEach() بترجع undefined

// 5) for...of بنستخدمها غالباً مع Arrays


// Part 2 - True or False

// 1) map() بيغير الـ Array الأصلية
// False

// 2) filter() ممكن يرجع Array فاضية
// True

// 3) find() ممكن يرجع undefined
// True

// 4) for...in بيلف على الـ Index بتاع الـ Array
// True

// 5) forEach() ينفع أعمل بيها break
// False


// Part 3 - Complete


// Q1
// map() بتستخدم لتعديل كل عنصر وإنشاء Array جديدة

const numbers = [1, 2, 3, 4];

numbers.map((num) => {
    console.log(num * 2);
});


// Q2
// filter() بتستخدم لاختيار العناصر اللي بتحقق الشرط

const nums = [10, 25, 5, 30, 15, 40];

const result = nums.filter((num) => {
    return num > 20;
});

console.log(result);


// Q3
// find() بترجع أول عنصر يحقق الشرط

const users = [
    { name: "Ali", age: 20 },
    { name: "Sara", age: 28 },
    { name: "Omar", age: 30 }
];

const user = users.find((item) => {
    return item.age > 25;
});

console.log(user);


// Q4
// map() بتستخدم لتحويل كل الأسماء إلى Uppercase

const names = ["ali", "mona", "ahmed"];

const upperNames = names.map((name) => {
    return name.toUpperCase();
});

console.log(upperNames);


// Part 4 - for...of / for...in / forEach

const fruits = ["Apple", "Banana", "Orange"];

// 1) طباعة كل عنصر باستخدام for...of

for (const fruit of fruits) {
    console.log(fruit);
}


// 2) طباعة الـ Index باستخدام for...in

for (const index in fruits) {
    console.log(index);
}


// 3) طباعة الـ Index والعنصر باستخدام forEach

fruits.forEach((fruit, index) => {
    console.log(index + " -> " + fruit);
});


// Part 5 - ES6

// Q1
// تحويل Function إلى Arrow Function

const sum = (a, b) => {
    return a + b;
};


// Q2
// Destructuring

const userData = {
    name: "Mostafa",
    age: 25
};

const { name, age } = userData;


// Q3
// Template Literal

console.log(`Hello ${name}`);


// Q4
// Spread Operator

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const allNumbers = [...arr1, ...arr2];

console.log(allNumbers);


// Part 6 - Many Questions


const students = [
    { name: "Ali", degree: 70 },
    { name: "Sara", degree: 95 },
    { name: "Ahmed", degree: 40 },
    { name: "Mona", degree: 85 },
    { name: "Omar", degree: 55 }
];


// 1) Array فيها أسماء الطلبة بس

const studentNames = students.map((student) => {
    return student.name;
});

console.log(studentNames);


// 2) الطلبة اللي درجاتهم أكبر من أو تساوي 60

const passedStudents = students.filter((student) => {
    return student.degree >= 60;
});

console.log(passedStudents);


// 3) أول طالب درجته أكبر من 90

const highStudent = students.find((student) => {
    return student.degree > 90;
});

console.log(highStudent);


// 4) طباعة أسماء كل الطلبة باستخدام forEach()

students.forEach((student) => {
    console.log(student.name);
});


// Bonus 
const numbersForReduce = [5, 10, 15, 20];

const total = numbersForReduce.reduce((sum, num) => {
    return sum + num;
}, 0);

console.log(total);

