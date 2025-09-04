function checkStatus(a, b, c) {
  // Your Code Here
  let name, age, status;
  if (typeof a === "string") {
    name = a;
    if (typeof b === "number") {
      age = b;
      status = c;
    } else {
      age = c;
      status = b;
    }
  } else if (typeof a === "number") {
    age = a;
    if (typeof b === "string") {
      name = b;
      status = c;
    } else {
      name = c;
      status = b;
    }
  } else {
    status = a;
    if (typeof b === "number") {
      age = b;
      name = c;
    } else {
      age = c;
      name = b;
    }
  }
  if (status === true) {
    console.log(`Hello ${name}, Your Age Is ${age}, You Are Available For Hire`)
  }
  else{
    console.log(`Hello ${name}, Your Age Is ${age}, You Are Not Available For Hire`)
  }
}

// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
