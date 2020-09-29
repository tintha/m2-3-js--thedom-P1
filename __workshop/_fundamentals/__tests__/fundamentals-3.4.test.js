// We import (require) the function that we want to test.
const sum = require("../fundamentals-3.4");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 4", () => {
  expect(sum([3, 4, 5])).toBe(12);
  // add more tests here...
  expect(sum([3, 4, "ninja"])).toBe(undefined);
  expect(sum([3, 3, 3])).toBe(9);
  expect(sum([13, 44, 5])).toBe(62);
});

// More info on jest expect: https://jestjs.io/docs/en/expect
