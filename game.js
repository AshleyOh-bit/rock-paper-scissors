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

//original gameData below
   //  this.gameData = {
   //   classic: [{name: "rock", image: "./assets/black-and-white-rocks.png"}, {name: "paper", image: "./assets/black-and-white-paper.png"}, {name:"scissors", image: "./assets/black-and-white-scissors.png"}],
   //   difficult: [{name: "rock", image: "./assets/black-and-white-rocks.png"}, {name: "paper", image: "./assets/black-and-white-paper.png"}, {name:"scissors", image: "./assets/black-and-white-scissors.png"}, {name: "alien", image: "./assets/black-and-white-alien.png"}, {name: "computer", image: "./assets/laptop-computer2.jpeg"}]
   // }
  }

  resetGame() {
 // localStorage.clear();
    }

//you may be able to refactor this out by assigning a conditional regarding gameType
//to the compPlayer.token and assigning the proper gameData
//original functionality:
 // determineCompChoice() {
 //     var compNum;
 //     if (this.gameType === "classic") {
 //       compNum = this.compPlayer.takeTurn(this.gameType);
 //       return this.compPlayer.token = this.gameData.classic[compNum];
 //     } else {
 //       compNum = this.compPlayer.takeTurn(this.gameType);
 //       return this.compPlayer.token = this.gameData.difficult[compNum];
 //     }
 //   }

  getRandomIndex(num){
    return (Math.floor(Math.random() * num))
  }

    determineCompChoice() {
      var compNum;
      if (this.gameType === "classic") {
        compNum = getRandomIndex(3)
        return compPlayer.token = this.gameData[compNum]
      } else {
        compNum = getRandomIndex(5);
        return compPlayer.token = this.gameData[compNum]
      }
    }


//old classic game check code
   //  tested: all good
    // classicGameCheck() {
    //   if (this.humanPlayer.token === this.compPlayer.token) {
    //     return this.winner = false;
    //
    //   } else if (this.humanPlayer.token.name === "rock" && this.compPlayer.token.name === "scissors") {
    //     this.humanPlayer.wins++;
    //     return this.winner = this.humanPlayer.name;
    //
    //   } else if (this.humanPlayer.token.name === "rock" && this.compPlayer.token.name === "paper") {
    //     this.compPlayer.wins++;
    //     return this.winner = this.compPlayer.name;
    //
    //   } else if (this.humanPlayer.token.name === "paper" && this.compPlayer.token.name === "rock") {
    //     this.humanPlayer.wins++;
    //     return this.winner = this.humanPlayer.name;
    //
    //   } else if (this.humanPlayer.token.name === "paper" && this.compPlayer.token.name === "scissors") {
    //     this.compPlayer.wins++;
    //     return this.winner = this.compPlayer.name;
    //
    //   } else if (this.humanPlayer.token.name === "scissors" && this.compPlayer.token.name === "paper") {
    //     this.humanPlayer.wins++;
    //     return this.winner = this.humanPlayer.name;
    //
    //   } else if (this.humanPlayer.token.name === "scissors" && this.compPlayer.token.name === "rock") {
    //     this.compPlayer.wins++;
    //     return this.winner = this.compPlayer.name;
    //   }
    // }


    //rock beats scissors and computer
    //paper beats rock and computer
    //scissors beats paper and alien
    //alien beats rock and paper
    //computer beats alien and scissors

    checkForWinner() {
      //check for a tie first
        if (this.humanPlayer.token === this.compPlayer.token) {
          return this.winner = false;
      //check if the human player wins
        } else if (this.humanPlayer.token.name === "rock" &&
                  ((this.compPlayer.token.name === "scissors") ||
                  (this.compPlayer.token.name === "computer"))) {
                    this.humanPlayer.wins++;
                    return this.winner = this.humanPlayer.name;

        } else if (this.humanPlayer.token.name === "paper" &&
                  ((this.compPlayer.token.name === "rock") ||
                  (this.compPlayer.token.name === "computer"))) {
                    this.humanPlayer.wins++;
                    return this.winner = this.humanPlayer.name;

        } else if (this.humanPlayer.token.name === "scissors" &&
                  ((this.compPlayer.token.name === "paper") ||
                  (this.compPlayer.token.name === "alien"))) {
                    this.humanPlayer.wins++;
                    return this.winner = this.humanPlayer.name;

        } else if (this.humanPlayer.token.name === "alien" &&
                  ((this.compPlayer.token.name === "paper") ||
                  (this.compPlayer.token.name === "rock"))) {
                    this.humanPlayer.wins++;
                    return this.winner = this.humanPlayer.name;

        } else if (this.humanPlayer.token.name === "computer" &&
                  ((this.compPlayer.token.name === "alien") ||
                  (this.compPlayer.token.name === "scissors"))) {
                    this.humanPlayer.wins++;
                    return this.winner = this.humanPlayer.name;
          //check if computer wins
        } else if (this.compPlayer.token.name === "rock" &&
                  (this.humanPlayer.token.name === "scissors") ||
                  (this.humanPlayer.token.name === "computer")) {
                    this.compPlayer.wins++;
                    return this.winner = this.compPlayer.name;

          } else if (this.compPlayer.token.name === "paper" &&
                    (this.humanPlayer.token.name === "rock") ||
                    (this.humanPlayer.token.name === "computer")) {
                      this.compPlayer.wins++;
                      return this.winner = this.compPlayer.name;

          } else if (this.compPlayer.token.name === "scissors" &&
                    (this.humanPlayer.token.name === "paper") ||
                    (this.humanPlayer.token.name === "alien")) {
                      this.compPlayer.wins++;
                      return this.winner = this.compPlayer.name;

          } else if (this.compPlayer.token.name === "alien" &&
                    (this.humanPlayer.token.name === "rock") ||
                    (this.humanPlayer.token.name === "paper")) {
                      this.compPlayer.wins++;
                      return this.winner = this.compPlayer.name;

          } else if (this.compPlayer.token.name === "computer" &&
                    (this.humanPlayer.token.name === "alien") ||
                    (this.humanPlayer.token.name === "scissors")) {
                      this.compPlayer.wins++;
                      return this.winner = this.compPlayer.name;
            //remove this console.log if it works
          } else {
            console.log("something went wrong");
          }
        }

