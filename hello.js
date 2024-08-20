var createHelloWorld = function() {
    return function(...arg) {
        return "Hello World";
    };
};

// Example usage:
const helloWorldFunction = createHelloWorld();
console.log(helloWorldFunction()); // Output: "Hello World"
console.log(helloWorldFunction(1, 2, 3)); // Output: "Hello World" (arguments are ignored)


/*
Outer Function (createHelloWorld):

createHelloWorld is a variable that holds a function. This function takes no parameters and returns another function.
Inner Function:

The inner function is defined using the syntax function(...arg) { ... }. This function uses the rest parameter syntax (...arg), which means it can accept any number of arguments, but these arguments are not used inside the function.
The inner function simply returns the string "Hello World"

*/