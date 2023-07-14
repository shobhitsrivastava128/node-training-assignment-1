const constants = require('../constants/data');
teams = constants.teams;

class Team{
    constructor(teamId,teamName, playersList){
        this.teamId = teamId;
        this.teamName = teamName;
        this.playersList = playersList;
    }

    static addTeam(team){
        teams.push(team);
    }
    static getAllTeams(){
        return JSON.parse(JSON.stringify(teams));
    }
    
    static getTeamFromId(id){
        let result = teams.find(t => t.teamId === +id)
        if(result){
            return JSON.parse(JSON.stringify(result));
        }
        return result;
    }
}

module.exports = Team;