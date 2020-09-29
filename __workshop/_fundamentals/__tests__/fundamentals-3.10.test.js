// We import (require) the function that we want to test.
const makeIntoTitle = require("../fundamentals-3.10");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 10", () => {
  expect(makeIntoTitle("a bb ccc dddd e ff ggg")).toBe(
    "A Bb Ccc Dddd E Ff Ggg"
  );
  // add more tests here...
  expect(makeIntoTitle("capitalize THE first CASE")).toBe(
    "Capitalize The First Case"
  );
  expect(makeIntoTitle("waLT disNEY")).toBe(
    "Walt Disney"
  );
  expect(makeIntoTitle("If you look at what you have in life, you'll always have more.")).toBe(
    "If You Look At What You Have In Life, You'll Always Have More."
  );
});

// More info on jest expect: https://jestjs.io/docs/en/expect
