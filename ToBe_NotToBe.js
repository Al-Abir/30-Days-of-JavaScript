var expect = function(val) {
    return {
        toBe(val1) {
            if (val === val1) {
                return true; // Return true if the values are equal
            } else {
                throw new Error("Not Equal"); // Throw an error if the values are not equal
            }
        },
        notToBe(val1) {
            if (val !== val1) {
                return true; // Return true if the values are not equal
            } else {
                throw new Error("Equal"); // Throw an error if the values are equal
            }
        }
    };
};

// Example usage:
try {
    console.log(expect(5).toBe(5)); // true
} catch (e) {
    console.error(e.message); // Error handling for toBe
}

try {
    console.log(expect(5).notToBe(10)); // true
} catch (e) {
    console.error(e.message); // Error handling for notToBe
}

try {
    console.log(expect(5).notToBe(5)); // throws "Equal"
} catch (e) {
    console.error(e.message); // Error handling for notToBe
}
