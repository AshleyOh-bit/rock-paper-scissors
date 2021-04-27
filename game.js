class Game {
  constructor(humanPlayer, compPlayer) {
    this.humanPlayer = humanPlayer;
    this.compPlayer = compPlayer;
    this.gameType = "";
    this.winner = "";

    this.gameData = [{name: "rock", image: "./assets/black-and-white-rocks.png"},
                     {name: "paper", image: "./assets/black-and-white-paper.png"},
                     {name:"scissors", image: "./assets/black-and-white-scissors.png"},
                     {name: "alien", image: "./assets/black-and-white-alien.png"},
                     {name: "computer", image: "./assets/laptop.png"}]

    this.winConditions = {
                       rock: ["scissors", "computer"],
                       paper: ["rock", "computer"],
                       scissors: ["paper", "alien"],
                       alien: ["rock", "paper"],
                       computer: ["alien", "scissors"]
                     }
    }

    resetGame() {
      this.gameType = "";
      this.winner = "";
      }

    getRandomIndex(num){
      return (Math.floor(Math.random() * num))
    }

    determineCompChoice() {
      var compNum;
      if (this.gameType === "classic") {
        compNum = this.getRandomIndex(3)
        return this.compPlayer.token = this.gameData[compNum]
      } else {
        compNum = this.getRandomIndex(5);
        return this.compPlayer.token = this.gameData[compNum]
      }
    }

  checkForWinner() {
    var winner;
    if (this.humanPlayer.token === this.compPlayer.token) {
      return this.winner = false;
    } else if (this.winConditions[this.humanPlayer.token.name].includes(this.compPlayer.token.name)) {
      this.humanPlayer.wins++;
      return this.winner = this.humanPlayer.name;
    } else if (this.winConditions[this.compPlayer.token.name].includes(this.humanPlayer.token.name)) {
      this.compPlayer.wins++;
      return this.winner = this.compPlayer.name;
    }
  }

}
