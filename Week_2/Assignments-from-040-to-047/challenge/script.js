/*
  Array Challenge
*/

let zero = 0;

let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// Write Code Here

my.length = ++counter;
my.reverse();
console.log(my); // ["Osama", "Elham", "Mazero", "Ahmed"];

console.log(my.slice(++zero, --counter)); // ["Elham", "Mazero"]
let result = my[zero].slice(--zero, --counter) + my[counter].slice(counter);
console.log(result); // "Elzero"
result = result.slice(-counter, --result.length);
result += my[zero][zero];
console.log(result); // "rO"
