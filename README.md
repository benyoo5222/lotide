# Lotide

## Summary

Lotide [repo](git@github.com:benyoo5222/lotide.git) is a library that tries to mimic Loadash. This is used to practice building utility functions for future projects.

### Table of Contents

- [Assert Equal](./assertEqual.js)
- [Head](./head.js)
- [Tail](./tail.js)
- [Equal Arrays](./eqArrays.js)
- [Assert Equal Arrays](./assertArraysEqual.js)
- [Without](./without.js)
- [Middle](./middle.js)

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

_Equal Arrays_

This function compares two arrays and returns a Boolean based on the contents of the arrays. The function checks both the type and the value of each item at the same index positions.

It can handle nested arrays and objects.

```javascript
function checkTypeAndValue(firstItem, secondItem) {
  // Check for types that cannot be covered by ===

  // Arrays
  if (Array.isArray(firstItem) && Array.isArray(secondItem)) {
    // Call the eqArray function again using these sub arrays
    return eqArrays(firstItem, secondItem);
  }

  // Numbers (Espcially -0 and 0)
  // We want to check if the value is a number type by using isNaN function
  // This is because by using Number on anything other than numbers or strings that can be converted
  // It will turn into NaN and become equal types to each other
  if (
    !isNaN(firstItem) === !isNaN(secondItem) &&
    typeof firstItem === "number" &&
    typeof secondItem === "number"
  ) {
    // Now that we know they are numbers, we want to make sure if the number is a zero or not
    let areBothValuesZero = false;

    for (let num of [firstItem, secondItem]) {
      areBothValuesZero = num === 0 ? true : false;
    }

    if (areBothValuesZero) {
      // If both values are 0 or -0
      // We need to turn them into "Infinity Strings" by diving a number by the zero
      let firstItemInfinityString = 1 / firstItem;
      let secondItemInfinityString = 1 / secondItem;

      return firstItemInfinityString === secondItemInfinityString;
    }

    return firstItem === secondItem;
  }

  // Objects
  // We will check for the following:
  // Properties length for each
  // Loop through the properties and then do the same checks as arrays for the values
  if (typeof firstItem === "object" && typeof secondItem === "object") {
    let firstItemKeys = Object.keys(firstItem);
    let secondItemKeys = Object.keys(secondItem);

    if (firstItemKeys.length !== secondItemKeys.length) {
      return false;
    }

    // We can use a single set of keys, since they should both have the same keys
    for (let commonKey of firstItemKeys) {
      let firstItemKeyValue = firstItem[commonKey];
      let secondItemKeyValue = secondItem[commonKey];

      if (!checkTypeAndValue(firstItemKeyValue, secondItemKeyValue)) {
        return false;
      }
      continue;
    }
    return true;
  }

  // Rest can be checked by the native comparison operator of ===
  return firstItem === secondItem;
}

// This function compares two arrays and checks if they are truly the same
const eqArrays = (firstArray, secondArray) => {
  // Our definition of same will be the following:
  // Each value at the index of each array must have the same value and type
  // Both arrays must have the same length
  // We will handle any number of nested arrays
  // The only things that we won't check currently will be functions (Future to do)

  // 1. Return if the length doesnt match
  if (firstArray.length !== secondArray.length) {
    return false;
  }

  // 2. Loop through both arrays and check each type of value
  // We only want to break the looping if there is something that does not match
  for (let i = 0; i < firstArray.length; i++) {
    let firstItem = firstArray[i];
    let secondItem = secondArray[i];

    // Check the type and value
    if (!checkTypeAndValue(firstItem, secondItem)) {
      return false;
    }
    continue;
  }

  return true;
};
```

_Assert Equal Arrays_

This function compares two arrays and prints a success or a failed message to the console. This function leverages the [Equal Arrays](./eqArrays.js) function.

```javascript
// We want to write a function that prints out a success or failed message (similar to assertion equal function)
// Depending on the equality of the two arrays that are compared
const assertArraysEqual = (firstArray, secondArray) => {
  // Templates for Sucess or Fail Message
  const successMessage = `✅✅✅ Both Arrays are equal`;
  const errorMessage = `🛑🛑🛑 Both Arrays are not equal`;

  eqArrays(firstArray, secondArray)
    ? console.log(successMessage)
    : console.log(errorMessage);
};
```

_Without_

This function removes items from the array by passing in a second array.

```javascript
// This function removes the items from the first array by using the items in the second array
const without = (sourceArray, itemsToRemoveArray) => {
  const newArrayWithRemovedItems = [];
  // Loop through both arrays and compare
  // If they dont match, push it to a new array
  let indexPosition = 0;
  let pushToNewArray = true;
  for (let sourceItem of sourceArray) {
    for (let itemToRemove of itemsToRemoveArray) {
      if (sourceItem === itemToRemove) {
        pushToNewArray = false;
      }
    }
    pushToNewArray
      ? newArrayWithRemovedItems.push(sourceArray[indexPosition])
      : null;
    indexPosition++;
    pushToNewArray = true;
  }

  return newArrayWithRemovedItems;
};
```

_Middle_

This function returns the middle index value from the array.

```javascript
// This function take in an array of numbers and returns the middle index value

const middle = (array) => {
  // Assuming that the array has been ordered
  // In order to have a "middle" value, the passed in array must be at least 3 in length
  // Odd number will have a single "middle" value
  // Even number of items will have two "middle" value
  if (array.length <= 2) {
    return [];
  }

  if (array.length % 2 === 0) {
    const firstMiddleIndex = array.length / 2 - 1;
    const secondMiddleIndex = firstMiddleIndex + 1;

    return [array[firstMiddleIndex], array[secondMiddleIndex]];
  }

  return [array[Math.floor(array.length / 2)]];
};
```
