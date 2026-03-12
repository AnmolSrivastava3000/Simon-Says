let gameSeq = [];
let userSeq = [];
let btns = ["red", "green", "orange", "blue"];
let started = false;
let level = 0;

let h2 = document.querySelector("#level-title");
let allBtns = document.querySelectorAll(".btn");
let startBtn = document.querySelector("#start-btn");
let shareBtn = document.querySelector("#share-btn");

// Function to generate game sounds
function playSound(color) {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    // Different pitch for each button
    const frequencies = { red: 261.6, green: 329.6, orange: 392.0, blue: 523.3, error: 150 };
    oscillator.frequency.setValueAtTime(frequencies[color] || 200, audioCtx.currentTime);
    
    oscillator.type = 'square';
    gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.5);

    oscillator.start();
    oscillator.stop(audioCtx.currentTime + 0.5);
}

function startGame() {
    if (!started) {
        started = true;
        startBtn.style.display = "none";
        shareBtn.style.display = "none";
        levelUp();
    }
}

startBtn.addEventListener("click", startGame);
document.addEventListener("keydown", startGame);

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(() => btn.classList.remove("flash"), 400);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(() => btn.classList.remove("userflash"), 200);
}

function playSequence() {
    let i = 0;
    document.body.style.pointerEvents = "none"; 
    
    let interval = setInterval(() => {
        let randColor = gameSeq[i];
        let randBtn = document.querySelector(`#${randColor}`);
        gameFlash(randBtn);
        playSound(randColor);
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
    gameSeq = []; 

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
        playSound("error");
        h2.innerHTML = `Game Over! Score: <b>${level}</b>`;
        
        // Setup Share Button
        shareBtn.style.display = "inline-block";
        let tweetText = `I reached Level ${level} on Simon Says! 🎮 Can you beat me?`;
        shareBtn.onclick = () => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`, "_blank");

        startBtn.innerText = "Restart Game";
        startBtn.style.display = "inline-block";
        document.body.style.backgroundColor = "#ffcccc";
        setTimeout(() => document.body.style.backgroundColor = "white", 200);
        reset();
    }
}

function btnPress() {
    if (!started) return;
    let btn = this;
    userFlash(btn);
    let color = btn.getAttribute("id");
    playSound(color);
    userSeq.push(color);
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
