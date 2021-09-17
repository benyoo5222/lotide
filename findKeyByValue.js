// This function finds the key name by passing in an object and a value
// The first one that's found is returned
// Otherwise, the function will return undefined

const findKeyByValue = (object, value) => {
  // Iterate through the keys of the object
  //  Go through each value to see if there is match
  // If there is one, we will return that key
  // Otherwise undefined

  const objectKeys = Object.keys(object); // We are using Object.keys instead of for...in because for...in might have properties that has been inherited

  for (let key of objectKeys) {
    if (object[key] === value) {
      return key;
    }
  }

  return undefined;
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));
console.log(findKeyByValue(bestTVShowsByGenre, "That '70s Show"));
