const constants = require('../constants/data');
matches = constants.matches;

class Match{
    constructor(matchId, matchDate, team1, team2){
        this.matchId = matchId,
        this.matchDate  = matchDate;
        this.team1 = team1;
        this.team2 = team2;
    }

    static addMatch(match){
        matches.push(match);
    }

    static getAllMatches(){
        return matches;
    }
}

module.exports = Match;