// confirmEnding: checks if a string ends with a given target string.
// Uses slice() with a negative index to grab the tail — no .endsWith() needed.

function confirmEnding(str, antStr) {
  if (str.slice(-antStr.length) === antStr) {
    return true;
  } else {
    return false;
  }
}

const testCase = confirmEnding("Bastian", "n");
console.log(testCase);