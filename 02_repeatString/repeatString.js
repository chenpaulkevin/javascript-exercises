const repeatString = (givenString, repetitions) => {
    if (repetitions >= 0) {
      let result = "";
      
      for (let index = 0; index < repetitions; index++) {
        result += givenString;
      }
      
      return result;
    } else {
      return "ERROR";
    }
  };
// Do not edit below this line
module.exports = repeatString;
