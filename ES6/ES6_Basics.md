1.  let and const

    -   `let` and `const` are block-scoped variables.
    -   `let` allows reassignment, while `const` is for constants.

    

    ```javascript
    let x = 10;
    const PI = 3.14;
    ```

2.  Arrow Functions

    -   Concise syntax for writing functions.
    -   No binding of `this`.
    -   Implicit return if no curly braces `{}`.

    

    ```javascript
    const add = (a, b) => a + b;
    ```

3.  Template Literals

    -   String interpolation and multiline strings.

    

    ```javascript
    const name = "John";
    const greeting = `Hello, ${name}!`;
    ```

4.  Destructuring Assignment

    -   Extract values from arrays or objects.

    

    ```javascript
    const [first, second] = [1, 2];
    const { firstName, lastName } = { firstName: 'John', lastName: 'Doe' };
    ```

5.  Default Parameters

    -   Set default values for function parameters.

    

    ```javascript
    function multiply(x, y = 2) {
      return x * y;
    }
    ```

6.  Spread and Rest Operator

    -   Spread: Expand elements of an array or properties of an object.
    -   Rest: Gather remaining parameters into an array.

    

    ```javascript
    const arr = [1, 2, 3];
    const newArr = [...arr, 4, 5];

    function sum(...nums) {
      return nums.reduce((acc, num) => acc + num, 0);
    }
    ```

7.  Object Literal Enhancements

    -   Shorthand for defining object properties.

    

    ```javascript
    const name = "John";
    const age = 25;
    const person = { name, age };
    ```

8.  Classes

    -   Syntactic sugar over prototype-based inheritance.

    

    ```javascript
    class Animal {
      constructor(name) {
        this.name = name;
      }

      speak() {
        console.log(`${this.name} makes a sound`);
      }
    }
    ```

9.  Modules

    -   Import and export functionality.

    

    ```javascript
    // math.js
    export const add = (a, b) => a + b;

    // main.js
    import { add } from './math';
    ```

10. Promises

    -   Asynchronous programming.
    -   Resolve or reject a value.

    

    ```javascript
    const fetchData = () => new Promise((resolve, reject) => {
      // asynchronous operation
      if (success) {
        resolve(data);
      } else {
        reject(error);
      }
    });
    ```

11. Async/Await

    -   Syntactic sugar for working with promises.

    

    ```javascript
    async function fetchData() {
      try {
        const result = await fetch('https://api.example.com/data');
        const data = await result.json();
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    }
    ```

12. Map, Set, and WeakMap/WeakSet

    -   Collections for key-value pairs and unique values.

    

    ```javascript
    const map = new Map();
    map.set('key', 'value');

    const set = new Set([1, 2, 3]);

    const weakMap = new WeakMap();
    const weakSet = new WeakSet();
    ```

13. Symbol

    -   Create unique identifiers.

    

    ```javascript
    const mySymbol = Symbol('description');
    ```

14. Iterator and Generator

    -   Iterators for custom looping.
    -   Generators for pausing and resuming functions.

    

    ```javascript
    const iterable = [1, 2, 3];
    const iterator = iterable[Symbol.iterator]();

    function* generatorFunction() {
      yield 1;
      yield 2;
      yield 3;
    }
    ```

15. Proxy and Reflect

    -   Proxy: Intercepts operations on objects.
    -   Reflect: Provides methods for interceptable JavaScript operations.

    

    ```javascript
    const handler = {
      get: function(target, prop) {
        return prop in target ? target[prop] : 'Not found';
      }
    };

    const proxy = new Proxy({ name: 'John' }, handler);
    ```

16. Fetch API

    -   Modern way to make HTTP requests.

    

    ```javascript
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
      ```