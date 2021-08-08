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

// Test Cases
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
