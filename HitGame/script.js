var timer = 60;
var score = 0;
var hit;
function makeBubble() {
    let clutter = "";
    for (let i = 1; i <= 102; i++) {
        let rn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rn}</div>`;
    }
    document.getElementById('pbtm').innerHTML = clutter;
}

function runtime(){
    const st = setInterval(function(){
        timer --;
        postHit();
        document.getElementById('timer').textContent = timer;
        if(timer == 0){
            document.getElementById('pbtm').innerHTML = `<h1>Game Over! You Scored ${score}</h1>`;
            clearInterval(st);
        }
    },1000)
    
}

function getNewHit(){
    hit = Math.floor(Math.random() * 10);
    document.getElementById('hitval').textContent = hit;
}

function increseScore(){
    score += 10;
    document.getElementById('score').textContent = score;
}
function postHit(){
    document.getElementById('pbtm').addEventListener('click',(x) => {
       if(x.target.textContent == hit){
            increseScore();
            makeBubble();
            getNewHit();
       } 
    });
}
makeBubble();
getNewHit();
runtime();
