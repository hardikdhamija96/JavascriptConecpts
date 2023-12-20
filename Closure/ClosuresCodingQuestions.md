1.  Question: Create a closure that increments a counter each time it is called.

    

    ```javascript
    function createCounter() {
      let count = 0;

      function increment() {
        count++;
        console.log(count);
      }

      return increment;
    }

    const counter = createCounter();
    counter(); // Outputs: 1
    counter(); // Outputs: 2
    ```

2.  Question: Explain the output of the following code.

    

    ```javascript
    for (var i = 1; i <= 5; i++) {
      setTimeout(function () {
        console.log(i);
      }, 1000);
    }
    ```

    -   Answer: This code will output `6` five times because the `setTimeout` callback function captures the variable `i` by reference. After the loop completes, `i` becomes `6`, and the callback executes.

        To fix this using closures:

        

        ```javascript
        for (var i = 1; i <= 5; i++) {
          (function (j) {
            setTimeout(function () {
              console.log(j);
            }, 1000);
          })(i);
        }
        ```

3.  Question: Implement a function that returns the sum of two numbers using closures.

    

    ```javascript
    function add(a) {
      return function(b) {
        return a + b;
      };
    }

    const addFive = add(5);
    console.log(addFive(3)); // Outputs: 8
    ```

4.  Question: Create a function that memoizes the result of a given function using closures.

    

    ```javascript
    function memoize(func) {
      const cache = {};

      return function (...args) {
        const key = JSON.stringify(args);
        if (cache[key]) {
          console.log('Fetching from cache');
          return cache[key];
        } else {
          console.log('Calculating result');
          const result = func(...args);
          cache[key] = result;
          return result;
        }
      };
    }

    // Example usage
    const memoizedAdd = memoize((a, b) => a + b);
    console.log(memoizedAdd(3, 4)); // Outputs: Calculating result, 7
    console.log(memoizedAdd(3, 4)); // Outputs: Fetching from cache, 7
    ```

5.  Question: Explain the purpose of the `let` keyword in the following code snippet.

    

    ```javascript
    for (let i = 1; i <= 5; i++) {
      setTimeout(function () {
        console.log(i);
      }, 1000);
    }
    ```

    -   Answer: The `let` keyword creates a block-scoped variable, so in each iteration of the loop, a new variable `i` is created. This ensures that each closure created by the `setTimeout` function captures the correct value of `i`.
6.  Question: Implement a function that increments and decrements a counter using closures.

    

    ```javascript
    function createCounter() {
      let count = 0;

      return {
        increment: function () {
          count++;
          console.log(count);
        },
        decrement: function () {
          count--;
          console.log(count);
        }
      };
    }

    const counter = createCounter();
    counter.increment(); // Outputs: 1
    counter.decrement(); // Outputs: 0
    ```

7.  Question: Write a closure-based function to calculate the average of numbers.

    

    ```javascript
    function calculateAverage() {
      let sum = 0;
      let count = 0;

      return function (num) {
        sum += num;
        count++;
        return sum / count;
      };
    }

    const averageCalculator = calculateAverage();
    console.log(averageCalculator(10)); // Outputs: 10
    console.log(averageCalculator(20)); // Outputs: 15 (average of 10 and 20)
    ```

8.  Question: Explain how the module pattern is implemented using closures.

    

    ```javascript
    const myModule = (function () {
      let privateVariable = 0;

      function privateFunction() {
        console.log('Private function');
      }

      return {
        publicFunction: function () {
          console.log('Public function');
        },
        increment: function () {
          privateVariable++;
          console.log(privateVariable);
        }
      };
    })();

    myModule.publicFunction(); // Outputs: Public function
    myModule.increment(); // Outputs: 1

    // The following would result in an error as privateVariable is not accessible
    // outside the module.
    // console.log(myModule.privateVariable);
    ```

9.  Question: Create a function that checks if a given number is greater than a specified threshold using closures.

    

    ```javascript
    function createThresholdChecker(threshold) {
      return function (number) {
        return number > threshold;
      };
    }

    const isGreaterThan10 = createThresholdChecker(10);
    console.log(isGreaterThan10(15)); // Outputs: true
    console.log(isGreaterThan10(5)); // Outputs: false
    ```

10. Question: Explain the memory implications of closures in JavaScript.

    -   Answer: Closures retain references to their outer variables, preventing them from being garbage collected even after their parent function has finished execution. This can lead to increased memory consumption if closures are not managed properly. It's essential to be mindful of closures, especially in scenarios where many closures are created within loops.