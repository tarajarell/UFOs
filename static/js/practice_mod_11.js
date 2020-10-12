// Functions can call other functions
function addition(a, b) {
    return a + b;
  }
console.log (4, 5)
function doubleAddition(c, d) {
    var total = addition(c, d) * 2;
    return total;
  }
console.log(doubleAddition(65, 34));

// Refactored using aarow functions
// FAIL - skill drill attempt with 11.3.3; picture in folder
doubleAddition = (33, 25) => addition(33, 25) *2;

