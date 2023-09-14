/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function(arr, size) {
    var chunkArr = []
    var subArr = []
    for (let i=0; i<arr.length; i++){
        subArr.push(arr[i])
        if (subArr.length === size){
            chunkArr.push(subArr)
            subArr = []
        }
    }
    if (subArr.length>0){
        chunkArr.push(subArr)
    }
    console.log(chunkArr)
    return chunkArr;
};