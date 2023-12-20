1.  What are `let` and `const`?

    -   Solution: `let` and `const` are block-scoped variables. `let` allows reassignment, while `const` is for constants.

    

    ```javascript
    let x = 10;
    x = 20; // Valid

    const y = 30;
    // y = 40; // Error: Assignment to a constant variable
    ```

2.  Explain Arrow Functions.

    -   Solution: Arrow functions are concise function expressions with lexically scoped `this`.

    

    ```javascript
    // Regular function
    function add(a, b) {
      return a + b;
    }

    // Arrow function
    const addArrow = (a, b) => a + b;
    ```

3.  What is destructuring assignment?

    -   Solution: Destructuring allows extracting values from arrays or properties from objects.

    

    ```javascript
    // Array destructuring
    const numbers = [1, 2, 3];
    const [num1, num2] = numbers;

    // Object destructuring
    const person = { name: 'John', age: 30 };
    const { name, age } = person;
    ```

4.  How does the spread/rest operator work?

    -   Solution: Spread operator spreads elements, and rest parameter collects them.

    

    ```javascript
    // Spread operator
    const arr1 = [1, 2, 3];
    const arr2 = [...arr1, 4, 5];

    // Rest parameter
    const sum = (...numbers) => numbers.reduce((acc, num) => acc + num, 0);
    ```

5.  Explain the concept of template literals.

    -   Solution: Template literals allow string interpolation and multiline strings.

    

    ```javascript
    const name = 'Alice';
    const greeting = `Hello, ${name}!
    Welcome to our website.`;
    ```

6.  What is the purpose of the `class` keyword in ES6?

    -   Solution: `class` simplifies constructor function syntax and prototype management.

    

    ```javascript
    class Animal {
      constructor(name) {
        this.name = name;
      }

      speak() {
        console.log(`${this.name} makes a sound.`);
      }
    }

    const dog = new Animal('Dog');
    dog.speak(); // Output: Dog makes a sound.
    ```

7.  What is the difference between `var`, `let`, and `const` in terms of scoping?

    -   Solution: `var` is function-scoped, `let` and `const` are block-scoped.

    

    ```javascript
    if (true) {
      var a = 5; // Function-scoped
      let b = 10; // Block-scoped
      const c = 20; // Block-scoped
    }

    console.log(a); // 5
    // console.log(b); // Error: b is not defined
    // console.log(c); // Error: c is not defined
    ```

8.  Explain the concept of Promises.

    -   Solution: Promises handle asynchronous operations and have `then()` and `catch()` methods.

    

    ```javascript
    const fetchData = () => {
      return new Promise((resolve, reject) => {
        // Simulating an asynchronous operation
        setTimeout(() => {
          const data = 'Fetched data';
          // resolve(data); // Success
          reject('Error fetching data'); // Error
        }, 1000);
      });
    };

    fetchData()
      .then(result => console.log(result))
      .catch(error => console.error(error));
      ```

9.  What is the purpose of the `async` and `await` keywords?

    -   Solution: `async` declares an asynchronous function, and `await` pauses execution until the promise settles.

    

    ```javascript
    const fetchDataAsync = async () => {
      try {
        const result = await fetchData();
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDataAsync();
    ```

10. What are the restrictions on arrow functions compared to regular functions?

    -   Solution: Arrow functions lack their own `this`, `arguments`, and cannot be used as constructors.

    

    ```javascript
    function RegularFunction() {
      this.value = 42;
      setInterval(function() {
        console.log(this.value); // Outputs undefined in strict mode
      }, 1000);
    }

    const arrowFunction = () => {
      // No 'this' binding
    };

    // const obj = new arrowFunction(); // Error: arrowFunction is not a constructor
    ```

11. Explain the concept of modules in ES6.

    -   Solution: Modules use `export` and `import` for code organization.

    

    ```javascript
    // Module A
    export const add = (a, b) => a + b;

    // Module B
    import { add } from './moduleA.js';
    console.log(add(2, 3)); // Output: 5
    ```

12. What is the purpose of the `Symbol` data type in ES6?

    -   Solution: `Symbol` creates unique identifiers.

    

    ```javascript
    const id1 = Symbol('id');
    const id2 = Symbol('id');

    console.log(id1 === id2); // false
    ```