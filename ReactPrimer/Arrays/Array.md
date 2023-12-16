### Array Creation:

#### 1\. Declaration:

javascriptCopy code

```javascript 
let myArray = []; // Empty array
```

#### 2\. Initialization:

javascriptCopy code

```javascript 
let fruits = ['apple', 'orange', 'banana'];
```

### Accessing Elements:

#### 3\. Access by Index:

javascriptCopy code

```javascript 
let firstFruit = fruits[0]; // 'apple'
```

#### 4\. Array Length:

javascriptCopy code

```javascript 
let length = fruits.length; // 3
``` 

### Adding and Removing Elements:

#### 5\. push:

javascriptCopy code

```javascript 
fruits.push('grape'); // Adds 'grape' to the end
```

#### 6\. pop:

javascriptCopy code

```javascript 
let lastFruit = fruits.pop(); // Removes and returns 'grape'
``` 

#### 7\. unshift:

javascriptCopy code

```javascript 
fruits.unshift('kiwi'); // Adds 'kiwi' to the beginning
```

#### 8\. shift:

javascriptCopy code

```javascript 
let firstRemoved = fruits.shift(); // Removes and returns 'kiwi'
``` 

### Iterating Over Arrays:

#### 9\. forEach:

##### Syntax:

javascriptCopy code

```javascript 
array.forEach(function(currentValue, index, array) {
    // Your code here using currentValue, index, and/or array
});
``` 

##### Code Snippet:

javascriptCopy code

```javascript 
fruits.forEach(function(fruit, index) {
    console.log(` Index ${index}: ${fruit}` );
});
// Output:
// Index 0: apple
// Index 1: orange
// Index 2: banana
``` 

#### 10\. map:

##### Syntax:

javascriptCopy code

```javascript 
let newArray = array.map(function(currentValue, index, array) {
    return // Transformation or operation on currentValue;
});
```

##### Code Snippet:

javascriptCopy code

```javascript 
let numbers = [1, 2, 3, 4, 5];
let squaredNumbers = numbers.map(function(number) {
    return number * number;
});
``` 

### Array Searching and Manipulation:

#### 11\. indexOf:

javascriptCopy code

```javascript 
let index = fruits.indexOf('orange'); // Returns index of 'orange'
``` 

#### 12\. includes:

javascriptCopy code

```javascript 
let hasBanana = fruits.includes('banana'); // Returns true
``` 

#### 13\. splice:

javascriptCopy code

```javascript 
fruits.splice(1, 1, 'grape', 'kiwi'); // Removes 1 element at index 1 and adds 'grape' and 'kiwi'
```

### Array Concatenation and Slicing:

#### 14\. concat:

javascriptCopy code

```javascript 
let moreFruits = ['pineapple', 'mango'];
let allFruits = fruits.concat(moreFruits); // Combines arrays
``` 

#### 15\. slice:

javascriptCopy code

```javascript 
let slicedFruits = allFruits.slice(1, 4); // Returns a new array with elements from index 1 to 3
``` 

### Array Sorting and Reversing:

#### 16\. sort:

javascriptCopy code

```javascript 
fruits.sort(); // Sorts the array alphabetically
``` 

#### 17\. reverse:

javascriptCopy code

```javascript 
fruits.reverse(); // Reverses the order of elements in the array
``` 

### Array Filtering:

#### 18\. filter:

##### Syntax:

javascriptCopy code

```javascript 
let newArray = array.filter(function(currentValue, index, array) {
    return // Some condition based on currentValue;
});
``` 

##### Code Snippet:

javascriptCopy code

```javascript 
let evenNumbers = numbers.filter(function(number) {
    return number % 2 === 0;
});
``` 

### Additional Array Functions:

#### 19\. find:

##### Syntax:

javascriptCopy code

```javascript 
let result = array.find(function(currentValue, index, array) {
    return // Some condition based on currentValue;
});
``` 

##### Code Snippet:

javascriptCopy code

```javascript 
let foundFruit = fruits.find(function(fruit) {
    return fruit === 'orange';
});
```

#### 20\. reduce:

##### Syntax:

javascriptCopy code

```javascript 
let result = array.reduce(function(accumulator, currentValue, index, array) {
    return // Update the accumulator based on currentValue;
}, initialValue);
```

##### Code Snippet:

javascriptCopy code

```javascript 
let sum = numbers.reduce(function(accumulator, number) {
    return accumulator + number;
}, 0);
```

#### 21\. some:

##### Syntax:

javascriptCopy code

```javascript 
let result = array.some(function(currentValue, index, array) {
    return // Some condition based on currentValue;
});
``` 

##### Code Snippet:

javascriptCopy code

```javascript 
let hasEvenNumber = numbers.some(function(number) {
    return number % 2 === 0;
});
``` 