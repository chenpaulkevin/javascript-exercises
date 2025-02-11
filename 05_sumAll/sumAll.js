const sumAll = function(firstNum, secondNum) {
    if (!Number.isInteger(firstNum) || !Number.isInteger(secondNum) || firstNum <= 0 || secondNum <= 0) {
        return 'ERROR';
    }
    
    let start = Math.min(firstNum, secondNum);
    let end = Math.max(firstNum, secondNum);
    
    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += i;
    }
    
    return sum;
};


// Do not edit below this line
module.exports = sumAll;
