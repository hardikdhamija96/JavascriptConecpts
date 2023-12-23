### 1\. Function Basics:



```javascript
// Function Declaration
function add(a, b) {
  return a + b;
}

// Function Expression
const multiply = function(a, b) {
  return a * b;
};

// Arrow Function
const subtract = (a, b) => a - b;
```

Theory:

-   Function Declaration: Declared using the `function` keyword. Gets hoisted.
-   Function Expression: Created by assigning a function to a variable. Not hoisted.
-   Arrow Function: A concise way to write functions, especially useful for short anonymous functions.

### 2\. Function Types:



```javascript
// Named Function Declaration
function greet(name) {
  return `Hello, ${name}!`;
}

// Anonymous Function Expression
const sayHello = function(name) {
  return `Hello, ${name}!`;
};

// Arrow Function Expression
const welcome = (name) => `Welcome, ${name}!`;
```

Theory:

-   Named Function Declaration: Can be used before the declaration due to hoisting.
-   Anonymous Function Expression: Assigned to a variable, not hoisted.
-   Arrow Function Expression: Compact syntax, lexically binds `this`.

### 3\. Scope:



```javascript
// Global Scope
const globalVar = 'I am global!';

function globalFunction() {
  console.log(globalVar); // Accessible here
}

// Local Scope
function localFunction() {
  const localVar = 'I am local!';
  console.log(localVar); // Accessible here
}

console.log(globalVar); // Accessible globally
console.log(localVar);  // Error: localVar is not defined
```


Theory:

-   Global Scope: Variables declared outside any function, accessible everywhere.
-   Local Scope: Variables declared inside a function, accessible only within that function.

### 4\. Closures:



```javascript
function outerFunction(x) {
  function innerFunction(y) {
    return x + y; // innerFunction "closes over" x
  }
  return innerFunction;
}

const closureExample = outerFunction(10);
console.log(closureExample(5)); // Output: 15
```

Theory:

-   Closures: Functions that "remember" the environment in which they were created.
-   innerFunction: Has access to variables from its outer function (`x` in this case).

### 5\. Callback Functions:



```javascript
// Callback Example
function fetchData(url, callback) {
  // Simulating asynchronous operation
  setTimeout(() => {
    const data = { message: 'Data fetched successfully!' };
    callback(data);
  }, 1000);
}

function displayData(data) {
  console.log(data.message);
}

fetchData('https://example.com/api/data', displayData);
```

Theory:

-   Callback Functions: Functions passed as arguments to another function.
-   fetchData: Simulates an asynchronous operation, calls the callback with fetched data.

### 6\. Higher-Order Functions:



```javascript
// Higher-Order Function Example
function multiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = multiplier(2);
console.log(double(5)); // Output: 10
```

Theory:

-   Higher-Order Functions: Functions that take other functions as arguments or return functions.
-   multiplier: Returns a function that multiplies its argument by a given factor.

### 7\. Recursion:



```javascript
// Factorial Example
function factorial(n) {
  return n <= 1 ? 1 : n * factorial(n - 1);
}

console.log(factorial(5)); // Output: 120
```

Theory:

-   Recursion: A function calling itself.
-   factorial: Calculates the factorial of a number using recursion.

### 8\. Function Hoisting:



```javascript
// Function Declaration Hoisting
hoistedFunction(); // Output: "I am hoisted!"

function hoistedFunction() {
  console.log("I am hoisted!");
}

// Function Expression Hoisting
// notHoistedFunction(); // Error: notHoistedFunction is not a function

const notHoistedFunction = function() {
  console.log("I am not hoisted!");
};
```

Theory:

-   Hoisting: The process where declarations are moved to the top of their containing scope.
-   Function Declaration: Entire function is hoisted and can be called before the declaration.
-   Function Expression: Only the variable is hoisted, not the function.

### 9\. Arguments Object:



```javascript
// Arguments Object Example
function sum() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

console.log(sum(1, 2, 3, 4)); // Output: 10
```

-   Definition: The `arguments` object is a local variable in JavaScript functions, providing access to all passed arguments, even when not explicitly declared in the function signature.

-   Usage: It enables functions to handle a variable number of arguments dynamically.

#### Key Points:

1.  Dynamic Nature:

    -   `arguments` adapts to the number and values of passed arguments.
2.  No Parameter Declaration:

    -   Functions can use `arguments` without explicitly declaring parameters.
3.  Not in Arrow Functions:

    -   Arrow functions lack their own `arguments` object; use rest parameters instead.

#### Considerations:

1.  Array-Like Structure:

    -   `arguments` is array-like but lacks array methods.
2.  Modern Alternatives:

    -   Rest parameters (`...args`) are a modern alternative for handling variable arguments, offering better readability and versatility.

### 10\. Default Parameters:



```javascript
// Default Parameters Example
function greet(name = 'Guest') {
  console.log(`Hello, ${name}!`);
}

greet();        // Output: Hello, Guest!
greet('John');  // Output: Hello, John!
```

Theory:

-   Default Parameters: Allow you to specify default values for function parameters.

### 11\. Rest Parameters:

#### Example:

```javascript
// Rest Parameters Example
function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sum(1, 2, 3, 4)); // Output: 10
```

#### Theory:

-   Rest Parameters:
    -   Definition: Allow a function to accept an indefinite number of arguments as an array.
    -   Syntax: `function functionName(...parameterName) { /* code */ }`
    -   Usage: Collects remaining arguments into an array, enabling functions to handle variable numbers of inputs.

* * * * *

### 12\. Spread Operator:

#### Example:

```javascript
// Spread Operator Example
const arr = [1, 2, 3];
const newArr = [...arr, 4, 5];
console.log(newArr); // Output: [1, 2, 3, 4, 5]
```

#### Theory:

-   Spread Operator:
    -   Definition: Used to spread the elements of an array or object into another array or object.
    -   Syntax: `const newArray = [...existingArray];` or `const newObj = { ...existingObj };`
    -   Usage: Unpacks elements from arrays or properties from objects, facilitating concise array/object creation or combining.

#### Difference:

-   Rest Parameters vs. Spread Operator:
    -   Rest: Gathers parameters into an array in function definitions.
    -   Spread: Spreads elements or properties from an array or object into another array or object.
    -   Key Distinction: Rest is used in function parameters, while Spread is used in array or object literals.

Understanding this difference is crucial:

-   Rest Parameters: Used in function definitions to collect arguments into an array.
-   Spread Operator: Used in array or object literals to spread elements or properties.

### 13\. Return Statement:



```javascript
// Return Statement Example
function multiply(a, b) {
  return a * b;
}

const result = multiply(3, 4);
console.log(result); // Output: 12
```

Theory:

-   Return Statement: Ends the execution of a function and specifies a value to be returned to the caller.

### 14\. Arrow Functions:



```javascript
// Arrow Function Example
const square = x => x * x;
console.log(square(5)); // Output: 25
```

Theory:

-   Arrow Functions: Provide a concise syntax and do not bind their own `this` value.

### 15\. This Keyword:



```javascript
// This Keyword Example
const person = {
  name: 'John',
  greet: function() {
    console.log(`Hello, ${this.name}!`);
  }
};

person.greet(); // Output: Hello, John!
```

Theory:

-   `this` Keyword: Refers to the object that owns the function, allowing access to its properties.

### 16\. Call, Apply, and Bind:



```javascript
// Call, Apply, and Bind Example
const obj = { value: 42 };

function getValue(prefix) {
  console.log(prefix + this.value);
}

getValue.call(obj, 'The answer is ');   // Output: The answer is 42
getValue.apply(obj, ['The answer is ']); // Output: The answer is 42

const boundFunc = getValue.bind(obj, 'The answer is ');
boundFunc(); // Output: The answer is 42
```

Theory:

-   `call`, `apply`, `bind`: Methods to control the value of `this` in a function.

### 17\. Prototype and Prototypal Inheritance:



```javascript
// Prototypal Inheritance Example
function Animal(name) {
  this.name = name;
}

Animal.prototype.sayName = function() {
  console.log(`My name is ${this.name}`);
};

const dog = new Animal('Buddy');
dog.sayName(); // Output: "My name is Buddy"
```

Theory:

-   Prototype: An object from which other objects inherit properties.
-   Prototypal Inheritance: Objects can inherit properties and methods from a prototype.

### 18\. Async Functions:



```javascript
// Async Function Example
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
```

Theory:

-   Async/Await: Provides a more readable and concise way to work with asynchronous code using Promises.

### 19\. Error Handling:



```javascript
// Error Handling Example
function divide(a, b) {
  try {
    if (b === 0) {
      throw new Error('Cannot divide by zero');
    }
    return a / b;
  } catch (error) {
    console.error(error.message);
  } finally {
    console.log('Division operation completed');
  }
}
```

Theory:

-   try-catch-finally: Used for handling exceptions. `try` contains the code, `catch` handles exceptions, and `finally` runs regardless of whether an exception occurred or not.
