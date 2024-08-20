function map(arr, fn) {
    const newArray = [];
    for (let i = 0; i < arr.length; i++) {
        newArray.push(fn(arr[i], i));
    }
    return newArray;
}

// Example usage
const arr = [1, 2, 3];
const plusOne = function(n) { return n + 1; };
console.log(map(arr, plusOne)); // Output: [2, 3, 4]


var map = function(arr, fn) {
  const transformedArr = [];
  arr.forEach((element, index) => {
    transformedArr[index] = fn(element,index);
  });
  return transformedArr;
};



//---------Map-------------
/*const ar = [20,30,40]
const output = ar.map( (n) =>{
    return n+1;
})

console.log(output);

arr.map(function(Currentvalue, index, full array))

*/