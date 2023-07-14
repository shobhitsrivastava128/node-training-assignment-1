const constants = require('../constants/data');
teams = constants.teams;

class Team{
    constructor(teamId,teamName, playerList){
        this.teamId = teamId;
        this.teamName = teamName;
        this.playerList = playerList;
    }

    static addTeam(team){
        teams.push(team);
    }
    static getAllTeams(){
        return teams;
    }

    static getTeamFromId(id){
        return teams.find(t => t.teamId === +id);
    }
}

module.exports = Team;