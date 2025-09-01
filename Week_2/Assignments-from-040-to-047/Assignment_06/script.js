let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here
allArrs = arr1.concat(arr2);
allArrs.sort();
allArrs = allArrs.slice(arr2.length);
allArrs =  allArrs.join("").toLowerCase();
console.log(allArrs); // fxy