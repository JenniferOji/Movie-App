import logo from './logo.svg';
import './App.css';

//business logic 

function App() {
  return (
    //every visusual piece is put in here 
    //putting in two curly brackets means wiritng in java script
    <div className="App">
       <h1>Hello World!</h1>
       <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
}

export default App;
