// We are going to make our own map function
// This function will take in two parameters
// An array and a callback function
// It will return a new array based on the results of the callback function
const words = ["ground", "control", "to", "major", "tom"];

const map = function (array, callback) {
  // We are going to loop through each item in the array and apply the callback function
  // Using the callback value, push it into a new array
  const newMappedArray = [];

  for (let item of array) {
    newMappedArray.push(callback(item));
  }

  return newMappedArray;
};
