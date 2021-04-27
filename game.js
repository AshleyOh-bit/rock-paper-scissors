class Game {
  constructor(humanPlayer, compPlayer, gameType) {
    this.humanPlayer = humanPlayer;
    this.compPlayer = compPlayer;
    this.gameType = gameType;
    this.winner = "";

    this.gameData = [{name: "rock", image: "./assets/black-and-white-rocks.png"},
                     {name: "paper", image: "./assets/black-and-white-paper.png"},
                     {name:"scissors", image: "./assets/black-and-white-scissors.png"},
                     {name: "alien", image: "./assets/black-and-white-alien.png"},
                     {name: "computer", image: "./assets/laptop-computer2.jpeg"}]

    this.winConditions = {
                      //rock beats scissors and computer
                       rock: ["scissors", "computer"],
                       //paper beats rock and computer
                       paper: ["rock", "computer"],
                       //scissors beats paper and alien
                       scissors: ["paper", "alien"],
                       //alien beats rock and paper
                       alien: ["rock", "paper"],
                       //computer beats alien and scissors
                       computer: ["alien", "scissors"]
                     }
    }

    resetGame() {
      this.gameType = "";
      this.winner = "";
      this.humanPlayer.name = "";
      this.compPlayer.name = "";
      this.humanPlayer.wins = 0;
      this.compPlayer.wins = 0;
       //localStorage.clear();
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

    //rock beats scissors and computer
    //paper beats rock and computer
    //scissors beats paper and alien
    //alien beats rock and paper
    //computer beats alien and scissors

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

    // checkForWinner() {
    //   //check for a tie first
    //     if (this.humanPlayer.token === this.compPlayer.token) {
    //       return this.winner = false;
    //   //check if the human player wins
    //     } else if (this.humanPlayer.token.name === "rock" &&
    //               ((this.compPlayer.token.name === "scissors") ||
    //               (this.compPlayer.token.name === "computer"))) {
    //                 this.humanPlayer.wins++;
    //                 return this.winner = this.humanPlayer.name;
    //     } else if (this.humanPlayer.token.name === "paper" &&
    //               ((this.compPlayer.token.name === "rock") ||
    //               (this.compPlayer.token.name === "computer"))) {
    //                 this.humanPlayer.wins++;
    //                 return this.winner = this.humanPlayer.name;
    //     } else if (this.humanPlayer.token.name === "scissors" &&
    //               ((this.compPlayer.token.name === "paper") ||
    //               (this.compPlayer.token.name === "alien"))) {
    //                 this.humanPlayer.wins++;
    //                 return this.winner = this.humanPlayer.name;
    //     } else if (this.humanPlayer.token.name === "alien" &&
    //               ((this.compPlayer.token.name === "paper") ||
    //               (this.compPlayer.token.name === "rock"))) {
    //                 this.humanPlayer.wins++;
    //                 return this.winner = this.humanPlayer.name;
    //     } else if (this.humanPlayer.token.name === "computer" &&
    //               ((this.compPlayer.token.name === "alien") ||
    //               (this.compPlayer.token.name === "scissors"))) {
    //                 this.humanPlayer.wins++;
    //                 return this.winner = this.humanPlayer.name;
    //       //check if computer wins
    //     } else if (this.compPlayer.token.name === "rock" &&
    //               (this.humanPlayer.token.name === "scissors") ||
    //               (this.humanPlayer.token.name === "computer")) {
    //                 this.compPlayer.wins++;
    //                 return this.winner = this.compPlayer.name;
    //       } else if (this.compPlayer.token.name === "paper" &&
    //                 (this.humanPlayer.token.name === "rock") ||
    //                 (this.humanPlayer.token.name === "computer")) {
    //                   this.compPlayer.wins++;
    //                   return this.winner = this.compPlayer.name;
    //       } else if (this.compPlayer.token.name === "scissors" &&
    //                 (this.humanPlayer.token.name === "paper") ||
    //                 (this.humanPlayer.token.name === "alien")) {
    //                   this.compPlayer.wins++;
    //                   return this.winner = this.compPlayer.name;
    //       } else if (this.compPlayer.token.name === "alien" &&
    //                 (this.humanPlayer.token.name === "rock") ||
    //                 (this.humanPlayer.token.name === "paper")) {
    //                   this.compPlayer.wins++;
    //                   return this.winner = this.compPlayer.name;
    //       } else if (this.compPlayer.token.name === "computer" &&
    //                 (this.humanPlayer.token.name === "alien") ||
    //                 (this.humanPlayer.token.name === "scissors")) {
    //                   this.compPlayer.wins++;
    //                   return this.winner = this.compPlayer.name;
    //       }
    //
    //     }
}
