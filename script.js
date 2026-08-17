<<<<<<< HEAD
let boxes = document.querySelectorAll(".box");
let resetbtn = document.getElementById("reset");
let Replay = document.querySelector("#newBtn");
let showMsg = document.querySelector(".msg");
let msg = document.querySelector("#msg");
let turnO = true;
let gameOver = false;


const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (gameOver) return;
        console.log("box was clicked");
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        }
        else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const showWinner = (winner) => {
    msg.innerText = `congratulationssss winner is ${winner}`;
    showMsg.classList.remove("hide");
};
const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 !== "" && pos1 === pos2 && pos2 === pos3) {
            console.log("Winner ", pos1);
            gameOver = true;
            showWinner(pos1);
        }
    }
};
const resetGame = () => {
    turnO = true;
    gameOver = false;

    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });
    showMsg.classList.add("hide");

};

Replay.addEventListener("click", resetGame);
=======
let boxes = document.querySelectorAll(".box");
let resetbtn = document.getElementById("reset");
let newGame = document.querySelector("#newBtn");
let showMsg = document.querySelector(".msg");
let msg = document.querySelector("#msg");
let turnO = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach((box) => { 
    box.addEventListener("click", () =>{
        console.log("box was clicked");
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const showWinner = (winner) => {
    msg.innerText = `congratulationssss winner is ${winner}`;
    showMsg.classList.remove("hide");
};
const checkWinner = () => {
    for(let pattern of winPatterns){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 !=="" && pos1 === pos2 && pos2 === pos3){
            console.log("Winner " , pos1);
            showWinner(pos1);
        }
    }
};
>>>>>>> b85cbc8cebc43d756ed9536256be9bba24e7d03f
