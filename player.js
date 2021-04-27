class Player {
  constructor(name) {
    this.name = name || "computer";
    this.token = "";
    this.wins = 0;
  }

  saveWinsToStorage() {
    var strWins = JSON.stringify(this.wins);
    localStorage.setItem(this.name, strWins);
  }

  retrieveWinsFromStorage() {
     return JSON.parse(localStorage.getItem(this.name))
   }

   takeTurn(tokenChoice) {
       this.token = tokenChoice;
   }

}
