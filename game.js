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
}
