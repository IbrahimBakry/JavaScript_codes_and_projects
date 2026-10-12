// A quick tour of booleans, truthy/falsy values, and if...else statements —
// using a character named Timmy to walk through the examples.

// --- Truthy vs falsy values ---
// Start with a truthy value (non-empty string)
// const truthyOrFalsy = "Hello World!";
// console.log(Boolean(truthyOrFalsy)); // true

// Swap to a falsy value (empty string)
// const truthyOrFalsy = "";
// console.log(Boolean(truthyOrFalsy)); // false

// (Both lines above were for demonstration and removed as instructed.)

// --- if statement with a boolean condition ---
const hasDeveloperJob = true;

if (hasDeveloperJob) {
  console.log("Timmy is employed as a developer.");
}

// --- if statement that stays silent (condition is false) ---
const isTimmyAGamer = false;

if (isTimmyAGamer) {
  console.log("Timmy loves to play World of Warcraft.");
}

// --- Comparison operator (>=) with an else clause ---
const timmyAge = 15;

if (timmyAge >= 16) {
  console.log("Timmy is old enough to drive.");
} else {
  console.log("Timmy is not old enough to drive.");
}