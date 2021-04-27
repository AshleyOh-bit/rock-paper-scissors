class Player {
  constructor(name, token, wins) {
    this.name = name || "computer";
    this.token = token || false;
    this.wins = wins || 0;
  }

  saveWinsToStorage() {
    var strWins = JSON.stringify(this.wins);
    localStorage.setItem(this.name, strWins);
  }

  retrieveWinsFromStorage() {
     //return localStorage.getItem(JSON.parse(this.name))
     // var wins;
     // if (this.wins === null) {
     //   this.wins = 0;
     // } else {
     //   wins = JSON.parse(localStorage.getItem(this.name))
     //   return this.wins = wins;
     // }
       // wins = JSON.parse(localStorage.getItem(this.name))
       // return this.wins = wins;

     return JSON.parse(localStorage.getItem(this.name))
   }

   takeTurn(tokenChoice) {
       this.token = tokenChoice;
   }

}
