const repeatString = function(givenString, repitions) {
    let concatenatedString = "";
    if (repitions >= 0) {
        for (let index = 0; index < repitions; index++) {
            concatenatedString = concatenatedString.concat(givenString);
        }
        return concatenatedString;
    }
    else{
        return 'ERROR';
    }

};

// Do not edit below this line
module.exports = repeatString;
