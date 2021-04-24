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
}
