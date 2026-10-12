// isLeapYear: checks whether a given year is a leap year.
// Rule: divisible by 4, unless divisible by 100 — unless also divisible by 400.
// e.g. 2000 is a leap year, but 1900 is not.

const year = 1900;

function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return `${year} is a leap year.`;
  } else {
    return `${year} is not a leap year.`;
  }
}

const result = isLeapYear(year);
console.log(result); // 1900 is not a leap year.