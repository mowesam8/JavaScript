/*
  Loop Challenge
*/

let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia", "Anwar"];

document.write(`<div>We Have ${myAdmins.length} Admins</div>`);
for (let i = 0; i < myAdmins.length; i++) {
  document.write(`<hr>`)
  document.write(`<div>`)
  document.write(`<p>The Admin For Team ${i+1} Is ${myAdmins[i]}</p>`);
  document.write(`<h3>Team Members:</h3>`)
  let counter =1;
  for (let j = 0; j < myEmployees.length; j++) {
    if(myEmployees[j][0] === myAdmins[i][0]){
      document.write(`<p>- ${counter} ${myEmployees[j]}</p>`);
      counter++;
    }
  }
  document.write(`</div>`)
}