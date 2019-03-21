
require("dotenv").config();

var keys = require("./keys.js");

var spotify = new Spotify(keys.spotify);

//download node packages for each API
    //SPOTIFY
    //AXIOS
    //OMDB
    //BANDSINTOWN
    //MOMENT
    //DOTENV

const axios = require('axios');

const userInput = process.argv[2];

const userQuery = process.argv[3];

