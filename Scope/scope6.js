// (Q) Can you explain what the scope chain is in JavaScript and how the language looks up variables in nested scopes?
//When a variable is referenced, JavaScript first looks for it within the current scope. If the variable is not found, JavaScript continues to search in the outer enclosing scope, and then in the next outer scope, and so on, until it reaches the global scope. This process of searching for variables in nested scopes based on their hierarchical order is known as the scope chain.

var globalVar = "I'm global";
var outerVar = "I'm in outer-global";
var innerVar = "I'm in inner-global";

function outer() {
    var outerVar = "I'm in outer";
    var innerVar = "I'm in inner-local";

    function inner() {
        var innerVar = "I'm in inner";
        console.log(innerVar); // Outputs: "I'm in inner"
        console.log(outerVar); // Outputs: "I'm in outer"
        console.log(globalVar); // Outputs: "I'm global"
    }

    inner();
}

outer();

//(Q)How does the concept of closures relate to the scope chain, and how does it impact variable access in JavaScript?
// You're welcome! Closures are a natural consequence of the scope chain. When a function retains access to variables from its containing (parent) scope, even after the parent function has finished executing, it creates a closure. This closure effectively "closes over" the variables, allowing the function to access and use them as needed.

// Closures utilize the scope chain to ensure that the variables they reference are available and accessible throughout their lifetime. They preserve the scope chain that existed at the time of their creation, allowing them to continue accessing variables even when they are executed in a different context or scope. This behavior is a powerful feature of JavaScript, enabling the creation of functions with persistent state and the implementation of advanced programming patterns.

// In summary, the scope chain and closures work hand in hand to manage variable access and visibility in JavaScript, providing the foundation for effective scope management and the creation of robust and flexible code.
