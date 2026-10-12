// A tiny interactive bot that shares fun facts about its favorite language.
// Built as part of a JavaScript lab — simple, friendly, and to the point.

// Greet the user
console.log("Hello! I'm your coding fun fact guide!");

// Bot's basic info
const botName = "Bibo";
const botLocation = "JavaScript";
const favoriteLanguage = "JS";

// Introduce the bot
console.log("My name is " + botName + " and I live on " + botLocation + ".");
console.log("My favorite programming language is " + favoriteLanguage + ".");

// Share the first fun fact
let codingFact = "My favorite language is " + favoriteLanguage + ".";
console.log(codingFact);

// Swap in a second fact
codingFact = "Love is " + favoriteLanguage + "bla bla bla" + ".";
console.log(codingFact);

// And a third one for good measure
codingFact = "Life is " + favoriteLanguage + "bla bla" + ".";
console.log(codingFact);

// Say goodbye
console.log("It was fun sharing these facts with you. Goodbye! - " + botName + " from " + botLocation + ".");