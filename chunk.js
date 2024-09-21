/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    const result = [];

for (let i = 0; i < arr.length; i += size) {
  result.push(arr.slice(i, i + size));
}

return result;
};


// Lodas - Lodash us utility library for JavaScript,Providing function 
// work with arrays array, objects, string , etc;

// _.chunk(array,size)

// const _ = require("lodash")
// let arr = [1,2,3,4,5,6]
// consol.log(_.chunk(arr,1))
