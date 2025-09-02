let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";

let array = [];
for (let i = 0; i < friends.length; i++) {
  if (friends[i][i - i] === letter.toUpperCase()) continue;
  else array.push(friends[i]);
}
for (let i = 0; i < array.length; i++) {
  console.log(`"${i + letter.length} => ${array[i]}"`);
}
// Output
// "1 => Sayed"
// "2 => Eman"
// "3 => Mahmoud"
// "4 => Osama"
// "5 => Sameh"
