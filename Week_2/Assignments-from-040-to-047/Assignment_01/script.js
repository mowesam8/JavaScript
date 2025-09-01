let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
let result = myFriends.slice(num - num, num);
console.log(result); // ["Ahmed", "Elham", "Osama"];

// Method 2
myFriends.splice(num);
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];
