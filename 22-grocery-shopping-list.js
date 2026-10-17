/*
  Grocery Shopping List
  ---------------------
  A small practice script from the freeCodeCamp "Arrays" workshop.
  It walks through common array methods (push, unshift, pop, shift,
  and index-based updates) by building and modifying a grocery list
  step by step, logging the list after each change.
*/

// Log the start of our grocery list project
console.log("Grocery shopping list");

// Start with an empty array to hold our items
const shoppingList = [];

// First thought: some fruit would be nice
console.log("It will be nice to have some fruit to eat.");

shoppingList.push("Apples");

// Helper function to print the current list in a readable format
function getShoppingListMsg(arr) {
  return `Current Shopping List: ${arr}`;
}

console.log(getShoppingListMsg(shoppingList));

// Add another fruit
shoppingList.push("Grapes");
console.log(getShoppingListMsg(shoppingList));

// We're going to need something to cook with
console.log("It looks like we need to get some cooking oil.");

// Add oil to the front since it's a staple
shoppingList.unshift("Vegetable Oil");
console.log(getShoppingListMsg(shoppingList));

// Snacks for the week (push accepts multiple items)
shoppingList.push("Popcorn", "Beef Jerky", "Potato Chips");
console.log(getShoppingListMsg(shoppingList));

// Hmm, that's a lot of junk food
console.log("This looks like too much junk food.");

// Remove the last item (Potato Chips)
shoppingList.pop();
console.log(getShoppingListMsg(shoppingList));

// Actually, dessert sounds good too
console.log("It might be nice to get a dessert.");

shoppingList.unshift("Chocolate Cake");
console.log(getShoppingListMsg(shoppingList));

// On second thought, let's be healthier about this
console.log("On second thought, maybe we should be more health conscious.");

// Remove the cake (first item) and swap Vegetable Oil for Canola Oil
shoppingList.shift();
shoppingList[0] = "Canola Oil";

console.log(getShoppingListMsg(shoppingList));