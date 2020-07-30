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
console.log(message)

//************************************************BUILDING GAME LOGIC******************************************************

//1. Attach event listener to button that randomly selects number between 1-6
let roll = rollBtn.addEventListener('click', function(){
    //console.log('button clicked')
    const randomNumber = Math.floor(Math.random()*7)
    //console.log(randomNumber)

    //2. Determine which player is playing 
    if (player1Turn){
        console.log('Player1 rolled a ' + randomNumber)
    }else {
        console.log('Player2 rolled a ' + randomNumber)}   
   
    //3. Switch players. !player1Turn flips the boolean value 
    player1Turn = !player1Turn   


    
      
    
})

