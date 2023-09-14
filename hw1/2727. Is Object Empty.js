/**
 * @param {Object | Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    var count = Object.keys(obj).length;
    if (count>0) return false;
    return true
};