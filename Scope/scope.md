### Global Scope:

-   Implicit Global Variables: Variables declared without the `var`, `let`, or `const` keyword inside a function become global by default. This can lead to unintended global variables.

    

    ```javascript
    function setGlobalVar() {
      undeclaredGlobalVar = "I am global"; // Without var, let, or const
    }

    setGlobalVar();
    console.log(undeclaredGlobalVar); // Accessible globally
    ```

-   Window Object: In a browser environment, global variables become properties of the `window` object.

    

    ```javascript
    var globalVar = "I am global";
    console.log(window.globalVar); // Accessible through the window object
    ```

### Function Scope:

-   Variable Shadowing: If a variable with the same name is declared inside a function as well as in its outer scope, the inner variable shadows the outer one.

    

    ```javascript
    var shadowVar = "I am global";

    function exampleFunction() {
      var shadowVar = "I am local"; // This shadows the global shadowVar
      console.log(shadowVar); // Accessing the local shadowVar
    }

    exampleFunction();
    console.log(shadowVar); // Accessing the global shadowVar
    ```

### Block Scope (with `let` and `const`):

-   Temporal Dead Zone (TDZ): Variables declared with `let` and `const` are hoisted but remain in the "temporal dead zone" until the actual declaration is encountered in the code.

    

    ```javascript
    console.log(blockVar); // Error: blockVar is not defined (TDZ)
    let blockVar = "I am block-scoped";
    ```

-   Const Declarations: `const` creates a read-only reference to the value it is assigned. While the reference cannot be changed, the underlying data (e.g., an object) can be modified.

    

    ```javascript
    const constantVar = "I am constant";
    // constantVar = "Trying to change"; // Error: Assignment to constant variable
    ```

### Lexical Scoping:

-   Closures: Closures occur when a function is defined inside another function, allowing access to the outer function's variables even after the outer function has finished execution.

    

    ```javascript
    function outerFunction() {
      var outerVar = "I am from outer";

      function innerFunction() {
        console.log(outerVar); // Accessing outerVar from the outer scope
      }

      return innerFunction;
    }

    var closureExample = outerFunction();
    closureExample(); // Still has access to outerVar
    ```

### Hoisting:

-   Hoisting with Functions: Function declarations are hoisted entirely, allowing you to call a function before its declaration.

    

    ```javascript
    hoistedFunction(); // Output: "I am a hoisted function"
    function hoistedFunction() {
      console.log("I am a hoisted function");
    }
    ```

-   Hoisting with Variables: Variables declared with `var` are hoisted and initialized with `undefined`.

    

    ```javascript
    console.log(hoistedVar); // Output: undefined
    var hoistedVar = "I am hoisted";
    ```