/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var img, scorePlayers, currentPlayer, roundScore, gamePlaying;
init();
// button  roll click 
document.querySelector('.btn-roll').addEventListener('click', function () {
    if (gamePlaying) {
        var dice = Math.floor(Math.random() * 6) + 1;

        img.style.display = 'block';
        img.src = 'dice-' + dice + '.png';
        if (dice !== 1) {
            roundScore += dice;
            document.querySelector('#current-' + currentPlayer).textContent = roundScore;
        } else {
            nextPlayer();
        }
    }
})
// buttom hold click 
document.querySelector('.btn-hold').addEventListener('click', function () {
    if (gamePlaying) {
        scorePlayers[currentPlayer] += roundScore;
        document.querySelector('#score-' + currentPlayer).textContent = scorePlayers[currentPlayer];

        if (scorePlayers[currentPlayer] >= 20) {
            document.querySelector('#name-' + currentPlayer).textContent = "Winner";
            document.querySelector('.player-' + currentPlayer + '-panel').classList.remove('active');
            document.querySelector('.player-' + currentPlayer + '-panel').classList.add('winner');
            img.style.display = 'none';
            gamePlaying = false;
        } else {
            nextPlayer();
        }
    }
})
// button new game 
document.querySelector('.btn-new').addEventListener('click', init);
// function next player 
function nextPlayer() {

    roundScore = 0;
    currentPlayer === 0 ? currentPlayer = 1 : currentPlayer = 0;
    document.querySelector('#current-0').textContent = 0;
    document.querySelector('#current-1').textContent = 0;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    img.style.display = 'none';
}
// function initialize
function init() {

    // initialize values 
    scorePlayers = [0, 0];
    currentPlayer = 0;
    roundScore = 0;
    gamePlaying = true;
    img = document.querySelector('.dice');
    // set player 1 active class 
    document.querySelector('#name-0').textContent = "Player 1";
    document.querySelector('#name-1').textContent = "Player 2";
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector("img[class ='dice']").style.display = "none";
    document.querySelector('#score-0').textContent = 0;
    document.querySelector('#score-1').textContent = 0;
    document.querySelector('#current-0').textContent = 0;
    document.querySelector('#current-1').textContent = 0;

}