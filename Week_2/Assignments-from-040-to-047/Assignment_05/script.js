let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions
haystack.indexOf(needle) != -1 ? console.log("Found") : console.log("Not Found");
haystack.lastIndexOf(needle) != -1 ? console.log("Found") : console.log("Not Found");
haystack.includes(needle) ? console.log("Found") : console.log("Not Found");