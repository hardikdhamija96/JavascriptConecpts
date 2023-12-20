### Object Basics:

-   Definition:

    -   Objects are fundamental data types in JavaScript.
    -   They are used to store and organize data in key-value pairs.
-   Creating Objects:

    -   Using Object Literal:

        

        ```javascript
        // Object literal notation
        let person = { name: 'John', age: 30 };
        ```

    -   Using the `new` keyword:

        

        ```javascript
        // Object creation using the new keyword
        let person = new Object();
        person.name = 'John';
        person.age = 30;
        ```

### Object Properties and Methods:

-   Accessing Properties:

    

    ```javascript
        // Accessing object properties
    console.log(person.name); // Output: John
    ```

-   Adding/Updating Properties:

    

    ```javascript
        // Adding and updating object properties
    person.address = '123 Main St';
    person.age = 31;
    ```

-   Deleting Properties:

    

    ```javascript
        // Deleting object properties
    delete person.age;
    ```

-   Object Methods:

    -   Functions assigned as object properties.

    

    ```javascript
        // Adding a method to an object
    let person = {
      name: 'John',
      sayHello: function() {
        console.log('Hello, ' + this.name + '!');
      }
    };

    // Calling the object method
    person.sayHello(); // Output: Hello, John!
    ```

### Object Prototypes and Inheritance:

-   Prototype Chain:

    -   Objects inherit properties and methods from their prototype.
    -   `Object.prototype` is the root of the prototype chain.
-   Constructor Functions:

    -   Creating objects with shared methods using constructor functions.

    

    ```javascript
        // Constructor function for creating objects
    function Person(name, age) {
      this.name = name;
      this.age = age;
    }

    // Adding a method to the prototype
    Person.prototype.sayHello = function() {
      console.log('Hello, ' + this.name + '!');
    };

    // Creating an object using the constructor
    let person = new Person('John', 30);

    // Calling the method from the prototype
    person.sayHello(); // Output: Hello, John!
    ```

### Object Iteration:

-   For...in Loop:

    -   Iterating over object properties.

    

    ```javascript
        // Iterating over object properties using for...in loop
    for (let key in person) {
      console.log(key + ': ' + person[key]);
    }
    ```

-   Object.keys(), Object.values(), Object.entries():

    -   Getting arrays of keys, values, or key-value pairs.

    

    ```javascript
        // Getting arrays of keys, values, and entries
    let keys = Object.keys(person);
    let values = Object.values(person);
    let entries = Object.entries(person);
    ```

### Object Destructuring:

-   Destructuring Assignment:
    -   Extracting values from objects and arrays.

    

    ```javascript
        // Destructuring assignment
    let { name, age } = person;
    ```

### Object Methods: `Object.create()`, `Object.assign()`, `Object.freeze()`

-   `Object.create()`:

    -   Creating a new object with a specified prototype object.

    

    ```javascript
        // Creating a new object with a specified prototype
    let newObj = Object.create(oldObj);
    ```

-   `Object.assign()`:

    -   Copying the values of all enumerable properties from one or more source objects to a target object.

    

    ```javascript
        // Copying properties from one object to another
    let target = { a: 1, b: 2 };
    let source = { b: 3, c: 4 };
    Object.assign(target, source);
    ```

-   `Object.freeze()`:

    -   Freezing an object, preventing new properties from being added and existing properties from being removed or modified.

    

    ```javascript
        // Freezing an object to make it immutable
    Object.freeze(person);
    ```