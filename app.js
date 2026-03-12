let gameSeq = [];
let userSeq = [];
let btns = ["red", "green", "orange", "blue"];
let started = false;
let level = 0;

let h2 = document.querySelector("#level-title");
let allBtns = document.querySelectorAll(".btn");

document.addEventListener("keydown", function() {
    if (!started) {
        started = true;
        levelUp();
    }
});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(() => btn.classList.remove("flash"), 400);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(() => btn.classList.remove("userflash"), 250);
}

function playSequence() {
    let i = 0;
    document.body.style.pointerEvents = "none"; 
    
    let interval = setInterval(() => {
        let randColor = gameSeq[i];
        let randBtn = document.querySelector(`#${randColor}`);
        gameFlash(randBtn);
        i++;
        if (i >= gameSeq.length) {
            clearInterval(interval);
            document.body.style.pointerEvents = "all";
        }
    }, 800);
}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    // Start fresh: No memory of previous levels
    gameSeq = []; 

    // Generate a completely new pattern for this level
    for (let i = 0; i < level; i++) {
        let randIdx = Math.floor(Math.random() * 4);
        gameSeq.push(btns[randIdx]);
    }

    setTimeout(playSequence, 500);
}

function checkAns(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length === gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        h2.innerHTML = `Game Over! Score: <b>${level}</b><br>Press any key to restart.`;
        document.body.style.backgroundColor = "#ffcccc";
        setTimeout(() => document.body.style.backgroundColor = "white", 200);
        reset();
    }
}

function btnPress() {
    if (!started) return;
    let btn = this;
    userFlash(btn);
    userSeq.push(btn.getAttribute("id"));
    checkAns(userSeq.length - 1);
}

for (let btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}