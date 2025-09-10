let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let result = numsAndStrings.filter(function(element){
  return ! isNaN(parseInt(element));
}).map(function (element){
  return -element;
});

console.log(result);
// [-1, -10, 10, 20, -5, -3]