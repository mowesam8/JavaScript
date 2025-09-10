let myArray = ["E", "l", "z", ["e", "r"], "o"];

let result = myArray.reduce(function (acc, current) {
  return `${acc}${Array.isArray(current) ? current.join("") : current}`;
});

console.log(result);
// Elzero
