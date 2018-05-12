var express = require('express');
var Game = require('./model');

var app = express.Router();


var game = new Game();

module.exports = app
    .get('/fitness', (req, res) =>
     res.send( game.GetQuotes(req.query.playerId) ) 
    )
    .get('/state', (req, res) => res.send(game))
    .post('/picture', (req, res) => res.send( game.FlipPicture() ))
    .post('/fitness', (req, res) => {
        console.log(req.body);
        game.SubmitQuote(req.body.Text);
            res.send( { success: true } );
        })