import express from "express";
import cors from 'cors';
import bodyParser from "body-parser";
import Pokedex from "pokedex-promise-v2";

const app = express();
app.use(cors());
const port = 3001;

const P = new Pokedex();
var jsonParser = bodyParser.json();

app.post('/getPokemonList', jsonParser, (req, res) => {
  P.getResource(`/api/v2/pokemon?limit=${req.body.limit}&offset=0`)
    .then((response) => {
      res.send(response);
  })
})

app.post('/getPokemon', jsonParser, (req, res) => {
  P.getResource(`/api/v2/pokemon/${req.body.pokemon}`)
    .then((response) => {
      res.send(response);
  })
});

app.post('/getPokemonSpecies', jsonParser, (req, res) => {
  P.getResource(`/api/v2/pokemon-species/${req.body.pokemon}`)
    .then((response) => {
      res.send(response);
  })
});

app.listen(port, () => {
  console.log(`Listening on Port ${port}`);
});
