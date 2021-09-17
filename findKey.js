// Find Key
// This function takes in an object and a callback function
// The function will use the callback function to find the first truthy value
// Once it finds or passes the test of the callback function, it will return the key of the object
// Otherwise the function will return undefined

const findKey = (object, callback) => {
  const keysOfObject = Object.keys(object);

  for (let key of keysOfObject) {
    if (callback(object[key])) {
      return key;
    }
  }

  return undefined;
};

console.log(
  findKey(
    {
      "Blue Hill": { stars: 1 },
      Akaleri: { stars: 3 },
      noma: { stars: 2 },
      elBulli: { stars: 3 },
      Ora: { stars: 2 },
      Akelarre: { stars: 3 },
    },
    (x) => x.stars === 2
  )
);
