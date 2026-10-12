// A friendly greeting bot that introduces itself, changes its nickname,
// and shares its favorite subject — built to practice JavaScript fundamentals.

// First hello from the bot
console.log("Hi there!");
console.log("I am excited to talk to you.");

// Declare the bot variable, then give it a name
let bot;
bot = "teacherBot";

// Where the bot lives
let botLocation = "the universe";

// Time for a proper introduction
console.log("Allow me to introduce myself.");

// Introduce the bot by name
const botIntroduction = "My name is " + bot + ".";
console.log(botIntroduction);

// Tell the user where the bot lives
const botLocationSentence = "I live in " + botLocation + ".";
console.log(botLocationSentence);

// The bot changes its name
bot = "professorBot";

// Share the new nickname
const nicknameIntroduction = "My nickname is " + bot + ".";
console.log(nicknameIntroduction);

// One more name change
bot = "awesomeTeacherBot";

// Reveal the latest nickname
const newNicknameGreeting = "I love my nickname but I wish people would call me " + bot + ".";
console.log(newNicknameGreeting);

// The bot's favorite subject
const favoriteSubject = "Computer Science";

// Wrap it up with a sentence about the subject
const favoriteSubjectSentence = "My favorite subject is " + favoriteSubject + ".";
console.log(favoriteSubjectSentence);

// Final goodbye
console.log("Well, it was nice to talk to you. Have a nice day!");