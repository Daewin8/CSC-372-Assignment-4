document.addEventListener("DOMContentLoaded", function () {

    const playerFigures = document.querySelectorAll("#player-section figure");
    const computerImage = document.getElementById("computer-image");
    const computerCaption = document.getElementById("computer-caption");
    const resultText = document.getElementById("result-text");

    const choices = ["rock", "paper", "scissors"];

    playerFigures.forEach(function (figure) {
        figure.addEventListener("click", function () {

            clearSelection();
            figure.classList.add("selected");

            const playerChoice = figure.getAttribute("data-choice");

            computerTurn(playerChoice);
        });
    });

    function clearSelection() {
        playerFigures.forEach(function (figure) {
            figure.classList.remove("selected");
        });
    }

    function computerTurn(playerChoice) {

        resultText.textContent = "Computer is thinking...";

        let shuffleCount = 0;

        const shuffleInterval = setInterval(function () {

            const randomChoice = choices[Math.floor(Math.random() * 3)];
            computerImage.src = "images/" + randomChoice + ".PNG";
            computerCaption.textContent = randomChoice;

            shuffleCount++;

        }, 500);

        setTimeout(function () {

            clearInterval(shuffleInterval);

            const computerChoice = choices[Math.floor(Math.random() * 3)];
            computerImage.src = "images/" + computerChoice + ".PNG";
            computerCaption.textContent = computerChoice;

            determineWinner(playerChoice, computerChoice);

        }, 3000);
    }

    function determineWinner(player, computer) {

        if (player === computer) {
            resultText.textContent = "It's a Tie!";
        }
        else if (
            (player === "rock" && computer === "scissors") ||
            (player === "paper" && computer === "rock") ||
            (player === "scissors" && computer === "paper")
        ) {
            resultText.textContent = "You Win!";
        }
        else {
            resultText.textContent = "Computer Wins!";
        }
    }

});