// This function checks to see if two objects are truly equal

function checkTypeAndValue(firstItem, secondItem) {
  // Check for types that cannot be covered by ===

  // Arrays
  if (Array.isArray(firstItem) && Array.isArray(secondItem)) {
    // Call the eqArray function again using these sub arrays
    if (firstItem.length !== secondItem.length) {
      return false;
    }

    // 2. Loop through both arrays and check each type of value
    // We only want to break the looping if there is something that does not match
    for (let i = 0; i < firstItem.length; i++) {
      let firstItemValue = firstItem[i];
      let secondItemValue = secondItem[i];

      // Check the type and value
      if (!checkTypeAndValue(firstItemValue, secondItemValue)) {
        return false;
      }
      continue;
    }

    return true;
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
    return eqObjects(firstItem, secondItem);
  }

  // Rest can be checked by the native comparison operator of ===
  return firstItem === secondItem;
}

const eqObjects = (obj1, obj2) => {
  let firstItemKeys = Object.keys(obj1);
  let secondItemKeys = Object.keys(obj2);

  // If the keys are different lengths, they are not equal
  if (firstItemKeys.length !== secondItemKeys.length) {
    return false;
  }

  // We can use a single set of keys, since they should both have the same keys
  for (let commonKey of firstItemKeys) {
    let firstItemKeyValue = obj1[commonKey];
    let secondItemKeyValue = obj2[commonKey];

    if (!checkTypeAndValue(firstItemKeyValue, secondItemKeyValue)) {
      return false;
    }
    continue;
  }
  return true;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false
