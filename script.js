document.addEventListener("DOMContentLoaded", function () {

    const playerFigures = document.querySelectorAll("#player-section figure");
    const computerImage = document.getElementById("computer-image");
    const computerCaption = document.getElementById("computer-caption");
    const resultText = document.getElementById("result-text");
    const countdownText = document.getElementById("countdown");

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

        let timeLeft = 3;
        countdownText.textContent = timeLeft;

        const timer = setInterval(function () {

            timeLeft--;
            countdownText.textContent = timeLeft;

            if (timeLeft === 0) {
                clearInterval(timer);

                countdownText.textContent = "";

                const computerChoice = choices[Math.floor(Math.random() * 3)];
                computerImage.src = "images/" + computerChoice + ".png";
                computerCaption.textContent = computerChoice;

                determineWinner(playerChoice, computerChoice);
            }

        }, 1000);
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