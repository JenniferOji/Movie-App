//When the component is called it will be displayed on screen 
import Movies from "./Movies";
import { useState, useEffect } from "react";
//AXIOS
/*Supports HTTP requests: GET, POST, PUT, DELETE, etc.
Automatically transforms JSON data.
Intercepts requests and responses.
Supports request timeout and cancellation.
Provides built-in CSRF protection. */
import axios from "axios";

const Read = () => {
  //manages data in the class
  //useState returns the current state and the function to update it 
  const [movies,setMovies] = useState([]);
  
  //Defines and manages the Reload function, which fetches updated movie data from the server and updates the state.
    const Reload = () => {
      console.log("Reloading movie data...");
      axios.get('http://localhost:4000/api/movies')
          .then((response) => {
            setMovies(response.data.movies)
          })
          .catch((error) => {
              console.error("Error reloading data:", error);
          });
  };


      //talking with an external system
      //lets you synchronize a component with the browser's lifecycle events
    
    //the page is constantly reloading 
    useEffect(() => {
      Reload();
    }, []);
      

    return (
    <div>
       <Movies myMovies={movies} ReloadData={Reload} />
    </div>
    );
};
  
  export default Read;