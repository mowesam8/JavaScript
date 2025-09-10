let myString = "EElllzzzzzzzeroo";

let result = myString
  .split("")
  .filter(function (element, index, arr) {
    return element !== arr[index - 1];
  })
  .join("");

console.log(result);
// Elzero
