import { useEffect } from "react";
import Card from 'react-bootstrap/Card';

const MovieItem = (props) => {
//displaying the items of the array 
//using card is decorative and makes the page look better 
    return(
        <div>
            <Card>
             <Card.Header>{props.myMovie.title}</Card.Header>
                <Card.Body>
                  {/* <h6>{props.myMovie.Year}</h6> */}
                  {/* <h6>{props.myMovie.Type}</h6> */}
                </Card.Body>
            </Card>
            <img src={props.myMovie.poster}></img>
        </div>
    )
}

export default MovieItem;