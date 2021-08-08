# Lotide

## Summary

Lotide [repo](git@github.com:benyoo5222/lotide.git) is a library that tries to mimic Loadash. This is used to practice building utility functions for future projects.

### Table of Contents

- [Assert Equal](./assertEqual.js)
- [Head](./head.js)
- [Tail](./tail.js)

_Assert Equal_

This function takes in two parameter values and checks if the values are the same, including the type. It will print the result to the console.
Currently, it only works for strings and numbers. In the future, it will check for NaNs, +/-0, Infinity.

```javascript
// This function will check both the type and the value
const assertEqual = (actual, expected) => {
  const successMessage = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  const errorMessage = `🛑🛑🛑 Assertion Failed: ${actual} === ${expected}`;
  // First check the type
  if (typeof actual !== typeof expected) {
    console.log(errorMessage);
    return;
  }

  // TODO: Better validation for Objects, Arrays, NaNs, and -0 (Or Infinity +/-)
  console.log(actual === expected ? successMessage : errorMessage);

  return;
};
```

_Head_

This function takes in array of items and returns the first item from the array. If there are no items in the array, it will return undefined.

```javascript
// This function returns the first item of an array
const head = (array) => {
  if (!Array.isArray(array)) {
    console.log("Please pass in an array");
    throw new Error("The parameter value passed in is not an array");
  }

  if (array.length < 1) {
    console.log("No items in the array");
    return undefined;
  }

  console.log("Head of the array", array[0]);
  return array[0];
};
```

_Tail_

This function takes in array of items and returns an array of all of the items in the array except for the first one (does not manipute the original). There must be at least two items in the array that's passed into the function.

```javascript
// This function returns the all of the items in array after the first item
const tail = (array) => {
  const tailArray = [];
  if (!Array.isArray(array)) {
    console.log("Did not provide an array of data");
    throw new Error("Please pass in an array");
  }

  if (array.length <= 1) {
    return [];
  }

  for (let i = 1; i < array.length; i++) {
    tailArray.push(array[i]);
  }

  console.log("Tail items", tailArray);
  return tailArray;
};
```
