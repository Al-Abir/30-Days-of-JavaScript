var timeLimit = function(fn, t) {
    
    return async function(...args) {

        return new Promise((resolve,reject)=>{
            setTimeout(()=> {reject("Time Limit Exceeded")},t)
            fn(...args).then(resolve).catch(reject)
        })
        
    }
};
// Input: 
// fn = async (n) => { 
//   await new Promise(res => setTimeout(res, 100)); 
//   return n * n; 
// }
// inputs = [5]
// t = 50
// Output: {"rejected":"Time Limit Exceeded","time":50}
// Explanation:
// const limited = timeLimit(fn, t)
// const start = performance.now()
// let result;
// try {
//    const res = await limited(...inputs)
//    result = {"resolved": res, "time": Math.floor(performance.now() - start)};
// } catch (err) {
//    result = {"rejected": err, "time": Math.floor(performance.now() - start)};
// }
// console.log(result) // Output

// The provided function is set to resolve after 100ms. However, the time limit is set to 50ms. It rejects at t=50ms because the time limit was reached.