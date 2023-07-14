const express = require('express');
const controllerFunctions = require('../controller/mainController');

const playerRouter = express.Router();
playerRouter.post('/',controllerFunctions.addPlayer)
playerRouter.get('/',controllerFunctions.getAllPlayers)

const teamRouter = express.Router();
teamRouter.post('/',controllerFunctions.addTeam)
teamRouter.get('/',controllerFunctions.getAllTeams)
teamRouter.get('/top-players/:teamId',controllerFunctions.getTopPlayers)

const matchRouter = express.Router();
matchRouter.post('/',controllerFunctions.addMatch)
matchRouter.get('/',controllerFunctions.getAllMatches)
matchRouter.get('/today-match',controllerFunctions.getMatchesOnDate);

module.exports.playerRouter = playerRouter;
module.exports.teamRouter = teamRouter;
module.exports.matchRouter = matchRouter;