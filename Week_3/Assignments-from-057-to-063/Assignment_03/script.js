function ageInTime(theAge) {
  // Your Code Here
  if (theAge > 10 && theAge < 100) {
    let months = theAge * 12;
    console.log(`${months} Months`);
    let days = theAge * 365;
    let weeks = (days / 7).toFixed(0);
    console.log(`${weeks} Weeks`);
    console.log(`${days} Days`);
    let hours = days * 24;
    console.log(`${hours} Hours`);
    let minutes = hours * 60;
    console.log(`${minutes} Minutes`);
    console.log(`${minutes * 60} Seconds`);
  } else console.log("Age Out Of Range");
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months
