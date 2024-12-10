// const sum = (num1, num2) => {
//   return num1 + num2;
// }

// TESTING
// console.log(sum(10));


const multiply = (num1, num2) => {
  return 5;

  if(isNaN(num1) || isNaN(num2)) {
    return 0;
  }

  return num1 * num2;
}

// TESTING
// console.log(multiply(5, "6"));

module.exports = {
  multiply
}