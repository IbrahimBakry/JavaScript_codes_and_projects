/*
  Lunch Menu Manager
  ------------------
  A small lab exercise (freeCodeCamp) that practices array methods
  for building and managing a lunch menu. Covers push, unshift, pop,
  shift, random selection, and joining an array into a readable string.
  Each function mutates the array, logs an action message, and returns
  the updated array (except the read-only helpers).
*/

// Empty array to hold our lunch options
const lunches = [];

// Add a lunch to the end of the menu
function addLunchToEnd(arr, str) {
  arr.push(str);
  console.log(`${str} added to the end of the lunch menu.`);
  return arr;
}

// Add a lunch to the start of the menu
function addLunchToStart(arr, str) {
  arr.unshift(str);
  console.log(`${str} added to the start of the lunch menu.`);
  return arr;
}

// Remove the last lunch, guarding against an empty menu
function removeLastLunch(arr) {
  if (arr.length === 0) {
    console.log("No lunches to remove.");
    return arr;
  }
  const elem = arr.pop();
  console.log(`${elem} removed from the end of the lunch menu.`);
  return arr;
}

// Remove the first lunch, same empty-check pattern
function removeFirstLunch(arr) {
  if (arr.length === 0) {
    console.log("No lunches to remove.");
    return arr;
  }
  const elem = arr.shift();
  console.log(`${elem} removed from the start of the lunch menu.`);
  return arr;
}

// Pick a random lunch and log it
function getRandomLunch(arr) {
  if (arr.length === 0) {
    console.log("No lunches available.");
    return;
  }
  const rand = arr[Math.floor(Math.random() * arr.length)];
  console.log(`Randomly selected lunch: ${rand}`);
}

// Print the whole menu as one comma-separated line
function showLunchMenu(arr) {
  if (arr.length === 0) {
    console.log("The menu is empty.");
    return;
  }
  console.log(`Menu items: ${arr.join(", ")}`);
}