const express = require('express');
const router = require('./routes/router');

const app = express();

app.use(express.json()); // to parse request object to json

app.use('/player',router.playerRouter);
app.use('/team',router.teamRouter);
app.use('/match',router.matchRouter);

// for non matching urls
app.use((req, res) => {
    res.status(404).send(
        "<h1>Page not found</h1>")
})

//listening server on port 3000
app.listen(3000);