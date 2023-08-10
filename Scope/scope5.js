//(Q) Can you elaborate on the difference between a function declaration and a function expression in terms of scope in JavaScript?

// Function Declaration:
// A function declaration is created using the function keyword followed by a name, parameters, and a function body. It has a distinct characteristic known as "function hoisting," where the entire function, including its body, is hoisted to the top of its containing scope during compilation. This means you can call the function before its actual declaration in the code, and it will still work.

sayHello();

function sayHello() {
    console.log("Hello!");
}

// Function Expression:
// A function expression, on the other hand, involves defining a function as part of an expression, such as assigning it to a variable. Function expressions do not experience hoisting in the same way as function declarations. The variable is hoisted, but its assignment (the function) is not hoisted. As a result, you can only call the function after the assignment.

// sayHi(); // Error: sayHi is not a function

var sayHi = function() {
    console.log("Hi!");
};
// the key difference between function declarations and function expressions in terms of scope is how they are hoisted.

