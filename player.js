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
