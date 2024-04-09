let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let main = document.querySelector("main");
let newBtn = document.querySelector("#newGame");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;

let count = 0;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () => {
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add("hide");
    main.classList.remove("hide");
    count=0;
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        //console.log("box was clicked");
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        count++;
        box.disabled = true;
        console.log(count);
        if(count === 9){
            drawCondition();
        }
        else{
            checkWinner();
        }
        
    });
});

const drawCondition = () => {
    msg.innerText = `DRAW`;
    msgContainer.classList.remove("hide");
    main.classList.add("hide");
    disableBoxes();
}

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    main.classList.add("hide");
    disableBoxes();
}

const checkWinner = () => {
    for(let pattern of winPatterns){

        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                //console.log("Winner", pos1val);
                showWinner(pos1val);
            }
        }
    }
}

newBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