//original check for winner function
      // checkForWinner() {
      //    if (this.gameType === "classic") {
      //      return this.classicGameCheck();
      //     } else {
      //      return this.difficultGameCheck();
      //     }
      // }

      // difficultGameCheck() {
      //   //check for a tie first
      //     if (this.humanPlayer.token === this.compPlayer.token) {
      //       return this.winner = false;
      //   //check if the human player wins
      //     } else if (this.humanPlayer.token.name === "rock" &&
      //               ((this.compPlayer.token.name === "scissors") ||
      //               (this.compPlayer.token.name === "computer"))) {
      //                 this.humanPlayer.wins++;
      //                 return this.winner = this.humanPlayer.name;
      //
      //     } else if (this.humanPlayer.token.name === "paper" &&
      //               ((this.compPlayer.token.name === "rock") ||
      //               (this.compPlayer.token.name === "computer"))) {
      //                 this.humanPlayer.wins++;
      //                 return this.winner = this.humanPlayer.name;
      //
      //     } else if (this.humanPlayer.token.name === "scissors" &&
      //               ((this.compPlayer.token.name === "paper") ||
      //               (this.compPlayer.token.name === "alien"))) {
      //                 this.humanPlayer.wins++;
      //                 return this.winner = this.humanPlayer.name;
      //
      //     } else if (this.humanPlayer.token.name === "alien" &&
      //               ((this.compPlayer.token.name === "paper") ||
      //               (this.compPlayer.token.name === "rock"))) {
      //                 this.humanPlayer.wins++;
      //                 return this.winner = this.humanPlayer.name;
      //
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
      //
      //       } else if (this.compPlayer.token.name === "paper" &&
      //                 (this.humanPlayer.token.name === "rock") ||
      //                 (this.humanPlayer.token.name === "computer")) {
      //                   this.compPlayer.wins++;
      //                   return this.winner = this.compPlayer.name;
      //
      //       } else if (this.compPlayer.token.name === "scissors" &&
      //                 (this.humanPlayer.token.name === "paper") ||
      //                 (this.humanPlayer.token.name === "alien")) {
      //                   this.compPlayer.wins++;
      //                   return this.winner = this.compPlayer.name;
      //
      //       } else if (this.compPlayer.token.name === "alien" &&
      //                 (this.humanPlayer.token.name === "rock") ||
      //                 (this.humanPlayer.token.name === "paper")) {
      //                   this.compPlayer.wins++;
      //                   return this.winner = this.compPlayer.name;
      //
      //       } else if (this.compPlayer.token.name === "computer" &&
      //                 (this.humanPlayer.token.name === "alien") ||
      //                 (this.humanPlayer.token.name === "scissors")) {
      //                   this.compPlayer.wins++;
      //                   return this.winner = this.compPlayer.name;
      //         //remove this console.log if it works
      //       } else {
      //         console.log("something went wrong");
      //       }
      //     }
  }
