let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector(".msg");

let compS = document.querySelector(".comS");
let userS = document.querySelector(".userS");


let genComChoice = () => {
    let optins = ["rock", "paper", "scissor"];
    let rdnmidx = Math.floor(Math.random() * 3);
    return optins[rdnmidx]
}

let drawMatch = () => {
    console.log("Draw Match")
    msg.innerText = "Draw Match"
    msg.style.backgroundColor = "rgb(155, 155, 197)"
}

let Winner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        msg.innerText = `You Win!, Your ${userChoice} beats ${compChoice}`;
        console.log("you win");
        msg.style.backgroundColor = "green"
        userScore++
        userS.innerText = userScore

    } else {
        msg.innerText = `You Lost. ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red"
        compScore++
        compS.innerText = compScore
        console.log("you lost");
    }
}

let playGame = (userChoice) => {
    console.log(`User choice ${userChoice}`);
    let compChoice = genComChoice();

    console.log(`comp choice ${compChoice}`);
    if (userChoice === compChoice) {
        drawMatch()
    } else {
        let userWin = true
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
            console.log(userWin)
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissor" ? false : true;
            console.log(userWin)

        } else {
            userWin = compChoice === "rock" ? false : true;
            console.log(userWin)
        }
        Winner(userWin, userChoice, compChoice)
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id")
        playGame(userChoice);
    });
})
