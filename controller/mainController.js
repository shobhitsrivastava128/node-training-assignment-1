const Player = require('../models/player');
const Team = require('../models/team');
const Match = require('../models/match');
const service = require('../services/mainService');

const addPlayer = (req, res, next) => {
    const body = req.body;
    p = new Player(body.id, body.name, body.dob, body.runs, body.wickets);
    Player.addPlayer(p);
    res.status(200).json({ "message": "player added successfully", "player": p })
}

const getAllPlayers = (req, res, next) => {
    res.status(200).json({ playerList: Player.getAllPlayers() });
}

const addTeam = (req, res, next) => {
    const body = req.body;
    t = new Team(body.teamId, body.teamName, body.playerList)
    Team.addTeam(t);
    res.status(200).json({ "message": "Team added successfully", "team": t });
}

const getAllTeams = (req, res, next) => {
    let teamsArr = Team.getAllTeams();
    teamsArr.forEach(team => {
        team = service.getTeamData(team)
    });
    res.status(200).json(teamsArr);
}

const addMatch = (req, res, next) => {
    const body = req.body;
    m = new Match(body.matchId, body.matchDate, body.team1, body.team2);
    Match.addMatch(m);
    res.status(200).json({ "message": "Match created successfully", "match": m });
}

const getAllMatches = (req, res, next) => {
    let matcheshArr = Match.getAllMatches();
    matcheshArr.forEach(match => {
        match.team1 = service.getTeamData(Team.getTeamFromId(match.team1));
        match.team2 = service.getTeamData(Team.getTeamFromId(match.team2));
    });
    res.status(200).json(matcheshArr);
}

const getTopPlayers = (req, res, next) => {
    let response = service.getTopScorerAndWicktestaker(req.params.teamId)
    if (!response) {
        response = { "message": "No Data found for given team id" };
    }
    res.status(200).json(response);
}

const getMatchesOnDate = (req, res, next) => {
    let date = req.query.date || new Date().toLocaleDateString();
    res.status(200).json(service.getMatchesOnDate(date));
}

module.exports.addPlayer = addPlayer;
module.exports.getAllPlayers = getAllPlayers;
module.exports.addTeam = addTeam;
module.exports.getAllTeams = getAllTeams;
module.exports.addMatch = addMatch;
module.exports.getAllMatches = getAllMatches;
module.exports.getTopPlayers = getTopPlayers;
module.exports.getMatchesOnDate = getMatchesOnDate;
