var createCounter = function(n) {
    return function() {
        return n++;
    };
};

// Example usage:
const counter = createCounter(0);
console.log(counter()); // Output: 0
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
