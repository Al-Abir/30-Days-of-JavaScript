
var reduce = function(nums, fn, init) {
    let total = init; // Initialize total with the initial value
    for (let i = 0; i < nums.length; i++) {
        total = fn(total, nums[i]); // Apply the function to accumulate values
    }
    return total; // Return the accumulated value
};

let nums = [1, 2, 3, 4];
let fn = function sum(accum, curr) { return accum + curr; }; // Function to sum values
let init = 0; // Initial value

console.log(reduce(nums, fn, init)); 

//===========using reduce method in array===================

let arr = [10,20,30];

let sum = arr.reduce(addNum);

function addNum(a,b){
    return a+b;
}
console.log(sum);

// //arr.reduce(function(total, currentValue, CurrentIndex, arr))
