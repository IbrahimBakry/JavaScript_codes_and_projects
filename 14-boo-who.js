// booWho: checks whether a value is a boolean primitive (true or false).
// The strict equality check filters out truthy/falsy imposters like 1, 0, "", "true", etc.

function booWho(arg) {
  return arg === true || arg === false;
}