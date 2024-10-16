let userScore = 0;
let compScore =0;
const outSound = new Audio('out.mp3');
const cheerSound = new Audio('50.mp3');
const choices =document.querySelectorAll(".choice");
const msg =document.querySelector("#msg");
const board =document.querySelector(".highscore");
const userPara = document.querySelector("#user-score");
let newbut = document.querySelector("#newbut");
let msgcon = document.querySelector(".msgcon");
let up =0;
const genComputerChoice = () =>{
    const options =["zero","one","two","three","four","five","six"];
    const randIndx = Math.floor(Math.random()*7);
    return options[randIndx];
};

const drawgame = () => {
   
    msg.style.backgroundColor ="#ffffc7";
    msg.style.color="black";
    highscorupdated(userScore);
    userPara.innerText=userScore;
    userScore=0;
    choices.d
    msgcon.classList.remove("hide");
};
const highscorupdated=(score)=>{
    if(score>up){
        up = score;
        board.innerText="HighScore 🍾🍾🍾🍺 "+prompt("Enter your name :")+ " : "+up+"Runs.";
    }
    return ;
};
const playGame = (userChoice) =>{
    const compChoice = genComputerChoice();
    if(userChoice === compChoice){
        outSound.play();
        drawgame();
        msg.innerText="Your are Out.Play again 😭😭😭😭";
    }
    else{
        if(userScore>=45 && userScore<=50){
            cheerSound.play();
        }
        msg.style.backgroundColor ="#081b31";
        msg.style.color="white";
        if(userChoice === "one"){
            userPara.innerText=++userScore;
            msg.innerText= `You hit ${userChoice} and computer hit ${compScore}😍😍💖😎`;
        }else if(userChoice ==="two"){
            userScore=userScore+2;
            userPara.innerText=userScore;
            msg.innerText= `You hit ${userChoice} and computer hit ${compChoice}😍😍💖😎`;
        }else if(userChoice ==="three"){
            userScore=userScore+3;
            userPara.innerText=userScore;
            msg.innerText= `You hit ${userChoice} and computer hit ${compChoice}😍😍💖😎`;
        }else if(userChoice ==="four"){
            userScore=userScore+4;
            userPara.innerText=userScore;
            msg.innerText= `You hit ${userChoice} and computer hit ${compChoice}😍😍💖😎`;
        }else if(userChoice ==="five"){
            userScore=userScore+5;
            userPara.innerText=userScore;
            msg.innerText= `You hit ${userChoice} and computer hit ${compChoice}😍😍💖😎`;
        }else if(userChoice ==="six"){
            userScore=userScore+6;
            userPara.innerText=userScore;
            msg.innerText= `You hit ${userChoice} and computer hit ${compChoice}😍😍💖😎`;
        }
        else {
            userScore=userScore;
            msg.innerText=`You hit 0 and computer hit ${compChoice} 😍😍💖😎`;
         }
        
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
    userScore=0;
    userPara.innerText=0;
    msg.style.backgroundColor ="#081b31";
    msg.style.color="white";
    msg.innerText=`New Game Started😎`
    msgcon.classList.add("hide");
});

