// Exercise 3
//
// Part 1 - Write
// ---------------
// Write a function that expects an array of 2 numbers as input (e.g. [1, 2])
// and returns the sum of the two numbers.
//
// - If anything other than an array with 2 numbers is passed, return undefined.
//
// HINT: You can use the typeof function to check the type of each element:
// `typeof 3` returns 'number'

function sum(arr) {
  // Your code here
  const areTheyAllNumbers = arr.every(element => typeof element === "number");
  if (areTheyAllNumbers === false) {
    return undefined;
  } else {
    const total = arr.reduce((acc, val) => acc + val);
    return total;
  }
}

// Part 2 - Test
// --------------
// Test your function.
// Look for the corresponding exercise file in the __tests__ folder.
// Add some test cases in the test. The first one is done for you.

// We need to export the function in order for our unit test to have access to it.
module.exports = sum;
