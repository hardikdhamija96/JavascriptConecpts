// LET-VAR-CONST
//Can you explain the purpose of the let, const, and var keywords in terms of scope in JavaScript?

// var Keyword:
// The var keyword is used to declare variables with function-level scope or global scope. Variables declared with var are hoisted to the top of their function or global scope, making them accessible throughout the function or globally. However, they can also lead to unexpected behavior, such as being hoisted before they are initialized, which may result in variables being undefined.

// let Keyword:
// The let keyword, introduced in ES6 (ECMAScript 2015), is used to declare variables with block-level scope. Unlike var, variables declared with let are hoisted to the top of their block scope but are not initialized until the declaration statement. This helps avoid the "temporal dead zone" where variables are accessed before they are declared, enhancing predictability and preventing accidental bugs.

// const Keyword:
// Similar to let, the const keyword also provides block-level scope. However, variables declared with const are used for constants, which means their value cannot be re-assigned after initialization. This ensures that the variable's value remains constant throughout its scope. It's important to note that while the variable's value is immutable, the object it refers to (in the case of objects and arrays) can still be modified.

// (Q) Can you provide an example of how the choice between let, const, and var impacts variable scope in a practical scenario?

for (var i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log(i); // Outputs: 5, 5, 5, 5, 5
    }, 100);
}
// In this case, using var for the loop variable i causes a scope-related issue. The setTimeout function is asynchronous, and by the time it executes, the loop has finished and i is 5. As a result, all the timeouts log the final value of i.

for (let i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log(i); // Outputs: 0, 1, 2, 3, 4
    }, 100);
}
// Using let ensures that each iteration of the loop creates a new block-level scope for i, preventing the variable from being shared across different timeouts.

const pi = 3.14;
if (true) {
    const pi = 3.14159;
    console.log(pi); // Outputs: 3.14159
}
console.log(pi); // Outputs: 3.14
// const maintains block-level scope as well, and its immutability ensures that the value of pi remains constant within its scope, allowing for clear separation between different constants with the same name.

//(Q)does this mean let takes more memory then var?
// Yes,using let can potentially consume slightly more memory compared to using var in certain scenarios.In practical terms, the memory impact of using let over var for loop variables is generally minimal and often negligible. JavaScript engines are optimized to handle these scenarios efficiently, and the memory difference is unlikely to be a significant concern for most applications.

//(Q)Can you explain the difference between const and let in JavaScript and why we need both of them, given that they both seem to declare variables?
// We use const when we want to ensure that a variable remains constant and immutable within its scope. It's particularly useful when defining constants, configuration values, or any data that should not change during the execution of a block or function. const also promotes self-documenting code by indicating that a value is not meant to be modified.

// On the other hand, we use let when we need the flexibility to re-assign a variable's value. This is handy for variables that need to change over time, such as loop counters or variables that store changing data.

//(Q)Can you provide an example where the distinction between const and let becomes crucial in a real-world coding scenario?

// Using const for constants
const API_KEY = "abcd1234";
const API_URL = "https://api.example.com";

// Using let for variables that can change
let isLoggedIn = false;
let userRole = "guest";

function login() {
    isLoggedIn = true;
    userRole = "user";
    // ...
}

function logout() {
    isLoggedIn = false;
    userRole = "guest";
    // ...
}
