//Global Variables
//original global variables
//var human, computer, game;

var currentGame = {};

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
var alienData = document.querySelector("#alienPlayer");
var computerData = document.querySelector("#computerPlayer");

// Text changing
var headerText = document.querySelector("#headerText");


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

function renderGamePlay(game, view) {
  hide(view);
  hide(changeGameButton);
  display(gamePlayView);
  gamePlayView.innerHTML =
  `
  <img src="${game.humanPlayer.token.image}" alt="Drawing of a ${game.humanPlayer.token.name}">
  <img src="${game.compPlayer.token.image}" alt="Drawing of a ${game.compPlayer.token.name}">
  `
  setTimeout(function() {
    display(view)
    hide(gamePlayView)
    display(changeGameButton)
    renderPlayerData();
  }, 2000);
}

function renderPlayerData() {
    currentGame.checkForWinner();
    if (currentGame.winner === "human") {
      alienData.innerHTML =
      `
      <p>👽</p>
      <h3>Alien</h3>
      <p>Wins: ${currentGame.humanPlayer.wins}</p>
      `
    } else if (currentGame.winner === "computer") {
      computerData.innerHTML =
      `
      <p> 🖥 </p>
      <h3>Computer</h3>
      <p>Wins: ${currentGame.compPlayer.wins}</p>
      `
    }
}

function renderHeaderText() {
  return headerText.innerText = `Choose Your Fighter!`
}

function setGameType() {
  human = new Player("human", "", 0);
  computer = new Player();
  currentGame = new Game(human, computer, "");
  hide(gameChoice);
  renderHeaderText();
  if (event.target.closest("#classicCard")) {
    display(classicFighters);
    currentGame.gameType = "classic";
    //console.log(currentGame)
    // console.log(game)
    //try to figure out how to use this return value instead of global variables
    return
  } else {
    display(difficultFighters);
    currentGame.gameType = "difficult";
    //console.log(currentGame)
    //try to figure out how to use this return value instead of global variables
    return
  }
}

function reserveFighterChoice() {
  //updates the humanPlayer class + game class gametype
  currentGame.determineCompChoice();
  //console.log(currentGame.compPlayer)
  //computer.token = game.compPlayer.token;
  //console.log(game.compPlayer.token)
  //console.log(computer.token)
  if (event.target.closest("#rockIconClassic")) {
    //call takeTurn?
    currentGame.humanPlayer.token = currentGame.gameData[0];
    //computer.token = game.compPlayer.token;
    //console.log(computer.token)
    //game.determineCompChoice();
    // hide(classicFighters);
    // display(gamePlayView);
    renderGamePlay(currentGame, classicFighters);
  } else if (event.target.closest("#paperIconClassic")) {
    currentGame.humanPlayer.token = currentGame.gameData[1];
    //computer.token = game.compPlayer.token;
    //game.determineCompChoice();
    //hide(classicFighters);
    //display(gamePlayView);
    renderGamePlay(currentGame, classicFighters);
  } else if (event.target.closest("#scissorsIconClassic")) {
    currentGame.humanPlayer.token = currentGame.gameData[2];
    //computer.token = game.compPlayer.token;
    //game.determineCompChoice();
    //hide(classicFighters);
    //display(gamePlayView);
    renderGamePlay(currentGame, classicFighters);
  }
  //difficult fighter logic
    else if (event.target.closest("#rockIconDiff")) {
    currentGame.humanPlayer.token = currentGame.gameData[0];
    //computer.token = game.compPlayer.token;
    //console.log(computer.token)
    //game.determineCompChoice();
    // hide(classicFighters);
    // display(gamePlayView);
    renderGamePlay(currentGame, difficultFighters);
  } else if (event.target.closest("#paperIconDiff")) {
    currentGame.humanPlayer.token = currentGame.gameData[1];
    //computer.token = game.compPlayer.token;
    //console.log(computer.token)
    //game.determineCompChoice();
    // hide(classicFighters);
    // display(gamePlayView);
    renderGamePlay(currentGame, difficultFighters);
  } else if (event.target.closest("#scissorsIconDiff")) {
    currentGame.humanPlayer.token = currentGame.gameData[2];
    //computer.token = game.compPlayer.token;
    //console.log(computer.token)
    //game.determineCompChoice();
    // hide(classicFighters);
    // display(gamePlayView);
    renderGamePlay(currentGame, difficultFighters);
  } else if (event.target.closest("#alienIconDiff")) {
    currentGame.humanPlayer.token = currentGame.gameData[3];
    //computer.token = game.compPlayer.token;
    //console.log(computer.token)
    //game.determineCompChoice();
    // hide(classicFighters);
    // display(gamePlayView);
    renderGamePlay(currentGame, difficultFighters);
  } else if (event.target.closest("#computerIconDiff")) {
    currentGame.humanPlayer.token = currentGame.gameData[4];
    //computer.token = game.compPlayer.token;
    //console.log(computer.token)
    //game.determineCompChoice();
    // hide(classicFighters);
    // display(gamePlayView);
    renderGamePlay(currentGame, difficultFighters);
  }
}

function returnHome() {
  hide(classicFighters);
  hide(difficultFighters);
  display(gameChoice);
  hide(changeGameButton);
}
