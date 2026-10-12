// A small calculator built with reusable functions —
// add, subtract, multiply, divide (with zero handling), square, and square root.

// --- Addition ---
function calculateSum(num1, num2) {
  return num1 + num2;
}

console.log(calculateSum(2, 5));
console.log(calculateSum(10, 10));
console.log(calculateSum(5, 5));

// --- Subtraction ---
function calculateDifference(num1, num2) {
  return num1 - num2;
}

console.log(calculateDifference(22, 5));
console.log(calculateDifference(12, 1));
console.log(calculateDifference(17, 9));

// --- Multiplication ---
function calculateProduct(num1, num2) {
  return num1 * num2;
}

console.log(calculateProduct(13, 5));

// --- Division (with a guard against dividing by zero) ---
function calculateQuotient(num1, num2) {
  return num2 === 0 ? "Error: Division by zero" : num1 / num2;
}

console.log(calculateQuotient(7, 11));
console.log(calculateQuotient(3, 0)); // hits the error branch instead of returning Infinity

// --- Square (number times itself) ---
function calculateSquare(num) {
  return num ** 2;
}

console.log(calculateSquare(2));
console.log(calculateSquare(9));

// --- Square root ---
function calculateSquareRoot(num) {
  return Math.sqrt(num);
}

console.log(calculateSquareRoot(25));
console.log(calculateSquareRoot(100));