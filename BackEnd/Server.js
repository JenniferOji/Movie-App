//server just listens for a http request coming in
const express = require('express');
const app = express();
//using port 4000 bcs the two applications cant use the same port 
const port = 4000;

app.get('/', (req, res) => {
    res.send('Hello World');
});

//returns json data when there is a get request on api/movies 
app.get('/api/movies', (req, res) => {
    const movies = [
        {
            "Title": "Avengers: Infinity War",
            "Year": "2018",
            "imdbID": "tt4154756",
            "Type": "movie",
            "Poster": "https://example.com/poster1.jpg"
        },
        {
            "Title": "Captain America: Civil War",
            "Year": "2016",
            "imdbID": "tt3498820",
            "Type": "movie",
            "Poster": "https://example.com/poster2.jpg"
        },
        {
            "Title": "World War Z",
            "Year": "2013",
            "imdbID": "tt0816711",
            "Type": "movie",
            "Poster": "https://example.com/poster3.jpg"
        }
    ];
    res.json({ movies });
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
