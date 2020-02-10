// Letter choices 
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// wins and losses 
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var userChoice = [''];
var computerGuess = [''];

// Create variables that hold references to the places in the HTML where we want to display things.
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var userChoiceText = document.getElementById("userchoice-text");
var guessesLeftText = document.getElementById("guessesleft-text");


playGame();

function playGame() {
    //the Computer's guess.
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(computerGuess); // for test only

    // Reset the variables
    var guessesLeft = 9;
    var userChoice = [''];

   
    checkLetter();

    function checkLetter() {
        
        document.onkeyup = function (event) {

            // what key was pressed.
            var userGuess = event.key;

            if (userGuess === computerGuess) {
                wins++;
                winsText.textContent = "Wins: " + wins;
                resetGame();
            }
            else {
                guessesLeft--;
                guessesLeftText.textContent = "Guesses left: " + guessesLeft;
                userChoice = userChoice + (userGuess + ", ");
                userChoiceText.textContent = "Your Guesses so far: " + userChoice;
                noGuessesLeft();
            }
        }  }

    // This function resets the game
    function resetGame() {
        var guessesLeft = 9;
        var userChoice = [''];
        guessesLeftText.textContent = "Guesses left: " + guessesLeft;
        userChoiceText.textContent = "Your Guesses so far: " + userChoice;
        playGame();
    }

    // how many guesses left
    function noGuessesLeft() {
        if (guessesLeft === 0) {
            losses++;
            lossesText.textContent = "Losses: " + losses;
            resetGame();
        }
        else {
            checkLetter();
        }}}