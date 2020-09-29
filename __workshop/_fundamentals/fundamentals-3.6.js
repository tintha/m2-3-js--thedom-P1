// Exercise 6
//
// Part 1 - Write
// ---------------
// Write a function that
// - accepts an array.
// - The array has 3 elements.
// - The first element of the array is a string that represents an operation.
// - If the operation is
//      - "add", return the sum of the two other elements of the array.
//      - "sub", return their difference.
//      - "mul", return their product.
//      - "div", return the quotient of the two numbers.
//      - Anything else return undefined.
// - If the two values are not numbers, return undefined

// For example:
// calculator(["add", 10, 20]); // 30

function calculator(arr) {
  // Your code here
  let result = 0;

    if (arr[0] == "add" && (typeof arr[1] == "number" && typeof arr[2] == "number")) {
      result = arr[1] + arr[2];
    } else if (arr[0] == "sub" && (typeof arr[1] == "number" && typeof arr[2] == "number")) {
        result = arr[1] - arr[2];
    } else if (arr[0] == "mul" && (typeof arr[1] == "number" && typeof arr[2] == "number")) {
        result = arr[1] * arr[2];
    } else if (arr[0] == "div" && (typeof arr[1] == "number" && typeof arr[2] == "number")) {
        result = arr[1] / arr[2];
    } else {
        return undefined;
    }
    return result;
}

// Part 2 - Test
// --------------
// Test your function.
// Look for the corresponding exercise file in the __tests__ folder.
// Add some test cases in the test. The first one is done for you.

// We need to export the function in order for our unit test to have access to it.
module.exports = calculator;
