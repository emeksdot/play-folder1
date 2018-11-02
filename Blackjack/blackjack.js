//
// Emeka Thomas Onwugbonu
// Blackjack game developed while in 
// Pluralsight training.
// 02 November, 2018

// The aim in the game of Blackjack is to get 21 points or more points than the     
// dealer but not over 21 points.
// To get(ask for) more cards you press Hit button, if you have enough you
// press the Stay button.
// At the start you will be dealt Two cards

let card1 = "Ace of Spades",
    card2 = "Ten of Hearts";

console.log("Welcome to Blackjack!!!");
console.log("You are dealt: ");
console.log(" " + card1);
console.log(" " + card2);

let suits = ["Hearts", "Spades", "Club", "Diamond"];
let values = ["Ace", "King", "Queen", "Jack",
             "Ten", "Nine","Eight", "Seven","Six",
             "Five","Four", "Three", "Two"];
let deck = [];

for (let i = 0; i < suits.length; i++){
    for (let k = 0; k < values.length; k++){
        deck.push(values[k] + " of " + suits[i]);
    }
}

console.log(deck); 
 


