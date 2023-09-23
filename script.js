var timer = 60;
var score = 0
var numb = 0;

function increaseScore(){
    score += 10
    document.querySelector("#updateScore").textContent = score
}
function generateRandomNumb(){
    numb = Math.floor(Math.random()*10)
    document.querySelector("#changeHit").textContent = numb
}
function makeBubble(){
    var clutter = ""
    for (var i=1;i<=168;i++){
        var randNumb = Math.floor(Math.random() * 10)
        clutter += `<div class="bubble">${randNumb}</div>`
    }
    document.querySelector(".bottom").innerHTML = clutter
}
function setTime(){
    var time = setInterval(function(){
        if (timer > 0){
            timer--;
            document.querySelector("#changeTime").textContent = timer
        }else{
            clearInterval(time)
            document.querySelector(".bottom").innerHTML = `<h1>Game Over</h1>`
            document.querySelector(".bottom").innerHTML += '<button id="restartButton" onclick="restartGame()">Restart Game</button>';
        }
    },1000)
}
function startGame(){
    generateRandomNumb();
    setTime();
    makeBubble()
    document.querySelector(".bottom").addEventListener("click",function(dets){
        var clickedNumber = Number(dets.target.textContent)
        if (clickedNumber === numb){
            increaseScore();
            makeBubble();
            generateRandomNumb();  
        }
    })
   
}
function restartGame() {
    timer = 60;
    score = 0;
    document.querySelector("#updateScore").textContent = score;
    document.querySelector("#changeTime").textContent = timer;
    document.querySelector(".bottom").innerHTML = "";
    startGame();
}


startGame();
