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

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"]));

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
