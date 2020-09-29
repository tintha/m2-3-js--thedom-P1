// We import (require) the function that we want to test.
const getLetterAtIndex = require("../fundamentals-3.5");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 5", () => {
  expect(getLetterAtIndex("bacon", 2)).toBe("c");
  // add more tests here...
  expect(getLetterAtIndex("carrot", 4)).toBe("o");
  expect(getLetterAtIndex("", 2)).toBe(undefined);
  expect(getLetterAtIndex(6564, 2)).toBe(undefined);
});

// More info on jest expect: https://jestjs.io/docs/en/expect
