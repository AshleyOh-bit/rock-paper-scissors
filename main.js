//Global Variables
var human, computer, game;

// Query Selectors
////Game Views
var gameChoice = document.querySelector("#gameChoice");
var classicFighters = document.querySelector("#classicFighters");
var difficultFighters = document.querySelector("#difficultFighters");
var gamePlayView = document.querySelector("#gamePlay");

//// Icons
var rockIconClassic = document.querySelector("#rockIconClassic");
var paperIconClassic = document.querySelector("#paperIconClassic");
var scissorsIconClassic = document.querySelector("#scissorsIconClassic");

var rockIconDiff = document.querySelector("#rockIconDiff");
var paperIconDiff = document.querySelector("#paperIconDiff");
var scissorsIconDiff = document.querySelector("#scissorsIconDiff");
var alienIconDiff = document.querySelector("#alienIconDiff");
var computerIconDiff = document.querySelector("#computerIconDiff");

// Button
var changeGameButton = document.querySelector("#changeGame");

// On page player data
// var alienData = document.querySelector("#alienPlayer");


// Event listeners
gameChoice.addEventListener("click", setGameType);
classicFighters.addEventListener("click", reserveFighterChoice);
difficultFighters.addEventListener("click", reserveFighterChoice);
changeGameButton.addEventListener("click", returnHome)

// Event Handlers
function hide(element) {
  if (element === changeGameButton) {
    element.classList.add("invisible")
  } else {
    element.classList.add("hidden");
  }
}

function display(element) {
  element.classList.remove("hidden");
  element.classList.remove("invisible");
}



// function reveal(element) {
//   element.classList.remove("invisible");
// }

function renderGamePlay(player1, player2, view) {
  hide(view);
  hide(changeGameButton);
  display(gamePlayView);
  gamePlayView.innerHTML =
  `
  <img src="${player1.token.image}" alt="Drawing of a ${player1.token.name}">
  <img src="${player2.token.image}" alt="Drawing of a ${player2.token.name}">
  `
  setTimeout(function() {
    display(view)
    hide(gamePlayView)
    display(changeGameButton)
  }, 2000);
}


function setGameType() {
  human = new Player("human", "", 0);
  computer = new Player();
  game = new Game(human, computer, "");
  hide(gameChoice);
  if (event.target.closest("#classicCard")) {
    display(classicFighters);
    game.gameType = "classic";
    // console.log(game)
    //try to figure out how to use this return value instead of global variables
    return [human, computer, game];
  } else {
    display(difficultFighters);
    game.gameType = "difficult";
    //try to figure out how to use this return value instead of global variables
    return [human, computer, game];
  }
}

function reserveFighterChoice() {
  //updates the humanPlayer class + game class gametype
  game.determineCompChoice();
  computer.token = game.compPlayer.token;
  //console.log(game.compPlayer.token)
  //console.log(computer.token)
  if (event.target.closest("#rockIconClassic")) {
    human.token = game.gameData.classic[0];
    //computer.token = game.compPlayer.token;
    //console.log(computer.token)
    //game.determineCompChoice();
    // hide(classicFighters);
    // display(gamePlayView);
    renderGamePlay(human, computer, classicFighters);
  } else if (event.target.closest("#paperIconClassic")) {
    human.token = game.gameData.classic[1];
    //computer.token = game.compPlayer.token;
    //game.determineCompChoice();
    //hide(classicFighters);
    //display(gamePlayView);
    renderGamePlay(human, computer, classicFighters);
  } else if (event.target.closest("#scissorsIconClassic")) {
    human.token = game.gameData.classic[2];
    //computer.token = game.compPlayer.token;
    //game.determineCompChoice();
    //hide(classicFighters);
    //display(gamePlayView);
    renderGamePlay(human, computer, classicFighters);
  }
  //difficult fighter logic
    else if (event.target.closest("#rockIconDiff")) {
    human.token = game.gameData.difficult[0];
    //computer.token = game.compPlayer.token;
    //console.log(computer.token)
    //game.determineCompChoice();
    // hide(classicFighters);
    // display(gamePlayView);
    renderGamePlay(human, computer, difficultFighters);
  } else if (event.target.closest("#paperIconDiff")) {
    human.token = game.gameData.difficult[1];
    //computer.token = game.compPlayer.token;
    //console.log(computer.token)
    //game.determineCompChoice();
    // hide(classicFighters);
    // display(gamePlayView);
    renderGamePlay(human, computer, difficultFighters);
  } else if (event.target.closest("#scissorsIconDiff")) {
    human.token = game.gameData.difficult[2];
    //computer.token = game.compPlayer.token;
    //console.log(computer.token)
    //game.determineCompChoice();
    // hide(classicFighters);
    // display(gamePlayView);
    renderGamePlay(human, computer, difficultFighters);
  } else if (event.target.closest("#alienIconDiff")) {
    human.token = game.gameData.difficult[3];
    //computer.token = game.compPlayer.token;
    //console.log(computer.token)
    //game.determineCompChoice();
    // hide(classicFighters);
    // display(gamePlayView);
    renderGamePlay(human, computer, difficultFighters);
  } else if (event.target.closest("#computerIconDiff")) {
    human.token = game.gameData.difficult[4];
    //computer.token = game.compPlayer.token;
    //console.log(computer.token)
    //game.determineCompChoice();
    // hide(classicFighters);
    // display(gamePlayView);
    renderGamePlay(human, computer, difficultFighters);
  }
}

function returnHome() {
  hide(classicFighters);
  hide(difficultFighters);
  display(gameChoice);
  hide(changeGameButton);
}
