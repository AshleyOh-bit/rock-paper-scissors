//Global Variables

var currentGame;

// Query Selectors
////Game Views
var fighterChoiceView = document.querySelector("#fighterChoice");
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
fighterChoiceView.addEventListener("click", function() {
  reserveFighterChoice(event)});
gameChoice.addEventListener("click", function() {
  setGameType(event)});
window.addEventListener("load", instantiateNewGame);


// Event Handlers
// Hide/Display Functions
function hide(element) {
    element.classList.add("hidden");
}

function display(element) {
  element.classList.remove("hidden");
}

// Rendering Functions
function renderHeaderText(word) {
  return headerText.innerText = `Choose Your ${word}!`
}

function renderGamePlay() {
  hide(headerText);
  hide(fighterChoiceView);
  hide(changeGameButton);
  display(gamePlayView);
  gamePlayView.innerHTML =
  `
  <img src="${currentGame.humanPlayer.token.image}" alt="Drawing of a ${currentGame.humanPlayer.token.name}">
  <img src="${currentGame.compPlayer.token.image}" alt="Drawing of a ${currentGame.compPlayer.token.name}">
  `
  setTimeout(function() {
    display(fighterChoiceView)
    hide(gamePlayView)
    display(changeGameButton)
    currentGame.checkForWinner();
    renderPlayerData();
  }, 2000);
}

function renderGameView(num) {
  fighterChoiceView.innerHTML = "";
  for (var i = 0; i < num; i++) {
    fighterChoiceView.innerHTML +=
      `
      <img id="${currentGame.gameData[i].name}" class="icon" src="${currentGame.gameData[i].image}" alt="Drawing of a ${currentGame.gameData[i].name}">
      `
    }
}

function renderPlayerData() {
    alienData.innerText = `Wins: ${currentGame.humanPlayer.wins}`
    computerData.innerText = `Wins: ${currentGame.compPlayer.wins}`
    setLocalStorage();
}

function setLocalStorage() {
  currentGame.humanPlayer.saveWinsToStorage();
  currentGame.compPlayer.saveWinsToStorage();
}

function getLocalStorage() {
  var humanWins = currentGame.humanPlayer.retrieveWinsFromStorage();
  var compWins = currentGame.compPlayer.retrieveWinsFromStorage();
  currentGame.humanPlayer.wins = humanWins;
  currentGame.compPlayer.wins = compWins;
}

function instantiateNewGame() {
  var human = new Player("human");
  var computer = new Player();
  currentGame = new Game(human, computer);
  getLocalStorage();
  renderPlayerData();
}

function setGameType(event) {
  hide(gameChoice);
  renderHeaderText("Fighter");
  if (event.target.closest("#classicCard")) {
    fighterChoiceView.classList.remove("difficult-fighters");
    renderGameView(3)
    display(fighterChoiceView);
    currentGame.gameType = "classic";
    return
  } else if (event.target.closest("#difficultCard")){
    fighterChoiceView.classList.add("difficult-fighters");
    renderGameView(5)
    display(fighterChoiceView);
    currentGame.gameType = "difficult";
    return
  }
}

function reserveFighterChoice(event) {
  currentGame.determineCompChoice();
  if (event.target.closest("#rock")) {
    currentGame.humanPlayer.takeTurn(currentGame.gameData[0]);
    renderGamePlay();
  } else if (event.target.closest("#paper")) {
    currentGame.humanPlayer.takeTurn(currentGame.gameData[1]);
    renderGamePlay();
  } else if (event.target.closest("#scissors")) {
    currentGame.humanPlayer.takeTurn(currentGame.gameData[2]);
    renderGamePlay();
  } else if (event.target.closest("#alien")) {
    currentGame.humanPlayer.takeTurn(currentGame.gameData[3]);
    renderGamePlay();
  } else if (event.target.closest("#computer")) {
    currentGame.humanPlayer.takeTurn(currentGame.gameData[4]);
    renderGamePlay();
  }
}

function returnHome() {
  hide(fighterChoiceView);
  display(gameChoice);
  display(headerText);
  hide(changeGameButton);
  currentGame.resetGame();
  renderPlayerData();
  renderHeaderText("Game");
}
