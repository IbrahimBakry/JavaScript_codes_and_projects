// A tiny fortune teller: pick one of five fortunes at random.
// Refresh to see a different fortune each time.

// The five possible fortunes
const fortune1 = "Your cat will look very cuddly today.";
const fortune2 = "The weather will be nice tomorrow.";
const fortune3 = "Be cautious of your new neighbors.";
const fortune4 = "You will find a new hobby soon.";
const fortune5 = "It would be wise to avoid the color red today.";

// Pick a random number between 1 and 5 (inclusive)
const randomNumber = Math.floor(Math.random() * 5) + 1;

// Match the random number to its fortune
let selectedFortune;
if (randomNumber === 1) {
  selectedFortune = fortune1;
} else if (randomNumber === 2) {
  selectedFortune = fortune2;
} else if (randomNumber === 3) {
  selectedFortune = fortune3;
} else if (randomNumber === 4) {
  selectedFortune = fortune4;
} else {
  selectedFortune = fortune5;
}

// Reveal the fortune
console.log(selectedFortune);