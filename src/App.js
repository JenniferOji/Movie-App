import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import Read from './components/Read';
import Create from './components/Create';
import Edit from './components/Edit';

//the footer tag will always show since it outside the route tags 
//using "/" to direct to the desired change 
function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/home" element={<Content />}/>
        <Route path="/read" element={<Read />} />
        <Route path="/create" element={<Create />}/>
        <Route path='/edit/:id' element={<Edit />}/>

        {/* path='/edit/:id': The :id portion is a URL parameter that represents the unique ID of the movie the user wants to edit. When navigating to this path, 
        React Router will capture the id from the URL and pass it to the Edit component through the useParams hook, 
        allowing the component to fetch and update the correct movie data. */}
      </Routes>
      <Footer></Footer>
      
    </Router>
  );
}

export default App;