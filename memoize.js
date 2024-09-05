// understand the memoize concept


function square(n){
    return n*n;
}

/*
console.time();
console.log(square(5));
console.timeEnd();

console.time();
console.log(square(5));
console.timeEnd();
*/

//jodi memory ar kothaw answer ta store kore rakte para jai tahole notun kore r function call hobe na code run hote onek kom somoi lagbe


function memoize(func){
    let cache = {};
    return function(...args){
        let n = args[0];
        if(n in cache){
            return cache[n];
        }else{
            let result = func(n);
            cache[n]= result;
            return result;
        }

    }
}

//{5:'25'}

console.time();
let result = memoize(square);
console.log(result(5));
console.timeEnd();


console.time();
console.log(result(5));
console.timeEnd();


//==============leetcode  ============


function memoize(fn) {
    let cache = {}
   return function(...args) {
       
        let n = JSON.stringify(args) // multiple argument pass hoile
        if(n in cache){
           return cache[n];
        }else{
           let result = fn.apply(this, args)
           cache[n] = result;
           return result;
        } 
   }
}


/** 
* let callCount = 0;
* const memoizedFn = memoize(function (a, b) {
*	 callCount += 1;
*   return a + b;
* })
* memoizedFn(2, 3) // 5
* memoizedFn(2, 3) // 5
* console.log(callCount) // 1 
*/