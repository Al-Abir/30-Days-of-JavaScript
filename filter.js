
var fil = function(arr, fn){
     
    let filteredArr = [];

    for(let i =0; i<arr.length; i++){
        if(fn(arr[i], i)){
            filteredArr.push(arr[i]);
        }
    }


    return filteredArr;

}



let arr = [-2,-1,0,1,2]
let fn = function plusOne(n) { 
    return n + 1 
}

const arr1 = [0, 10, 20, 30];
const fn1 = function greaterThan10(n) { return n > 10; };
console.log(fil(arr1, fn1)); 

console.log(fil(arr,fn));


//------------ Filter------------//

const ages = [0, 10, 20, 30];

const result = ages.filter((age) => {
    return age >= 13;
});

console.log(ages);   // Output: [0, 10, 20, 30]
console.log(result); // Output: [20, 30]
