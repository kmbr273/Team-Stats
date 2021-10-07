const team = {
    _players: [
      {firstName: 'Lionel',
        lastName: 'Messi',
        age: 35},
      {firstName: 'Cristiano',
        lastName: 'Ronaldo',
        age: 28},
      {firstName: 'David',
      lastName: 'Beckham',
      age: 32},
    ],
    _games: [
      {opponent: 'Tigers',
        teamPoints: 30,
        opponentPoints: 15}, 
      {opponent: 'Snakes',
        teamPoints: 28,
        opponentPoints: 45}, 
      {opponent: 'Sharks',
        teamPoints: 39,
        opponentPoints: 19},
    ],
    get players() {
      return this._games;
    },
    get games() {
      return this._games;
    },
    
    addPlayer(firstName, lastName, age) {
      let player = {
    firstName: firstName,
    lastName: lastName,
    age: age
      };
      this.players.push(player);
    },
    
    addGame(Opp, myPts, oppPts) {
      let game = {
        opponent: Opp,
        teamPoints: myPts,
        opponentPoints: oppPts
      };
      this.games.push(game);
    }
    };
    team.addPlayer('Steph', 'Curry', 28);
    team.addPlayer('Lisa', 'Leslie', 44);
    team.addPlayer('Bugs', 'Bunny', 76);
    
    team.addGame('Steph', 'Curry', 28);
    team.addGame('Lisa', 'Leslie', 44);
    team.addGame('Bigs', 'Bunny', 76);
     
    
    
    console.log(team.players);
    console.log(team.games);