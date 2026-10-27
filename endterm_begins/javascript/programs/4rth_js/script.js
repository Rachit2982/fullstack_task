function playGame(userChoice) {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    if (userChoice === computerChoice) {
        document.getElementById("result").innerHTML = "It's a tie! You both chose " + userChoice;
    }
    else if(userChoice === "rock" && computerChoice === "scissors" ||
            userChoice === "paper" && computerChoice === "rock" ||
            userChoice === "scissors" && computerChoice === "paper") {
        document.getElementById("result").innerHTML = "You win! " + userChoice + " beats " + computerChoice;
    }
    else {
        document.getElementById("result").innerHTML = "You lose! " + computerChoice + " beats " + userChoice;
    }       

}