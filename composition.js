/*function add(a, b){
    return a+b;
}

function mul(val){
    return val*2;
}
function compose(f1, f2){

     return function(a,b){
        return f2(f1(a,b));

    }
   
}
modern javaScript

const compose = (f1,f2) => (a,b)=>  f2(f1(a,b))

const result = compose(add, mul);

console.log(result(2,3));

*/

//================ leetcode ==============
var compose = function(functions) {
    
    return function(x) {

        for(let i = functions.length-1; i>=0; i--){
              x = functions[i](x)
        }
        return x;
    }
};

const fn = compose([x => x + 1, x => 2 * x]);
console.log(fn(4)); // Output: 9
