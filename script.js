let main = document.querySelector("main");
let boxes = document.querySelectorAll(".box");
let resetGame = document.querySelector("#reset-game");
let newGame = document.querySelector("#new-game");
let winnigMsg = document.querySelector(".winning-msg");
let winMsg = document.querySelector(".win-msg");
let drawGame = document.querySelector(".draw-game")
let drawMsg = document.querySelector(".draw-msg")

let turnX = true;

const winningPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnX) {
            box.innerText = "X";
            turnX = false;
        } else {
            box.innerText = "O";
            turnX = true;
        }
        box.disabled = true;
        checkWinner()
    });
});

const showWinner = (winner) => {
    winMsg.innerText = `Player ${winner} won the game.`;
    winnigMsg.classList.remove("hide");
    main.classList.add("hide");
    disableBoxes();
}

const checkWinner = () => {
    for(let pattern of winningPattern){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 !== "" && pos2 !== "" && pos3 !== ""){
            if (pos1 === pos2 && pos2 === pos3){
                showWinner(pos1);
            }
        }
    }
};

let restartGame = () => {
    turnX = true;
    enableBoxes();
    winnigMsg.classList.add("hide");
    main.classList.remove("hide");
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

resetGame.addEventListener("click", restartGame);
newGame.addEventListener("click", restartGame);