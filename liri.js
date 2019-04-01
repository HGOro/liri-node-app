//.env file
require("dotenv").config();
const keys = require("./keys.js");
    //console.log(keys);
const axios = require("axios");
const fs = require("fs");
let moment = require("moment");

//spotify
//let Spotify = require("node-spotify-api");
//let spotify = new Spotify(keys.spotify);

/////////////////////////////////////////////////////////////////////

let userInput = process.argv[2];//.toLowerCase();
let userQuery = process.argv[3];
//let userQuery = process.argv.slice(3).join(" ");

//MOVIE-THIS========================================================================================
const movieThis = function(userQuery) {
    axios.get(`http://omdbapi.com/?t=${userQuery}&y=&plot=short&apikey=trilogy`).then(
        function(response){
            console.log("################################################")
            console.log("Movie Title: " + response.data.Title);
            console.log("Movie Release Year: " + response.data.Year);
            console.log("Movie Imdb Rating: " + response.data.imdbRating);
            console.log("Movie Rotten Tomato rating: " + response.data.imdbVotes);
            console.log("Movie Country: " + response.data.Country);
            console.log("Movie Language: " + response.data.Language);
            console.log("Movie Plot: " + response.data.Plot);
            console.log("Movie Actors: " + response.data.Actors);
            console.log("################################################")
        }
    );

        if(!userQuery){
            userQuery= "Mr. Nobody";
            return console.log("If you haven't watched 'Mr. Nobody,' then you should: <http://www.imdb.com/title/tt0485947/> It's on Netflix!")
        }
};

//CONCERT-THIS=============================================================================================
let concertThis = function(userQuery){
    axios.get(`https://rest.bandsintown.com/artists/${userQuery}/events?app_id=codingbootcamp`)
    .then(function(response){
            console.log("################################################")
            console.log("Concert Venue: " + response.data[0].venue.name);
            console.log("Concert Location: " + response.data[0].venue.city);
            console.log("Concert Date: " + (moment(response.data[0].datetime).format("MM/DD/YYYY")));
            console.log("################################################")
        }
    );
};

////SPOTIFY-THIS-SONG=====================================================================================
//let spotifyThis = function(userQuery){
//    spotify.search({ type: "track", query: userQuery, limit: 3}, function(err, data){
//        if(err){
//            return console.log("Error occurred: " = err);
//        }
//        
//        console.log("Song: " + data.tracks.items[0].name);
//        console.log("Album: " + data.tracks.items[0].album.name);
//        console.log("Artist: " + data.tracks.items[0].artists[0].name);
//        console.log("Preview: " + data.tracks.items[0].preview_url);
//
//    })
//}

//DO-WHAT-IT-SAYS================================================================================================
const doWhatItSays = function(){
    fs.readFile('random.txt', 'utf-8', function(err, res, data){
        console.log("################################################")
        if (err) {
            return console.log("Error: " + err);
        } 
    });
}

//call the functions depending on the userInput
switch(userInput){
    case 'movie-this':
        movieThis(userQuery);
        break;
    case 'concert-this':
        concertThis(userQuery);
        break;
    case 'spotify-this-song':
        spotifyThis(userQuery);
        break;
    case 'do-what-it-says':
        doWhatItSays(userQuery);
        break;
};