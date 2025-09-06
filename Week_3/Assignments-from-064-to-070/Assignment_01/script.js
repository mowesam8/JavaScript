function getDetails(zName, zAge, zCountry) {
  function namePattern(zName) {
    // Write Your Code Here
    let index = zName.indexOf(" ");
    let name =
      "Hello " +
      zName.slice(0, index + 1) +
      zName[index + 1].toUpperCase() +
      ".";
    return name;
    // Osama Mohamed => Osama M.
    // Ahmed ali => Ahmed A.
  }
  function ageWithMessage(zAge) {
    // Write Your Code Here
    let age = "Your Age Is ";
    for (let i = 0; i < zAge.length; i++) {
      if (zAge[i] === " ") {
        break;
      } else age += zAge[i];
    }
    return age;
    // 38 Is My Age => Your Age Is 38
    // 32 Is The Age => Your Age Is 32
  }
  function countryTwoLetters(zCountry) {
    // Write Your Code Here
    let country = "You Live In ";
    country += zCountry.toUpperCase().slice(0, 2);
    return country;
    // Egypt => You Live In EG
    // Syria => You Live In SY
  }
  function fullDetails() {
    // Write Your Code Here
    let result = [
      namePattern(zName),
      ageWithMessage(zAge),
      countryTwoLetters(zCountry),
    ];
    return result.join(", ");
  }
  return fullDetails(); // Do Not Edit This
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY
