// We import (require) the function that we want to test.
const calculator = require("../fundamentals-3.6");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 6", () => {
  expect(calculator(["add", 10, 15])).toBe(25);
  // add more tests here...
  expect(calculator(["noadd", 10, 15])).toBe(undefined);
  expect(calculator(["add", 10, "not a number"])).toBe(undefined);
  expect(calculator(["sub", 20, 5])).toBe(15);
  expect(calculator(["mul", 10, 2])).toBe(20);
  expect(calculator(["div", 10, 2])).toBe(5);
});

// More info on jest expect: https://jestjs.io/docs/en/expect
