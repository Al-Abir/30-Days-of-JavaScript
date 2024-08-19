var createHelloWorld = function() {
    return function(...arg) {
        return "Hello World";
    };
};

// Example usage:
const helloWorldFunction = createHelloWorld();
console.log(helloWorldFunction()); // Output: "Hello World"
console.log(helloWorldFunction(1, 2, 3)); // Output: "Hello World" (arguments are ignored)
