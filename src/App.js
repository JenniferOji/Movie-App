import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';

//the footer tag will always show since it outside the route tags 
function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/home" element={<Content />} />
        <Route path="/read" element={<Header />} />
        <Route path="/create" element={<h1>Create Component</h1>} />
      </Routes>
      
      <Footer />
    </Router>
  );
}

export default App;