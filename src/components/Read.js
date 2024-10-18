//When the component is called it will be displayed on screen 
import Movies from "./Movies";
import { useState, useEffect } from "react";
import axios from "axios";

const Read = () => {
  //manages data in the class
  const [movies,setMovies] = useState([]);
  
      //talking with an external system
      useEffect(
        ()=>{
          //runs on the background not causing the app to hang 
          // fetches data 
          axios.get('https://jsonblob.com/api/jsonblob/1287718524221775872')
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