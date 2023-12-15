1.  Literal Notation:

    

    ```javascript
    let str = "Hello, World!";
    ```

2.  String Constructor:

    
    ```javascript
    let str = new String("Hello, World!");
    ```

### String Properties:

1.  length:

     
    ```javascript
    let length = str.length;
    ```

### String Methods:

1.  charAt(index):

     ```javascript

    let char = str.charAt(0); // Returns the character at the specified index.
    ```

2.  charCodeAt(index):

     

    ```javascript
    let charCode = str.charCodeAt(0); // Returns the Unicode value of the character at the specified index.
    ```

3.  concat(str2, str3, ...):

     ```javascript
    let newStr = str.concat(" This is", " a concatenation example");
    ```

4.  indexOf(substring, start):

     ```javascript

    let index = str.indexOf("World"); // Returns the index of the first occurrence of the specified substring.
    ```

5.  lastIndexOf(substring, start):

     ```javascript
    let lastIndex = str.lastIndexOf("l"); // Returns the index of the last occurrence of the specified substring.
    ```

6.  slice(start, end):

     
    ```javascript
    let slicedStr = str.slice(0, 5); // Extracts a portion of the string from start to end.
    ```

7.  substring(start, end):

     

    ```javascript
    let subStr = str.substring(7, 12); // Similar to slice, but doesn't support negative indices.
    ```

8.  substr(start, length):

     

    ```javascript
    let subStr = str.substr(7, 5); // Extracts a portion of the string starting from the specified index with the given length.
    ```

9.  replace(searchValue, replaceValue):

     

    ```javascript
    let newStr = str.replace("World", "Universe"); // Replaces the first occurrence of a substring with another substring.
    ```

10. toLowerCase() / toUpperCase():

 

```javascript
let lowerStr = str.toLowerCase();
let upperStr = str.toUpperCase();
```

1.  trim():

 

```javascript
let trimmedStr = "   Hello, World!   ".trim(); // Removes leading and trailing whitespaces.
```

1.  split(separator, limit):

 

```javascript
let words = str.split(" "); // Splits the string into an array of substrings based on the specified separator.
```

1.  startsWith(prefix):

 

```javascript
let startsWithHello = str.startsWith("Hello"); // Returns true if the string starts with the specified prefix.
```

1.  endsWith(suffix):

 

```javascript
let endsWithWorld = str.endsWith("World"); // Returns true if the string ends with the specified suffix.
```

1.  includes(substring):

 

```javascript
let containsHello = str.includes("Hello"); // Returns true if the string contains the specified substring.
```