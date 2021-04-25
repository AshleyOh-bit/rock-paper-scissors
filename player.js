class Player {
  constructor(name, token, wins) {
    this.name = name || "computer";
    this.token = token || false;
    this.wins = wins || 0;
  }

  saveWinsToStorage() {
    var strWins = JSON.stringify(this.wins);
    localStorage.setItems(this.name, strWins);
  }

  retrieveWinsFromStorage() {
   return localStorage.getItem(JSON.parse(this.name))
 }

  getRandomIndex(num){
   return (Math.floor(Math.random() * num))
 }

  takeTurn(gameChoice) {
    if (!this.token && gameChoice === "classic") {
      return this.getRandomIndex(3)
    } else if (!this.token && gameChoice === "difficult") {
      return this.getRandomIndex(5)
    } else {
      return this.token
    }

  }
}

//REMOVE THESE CONSOLE LOGS BEFORE DEPLOYMENT:
//TESTS:
  //classic game tests
  // var alienPlayer = new Player("susie", "rock", 0);
  // console.log("human picked " + alienPlayer.token);
  //
  // var compPlayer = new Player("sheborg", "", 0);

  //these two console.logs are to test everything is working correctly
  // console.log("computer picked " + compPlayer.token);
  // console.log("human token " + alienPlayer.takeTurn("classic"));


  // var firstGame = new Game(alienPlayer, compPlayer, "classic");
  //
  // console.log("computer index equals " + firstGame.determineCompChoice());
  //
  // console.log("check for winner " + firstGame.checkForWinner());
  //
  // console.log("the winner is " + firstGame.winner);
  // console.log("computer token is " + firstGame.compPlayer.token);

  // console.log(compPlayer.wins);
  // console.log(alienPlayer.wins);

  //rock beats scissors and computer
  //paper beats rock and computer
  //scissors beats paper and alien
  //alien beats rock and paper
  //computer beats alien and scissors
  // 
  // var ashley = new Player("ash", "alien", 0);
  // var compy = new Player("gertrund.0", "", 0);
  //
  // var secondGame = new Game(ashley, compy, "difficult");

  //checks to ensure everything is working correctly
  // console.log("computer picked " + secondGame.compPlayer.token);
  // console.log("human token " + ashley.takeTurn("difficult"));
  //
  //
  // console.log("computer choice " + secondGame.determineCompChoice())
  //
  // secondGame.difficultGameCheck();
  //
  // console.log(secondGame.winner);
