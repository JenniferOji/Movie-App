import { useEffect } from "react";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import axios from "axios";
//where all the movies are displayed
const MovieItem = (props) => {
//displaying the items of the array 
//using card is decorative and makes the page look better 
const handleDelete = (e)=>{
    e.preventDefault();
    axios.delete('http://localhost:4000/api/movie/' + props.myMovie._id)
        .then(() => {
            props.Reload(); // Refresh the movie list after deletion
        })
        .catch((error) => {
            console.error("Error deleting movie:", error);
        });
};
    return(
        <div>
            <Card>
             <Card.Header>{props.myMovie.title}</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                    <img src={props.myMovie.poster} width={200} height={200}></img>
                    <footer>{props.myMovie.year}</footer>
                  {/* <h6>{props.myMovie.Year}</h6> */}
                  {/* <h6>{props.myMovie.Type}</h6> */}
                  </blockquote>
                </Card.Body>
                <Link className="btn btn-primary" to={"/edit/" +props.myMovie._id}>Edit</Link>
                {/* when the button is clicked this invoke this method  */}
                <Button className="btn btn-danger" onClick={handleDelete}>Delete</Button>
            </Card>
        </div>
    )
}

export default MovieItem;