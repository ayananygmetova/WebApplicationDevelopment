/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    return function() {
        prev_n = n
        n += 1
        return prev_n
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */