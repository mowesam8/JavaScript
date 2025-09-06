function itsMe() {
  return `Iam A Normal Function`;
}

console.log(itsMe()); // Iam A Normal Function

let x = () => `Iam A Normal Function`;

console.log(x()); // Iam An Arrow Function

function urlCreate(protocol, web, tld) {
  return `${protocol}://www.${web}.${tld}`;
}

console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org

let y = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;
console.log(y("https", "elzero", "org"));