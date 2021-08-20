function Dice() {
    scores = [0, 0];
    activePlayer = [0];  
    roundScore = 0;
    gamePlaying = true;
    
    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-1').textContent = '0';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.add('active');
}
 document.querySelector('.btn-roll').addEventListener('click', function() {
    if(gamePlaying) {
        
        var dice = Math.floor(Math.random() * 6) + 1;
        var diceImage = document.querySelector('.dice');
        diceImage.style.display = 'block';
        diceImage.src = './assets/images/dice-' + dice + '.png';

        var dice2 = Math.floor(Math.random() * 6) + 1;
        var diceImage2 = document.querySelector('.dice2');
        var current = document.querySelector('#current-0');
        diceImage2.style.display = 'block';
        diceImage2.src = './assets/images/dice-' + dice2 + '.png';
     
        if (dice !== 1) {
            roundScore += dice += dice2;
           document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            nextPlayer();
        }
    }    
});

 

var scores, roundScore, activePlayer, gamePlaying;
Dice();
document.querySelector('.btn-hold').addEventListener("click", function() {
    if (gamePlaying) {
        scores[activePlayer] = roundScore;
        document.querySelector('#score-' + activePlayer).innerText = scores[activePlayer];

        if (scores[activePlayer] >= 100) {
            document.querySelector('#score-' + activePlayer).value = score[activePlayer];
            document.querySelector('#name-' + activePlayer).textContent = 'Ялагч!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;

           
        }
         else {
        nextPlayer();
    }
   
    }
});


function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.getElementById('current-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display = 'none';
}
    document.querySelector('.btn-new').addEventListener("click", Dice); 

    