class Game {
  constructor(humanPlayer, compPlayer, gameType) {
    this.humanPlayer = humanPlayer;
    this.compPlayer = compPlayer;
    this.gameType = gameType;
    this.winner = "";

    this.gameData = {
     classic: ["rock", "paper", "scissors"],
     difficult: ["rock", "paper", "scissors", "alien", "computer"]
   }
 }

 determineCompChoice() {
     var compNum;
     if (this.gameType === "classic") {
       compNum = compPlayer.takeTurn(this.gameType);
       return this.compPlayer.token = this.gameData.classic[compNum];
     } else {
       compuNum = compPlayer.takeTurn(this.gameType);
       return this.compPlayer.token = this.gameData.difficult[compNum];
     }
   }

   checkForWinner() {
      if (this.gameType === "classic") {
        if (this.humanPlayer.token === this.compPlayer.token) {
          return this.winner = false;
        } else if (this.humanPlayer.token === "rock" && this.compPlayer.token === "scissors") {
          this.humanPlayer.wins++;
          return this.winner = this.humanPlayer.name;
        } else if (this.humanPlayer.token === "rock" && this.compPlayer.token === "paper") {
          this.compPlayer.wins++;
          return this.winner = this.humanPlayer.name;
        } else if (this.humanPlayer.token === "paper" && this.compPlayer.token === "rock") {
          this.humanPlayer.wins++;
          return this.winner = this.humanPlayer.name;
        } else if (this.humanPlayer.token === "paper" && this.compPlayer.token === "scissors") {
          this.compPlayer.wins++;
          return this.winner = this.compPlayer.name;
        } else if (this.humanPlayer.token === "scissors" && this.compPlayer.token === "paper") {
          this.humanPlayer.wins++;
          return this.winner = this.compPlayer.name;
        } else if (this.humanPlayer.token === "scissors" && this.compPlayer.token === "rock") {
          this.compPlayer.wins++;
          return this.winner = this.compPlayer.name;
        }
      }
}
