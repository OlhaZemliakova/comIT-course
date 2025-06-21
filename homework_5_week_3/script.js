// ==============================
// JavaScript Homework: Student Data Processor
// ==============================

// Starter data: list of students and their grades
const students = [
  { name: "Alice", grade: 85 },
  { name: "Bob", grade: 58 },
  { name: "Charlie", grade: 95 },
  { name: "David", grade: 45 },
  { name: "Eva", grade: 72 },
];

// =========================================
// Task 1: Create a new array of strings in this format:
// "Alice: 85", "Bob: 58", etc.
// Display the result in the console
// =========================================

const arrayOfString = students.map((item) => `${item.name}: ${item.grade}`);
console.log("new arr:", arrayOfString);

// =========================================
// Task 2: Create a new array that only includes the students
// who passed (grade is 60 or higher)
// Display the result in the console
// =========================================

const passedSixtyGrade = students.filter((item) => item.grade >= 60);
console.log("students, who passed 60 grade:", passedSixtyGrade);

// =========================================
// Task 3: Calculate the average grade of the class
// Round the result to 2 decimal places
// Display the result in the console
// =========================================

const grades = students.map((student) => student.grade);
const gradeSum = grades.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
const averageGrade = gradeSum / grades.length;
const roundedNumber = +averageGrade.toFixed(2);
console.log("Average grade (rounded):", roundedNumber);

// =========================================
// Task 4: Loop through the students and log:
// "<name> passed" if grade >= 60
// "<name> failed" if grade < 60
// Display the result in the console
// =========================================
for (let i = 0; i < students.length; i++) {
  if (students[i].grade >= 60) {
    console.log(`${students[i].name} passed`);
  } else {
    console.log(`${students[i].name} failed`);
  }
}

// =========================================
// Task 5: Print each student’s name one by one using a loop
// Display the result in the console
// =========================================
for (let i = 0; i < students.length; i++) {
  console.log(students[i].name);
}

// =========================================
// Bonus Task: Create a function that returns the student
// with the highest grade
// Display the result in the console
// =========================================
function highestGrades(students) {
  return students.reduce((highest, current) =>
    highest.grade > current.grade ? highest : current
  );
}

const highestGradesStudent = highestGrades(students);
console.log(
  `Highest grade student is ${highestGradesStudent.name} with grade ${highestGradesStudent.grade}`
);

// =========================================
// In-Place Task 1: Add a new property to each student called "status"
// It should be set to "pass" or "fail" based on the grade
// Modify the original students array directly
// Display the modified students array in the console
// =========================================

students.forEach((student) => {
  if (student.grade >= 60) {
    student.status = "pass";
  } else {
    student.status = "fail";
  }
});
console.log("modified students array:", students);

// =========================================
// In-Place Task 2: Curve the grades by adding 5 points to each student's grade
// Make sure no grade goes over 100
// Modify the original students array directly
// Display the modified students array in the console
// =========================================
for (let i = 0; i < students.length; i++) {
  students[i].grade = Math.min(students[i].grade + 5, 100);
}
console.log("added 5 points to each student's grade:", students);

// ==============================
// JavaScript Homework: Functions and Scope
// ==============================

// =========================================
// Task 1: Create a function called greet that logs:
// "Hello, student!" to the console
// Then call the function
// =========================================

function greet() {
  console.log("Hello, student!");
}
greet();

// =========================================
// Task 2: Create a function that takes a name as a parameter
// and logs "Hello, <name>!" to the console
// Call the function with different names
// =========================================
function greetName(name) {
  console.log(`Hello, ${name}!`);
}
greetName("Olha");
greetName("Kate");
greetName("Charlie");

// =========================================
// Task 3: Create a function that returns the square of a number
// Call the function and store the result in a variable
// Then log the result
// =========================================
function squareOfNumber(number) {
  return number * number;
}
const squareResult = squareOfNumber(12);
console.log("square of a number:", squareResult);

// =========================================
// Task 4: Demonstrate local vs global scope
// Create a global variable and a function that has a local variable
// Log both and explain the difference in a comment
// Display both values in the console
// =========================================
let global = "I'm global variable";

function storeLocalVariable() {
  let local = "I'm local variable inside the function";
  return local;
}

console.log("Global:", global); //accesible anywhere in the code
console.log("Local:", storeLocalVariable()); //accesible only inside the function where was created

// =========================================
// Task 5: Create a function that accepts another function as a parameter
// The callback should log "Callback function was called"
// Call the outer function and pass the inner function as an argument
// =========================================
function acceptsAnotherFunction(anotherFunction) {
  return anotherFunction();
}

function callbackFuntion() {
  console.log("Callback function was called");
}

acceptsAnotherFunction(callbackFuntion);

// =========================================
// Task 6: Create a function that accepts two numbers and a function
// The function should perform an operation using the passed-in function
// Example: pass in add, subtract, multiply as callback functions
// Call the main function with different callbacks
// Display results in the console
// =========================================

function performExecution(num1, num2, operation) {
  return operation(num1, num2);
}

let result1 = performExecution(1089, 23, (a, b) => a + b);
console.log("result 1 =>", result1);

let result2 = performExecution(1089, 23, (a, b) => a - b);
console.log("result 2 =>", result2);

let result3 = performExecution(1089, 23, (a, b) => a * b);
console.log("result 3 =>", result3);

let result4 = performExecution(1089, 23, (a, b) => a / b);
console.log("result 4 =>", +result4.toFixed(2));

// =========================================
// Task 7: Create and use an anonymous function
// Assign it to a variable and call it
// It should log "Anonymous function executed"
// =========================================
let anonymousFunction = function () {
  console.log("Anonymous function executed");
};

anonymousFunction();

// =========================================
// Task 8: Rewrite Task 7 using an arrow function instead
// Call it and display the result in the console
// =========================================

let anonymousArrowFunction = () =>
  console.log("Anonymous arrow function executed");
anonymousArrowFunction();
