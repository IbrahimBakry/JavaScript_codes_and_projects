// Two silly stories built from the same template.
// Each story swaps in different words to create a brand new tale.

// Words for the first story
let adjective = "Awesome";
let noun = "Hero";
let verb = "Win";
let place = "FreeCodeCamp";
let adjective2 = "Winer";
let noun2 = "JS";

// Fill in the template for the first story
let firstStory = "Once upon a time, there was a(n) " + adjective + " " + noun + " who loved to eat " + noun2 + ". The " + noun + " lived in a " + place + " and had " + adjective2 + " nostrils that blew fire when it was " + verb + ".";
console.log("First story: " + firstStory);

// Swap in new words for the second story
adjective = "Good";
noun = "JS";
verb = "Fight";
place = "FreeCodeCamp";
adjective2 = "Cooler";
noun2 = "HTML";

// Same template, fresh story
let secondStory = "Once upon a time, there was a(n) " + adjective + " " + noun + " who loved to eat " + noun2 + ". The " + noun + " lived in a " + place + " and had " + adjective2 + " nostrils that blew fire when it was " + verb + ".";
console.log("Second story: " + secondStory);