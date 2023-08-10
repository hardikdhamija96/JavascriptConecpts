//Importance of Scoping

//1)Preventing Naming Conflicts
//Imagine you are working on a large codebase with multiple developers. Without proper scoping, naming conflicts can arise when different parts of the code unintentionally use the same variable name. Scope helps prevent these conflicts by ensuring that variables declared within a specific context are only accessible within that context.

// Global scope
var counter = 0;

function incrementCounter() {
    var counter = 1; // This is a separate variable from the global counter
    counter++; // This only affects the local counter
    console.log(counter); // Outputs 2
}

incrementCounter();
console.log(counter); // Outputs 0 (global counter is not affected)


//2) Managing Memory Efficiently
//Variables with local scope are automatically released from memory when the function they are defined in completes execution. This memory management ensures that resources are used efficiently and reduces the risk of memory leaks.
function heavyOperation() {
    var largeArray = new Array(1000000); // Allocates memory
    // ...perform some operation with largeArray...
} // When the function completes, largeArray is released from memory

heavyOperation();
// At this point, the largeArray from the function's scope is no longer in memory


//3)Enabling Proper Code Organization:

// Scope allows you to encapsulate variables and functions within logical blocks, promoting a modular and organized code structure. This improves code readability, reusability, and maintainability.


//------MEMORY LEAKS THEORY-----

// Unused Resources: Memory leaks occur when resources, such as objects or variables, are allocated in memory but are no longer needed by the program.

// Failure to Release: Memory leaks result from not properly releasing or deallocating resources after they've served their purpose.

// Accumulative Impact: Over time, repeated memory leaks can gradually consume more memory, causing the application to become slower and less responsive.

// Performance Degradation: As memory usage increases due to leaks, the application's performance may degrade, leading to slow response times and increased CPU usage.

// Prevention: Proper coding practices, including releasing resources when they're no longer needed, help prevent memory leaks. Using mechanisms like garbage collection helps identify and clean up unused memory.