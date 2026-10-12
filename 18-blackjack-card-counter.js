// A Blackjack card counter.
// Low cards (2–6) raise the count, high cards (10, J, Q, K, A) lower it,
// and 7–9 leave it unchanged. A positive count means bet high.

let count = 0;

function cardCounter(card) {
  if (card >= 1 && card <= 6) {
    // Low cards favor the house — add 1
    ++count;
  } else if (card >= 7 && card <= 9) {
    // Neutral cards — count stays the same
    count;
  } else if (card === 10 || card === "J" || card === "K" || card === "Q" || card === "A") {
    // High cards favor the player — subtract 1
    --count;
  }

  // Bet when the count is positive, otherwise hold
  return count > 0 ? `${count} Bet` : `${count} Hold`;
}