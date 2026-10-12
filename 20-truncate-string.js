// truncateString: cuts a string down to a given length and adds "..." at the end.
// If the string already fits, it's returned unchanged.

function truncateString(str = "string", num = 3) {
  if (str.length > num) {
    // Slice to the limit, then tack on three dots
    return `${str.slice(0, num)}${".".repeat(3)}`;
  } else {
    return str;
  }
}

// Should print: "A-tisket..."
const testcase = truncateString("A-tisket a-tasket A green and yellow basket", 8);
console.log(testcase);