// A quick walkthrough of two handy string methods:
// includes() to check for substrings, and slice() to pull pieces out of a string.

// The sentence we'll be inspecting
const fccSentence = "freeCodeCamp is a great place to learn web development.";

// --- includes() examples ---
console.log("Here are some examples of the includes() method:");

// Substring is present → true
const hasFreeCodeCamp = fccSentence.includes("freeCodeCamp");
console.log(`fccSentence.includes("freeCodeCamp") returns ${hasFreeCodeCamp} because the word "freeCodeCamp" is in the sentence.`);

// Substring is missing → false
const hasJavaScript = fccSentence.includes("JavaScript");
console.log(`fccSentence.includes("JavaScript") returns ${hasJavaScript} because the word "JavaScript" is not in the sentence.`);

// includes() is case-sensitive → false here
const hasLowercaseFCC = fccSentence.includes("freecodecamp");
console.log(`fccSentence.includes("freecodecamp") returns ${hasLowercaseFCC} because includes is case-sensitive.`);

// --- slice() examples ---
const message = "Welcome to freeCodeCamp!";

console.log("Here are some examples of the slice() method:");

// Slice out "freeCodeCamp" (start index 11, end index 23 — end not included)
const platform = message.slice(11, 23);
console.log(`The word "${platform}" was sliced from the message.`);

// Grab the first word "Welcome"
const greetingWord = message.slice(0, 7);
console.log(`The first word is "${greetingWord}".`);

// Negative index counts from the end — this grabs the last character
const endPunctuation = message.slice(-1);
console.log(`The ending punctuation mark is a "${endPunctuation}"`);

// All done
console.log("Workshop complete! You now know how to use includes() and slice().");