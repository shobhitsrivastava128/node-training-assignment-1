// model imports
const Player = require('../models/player')
const Team = require('../models/team');
const Match = require('../models/match')

exports.getTopScorerAndWicktestaker = (teamId) => { // get top scorer and wicket taker from team id
    let topScorer;
    let topWicketTaker;
    let team = Team.getTeamFromId(teamId);
    if(!team){
        return null;
    }
    team = this.getTeamData(team);
    let topScore = -Infinity;
    let topWickets = -Infinity;
    team.playersList.forEach(player => { // logic to identify top score and top wicket taken in a team
        if (player.runs >= topScore) {
            topScore = player.runs;
        }
        if (player.wickets >= topWickets) {
            topWickets = player.wickets;
        }
    });
    [topScorer,topWicketTaker] = getPlayer(topScore,topWickets,team.playersList); // get players array based on the top score and wickets calculated earlier
    return {topScorer,topWicketTaker};
}

function getPlayer(topScore,topWickets,list){ // find out top score and top runs scoring players
    let resultArrScore = [];
    let resultArrWicket = [];
    list.forEach(p => {
        if(p.runs === topScore){
            resultArrScore.push(p);
        }
        if(p.wickets === topWickets){
            resultArrWicket.push(p);
        }
    });
    return [resultArrScore,resultArrWicket];
}

exports.getTeamData = (team) => { // get players data from playerslist in team data and add it to team data
    if(!team){
        return null;
    }
    let playerArr = [];
    team.playersList.forEach(p => {
        playerArr.push(Player.getPlayerFromId(p));
    })
    team.playersList = playerArr;
    return team;
}

exports.getMatchesOnDate = (date)=>{ // compare date and return matches result
   let matchList = Match.getAllMatches();
   return matchList.filter(m => m.matchDate === date)
}