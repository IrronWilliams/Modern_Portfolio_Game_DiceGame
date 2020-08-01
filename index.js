/*create variables for the game state. Need to keep track of these */
let player1Score = 0
let player2Score = 0
let player1Turn = true

/*Create variables to store references to the necessary DOM nodes
(Elements that need to be updated to show progress during the game) */
const player1Scoreboard = document.getElementById('player1Scoreboard')
const player2Scoreboard = document.getElementById('player2Scoreboard')
const player1Dice = document.getElementById('player1Dice')
const player2Dice = document.getElementById('player2Dice')
const message = document.getElementById('message')
const rollBtn = document.getElementById('rollBtn')
const resetBtn = document.getElementById('resetBtn')
//console.log(message)

//************************************************BUILDING GAME LOGIC******************************************************

//4A. Making code DRY by creating a function to display button. 
function showDisplayButton() {
    rollBtn.style.display = 'none'
    resetBtn.style.display = 'block'
}

//1. Attach event listener to button that randomly selects number between 1-6
rollBtn.addEventListener('click', function() {
    //console.log('button clicked')
    const randomNumber = Math.floor(Math.random()*7)
    //console.log(randomNumber)

    //2.  Determine which player is playing and populate. 
    //2A. Update the dice with the random number
    /*2B. Update the active class to indicate which player is playing. The active class defaults to player1. Need to remove
    active class from player1 then add to player2. Stopping here will keep the active class on player2. So need to apply same
    steps in the else statement for player2.  */  
    if (player1Turn) {
        //console.log('Player1 rolled a ' + randomNumber)
        player1Dice.textContent = randomNumber
        player1Dice.classList.remove('active')
        player2Dice.classList.add('active')
        message.textContent = 'Player 2 Turn'
        player1Score += randomNumber
        player1Scoreboard.textContent = player1Score  
    } else {
       //console.log('Player2 rolled a ' + randomNumber) 
       player2Dice.textContent = randomNumber
       player2Dice.classList.remove('active')
       player1Dice.classList.add('active')
       message.textContent = 'Player 1 Turn'
       player2Score += randomNumber
       player2Scoreboard.textContent = player2Score
    }
    
    /*4. 
    Check if a player has won. If so, change the message to "Player X has won!". Need to create variables for each player 
    total score. Hide the Roll Dice Button and show the Reset Button. Hint: use display none/block.  This code is not DRY.
    Can update by creating a function to display the button. 
    */
//    if (player1Score >=20) {
//     message.textContent = 'Player 1 Wins!'
//     rollBtn.style.display = 'none'
//     resetBtn.style.display = 'block'

//    } else if(player2Score >=20) {
//     message.textContent = 'Player 2 Wins!'
//     rollBtn.style.display = 'none'
//     resetBtn.style.display = 'block'
//     }

    //4A. Making code DRY
    if (player1Score >=20) {
        message.textContent = 'Player 1 Wins!'
        showDisplayButton()
    
    }   else if(player2Score >=20) {
        message.textContent = 'Player 2 Wins!'
        showDisplayButton()
    }
      
    
    //3. Switch players. !player1Turn flips the boolean value 
    player1Turn = !player1Turn

})

    /*
    5. Reset Game:
    Hook a click event listener up with the Reset Button
    Create a reset() function that resets the game
    Invoke the reset() function when the Reset Button is clicked
    */

    resetBtn.addEventListener('click', function(){
        resetGame()
        
    })

    function resetGame(){
        message.textContent = "Player 1 Turn"
        player1Scoreboard.textContent = 0
        player2Scoreboard.textContent = 0
        player1Dice.textContent = '-'
        player2Dice.textContent = '-'
        player1Score = 0
        player2Score = 0
        player1Turn = true
        resetBtn.style.display = "none"
        rollBtn.style.display = "block"
        player2Dice.classList.remove("active")
        player1Dice.classList.add("active")
    }