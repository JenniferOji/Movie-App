//server just listens for a http request coming in
const express = require('express');
const app = express();
//using port 4000 bcs the two applications cant use the same port 
const port = 4000;

const cors = require('cors');
app.use(cors());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const mongoose = require('mongoose');
//connecting to mongoose database with my connection string  
mongoose.connect('mongodb+srv://admin:admin@cluster0.sqwxk.mongodb.net/MyMovieDB');

const movieSchema = new mongoose.Schema({
    //what you want each data to store 
    title: String,
    year: String,
    poster: String
  });
 
  //model based on schema 
  const MovieModel = mongoose.model('myMovies', movieSchema);

//returns json data when there is a get request on api/movies - async delays code executing until the wait  
/*app.get('/api/movies', ...): Sets up a GET route at /api/movies, which will return all movies.
Movie.find({}) is called. The empty object {} as an argument means it fetches all documents in the movies collection.
res.json(movies) sends the retrieved movies in JSON format back to the client.
 */
app.get('/api/movies', async(req, res) => {
    //sefching database for movies
    const movies = await MovieModel.find({});
    res.json({ movies });
});

//when i edit a movie come  in and find my movie and edit it
app.put('/api/movie/:id', async (req, res) => { //async = dont proceed until the next line until youve edited the record in the database 
    //find the movie by its ID and update it 
    //pull the request out of the body and overright it 
    let movie = await MovieModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(movie);//send it back the new movie 
});

//when there is a request on api/movies it executes this function 
app.post('/api/movies', async(req, res) =>{
    console.log("Movie: " +req.body.title);
    //variables being pulled out of request 
    const {title, year, poster} = req.body;
    
    //putting it into the moviemodel database 
    const newMovie = new MovieModel({title, year, poster});
    await newMovie.save();

    res.status(201).json({ message: 'Movie created successfully', movie: newMovie });
})

/*app.get('/api/movie/:id', ...): Defines a GET route at /api/movie/:id, where :id is a parameter for the movie’s unique ID.
Movie.findById(req.params.id): This method searches the movies collection for a document with the ID provided in the URL.
If a movie is found, it’s sent back in JSON format.*/
app.get('/api/movie/:id', async (req, res) => {
    const movie = await MovieModel.findById(req.params.id);
    res.json(movie);
});

//when there is a connection on this port (4000) it executes this arrow function 
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


//the server handling the delete request 
app.delete('/api/movie/:id', async (req, res) => {
  
    console.log('Deleting movie with ID:', req.params.id);
    //deleting the movie by the ID
    const movie = await MovieModel.findByIdAndDelete(req.params.id);
    res.status(200).send({ message: "Movie deleted successfully", movie });
    
});

// {
//     "Title": "Avengers: Infinity War (server)",
//     "Year": "2018",
//     "imdbID": "tt4154756",
//     "Type": "movie",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
// },
// {
//     "Title": "Captain America: Civil War (server)",
//     "Year": "2016",
//     "imdbID": "tt3498820",
//     "Type": "movie",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
// },
// {
//     "Title": "World War Z (server)",
//     "Year": "2013",
//     "imdbID": "tt0816711",
//     "Type": "movie",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BNDQ4YzFmNzktMmM5ZC00MDZjLTk1OTktNDE2ODE4YjM2MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
// }
