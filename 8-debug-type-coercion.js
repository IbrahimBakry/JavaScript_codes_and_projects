// A cleanup job: the original code used booleans, strings, and null
// in arithmetic expressions, which caused odd type coercion results.
// Here, each one is replaced with a proper number so the math works as expected.

const firstResult = 5 + 10;
console.log(`5 + 10 = ${firstResult}`);

const secondResult = 8 - 5;
console.log(`8 - 5 = ${secondResult}`);

// Was: true + 5 (boolean coerced to 1)
const thirdResult = 1 + 5;
console.log(`1 + 5 = ${thirdResult}`);

// Was: false + 8 (boolean coerced to 0)
const fourthResult = 0 + 8;
console.log(`0 + 8 = ${fourthResult}`);

// Was: "10" * 2 (string coerced to number, but messy)
const fifthResult = 10 * 2;
console.log(`10 * 2 = ${fifthResult}`);

// Was: null + 22 (null coerced to 0)
const sixthResult = 0 + 22;
console.log(`0 + 22 = ${sixthResult}`);