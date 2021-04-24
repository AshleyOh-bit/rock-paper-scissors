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

 resetGame() {
 // localStorage.clear();
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


    //rock beats scissors and computer
    //paper beats rock and computer
    //scissors beats paper and alien
    //alien beats rock and paper
    //computer beats alien and scissors


    difficultGameCheck() {
      //check for a tie first
        if (this.humanPlayer.token === this.compPlayer.token) {
          return this.winner = false;
      //check if the human player wins
        } else if (this.humanPlayer.token === "rock" &&   ((this.compPlayer.token === "scissors") || (this.compPlayer.token === "computer"))) {
          this.humanPlayer.wins++;
          return this.winner = this.humanPlayer.name;
        } else if (this.humanPlayer.token === "paper" &&   ((this.compPlayer.token === "rock") || (this.compPlayer.token === "computer"))) {
          this.humanPlayer.wins++;
          return this.winner = this.humanPlayer.name;
          } else if (this.humanPlayer.token === "scissors" &&   ((this.compPlayer.token === "paper") || (this.compPlayer.token === "alien"))) {
          this.humanPlayer.wins++;
          return this.winner = this.humanPlayer.name;
          } else if (this.humanPlayer.token === "alien" &&   ((this.compPlayer.token === "paper") || (this.compPlayer.token === "rock"))) {
          this.humanPlayer.wins++;
          return this.winner = this.humanPlayer.name;
          } else if (this.humanPlayer.token === "computer" &&   ((this.compPlayer.token === "alien") || (this.compPlayer.token === "scissors"))) {
          this.humanPlayer.wins++;
          return this.winner = this.humanPlayer.name;
          //check if computer wins
          } else if (this.compPlayer.token === "rock" && (this.humanPlayer.token === "scissors") || (this.humanPlayer.token === "computer")) {
            this.compPlayer.wins++;
            return this.winner = this.compPlayer.name;
          } else if (this.compPlayer.token === "paper" && (this.humanPlayer.token === "rock") || (this.humanPlayer.token === "computer")) {
            this.compPlayer.wins++;
            return this.winner = this.compPlayer.name;
          } else if (this.compPlayer.token === "scissors" && (this.humanPlayer.token === "paper") || (this.humanPlayer.token === "alien")) {
            this.compPlayer.wins++;
            return this.winner = this.compPlayer.name;
          } else if (this.compPlayer.token === "alien" && (this.humanPlayer.token === "rock") || (this.humanPlayer.token === "paper")) {
            this.compPlayer.wins++;
            return this.winner = this.compPlayer.name;
          } else if (this.compPlayer.token === "computer" && (this.humanPlayer.token === "alien") || (this.humanPlayer.token === "scissors")) {
            this.compPlayer.wins++;
            return this.winner = this.compPlayer.name;
            //remove this console.log if it works
          } else {
            console.log("something went wrong");
          }
        }
  }

//REMOVE THESE CONSOLE LOGS BEFORE DEPLOYMENT:
//TESTS:
  // var alienPlayer = new Player("susie", "rock", 0);
  // console.log(alienPlayer.token);

  // var compPlayer = new Player("sheborg", "", 0);
  // console.log(compPlayer.token);

  // console.log(alienPlayer.takeTurn("classic"));
  // console.log(compPlayer.takeTurn("classic"));

  // var firstGame = new Game(alienPlayer, compPlayer, "classic");

  // console.log(firstGame.determineCompChoice());

  // console.log(firstGame.checkForWinner());

  // console.log(firstGame.winner);
  // console.log(firstGame.compPlayer.token);

  // console.log(compPlayer.wins);
  // console.log(alienPlayer.wins);

  // var ashley = new Player("ash", "computer", 0);
  // var compy = new Player("gertrund.0", "computer", 0);
  //
  // var secondGame = new Game(ashley, compy, "difficult");
  //
  // secondGame.difficultGameCheck();
  //
  // console.log(secondGame.winner);
