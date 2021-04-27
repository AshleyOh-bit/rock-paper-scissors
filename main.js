//Global Variables

var currentGame;

// Query Selectors
////Game Views
var classicFighters = document.querySelector("#classicFighters");
var difficultFighters = document.querySelector("#difficultFighters");
var gameChoice = document.querySelector("#gameChoice");
var gamePlayView = document.querySelector("#gamePlay");

var fighterChoiceView = document.querySelector("#fighterChoice");

// Button
var changeGameButton = document.querySelector("#changeGame");

// On page player data
var alienData = document.querySelector("#alienWins");
var computerData = document.querySelector("#computerWins");

// Text changing
var headerText = document.querySelector("#headerText");


// Event listeners
changeGameButton.addEventListener("click", returnHome);
fighterChoiceView.addEventListener("click", reserveFighterChoice);
//classicFighters.addEventListener("click", reserveFighterChoice);
//difficultFighters.addEventListener("click", function() {
  //reserveFighterChoice(event)
//});
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

function renderGameView(gameView, num) {
  gameView.innerHTML = "";
  for (var i = 0; i < num; i++) {
    gameView.innerHTML +=
      `
      <img id="${currentGame.gameData[i].name}" class="icon" src="${currentGame.gameData[i].image}" alt="Drawing of a ${currentGame.gameData[i].name}">
      `
    }
}

function renderGamePlay(game, view) {
  hide(view);
  //console.log(game.humanPlayer.token.image)
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

function getLocalStorage() {
  var humanWins = currentGame.humanPlayer.retrieveWinsFromStorage();
  var compWins = currentGame.compPlayer.retrieveWinsFromStorage();
  currentGame.humanPlayer.wins = humanWins;
  currentGame.compPlayer.wins = compWins;
}

function instantiateNewGame() {
    human = new Player("human");
    computer = new Player();
    currentGame = new Game(human, computer);
    getLocalStorage();
    renderPlayerData();
}

function setGameType() {
  hide(gameChoice);
  renderHeaderText("Fighter");
  if (event.target.closest("#classicCard")) {
    display(fighterChoiceView);
    currentGame.gameType = "classic";
    fighterChoiceView.classList.remove("difficult-fighters");
    renderGameView(fighterChoiceView, 3)
    return
  } else if (event.target.closest("#difficultCard")){
    display(fighterChoiceView);
    currentGame.gameType = "difficult";
    fighterChoiceView.classList.add("difficult-fighters");
    renderGameView(fighterChoiceView, 5)
    return
  }
}

function reserveFighterChoice(event) {
  currentGame.determineCompChoice();
  if (event.target.closest("#rock")) {
    currentGame.humanPlayer.takeTurn(currentGame.gameData[0]);
    hide(headerText);
    renderGamePlay(currentGame, fighterChoiceView);
  } else if (event.target.closest("#paper")) {
    currentGame.humanPlayer.takeTurn(currentGame.gameData[1]);
    hide(headerText);
    renderGamePlay(currentGame, fighterChoiceView);
  } else if (event.target.closest("#scissors")) {
    currentGame.humanPlayer.takeTurn(currentGame.gameData[2]);
    hide(headerText);
    renderGamePlay(currentGame, fighterChoiceView);
  // } else if (event.target.closest("#rockIconDiff")) {
  //   currentGame.humanPlayer.takeTurn(currentGame.gameData[0]);
  //   hide(headerText);
  //   renderGamePlay(currentGame, difficultFighters);
  // } else if (event.target.closest("#paperIconDiff")) {
  //   currentGame.humanPlayer.takeTurn(currentGame.gameData[1]);
  //   hide(headerText);
  //   renderGamePlay(currentGame, difficultFighters);
  // } else if (event.target.closest("#scissorsIconDiff")) {
  //   currentGame.humanPlayer.takeTurn(currentGame.gameData[2]);
  //   hide(headerText);
  //   renderGamePlay(currentGame, difficultFighters);
  } else if (event.target.closest("#alien")) {
    currentGame.humanPlayer.takeTurn(currentGame.gameData[3]);
    hide(headerText);
    renderGamePlay(currentGame, fighterChoiceView);
  } else if (event.target.closest("#computer")) {
    currentGame.humanPlayer.takeTurn(currentGame.gameData[4]);
    hide(headerText);
    renderGamePlay(currentGame, fighterChoiceView);
  }
}

function returnHome() {
  // hide(classicFighters);
  // hide(difficultFighters);
  hide(fighterChoiceView);
  display(gameChoice);
  display(headerText);
  hide(changeGameButton);
  currentGame.resetGame();
  renderPlayerData();
  renderHeaderText("Game");
}
