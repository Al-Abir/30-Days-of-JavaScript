/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {

    if(n==0) return arr;
  var ans = [];
  for(var i=0; i<arr.length; i++){
      if(Array.isArray(arr[i])){
          ans.push(...flat(arr[i], n-1));
      } else {
          ans.push(arr[i]);
      }
  }
  return ans;
  
};