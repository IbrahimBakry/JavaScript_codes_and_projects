// A short demo of replace(), replaceAll(), and repeat() —
// three handy tools for reshaping strings.

const originalString = "I love cats.";
console.log("Original string:");
console.log(originalString);

// replace() — swaps the first match only
const replacedString = originalString.replace("cats", "dogs");
console.log("After using the replace() method:");
console.log(replacedString);

const exampleSentence = "I love cats and cats are so much fun!";
console.log("Original sentence:");
console.log(exampleSentence);

// replaceAll() — swaps every match
const dogsOnlySentence = exampleSentence.replaceAll("cats", "dogs");
console.log("Replacing all occurrences of cats with dogs:");
console.log(dogsOnlySentence);

const learningSentence = "I love learning!";
console.log("Original learning sentence:");
console.log(learningSentence);

// repeat() — builds a string by repeating a piece, then trims the trailing space
const repeatedLove = "love ".repeat(3).trimEnd();
console.log(repeatedLove);

// Drop it into a fresh sentence
const newSentence = `I ${repeatedLove} learning.`;
console.log(newSentence);