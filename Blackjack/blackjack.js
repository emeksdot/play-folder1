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


// Creation of a deck of cards of many values


function createDeck(){
    let suits = ["Hearts", "Spades", "Club", "Diamond"];
    let values = ["Ace", "King", "Queen", "Jack",
             "Ten", "Nine","Eight", "Seven","Six",
             "Five","Four", "Three", "Two"];
    let deck = [];
            
    for (let i = 0; i < suits.length; i++){
        for (let k = 0; k < values.length; k++){
            let card ={
                suit: suits[i], 
                value: values[k]
            }
            deck.push(card);
        }
    }
    return deck;
    }

let deck = createDeck();

function getNextCard(){
    return deck.shift();
}

function getCardString(card){
    return card.value + ' of ' + card.suit;
}
            

console.log(deck); 
 
let playerCards = [getNextCard(), getNextCard()]; 

console.log("Welcome to Blackjack!!!");
console.log("You are dealt: ");
console.log(" " + getCardString(playerCards[0]));  //playerCards[0] is and object
console.log(" " + getCardString(playerCards[1]));
console.log();
console.log();


