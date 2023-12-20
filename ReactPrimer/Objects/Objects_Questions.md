### 1\. Question: Deep Clone an Object

#### Problem:

Write a function to deep clone an object, considering nested objects and arrays.

#### Solution:



```javascript
function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

// Example usage
let originalObject = { a: 1, b: { c: 2 } };
let clonedObject = deepClone(originalObject);
console.log(clonedObject);
```

Comments:

-   The `JSON.parse(JSON.stringify(obj))` method is a quick way to deep clone objects, but it has limitations (cannot clone functions, Date objects, etc.).
-   For a more robust solution, consider using a library like Lodash.

* * * * *

### 2\. Question: Checking if an Object is Empty

#### Problem:

Write a function to check if an object is empty.

#### Solution:



```javascript
function isEmptyObject(obj) {
  return Object.keys(obj).length === 0;
}

// Example usage
let emptyObject = {};
let nonEmptyObject = { key: 'value' };
console.log(isEmptyObject(emptyObject)); // Output: true
console.log(isEmptyObject(nonEmptyObject)); // Output: false
```

Comments:

-   Using `Object.keys(obj).length === 0` is a concise way to check for an empty object.

* * * * *

### 3\. Question: `hasOwnProperty` Usage

#### Problem:

Explain the purpose of `hasOwnProperty` and provide an example of its usage.

#### Solution:



```javascript
let person = { name: 'John', age: 30 };

// Check if the object has a property directly (not through the prototype chain)
if (person.hasOwnProperty('age')) {
  console.log(person.age); // Output: 30
}
```

Comments:

-   `hasOwnProperty` checks if a property belongs to the object directly, not inherited from its prototype chain.

* * * * *

### 4\. Question: Object Constructor vs Literal Notation

#### Problem:

Compare and contrast object creation using constructor functions and literal notation.

#### Solution:



```javascript
// Literal notation
let personLiteral = { name: 'John', age: 30 };

// Constructor function
function PersonConstructor(name, age) {
  this.name = name;
  this.age = age;
}

let personConstructor = new PersonConstructor('John', 30);
```

Comments:

-   Literal notation is concise and suitable for simple objects.
-   Constructor functions are useful for creating objects with shared methods and properties.

* * * * *

### 5\. Question: `this` Keyword in Objects

#### Problem:

Explain the role of the `this` keyword in the context of objects.

#### Solution:



```javascript
let person = {
  name: 'John',
  greet: function() {
    console.log('Hello, ' + this.name + '!');
  }
};

person.greet(); // Output: Hello, John!
```

Comments:

-   `this` refers to the current instance of the object and allows access to its properties and methods.

* * * * *

### 6\. Question: Object Composition

#### Problem:

Demonstrate object composition by combining properties from two objects.

#### Solution:



```javascript
let address = { city: 'New York', country: 'USA' };
let person = { name: 'John', age: 30 };

let personWithAddress = { ...person, ...address };

console.log(personWithAddress);
```

Comments:

-   Object composition involves combining properties from multiple objects to create a new one.

* * * * *

### 7\. Question: Object Inheritance

#### Problem:

Explain prototype-based inheritance and how it differs from classical inheritance.

#### Solution:



```javascript
// Prototype-based inheritance
function Animal(name) {
  this.name = name;
}

Animal.prototype.makeSound = function() {
  console.log('Generic animal sound');
};

function Dog(name) {
  Animal.call(this, name);
}

Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.bark = function() {
  console.log('Woof! Woof!');
};

let myDog = new Dog('Buddy');
myDog.makeSound(); // Output: Generic animal sound
myDog.bark(); // Output: Woof! Woof!
```

Comments:

-   Objects inherit properties and methods from a prototype object.
-   `Object.create` is used to set up prototype-based inheritance.

* * * * *

### 8\. Question: Object Rest/Spread Properties

#### Problem:

Explain the use of the spread operator for object rest and object spread properties.

#### Solution:



```javascript
// Object rest properties
let { a, ...rest } = { a: 1, b: 2, c: 3 };
console.log(rest); // Output: { b: 2, c: 3 }

// Object spread properties
let obj1 = { a: 1, b: 2 };
let obj2 = { ...obj1, c: 3 };
console.log(obj2); // Output: { a: 1, b: 2, c: 3 }
```

Comments:

-   Object rest properties allow you to collect the remaining properties into a new object.
-   Object spread properties enable merging properties from one object into another.