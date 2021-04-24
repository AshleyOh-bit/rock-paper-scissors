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
}
