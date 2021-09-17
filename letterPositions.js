// This function takes in a sentence and returns the index positions of letters

const letterPositions = (sentence) => {
  const letterIndexPositionsObject = {};
  // We will iterate through the word
  // We will check if the key exists within the final object
  // If the key exists, simply push the index, otherwise create the array with the index position
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === " ") {
      continue;
    }
    letterIndexPositionsObject[sentence[i]]
      ? letterIndexPositionsObject[sentence[i]].push(i)
      : (letterIndexPositionsObject[sentence[i]] = [i]);
  }

  return letterIndexPositionsObject;
};

console.log(letterPositions("lighthouse in the house"));
