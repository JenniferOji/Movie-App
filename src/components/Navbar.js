import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

//What the navbar will look like when called 
//changing the bg colour to primary makes the navbar blue
//the "/" directs you to the page 
const NavigationBar = () => {
  return (
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="/Navbar">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/Home">Home</Nav.Link>
              <Nav.Link href="/create">Create</Nav.Link>
              <Nav.Link href="/read">Read</Nav.Link>
            </Nav>
          </Container>
      </Navbar>
  );
};

export default NavigationBar;