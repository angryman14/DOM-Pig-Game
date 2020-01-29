var scores = [0, 0];  //Array for holding the Global Scores of the 2 Players.
var roundScore = 0;  //variable to hold the round score of the current player.
var activePlayer = 0;  //variable to hold the current active player 0-player1 1-player2.
var gotAWinner = 0; // do we have a winner ?


//DOM Manipulation- document Object: Object that gives us access to the DOM

// hiding the dice image(we dont want the image to be present always unless we hit roll dice)
document.querySelector('.dice').style.display = 'none';

// Setting up event handler when new game buton is clicked
document.querySelector('.btn-new').addEventListener('click', function () {
    //When a new game starts all the scores are set to 0;
    activePlayer = 0;
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    //Hiding the dice when New Game
    document.querySelector('.dice').style.display = 'none';
    //setting up event handler for Roll Dice button click
    document.querySelector('.btn-roll').addEventListener('click', function () {
        //Roll Dice should not work if we have a winner
        if(gotAWinner === 0) {
            //to get the random number on dice between 1 and 6.
        var dice = Math.floor(Math.random() * 6) + 1;

        //display the correct dice no
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        // changing the src of the img element dynamically
        diceDOM.src = 'dice-' + dice + '.png';

        //update the round score if the rolled number is NOT a 1
        if (dice !== 1) {
            //Add Score
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            //Next Player
            nextPlayer();
            }
        }
        
    });

    document.querySelector('.btn-hold').addEventListener('click', function () {
        // No use of Hold button with current score 0
        if(roundScore!==0 && gotAWinner === 0) {
            //Add CURRENT score to the GLOBAL score
        scores[activePlayer] += roundScore;
    
        //UPDATE the GLOBAL Score
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    
        //Check if the Player Won
        if(scores[activePlayer]>=10 ){
            gotAWinner = 1;
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
        }
        else {
            //NextPlayer
            nextPlayer();
        }
        }
        
    
    });

});



//NextPlayer Function DRY
function nextPlayer() {
    document.getElementById('current-' + activePlayer).textContent = '0';
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    // Toggle html clasess on the go
   document.querySelector('.player-0-panel').classList.toggle('active');
   document.querySelector('.player-1-panel').classList.toggle('active');

   //when 1 is rolled the image should disappear
   document.querySelector('.dice').style.display = 'none';
}

