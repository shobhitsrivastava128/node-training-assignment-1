const Player = require('../models/player');
const Team = require('../models/team');
const Match = require('../models/match');
const service = require('../services/mainService');
const {RESPONSE_MSG,STATUS_CODE} = require('../constants/response');

const addPlayer = (req, res) => {
    const body = req.body;
    p = new Player(body.id, body.name, body.dob, body.runs, body.wickets);
    Player.addPlayer(p);
    res.status(STATUS_CODE.SUCCESS).json({ message: RESPONSE_MSG.PLAYER_ADDED_SUCCESS, player: p })
}

const getAllPlayers = (req, res ) => {
    res.status(STATUS_CODE.SUCCESS).json({ playerList: Player.getAllPlayers() });
}

const addTeam = (req, res) => {
    const body = req.body;
    t = new Team(body.teamId, body.teamName, body.playersList)
    Team.addTeam(t);
    res.status(STATUS_CODE.SUCCESS).json({message: RESPONSE_MSG.TEAM_ADDED_SUCCESS, team: t });
}

const getAllTeams = (req, res) => {
    let teamsArr = Team.getAllTeams();
    console.log(teamsArr,'asd');
    teamsArr.forEach(team => {
        team = service.getTeamData(team)
    });
    res.status(STATUS_CODE.SUCCESS).json(teamsArr);
}

const addMatch = (req, res) => {
    const body = req.body;
    m = new Match(body.matchId, body.matchDate, body.team1, body.team2);
    Match.addMatch(m);
    res.status(STATUS_CODE.SUCCESS).json({ message: RESPONSE_MSG.MATCH_CREATED_SUCCESS, match : m });
}

const getAllMatches = (req, res) => {
    let matcheshArr = Match.getAllMatches();
    matcheshArr.forEach(match => {
        match.team1 = service.getTeamData(Team.getTeamFromId(match.team1));
        match.team2 = service.getTeamData(Team.getTeamFromId(match.team2));
    });
    res.status(STATUS_CODE.SUCCESS).json(matcheshArr);
}

const getTopPlayers = (req, res) => {
    let response = service.getTopScorerAndWicktestaker(req.params.teamId)
    if (!response) {
        response = { message: RESPONSE_MSG.NO_DATA_FOUND_TEAM_ID };
    }
    res.status(STATUS_CODE.SUCCESS).json(response);
}

const getMatchesOnDate = (req, res) => {
    let date = req.query.date || new Date().toLocaleDateString();
    res.status(STATUS_CODE.SUCCESS).json(service.getMatchesOnDate(date));
}

module.exports.addPlayer = addPlayer;
module.exports.getAllPlayers = getAllPlayers;
module.exports.addTeam = addTeam;
module.exports.getAllTeams = getAllTeams;
module.exports.addMatch = addMatch;
module.exports.getAllMatches = getAllMatches;
module.exports.getTopPlayers = getTopPlayers;
module.exports.getMatchesOnDate = getMatchesOnDate;
