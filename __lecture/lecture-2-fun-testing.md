# Fundamentals: Testing

---

- What is it?
- Why do we do it?
- When do we do it?

---

### What is a test?

```js
// Example
function strLength(str) => {
  if (typeof str !== "string" || str.length === 0) {
    return undefined;
  }
  return str.length;
};

// A test
test("Exercise 0", function () {
  expect(strLength("max")).toBe(3);
  expect(strLength("abcdefghijklmnop")).toBe(16);
  expect(strLength("This is a test case.")).toBe(20);
  expect(strLength("")).toBe(undefined);
  expect(strLength(256)).toBe(undefined);
  expect(strLength(["abcdefghijklmnop"])).toBe(undefined);
});
```

## Run the test in the VS Code Terminal with `yarn test exercise-3.0`

# Exercises

Find and fix the issues.

---

```js
// Exercise 1
function getLetterGrade(score) {
  if (score < 60) {
    return "F";
  } else if (score < 75) {
    return "C";
  } else if (score < 90) {
    return "B"
  } else {
    return "A";
}

function expect(result, value) {
  if (result === value) {
    console.log('✅ Test succeeded');
  } else {
    console.log(`⛔️ Expected “${result}” to equal “${value}”`);
  }
}

expect(getLetterGrade(81), "B");
expect(getLetterGrade(62), "C");
```

---

```js
// Exercise 2
function doesNameStartWithLetter(name, letter) {
  let firstLetter = name[0];
  if ((firstLetter = letter)) {
    return true;
  } else {
    return false;
  }
}

function expect(result, value) {
  if (result === value) {
    console.log("✅ Test succeeded");
  } else {
    console.log(`⛔️ Expected “${result}” to equal “${value}”`);
  }
}

expect(doesNameStartWithLetter("Josh", "J"), true);
expect(doesNameStartWithLetter("Josh", "A"), false);
```

---

### Exception, where are you?

There are cases when

- there is no error message.
- the error message is wrong.

---

Possible causes are

- Infinite loop
- Error is caught somewhere else
- Bug is in the build process (covered later in the course)

---

#### Finding Exceptions

The error message is missing perhaps 5% of the time (rough).

This makes it hard to find the bug.

This is where using `console.log()` can really help.

---

Learning to `console.log` effectively is an essential part of becoming a developer.

It allows you to be independent.

_It's one of the most important parts of this course._
