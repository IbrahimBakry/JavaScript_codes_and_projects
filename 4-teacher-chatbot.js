// A teacher chatbot that walks through JavaScript string basics —
// template literals, .length, bracket notation, and .indexOf().

// Say hello
console.log("Hi there!");

// Set the bot's name and greet with a template literal
const botName = "teacherBot";

const greeting = `My name is ${botName}.`;
console.log(greeting);

// What today's lesson is about
const subject = "JavaScript";
const topic = "strings";

const sentence = `Today, you will learn about ${topic} in ${subject}.`;
console.log(sentence);

// --- String length ---
const strLengthIntro = `Here is an example of using the length property on the word ${subject}.`;
console.log(strLengthIntro);

console.log(subject.length);

console.log(`Here is an example of using the length property on the word ${topic}.`);
console.log(topic.length);

// --- Accessing characters (index starts at 0) ---
console.log(`Here is an example of accessing the first letter in the word ${subject}.`);
console.log(subject[0]);

console.log(`Here is an example of accessing the second letter in the word ${subject}.`);
console.log(subject[1]);

console.log(`Here is an example of accessing the last letter in the word ${subject}.`);

// length - 1 always gives the last index
const lastCharacter = subject[subject.length - 1];
console.log(lastCharacter);

// --- Finding substrings with indexOf ---
const learningIsFunSentence = "Learning is fun.";

console.log("Here are examples of finding the positions of substrings in the sentence.");

console.log(learningIsFunSentence.indexOf("Learning"));

console.log(learningIsFunSentence.indexOf("fun"));
// Returns -1 because indexOf is case-sensitive — "learning" != "Learning"
console.log(learningIsFunSentence.indexOf("learning"));

// Wrap up the lesson
console.log("I hope you enjoyed learning today.");