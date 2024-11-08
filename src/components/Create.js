import { useState } from "react";
import axios from "axios";
//creating a form that will send data to the create
function Create() {
  //created a state variavle and a method to update it
  //the initial value of title will be an empty string
  const [Title, setTitle] = useState('');
  const [Year, setYear] = useState('');
  const [Poster, setPoster] = useState('');

  //handles what happens to what been submitted
  const handleSubmit = (e) => {
    e.preventDefault();
  
    console.log(`Title: ${Title}, Year: ${Year}, Poster: ${Poster}`);
    
    const movie = {
      title: Title,
      year: Year,
      poster: Poster
    };
    
    axios.post('http://localhost:4000/api/movies', movie)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.data));
  }

  return (
    <div>
      <h2>This is my Create Component.</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Add Movie Title: </label>
          <input type="text"
            //styling from bootstrap
            className="form-control"
            // value is set to title and when theres change it executes the arrow function and passes in the value of the aria-controls=""
            value={Title}
            onChange={(e) => { setTitle(e.target.value) }}
          />
        </div>
        {/* button */}
        {/* <input type="submit" value="Add Movie" /> */}
        <div>
            <label></label>
        </div>
        
        <div>
        <label>Add Movie Year: </label>
          <input type="text"
            //styling from bootstrap
            className="form-control"
            // value is set to title and when theres change it executes the arrow function and passes in the value of the aria-controls=""
            value={Year}
            onChange={(e) => { setYear(e.target.value) }}
          />
        </div>

        <div>
            <label></label>
        </div>
        
        <div>
        <label>Add Movie Poster: </label>
          <input type="text"
            //styling from bootstrap
            className="form-control"
            // value is set to title and when theres change it executes the arrow function and passes in the value of the aria-controls=""
            value={Poster}
            onChange={(e) => { setPoster(e.target.value) }}
          />
        </div>

        <div>
            <label></label>
        </div>
           {/* button */}
        <input type="submit" value="Add Movie" />
      </form>
    </div>
  );
}

export default Create;