const express = require('express');
const router = require('./routes/router');

const app = express();

app.use(express.json());

app.use('/player',router.playerRouter);
app.use('/team',router.teamRouter);
app.use('/match',router.matchRouter);

app.listen(3000);