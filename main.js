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




// Event listeners
gameChoice.addEventListener("click", setGameType);
classicFighters.addEventListener("click", reserveFighterChoice);
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
  console.log(game.compPlayer.token)
  console.log(computer.token)
  if (event.target.closest("#rockIconClassic")) {
    human.token = game.gameData.classic[0];
    computer.token = game.compPlayer.token;
    console.log(computer.token)
    //game.determineCompChoice();
    // hide(classicFighters);
    // display(gamePlayView);
    renderGamePlay(human, computer, classicFighters);
  } else if (event.target.closest("#paperIconClassic")) {
    human.token = game.gameData.classic[1];
    computer.token = game.compPlayer.token;
    //game.determineCompChoice();
    //hide(classicFighters);
    //display(gamePlayView);
    renderGamePlay(human, computer, classicFighters);
  } else if (event.target.closest("#scissorsIconClassic")) {
    human.token = game.gameData.classic[2];
    computer.token = game.compPlayer.token;
    //game.determineCompChoice();
    //hide(classicFighters);
    //display(gamePlayView);
    renderGamePlay(human, computer, classicFighters);
  }
  //bases this on which element the user clicks
  //calls determineCompChoice from game
  //updates computer token + game token
  //hides fighter view
  //displays game view
  //renders game view
  //calls timeout function
}

function returnHome() {
  hide(classicFighters);
  hide(difficultFighters);
  display(gameChoice);
  hide(changeGameButton);
}
