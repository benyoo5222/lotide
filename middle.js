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

console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]
