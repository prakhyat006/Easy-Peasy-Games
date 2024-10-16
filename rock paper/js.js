let userScore = 0;
let compScore =0;
let newbut = document.querySelector("#newbut");
let msgcon = document.querySelector(".msgcon");
const choices =document.querySelectorAll(".choice");
const msg =document.querySelector("#msg");
const userPara = document.querySelector("#user-score");
const compPara = document.querySelector("#computer-score");
const genComputerChoice = () =>{
    const options =["rock","paper","scissors"];
    const randIndx = Math.floor(Math.random()*3);
    return options[randIndx];
};
const drawgame = () => {
    msg.innerText="Game is Draw.Play again🤞🤞🤞";
    msg.style.backgroundColor ="blue";

};
function resetgame(score){
    if(score === 10){

        msgcon.classList.remove("hide");
    }

};
const showWinner = (userwin) => {
    if(userwin){
        userPara.innerText=++userScore;
        msg.innerText= "You win!.Luck is all Yours😍😍💖😎";
        msg.style.backgroundColor ="green";
        resetgame(userScore);
    }
    else {
        compPara.innerText=++compScore;
        msg.innerText="You lose.🙈🙈🫣🫣";
        msg.style.backgroundColor ="red";
        resetgame(compScore);
    }
};
const playGame = (userChoice) =>{
    const compChoice = genComputerChoice();
    if(userChoice === compChoice){
        drawgame();
    }
    else{
        userwin =true;
        if(userChoice === "rock"){
            userwin = compChoice ==="paper" ? false:true;
        }else if(userChoice ==="paper"){
            userwin = compChoice === "scissors" ? false :true;
        }else {
            userwin =compChoice === "paper" ? true :false;
        }
        showWinner(userwin);
    }

}
choices.forEach((choice) => {
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");
        console.log("choice was clicked");
        playGame(userChoice);
    });
});
newbut.addEventListener("click",()=>{
    compPara.innerText=0;
    userPara.innerText=0;
    msg.style.backgroundColor ="green";
    msg.innerText= "New Game Started !!!😍😍💖😎";
    msgcon.classList.add("hide");

});
