/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]} transformedArr
 */
var map = function(arr, fn) {
    var transformedArr=[];
    for (let i=0; i<arr.length; i++){
        transformedArr[i]=fn(arr[i], i);
    }
    return transformedArr
};