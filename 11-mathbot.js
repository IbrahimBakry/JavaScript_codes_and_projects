// MathBot walks through JavaScript's Math object —
// random numbers, rounding, and min/max, with a friendly intro and outro.

// --- Intro ---
const botName = "MathBot";
const greeting = `Hi there! My name is ${botName} and I am here to teach you about the Math object!`;

console.log(greeting);

// --- Math.random() ---
console.log("The Math.random() method returns a pseudo random number greater than or equal to 0 and less than 1.");

const randomNum = Math.random();
console.log(randomNum);

// --- Random number between two values ---
console.log("Now, generate a random number between two values.");

const min = 1;
const max = 100;

// Scale the 0–1 range up to min–max
const randomNum2 = Math.random() * (max - min) + min;
console.log(randomNum2);

// --- Math.floor() ---
console.log("The Math.floor() method rounds the value down to the nearest whole integer.");

const numRoundedDown = Math.floor(6.7);
console.log(numRoundedDown);

// --- Random integer between two values ---
console.log("Now, generate a random integer between two values.");

// Same formula as before, wrapped in Math.floor to drop the decimal
const randomInt = Math.floor(Math.random() * (max - min) + min);
console.log(randomInt);

// --- Math.ceil() ---
console.log("The Math.ceil() method rounds the value up to the nearest whole integer.");

const numRoundedUp = Math.ceil(3.2);
console.log(numRoundedUp);

// --- Math.round() ---
console.log(
  "The Math.round() method rounds the value to the nearest whole integer."
);

const numRounded = Math.round(2.7);
console.log(numRounded);
const numRounded2 = Math.round(11.2);
console.log(numRounded2);

// --- Math.max() and Math.min() ---
console.log("The Math.max() and Math.min() methods are used to get the maximum and minimum number from a range.");

const maxNum = Math.max(3, 125, 55, 24);
console.log(maxNum);
const minNum = Math.min(6, 90, 14, 90, 2);
console.log(minNum);

// --- Outro ---
console.log("It was fun learning about the different Math methods with you!");