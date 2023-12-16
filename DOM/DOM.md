### 1\. What is DOM?

-   The Document Object Model (DOM) is a programming interface for web documents.
-   It provides a structured representation of a document as a tree of objects.
-   Allows dynamic interaction with the structure, style, and content of a document.

### 2\. DOM Tree:

-   Document represented as a tree structure.
-   Nodes correspond to elements, attributes, or text.
-   Nodes have relationships forming a hierarchical tree.

### 3\. DOM Nodes:

-   Element Nodes:

    -   Represent HTML elements.
    -   Accessed using properties like `tagName`, `attributes`.
-   Text Nodes:

    -   Represent text content within an element.
    -   Accessed using `textContent`.
-   Attribute Nodes:

    -   Represent attributes of an element.
    -   Accessed using methods like `getAttribute()`.

### 4\. Accessing Elements:

-   getElementById:

    

    ```javascript
    var element = document.getElementById("elementId");
    ```

-   getElementsByClassName:

    

    ```javascript
    var elements = document.getElementsByClassName("className");
    ```

-   getElementsByTagName:

    

    ```javascript
    var elements = document.getElementsByTagName("tagName");
    ```

-   querySelector and querySelectorAll:

    

    ```javascript
    var element = document.querySelector("#elementId");
    var elements = document.querySelectorAll(".className");
    ```

### 5\. Traversing the DOM:

-   parentNode:

    

    ```javascript
    var parent = element.parentNode;
    ```

-   children:

    

    ```javascript
    var children = parentElement.children;
    ```

-   firstChild/lastChild:

    

    ```javascript
    var first = parentElement.firstChild;
    var last = parentElement.lastChild;
    ```

### 6\. Manipulating Elements:

-   innerHTML:

    

    ```javascript
    element.innerHTML = "New content";
    ```

-   textContent:

    

    ```javascript
    element.textContent = "New text content";
    ```

-   setAttribute:

    

    ```javascript
    element.setAttribute("attributeName", "attributeValue");
    ```

-   classList:

    

    ```javascript
    element.classList.add("newClass");
    element.classList.remove("oldClass");
    ```

-   style property:

    

    ```javascript
    element.style.color = "blue";
    ```

### 7\. Creating and Appending Elements:

-   createElement:

    

    ```javascript
    var newElement = document.createElement("div");
    ```

-   appendChild:

    

    ```javascript
    parentElement.appendChild(newElement);
    ```

-   cloneNode:

    

    ```javascript
    var clonedNode = element.cloneNode(true); // true for deep cloning
    ```

-   insertBefore:

    

    ```javascript
    parentElement.insertBefore(newElement, referenceElement);
    ```

### 8\. Event Handling:

-   Event Object:

    -   When an event occurs, an Event object is created.
    -   Contains information about the event, e.g., `event.type`, `event.target`.

    

    ```javascript
    element.addEventListener("click", function(event) {
      console.log(event.type); // "click"
      console.log(event.target); // the element that triggered the event
    });
    ```

-   Event Propagation:

    -   Bubbling Phase:

        -   Events bubble up from the target to the document root.
        -   `event.stopPropagation()` stops further propagation.
    -   Capturing Phase:

        -   Events go from the root to the target.
        -   Use capturing phase by passing `true` in `addEventListener`.
    -   Order of Execution:

        -   Capturing Phase -> Target Phase -> Bubbling Phase.
    -   Event Flow:

        -   Capturing phase intercepts before reaching the target.
        -   Bubbling phase handles as it propagates back up.
-   Preventing Default Behavior:

    -   Use `event.preventDefault()` to prevent default behavior (e.g., form submission).

    

    ```javascript
    linkElement.addEventListener("click", function(event) {
      event.preventDefault(); // Prevents the link from navigating
      console.log("Link Clicked!");
    });
    ```

### 9\. Node Types:

-   DOCUMENT_NODE:

    -   Represents the entire document.
    -   Accessed using `document.nodeType`.
-   ELEMENT_NODE:

    -   Represents an HTML element.
    -   Accessed using `element.nodeType`.
-   COMMENT_NODE:

    -   Represents comment nodes in the document.
    -   Accessed using `commentNode.nodeType`.
-   TEXT_NODE:

    -   Represents text content within an element.
    -   Accessed using `textNode.nodeType`.
-   Other Node Types:

    -   `DOCUMENT_TYPE_NODE`: Represents the document type declaration.
    -   `PROCESSING_INSTRUCTION_NODE`: Represents a processing instruction.

    

    ```javascript
    if (node.nodeType === Node.ELEMENT_NODE) {
      console.log("Element Node");
    } else if (node.nodeType === Node.COMMENT_NODE) {
      console.log("Comment Node");
    }
    ```

    

    ```javascript
    if (node.nodeType === Node.DOCUMENT_TYPE_NODE) {
      console.log("Document Type Node");
    } else if (node.nodeType === Node.PROCESSING_INSTRUCTION_NODE) {
      console.log("Processing Instruction Node");
    }
    ```