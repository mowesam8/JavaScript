let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let result = mix
  .map(function (element) {
    return isNaN(parseInt(element)) ? element : "";
  })
  .reduce(function (acc, current) {
    return `${acc}${current}`;
  });

console.log(result);
// Elzero
