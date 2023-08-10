// SCOPE in JS
// Scope in JavaScript refers to the context in which variables and functions are defined and can be accessed. It determines the visibility and lifetime of variables and functions in your code.


//TYPES in js -> Global / Local

//1)GLOBAL SCOPE
//Variables declared outside of any function or block have global scope. They can be accessed from anywhere in the code, including other functions and blocks.

var globalVariable = 10;

function exampleFunction1() {
    console.log(globalVariable); // Accessible here
}

exampleFunction1();
console.log(globalVariable); // Accessible here

//2)LOCAL SCOPE
//Variables declared within a function have local scope, meaning they are only accessible within that function.

function exampleFunction2() {
    var localVariable = 5;
    console.log(localVariable); // Accessible here
}

exampleFunction2();
console.log(localVariable); // Error: localVariable is not defined