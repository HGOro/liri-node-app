# liri-node-app
HW-8: LIRI Bot

READ ME:

LIRI is a Language Interpretation and Recognition Interface command line Node.js application. LIRI takes in parameters from the user and responds with corresponding data.

##Running LIRI Bot

When running liri.js in the terminal, LIRI responds to Four (4) commands:
    
    *'concert-this'*

    *'spotify-this-song'*
    
    *'movie-this'*

    *'do-what-it-says'*

# What Each Command Does
## concert-this  

`node liri.js concert-this <artist/band name here>`

    The user must specify the query input of "concert-this" followed by a band or artist name. LIRI will get the data from the Bands In Town api and respond with the upcoming concert venue name, location, and date.

![screenshot of 'node liri.js concert-this userQuery'](/images/concert-thisSS.png)


##  spotify-this

`node liri.js spotify-this-song <song name here>`

    The user must specify the query input of "spotify-this" followed by a song name. LIRI will get the data from the Spotify API and respond with the Artist name, song name, album name, and Spotify preview link.

<img screenshot of 'node liri.js spotify-this-song userQuery'>

    If no song is provided, LIRI will default to "The Sign" by Ace of Base.

<img screenshot of 'node liri.js spotify-this-song'>


## movie-this

`node liri.js movie-this <movie name here>`

    The user must specify the query input of "movie-this" followed by a movie title. LIRI will get the data from the OMDB API and respond with the movie title, release date, IMDB rating, Rotten Tomatoes Rating, Country of production, language, plot, and actors.

![screenshot of 'node liri.js movie-this userQuery'](/images/movie-thisSS.png)

    If no movie title is provided, LIRI will default to  "Mr. Nobody."


![screenshot of 'node liri.js movie-this'](/images/movie-thisDefaultSS.png)

## do-what-it-says

`node liri.js <do-what-it-says>`

    By specifying the "do-what-it-says" command, LIRI will take the text inside of random. In this case, the random.text file contains the command for spotify-this-song with the user query of "I Want It That Way."

<img screenshot of 'node liri.js do-what-it-says'>


