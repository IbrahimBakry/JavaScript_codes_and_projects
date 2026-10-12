// Debugging a friend's practice with increment/decrement operators.
// The trick: prefix (++x) updates first, postfix (x++) returns the old value first.

let counter = 10;
console.log(`Counter is currently ${counter}`);

// Prefix: increments first, then returns the new value → 11
let updatedCounter = ++counter;
console.log(`Counter is now ${updatedCounter}`);

let score = 8;
console.log(`Score is currently ${score}`);

// Postfix: returns the current value first, then increments → still 8
let finalScore = score++;
console.log(`Score is still ${finalScore}`);

let coins = 3;
console.log(`Coins is currently ${coins}`);

// Prefix: decrements first, then returns the new value → 2
let updatedCoins = --coins;
console.log(`Coins is now ${updatedCoins}`);

let health = 7;
console.log(`Health is currently ${health}`);

// Postfix: returns the current value first, then decrements → still 7
let newHealth = health--;
console.log(`Health is still ${newHealth}`);