const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".finalScore h3");
const userScorePara = document.querySelector("#yscore");
const compScorePara = document.querySelector("#cscore");
const final = document.querySelector("h2");

let yourScore = 0;
let compScore = 0;

const compChoice = () => {
    const comp_num = Math.floor(Math.random() * 3);
    const option = ["rock","paper","scissors"]
    return option[comp_num]
}

const gameDraw = () => {
    msg.textContent = "It's a Draw!";
    msg.style.backgroundColor = "black";
}

const playGame = (userChoice) => {
    const comp_choice = compChoice();
    if(comp_choice === userChoice){
        gameDraw();
    }
    let userWin = true;
    if(userChoice === "rock"){
        //computer can slect paper and scissors
        userWin = comp_choice === "paper" ? false : true;
    }
    else if(userChoice === "scissors"){
        //computer can select rock and paper
        userWin = comp_choice === "rock" ? false : true;
    }
    else{
        //computer can select rock and scissors
        userWin = comp_choice === "scissors" ? false : true;
    }
    finalResult(userWin);
}
const finalResult = (userWin) => {
    if(userWin){
        msg.innerHTML = "You Won";
        msg.style.backgroundColor = "Green";
        msg.style.color = "white";
        if(yourScore<4){
            yourScore += 1;
        }
    
        else{
            final.innerHTML = "You Won the Game";
            final.style.backgroundColor = "Green";
            final.style.color = "white";
            yourScore += 1;
        }
        userScorePara.innerHTML = yourScore;
    }
    else{
        msg.innerHTML = "You Lost";
        msg.style.backgroundColor = "Red";
        msg.style.color = "white";
        if(compScore<4){
            compScore += 1;
        }
        else{
            final.innerHTML = "You Lost the Game";
            final.style.backgroundColor = "Red";
            final.style.color = "white";
            compScore += 1;
        }
        compScorePara.innerHTML = compScore;
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice)
    })
})
