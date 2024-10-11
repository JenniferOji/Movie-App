import MovieItem from "./MovieItem"
//for every object in the array it outputs a message 
const Movies = (props) => {
    return props.myMovies.map(
        //for each movie in the array pass the data set to movie item
        (movie)=>{
            return <MovieItem myMovie = {movie} key={MovieItem.imdbID} />
        }
    )
}

export default Movies