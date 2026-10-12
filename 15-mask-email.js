// maskEmail: hides the middle of a username with asterisks,
// keeping the first letter, last letter, and full domain visible.
// e.g. "apple.pie@example.com" → "a*******e@example.com"

let email = "apple.pie@example.com";

function maskEmail(email) {
  // Find where the username ends and the domain begins
  const atIndex = email.indexOf("@");

  // Replace everything between the first and last username letter with asterisks
  return email.replace(
    email.slice(1, atIndex - 1),
    "*".repeat(atIndex - 2)
  );
}

console.log(maskEmail(email));