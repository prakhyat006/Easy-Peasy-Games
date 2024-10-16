let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newbut = document.querySelector("#newbut");
let msgcon = document.querySelector(".msgcon");
let msg = document.querySelector("#msg");
let turn0 = true;
const winningpattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame = () => {
    turn0 = true;
    enablebox();
    msgcon.classList.add("hide");
};
const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgContainer.classList.remove("hide");
    disableBoxes();
  };
boxes.forEach((box) => {
        box.addEventListener("click",() => {
            if (turn0){
                box.innerText="0";
                turn0=false;
            }
            else{
                box.innerText="X";
                turn0=true;
            }
            box.disabled=true;
            checkwinner();
            if (count === 9 && !isWinner) {
                gameDraw();
            }
        });
});
const disablebox = ()=> {
    for (let box of boxes){
        box.disabled=true;
    }
};
const enablebox = ()=> {
    for (let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
const showWinner = (winner) => {
    msg.innerText=`Congratulation , Winner is ${winner}`;
    msgcon.classList.remove("hide");
}
const checkwinner = () => {
    for(let pattern of winningpattern){
        let posval0 =boxes[pattern[0]].innerText;
        let posval1 =boxes[pattern[1]].innerText;
        let posval2 =boxes[pattern[2]].innerText ;
        if (posval0 != "" && posval1 !="" &&  posval2 !=""){
            if(posval0 === posval1 && posval1=== posval2){
                    showWinner(posval0);
                    console.log(posval0);
            }
        }
    };
    
};
newbut.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);