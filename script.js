

const choices = ["rock", "paper", "scissors"];

document.querySelector("#computer").setAttribute("src", "./img/rock.png");
document.querySelectorAll("button").forEach((button) => button.onclick = playGame);


function playGame(e) {
    const playerChoiceString = e.target.getAttribute("choice");
    const computerChoiceString = choices[Math.floor(Math.random() * 3)];
    document.querySelector("#player").setAttribute("src", "./img/" + playerChoiceString + ".png");
    document.querySelector("#computer").setAttribute("src", "./img/" + computerChoiceString + ".png");
    const playerChoice = choices.indexOf(playerChoiceString);
    const computerChoice = choices.indexOf(computerChoiceString);

    document.querySelector("#result").classList.remove("draw");
    if (playerChoice === computerChoice) {
        document.querySelector("#result").setAttribute("src", "./img/result-draw.png");
        document.querySelector("#result").classList.add("draw");
    } else if (playerChoice === computerChoice +1 || playerChoice === 0 && computerChoice == 2) {
        document.querySelector("#result").setAttribute("src", "./img/result-won.png");
    } else {
        document.querySelector("#result").setAttribute("src", "./img/result-lost.png");

    }
}