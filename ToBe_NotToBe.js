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

// Example 1
try {
    let result = expect(5).toBe(5);
    console.log({ value: result }); // Output: { value: true }
} catch (error) {
    console.log({ error: error.message });
}

// Example 2
try {
    let result = expect(5).toBe(null);
    console.log({ value: result });
} catch (error) {
    console.log({ error: error.message }); // Output: { error: "Not Equal" }
}

// Example 3
try {
    let result = expect(5).notToBe(null);
    console.log({ value: result }); // Output: { value: true }
} catch (error) {
    console.log({ error: error.message });
}

