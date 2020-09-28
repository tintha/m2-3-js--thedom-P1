# [2-3]

# The DOM P1

---

# Fundamentals: Debugging

---

## True or false

A programmer spends almost all of their time writing code

---

Writing code is only one of the many things that a programmer does.

We spend lots of time doing other things as well.

- Reading documentation
- Reading code
- Researching (googling)
- **Debugging code**

---

### Bugs! Where do they come from?

- Typos
- Forgot to pass an argument
- Pass the wrong type of data as an argument
- Make wrong assumptions
- A million other things

---

#### Exceptions

In certain cases, a bug will cause your code to crash. **This is a good thing.**

An error is a message that _tells you what the problem is_.

---

⚠️ Exception location is often only a **starting point**!

The actual programmer mistake can very well be elsewhere.

_This is similar to how a human error in a factory will manifest itself only in the final product._

---

#### Example

```js
const x = 5;
const y = [1, 2, 3];

y.map(x);
```

---

Always **read error messages**.

It should be your FIRST reflex.

💡💡 **Check the console** for error messages. 💡💡

---

```js
function getCartTotal(data) {
  let salesTax = 1.14;
  return data.cart.subtotal * salesTax;
}

getCartTotal({
  items: ["banana"],
  subtotal: 5,
});
```

---

```
f:\_journey\journey-fullstack-imm\lectures\2-javascript\5-more-fundamentals-1\test.js:3
  return data.cart.subtotal * salesTax;
                   ^

TypeError: Cannot read property 'subtotal' of undefined
```

---

### Googling tips

- Search for the error message, without any custom variable names, and "javascript"
- Search for the problem domain (breaking into smaller pieces)
- Be skeptical
- Skim results
