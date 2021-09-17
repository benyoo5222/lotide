// This function takes in array of string and an object
// It will count the number of times that an item appeared in the array by using the object's mapping
// If the object has the key and it's "True", we will count the item

const countOnly = (arrayOfItems, lettersToCountObject) => {
  const counterObject = {};

  for (let item of arrayOfItems) {
    // We are first going to check if this item should be counted or not
    // If it's on the list and its true, we will either create a new key in the counter object
    // Or add to the existing key
    lettersToCountObject[item]
      ? counterObject[item]
        ? counterObject[item]++
        : (counterObject[item] = 1)
      : null;
  }

  return counterObject;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];

const result1 = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false,
});

console.log(result1);
