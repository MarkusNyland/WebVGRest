const express = require('express'); //Minimalist web framework for node
const bodyParser = require('body-parser'); //Parser
const cors = require('cors'); //Cross Origin Request Scripting
const repository = require('./repository');
const app = express();

//Handle json input
app.use(bodyParser.json());

//Lets other services use our RestAPI
app.use(cors({
    origin: 'http://localhost:8080'
}));

app.get('/games', (req, res) => {

    const genre = req.query["genre"];

    if (genre !== undefined && genre !== null) {
        res.json(repository.getAllVideoGamesWithGenre(genre));
    } else {
        res.json(repository.getAllVideoGames());
    }

});

app.get('/games/:id',(req, res) => {

    const game = repository.getVideoGame(req.params["id"]);

    if (game === undefined || game === null){
        res.status(404);
        res.send();
    }
    else {
        res.json(game);
    }

});

module.exports = app;