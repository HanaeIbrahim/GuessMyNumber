"use strict";

// Guess my number 
/* La machine choisi un nombre aléatoire entre 1 et 20 (ou un autre nombre arbitraire). 
Une joueuse peut entrer un nombre dans l’élément <input>. Si le nombre entré est égal à celui “choisi” par la machine, la joueuse gagne et le nombre est dévoilé.
Un indice affiche si le nombre est trop petit ou trop grand. 
Le score est de 20 et on soustrait 1 à chaque réponse. Le high-score commence logiquement à 0. 
Lorsque aucun nombre (ou un nombre invalide) est entré, déduire un point et mettre un message d’erreur dans l’espace dédié aux indices. 
Le message d’indice peut indiquer “too high” ou "too low"
Implémentez un reset du jeu lorsque le bouton “Again!” est cliqué. Tout doit être remis à zéro sauf le high score. 
*/


// Generate a random number between 1 and 20 (or any other arbitrary number) and store it in a variable.
let number = Math.trunc(Math.random() * 20) + 1;
console.log(number);
// variables et boutons
const highScoreDisplay = document.querySelector("#highscore");
const guessInput = document.querySelector("#guess");
const checkButton = document.querySelector("#check");
const againButton = document.querySelector("#again");

// text
const hint = document.querySelector("#hint");
const scoreDisplay = document.querySelector("#score");
const answer = document.querySelector("#answer");
const header = document.querySelector("#header");



// Initialize the score and high score
let score = 20;
let highScore = 0;

// Function to display a message in the hint element
function displayMessage(message) {
    hint.textContent = message;
}

// Function to reset the game
function resetGame() {

    answer.classList.remove("correct");
    // Reset the answer
    document.querySelector("#answer").textContent = "?";
    // Reset the background color
    document.body.style.background = "#222";
    // Generate a new random number
    number = Math.trunc(Math.random() * 20) + 1;
    // Reset the score
    score = 20;
    scoreDisplay.textContent = score;
    // Clear the input and hint displays
    guessInput.value = "";

    displayMessage("Start guessing...");
}

// Function to check the guess and update the score and high score if necessary
function checkGuess() {
    const guess = Number(guessInput.value);

    // If no guess or an invalid guess is entered, deduct a point and display an error message
    if (!guess) {
        displayMessage("⛔️ No number!");
        score--;
        scoreDisplay.textContent = score;
    } else if (guess === number) {
        // If the guess is correct, display a message indicating the player has won and update the high score if necessary
        displayMessage("🎉 Correct number!");
        if (score > highScore) {
            highScore = score;
            highScoreDisplay.textContent = highScore;
            document.body.style.background = "#4ecf2e";
            document.querySelector("#answer").textContent = number;
            // agrendir le carré blanc au milieu
            answer.classList.add("correct");
        }
    } else if (guess !== number) {
        // If the guess is incorrect, display a message indicating if it is too high or too low and deduct a point from the score
        displayMessage(guess > number ? "📈 Too high!" : "📉 Too low!");
        score--;
        scoreDisplay.textContent = score;
    }

    // If the score reaches 0, display a message indicating the player has lost
    if (score === 0) {
        displayMessage("💥 You lost the game!");
    }
}

// Add event listeners to the check and again buttons
checkButton.addEventListener("click", checkGuess);
againButton.addEventListener("click", resetGame);

// Call the resetGame function to initialize the game
resetGame();




/** 
const button = document.querySelector("#check");

function checkHandler() {
    const hint = document.querySelector("#hint");
    hint.textContent = " Clickety clik";
    hint.style.family = "Helvetica, sans-serif";

    document.body.style.background = "#4ecf2e"
    console.log(document.querySelector("#guess").value);
}

button.addEventListener("click", checkHandler);
**/
/*
console.log(document.querySelector("#guess").value)

document.querySelector("#check").addEventListener("click", function () {
    document.querySelector("hint").textContent = "Clickety click";
})
*/


