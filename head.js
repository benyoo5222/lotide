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

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), undefined);
