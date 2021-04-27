//Global Variables

var currentGame;

// Query Selectors
////Game Views
var classicFighters = document.querySelector("#classicFighters");
var difficultFighters = document.querySelector("#difficultFighters");
var gameChoice = document.querySelector("#gameChoice");
var gamePlayView = document.querySelector("#gamePlay");

// Button
var changeGameButton = document.querySelector("#changeGame");

// On page player data
var alienData = document.querySelector("#alienWins");
var computerData = document.querySelector("#computerWins");

// Text changing
var headerText = document.querySelector("#headerText");


// Event listeners
changeGameButton.addEventListener("click", returnHome);
classicFighters.addEventListener("click", reserveFighterChoice);
difficultFighters.addEventListener("click", function() {
  reserveFighterChoice(event)});
gameChoice.addEventListener("click", setGameType);
window.addEventListener("load", instantiateNewGame);


// Event Handlers
function hide(element) {
    element.classList.add("hidden");
}

function display(element) {
  element.classList.remove("hidden");
}

function renderHeaderText(word) {
  return headerText.innerText = `Choose Your ${word}!`
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
    currentGame.checkForWinner();
    renderPlayerData();
  }, 2000);
}

function renderPlayerData() {
  setLocalStorage();
  if (!currentGame.humanPlayer.wins && !currentGame.compPlayer.wins) {
    alienData.innerText = `Wins: 0`
    computerData.innerText = `Wins: 0`
  } else if (!currentGame.compPlayer.wins) {
    computerData.innerText = `Wins: 0`
    alienData.innerText = `Wins: ${currentGame.humanPlayer.wins}`
  } else if (!currentGame.humanPlayer.wins) {
    alienData.innerText = `Wins: 0`
    computerData.innerText = `Wins: ${currentGame.compPlayer.wins}`
  } else {
    alienData.innerText = `Wins: ${currentGame.humanPlayer.wins}`
    computerData.innerText = `Wins: ${currentGame.compPlayer.wins}`
 }
}

function setLocalStorage() {
    currentGame.humanPlayer.saveWinsToStorage();
    currentGame.compPlayer.saveWinsToStorage();
}

function instantiateNewGame() {
    human = new Player("human");
    computer = new Player();
    currentGame = new Game(human, computer);
    var humanWins = currentGame.humanPlayer.retrieveWinsFromStorage();
    var compWins = currentGame.compPlayer.retrieveWinsFromStorage();
    currentGame.humanPlayer.wins = humanWins;
    currentGame.compPlayer.wins = compWins;
    renderPlayerData();
}

function setGameType() {
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

function reserveFighterChoice(event) {
  currentGame.determineCompChoice();
  if (event.target.closest("#rockIconClassic")) {
    currentGame.humanPlayer.takeTurn(currentGame.gameData[0]);
    hide(headerText);
    renderGamePlay(currentGame, classicFighters);
  } else if (event.target.closest("#paperIconClassic")) {
    currentGame.humanPlayer.takeTurn(currentGame.gameData[1]);
    hide(headerText);
    renderGamePlay(currentGame, classicFighters);
  } else if (event.target.closest("#scissorsIconClassic")) {
    currentGame.humanPlayer.takeTurn(currentGame.gameData[2]);
    hide(headerText);
    renderGamePlay(currentGame, classicFighters);
  } else if (event.target.closest("#rockIconDiff")) {
    currentGame.humanPlayer.takeTurn(currentGame.gameData[0]);
    hide(headerText);
    renderGamePlay(currentGame, difficultFighters);
  } else if (event.target.closest("#paperIconDiff")) {
    currentGame.humanPlayer.takeTurn(currentGame.gameData[1]);
    hide(headerText);
    renderGamePlay(currentGame, difficultFighters);
  } else if (event.target.closest("#scissorsIconDiff")) {
    currentGame.humanPlayer.takeTurn(currentGame.gameData[2]);
    hide(headerText);
    renderGamePlay(currentGame, difficultFighters);
  } else if (event.target.closest("#alienIconDiff")) {
    currentGame.humanPlayer.takeTurn(currentGame.gameData[3]);
    hide(headerText);
    renderGamePlay(currentGame, difficultFighters);
  } else if (event.target.closest("#computerIconDiff")) {
    currentGame.humanPlayer.takeTurn(currentGame.gameData[4]);
    hide(headerText);
    renderGamePlay(currentGame, difficultFighters);
  }
}

function returnHome() {
  hide(classicFighters);
  hide(difficultFighters);
  display(gameChoice);
  display(headerText);
  hide(changeGameButton);
  currentGame.resetGame();
  renderPlayerData();
  renderHeaderText("Game");
}
