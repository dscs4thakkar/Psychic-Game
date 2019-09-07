//all letters in the alphabet.
var computerchoices = ["a", "b", "c",
                    "d", "e", "f",
                    "g", "h", "i",
                    "j", "k", "l",
                    "m", "n", "o",
                    "p", "q", "r",
                    "s", "t", "u",
                    "v", "w", "x",
                    "y", "z"];

//variables provided for the game.
var wins = 0;
var losses = 0;
var guessleft= 9;
var userGuess= []; 

// the text to display on the page.
var holdsguesses= document.getElementById("player-guess-text");
var holdsguessleft = document.getElementById("guesses-remain-text");
var holdswins = document.getElementById("wins-text");
var holdslosses = document.getElementById("loss-text");

//computer chooses what letter will win. 
let computerGuess;



//When the user presses a key.
document.onkeyup = function(event) {

    var key = event.key.toLowerCase();

    console.log(key)

    if (computerchoices.includes(key) && !userGuess.includes(key)) {
         //defines userGuess as the onkeyup event.
        userGuess.push(event.key);

        //logic for wins and losses.
        if (key === computerGuess){
            wins++; 
            reset ();
        } else {
            guessleft--;
        }
        if ((guessleft===0)){
            losses++;
            reset ();
        }
        renderGame();
    }
}

function reset () {
    guessleft=9;
    //empty array
    userGuess = [];
    //computer picks new letter
    computerGuess = computerchoices[Math.floor(Math.random() * computerchoices.length)];
    console.log("correct: " + computerGuess)
}

function renderGame() {
    //controlling the stats displayed on the page.
    holdsguesses.textContent = "Your guesses so far: " + userGuess;
    holdsguessleft.textContent = "Guesses left: " + guessleft;
    holdswins.textContent = "Wins: " + wins;
    holdslosses.textContent = "Losses: " + losses;
};

reset();
renderGame();