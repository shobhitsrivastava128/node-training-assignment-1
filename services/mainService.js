const Player = require('../models/player')
const Team = require('../models/team');
const Match = require('../models/match')

exports.getTopScorerAndWicktestaker = (teamId) => {
    let topScorer;
    let topWicketTaker;
    let team = Team.getTeamFromId(teamId);
    if(!team){
        return null;
    }
    team = this.getTeamData(team);
    let topScore = -Infinity;
    let topWickets = -Infinity;
    team.playersList.forEach(player => {
        if (player.runs >= topScore) {
            topScore = player.runs;
        }
        if (player.wickets >= topWickets) {
            topWickets = player.wickets;
        }
    });
    [topScorer,topWicketTaker] = getPlayer(topScore,topWickets,team.playersList);
    return {topScorer,topWicketTaker};
}

function getPlayer(topScore,topWickets,list){
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

exports.getTeamData = (team) => {
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

exports.getMatchesOnDate = (date)=>{
   let matchList = Match.getAllMatches();
   return matchList.filter(m => m.matchDate === date)
}