// A quick demo of common string methods:
// trim, case conversion, and a tiny camelCase trick.

const userInput = "   Hello World!   ";
console.log("Original input:");
console.log(userInput);

// trim() — removes whitespace from both ends
const cleanedInput = userInput.trim();
console.log("Result of trimming whitespace from both ends:");
console.log(cleanedInput);

// trimStart() — removes leading whitespace only
const trimmedStart = userInput.trimStart();
console.log("After using the trimStart() method, leading spaces removed:");
console.log(trimmedStart);

// trimEnd() — removes trailing whitespace only
const trimmedEnd = userInput.trimEnd();
console.log("After using the trimEnd() method, trailing spaces removed:");
console.log(trimmedEnd);

// toUpperCase() — everything in caps
const upperCaseInput = cleanedInput.toUpperCase();
console.log("Result of using the toUpperCase() method:");
console.log(upperCaseInput);

// toLowerCase() — everything in lowercase
const lowerCaseInput = cleanedInput.toLowerCase();
console.log("Result of using the toLowerCase() method:");
console.log(lowerCaseInput);

// A small camelCase demo: lowercase the first part,
// then uppercase the first letter of the next part
const lowercaseWord = "camelcase";
const camelCasedVersion = lowercaseWord.slice(0, 5) + lowercaseWord[5].toUpperCase();
console.log("Camel cased version:");
console.log(camelCasedVersion);