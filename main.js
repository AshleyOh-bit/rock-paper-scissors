// DOM variables
var gameChoice = document.querySelector("#gameChoice");
var classicFighters = document.querySelector("#classicFighters");
var difficultFighters = document.querySelector("#difficultFighters");

// Event listeners
gameChoice.addEventListener("click", setGameType)

// Event Handlers
function hide(element) {
  element.classList.add("hidden");
}

function display(element) {
  element.classList.remove("hidden");
}

function setGameType() {
  var human = new Player("human", "", 0);
  var computer = new Player("computer", "", 0);
  var game = new Game(human, computer, "");
  hide(gameChoice);
  if (event.target.closest("#classicCard")) {
    display(classicFighters);
    game.gameType = "classic";
    console.log(game)
    return [human, computer, game];
  } else {
    display(difficultFighters);
    game.gameType = "difficult";
    return [human, computer, game];
  }
}
