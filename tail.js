// This function returns the all of the items in array after the first item
const tail = (array) => {
  const tailArray = [];
  if (!Array.isArray(array)) {
    console.log("Did not provide an array of data");
    throw new Error("Please pass in an array");
  }

  if (array.length <= 1) {
    return [];
  }

  for (let i = 1; i < array.length; i++) {
    tailArray.push(array[i]);
  }

  console.log("Tail items", tailArray);
  return tailArray;
};

tail(["Hello", "Lighthouse", "Labs"]);
