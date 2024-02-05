"use strict";

const MAXNUMBER = 20;

const hint = document.querySelector("#hint");
const answer = document.querySelector("#answer");
const scoreLabel = document.querySelector("#score");
const between = (document.querySelector(
    "#between"
).textContent = `Between 1 and ${MAXNUMBER}`);

const createRandomNumber = (max) => Math.floor(Math.random() * max) + 1;

const game = {
    correctNumber: createRandomNumber(20),
    score: MAXNUMBER,
    highscore: 0,
    // Cette méthode retourne une valeur booléenne correspondant
    // à si la valeur passée en param est égale à la bonne réponse.
    checkAnswer(value) {
        this.score--;
        return this.correctNumber === value;
    },
    gameOver() {
        if (this.score > this.hightscore) this.hightscore = this.score;
        return this;
    }
};

const handleCheck = () => {
    const guess = document.querySelector("#guess");
    const hightscoreLabel = document.querySelector("#highscore");

    // Baisser le score à chaque check
    // Si la valeur dans l'input n'est pas la bonne
    if (!game.checkAnswer(+guess.value)) {
        // Si la valeur n'est pas un nombre valide
        if (isNaN(guess.value) || guess.value < 1 || guess.value > MAXNUMBER) {
            hint.textContent = `🛑 Guess must be between 1 and ${MAXNUMBER}`;
        } else {
            // Si la valeur est valide mais n'est pas correcte.
            hint.textContent =
                guess.value > game.correctNumber ? `📈 too high!` : `📉 too low!`;
        }
    } else {
        // Si la valeur est la bonne
        game.gameOver();
        document.body.style.backgroundColor = "var(--color-tertiary)";
        answer.classList.add("correct");
        answer.textContent = game.correctNumber;
        hint.textContent = `🎉 Correct Number!`;
        hightscoreLabel.textContent = game.highscore;
    }

    // Update le score à chaque click
    scoreLabel.textContent = game.score;
};

const handleAgain = () => {
    // Reset game object
    game.correctNumber = createRandomNumber(MAXNUMBER);
    game.score = MAXNUMBER;

    // Reset styles and messages
    document.body.style.backgroundColor = "var(--color-primary)";
    hint.textContent = `Start guessing...`;
    answer.textContent = `?`;
    answer.classList.remove("correct");
    scoreLabel.textContent = game.score;
};

document.querySelector("#check").addEventListener("click", handleCheck);
document.querySelector("#again").addEventListener("click", handleAgain);