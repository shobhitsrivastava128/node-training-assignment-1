const constants = require('../constants/data');
playerList = constants.players;

class Player{
    constructor(id,name,dob,runs,wickets){
        this.id = id;
        this.name = name;
        this.dob = dob;
        this.runs = runs;
        this.wickets = wickets;
    }

    static addPlayer(player){
        playerList.push(player);
    }

    static getAllPlayers(){
        return JSON.parse(JSON.stringify(playerList));
    }

    static getPlayerFromId(id){
       return JSON.parse(JSON.stringify(playerList.find(p=>p.id === id)));
    }
}

module.exports = Player;