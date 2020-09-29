// We import (require) the function that we want to test.
const longestWord = require("../fundamentals-3.9");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 9", () => {
  expect(longestWord("a bb ccc dddd e ff ggg")).toBe("dddd");
  // add more tests here...
  expect(longestWord("")).toBe("");
  expect(longestWord("keyboard koala curtain chair")).toBe("keyboard");
  expect(longestWord("mouse mouse pen")).toBe("mouse");
});

// More info on jest expect: https://jestjs.io/docs/en/expect
