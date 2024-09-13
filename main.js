const player1 = document.querySelector(".player-1")
const player2 = document.querySelector(".player-2")
const winner = document.querySelector(".winner")
const btn1 = document.querySelector(".btn-1")
const btn2 = document.querySelector(".btn-2")

let playerOneClick = 0;
let playerTwoClick = 0;
let player1Total = 0;
let player2Total = 0;
const maxClick = 5;

function random() {
    const randomNum = Math.floor(Math.random() * (10 - 1)) + 1;
    return randomNum;
}

function compareScore() {
    if (player1Total > player2Total) {
        winner.textContent="player-1 is the winner"
    } else if (player2Total > player1Total) {
        winner.textContent="player-2 is the winner"
    } else {
        "it's a tie !!"
    }
}


btn1.addEventListener("click", (e) => {
    playerOneClick++
    if (playerOneClick <= maxClick) {
        const num = random();
        player1Total += num;
        player1.textContent = player1Total;
        // playerOneClick++
    } 
    if (playerOneClick === maxClick && playerTwoClick === maxClick) {
        compareScore()
    }
    if (playerOneClick >= maxClick) {
        btn1.setAttribute("disabled","disabled")
    }

})
btn2.addEventListener("click", (e) => {
    playerTwoClick++
    if (playerTwoClick <= maxClick) {
        const num = random();
        player2Total += num;
        player2.textContent = player2Total;
        // playerTwoClick++
    }
    if (playerOneClick === maxClick && playerTwoClick === maxClick) {
        compareScore()
    }
    if (playerTwoClick >= maxClick) {
        btn2.setAttribute("disabled", "disabled")
    }
})