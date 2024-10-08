// 1) Define the required variables used to track the state of the game.

// 2) Store cached element references.

// 3) Upon loading, the game state should be initialized, and a function should 
//    be called to render this game state.

// 4) The state of the game should be rendered to the user.

// 5) Handle the game over logic. 

// 6) Handle each instance of a player clicking a button with the use of a 
//    `handleClick()` function.

// 7) Create reset functionality.

/*-------------------------------- Constants --------------------------------*/
const state = {
    boredom: 0,
    hunger: 0,
    sleepiness: 0,
};


/*---------------------------- Variables (state) ----------------------------*/
let timer;
let gameOver;


/*------------------------ Cached Element References ------------------------*/
const boredomStatEl = document.querySelector('boredom-stat');
const hungerStatEl = document.querySelector('hunger-stat');
const sleepinessStatEl = document.querySelector('sleepiness-stat');

const playBtnEl = document.querySelector('#play');
const feedBtnEl = document.querySelector('#feed');
const sleepBtnEl = document.querySelector('#sleep');

const gameMessageEl = document.querySelector('#game');
const resetBtnEl = document.querySelector('#reset')

/*-------------------------------- Functions --------------------------------*/
function init() {
    console.log('initialized');
gameOver = false
timer = setInterval(runGame, '2000');
}

function runGame() {
    console.log('the game is running!'); 
}

function render() {

}

function updateStates() {
    
}
/*----------------------------- Event Listeners -----------------------------*/

init();

render();