// We are going to build a function called "Take Until"
// This function will take in two parameters an array and a callback
// This function will build a new array until the callback function returns a "true" value
// Once it returns true, we will return the new array

const takeUntil = (array, callback) => {
  const slicedArray = [];
  for (let item of array) {
    if (callback(item)) {
      return slicedArray;
    }

    // If the callback returned false
    slicedArray.push(item);
  }
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, (x) => x < 0);
console.log(results1);
