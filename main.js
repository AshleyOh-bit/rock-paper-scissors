//Global Variables

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
var alienData = document.querySelector("#alienWins");
var computerData = document.querySelector("#computerWins");

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

//Refactor these two functions into one
function renderPlayerData() {
    alienData.innerText =`Wins: ${currentGame.humanPlayer.wins}`
    computerData.innerText = `Wins: ${currentGame.compPlayer.wins}`
    currentGame.checkForWinner();
    if (currentGame.winner === "human") {
      alienData.innerText =`Wins: ${currentGame.humanPlayer.wins}`
    } else if (currentGame.winner === "computer") {
      computerData.innerText = `Wins: ${currentGame.compPlayer.wins}`
    }
}

function renderHeaderText(word) {
  return headerText.innerText = `Choose Your ${word}!`
}

function setGameType() {
  human = new Player("human", "", 0);
  computer = new Player();
  currentGame = new Game(human, computer, "");
  hide(gameChoice);
  renderHeaderText("Fighter");
  if (event.target.closest("#classicCard")) {
    display(classicFighters);
    currentGame.gameType = "classic";
    return
  } else {
    display(difficultFighters);
    currentGame.gameType = "difficult";
    return
  }
}

function reserveFighterChoice() {
  currentGame.determineCompChoice();
  if (event.target.closest("#rockIconClassic")) {
    currentGame.humanPlayer.takeTurn(currentGame.gameData[0]);
    renderGamePlay(currentGame, classicFighters);
  } else if (event.target.closest("#paperIconClassic")) {
    currentGame.humanPlayer.takeTurn(currentGame.gameData[1]);
    renderGamePlay(currentGame, classicFighters);
  } else if (event.target.closest("#scissorsIconClassic")) {
    currentGame.humanPlayer.takeTurn(currentGame.gameData[2]);
    renderGamePlay(currentGame, classicFighters);
  }
    else if (event.target.closest("#rockIconDiff")) {
    currentGame.humanPlayer.takeTurn(currentGame.gameData[0]);
    renderGamePlay(currentGame, difficultFighters);
  } else if (event.target.closest("#paperIconDiff")) {
    currentGame.humanPlayer.takeTurn(currentGame.gameData[1]);
    renderGamePlay(currentGame, difficultFighters);
  } else if (event.target.closest("#scissorsIconDiff")) {
    currentGame.humanPlayer.takeTurn(currentGame.gameData[2]);
    renderGamePlay(currentGame, difficultFighters);
  } else if (event.target.closest("#alienIconDiff")) {
    currentGame.humanPlayer.takeTurn(currentGame.gameData[3]);
    renderGamePlay(currentGame, difficultFighters);
  } else if (event.target.closest("#computerIconDiff")) {
    currentGame.humanPlayer.takeTurn(currentGame.gameData[4]);
    renderGamePlay(currentGame, difficultFighters);
  }
}

function returnHome() {
  hide(classicFighters);
  hide(difficultFighters);
  display(gameChoice);
  hide(changeGameButton);
  currentGame.resetGame();
  renderPlayerData();
  renderHeaderText("Game");
}
