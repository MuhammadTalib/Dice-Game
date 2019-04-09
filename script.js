var scores, totalscore, activeplayer, currentscore, play,attempt,winningrange;

init();

document.querySelector('#roll-dice').addEventListener('click', function () {

    if (play) {
        if(attempt===0){
            attempt=1;
            currentscore[0] = Math.floor(Math.random() * 6) + 1;
            currentscore[1] = Math.floor(Math.random() * 6) + 1;
            console.log(currentscore[0])
            console.log(currentscore[1])
            document.getElementById('dice-0').style.display = 'block';
            document.getElementById('dice-1').style.display = 'block';
            
            document.getElementById('dice-0').src = 'dice-' + currentscore[0] + '.png';
            document.getElementById('dice-1').src = 'dice-' + currentscore[1] + '.png';
            
           
            if(!(currentscore[0]===6 && currentscore[1]===6))
                 totalscore=currentscore[0]+currentscore[1];
            else
                 totalscore=0;
            
            document.querySelector('.curr-score-' + activeplayer).textContent = totalscore;
                
        }
        else{
            document.getElementById('player-'+activeplayer+'-score').textContent = 0;
            document.querySelector('.curr-score-'+activeplayer).textContent = 0;
            scores[activeplayer]=0;
            currentscore=[0,0];
            changeplayer();
        }
    }
})
document.querySelector('#hold').addEventListener('click', function () {
    if (play) {
        scores[activeplayer] += totalscore;
        document.getElementById('player-' + activeplayer + '-score').textContent = scores[activeplayer];
        if (scores[activeplayer] >= winningrange) {
            winner();
        } else
            changeplayer();
    }
})

function changeplayer() {
    currentscore = [0,0];
    totalscore = 0;
    attempt = 0;
    document.getElementById('activeness-' + activeplayer).style.visibility = 'hidden';
    activeplayer === 0 ? activeplayer = 1 : activeplayer = 0;
    document.getElementById('activeness-' + activeplayer).style.visibility = 'visible';
}

function winner() {
    document.getElementById('player_name_' + activeplayer).textContent = 'WINNER';
    document.getElementById('player_name_' + activeplayer).style.color = '#f00';
    play = 0;
}

document.getElementById('new-game').addEventListener('click', function () {
    document.getElementById('player_name_' + activeplayer).textContent = 'Player-' + activeplayer;
    document.getElementById('player_name_' + activeplayer).style.color = '#000';
    if (activeplayer === 1) {
        console.log(activeplayer);
        document.getElementById('activeness-0').style.visibility = 'visible';
    }
    
    document.getElementById('player-1-score').textContent = 0;
    document.getElementById('player-0-score').textContent = 0;
    document.querySelector('.curr-score-0').textContent = 0;
    document.querySelector('.curr-score-1').textContent = 0;
    init();
})

function init() {
    winningrange=100;
    currentscore = [0, 0];
    attempt=0;
    play = 1;
    totalscore = 0;
    scores = [0, 0];
    activeplayer = 0;
    document.getElementById('dice-0').style.display = 'none';
    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('activeness-1').style.visibility = 'hidden';
}

function rangechanged(value){
    winningrange=value;
}