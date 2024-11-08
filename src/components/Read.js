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
  
      //talking with an external system
      //lets you synchronize a component with the browser's lifecycle events
      useEffect(
        ()=>{
          //runs on the background not causing the app to hang 
          // fetches data 
          axios.get('http://localhost:4000/api/movies') //reading in the server data 
          .then((response)=>{
            //response.data only send back the body
            console.log(response.data);
            setMovies(response.data.movies)
          })
          
          .catch()
        },[]
      );
      

    return (
    <div>
       <Movies myMovies={movies}/>
    </div>
    );
};
  
  export default Read;