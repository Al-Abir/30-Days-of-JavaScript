/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let present = init;
    
    const increment = function() {
        return ++present;
    };
    
    const decrement = function() {
        return --present;
    };
    
    const reset = function() {
        present = init;
        return present;
    };
    
    return { increment, decrement, reset };
};

/**
 * const counter = createCounter(5)
 * console.log(counter.increment()); // 6
 * console.log(counter.reset()); // 5
 * console.log(counter.decrement()); // 4
 */
