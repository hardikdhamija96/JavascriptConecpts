//How does variable hoisting relate to scope in JavaScript?

//Variable hoisting and scope are closely related concepts in JavaScript that impact how variables are accessed and used within your code.

//Variable Hoisting:
//Variable hoisting is a "JavaScript behavior" where variable declarations are moved to the top of their containing scope during the compilation phase, while the assignments remain in place. This means that you can access a variable before it's formally declared in your code.

//Variable hoisting affects how variables are treated within different scopes. While variable declarations are hoisted to the top of their scope, the assignments remain in place, which can lead to unexpected behavior if not understood properly.

function exampleFunction() {
    console.log(message); // Outputs: undefined
    var message = "Hello, hoisting!";
    console.log(message); // Outputs: "Hello, hoisting!"
}

exampleFunction();