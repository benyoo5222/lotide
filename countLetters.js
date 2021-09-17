// This function takes in a string and returns a map of the number of times each letter was repeated

const countLetters = (word) => {
  const countedLettersObject = {};
  // We will iterate through the word
  // Check if the letter exists as a key, if it does increment by one
  // Otherwise create the key and a value of 1 as the initial count
  // Things to keep in mind:
  // We don't want to count empty spaces and ignore casing
  const removedEmptySpaceWord = word.replace(/\s/g, "");
  for (let letter of removedEmptySpaceWord) {
    countedLettersObject[letter.toLowerCase()]
      ? countedLettersObject[letter.toLowerCase()]++
      : (countedLettersObject[letter.toLowerCase()] = 1);
  }

  return countedLettersObject;
};

console.log(countLetters("LHL"));
console.log(countLetters("lighthouse in the house"));
