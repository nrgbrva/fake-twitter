import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';
import {TwitterIcon } from './assets/icons'

function x() {
  return (
    <Navbar expand="md">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">
            <TwitterIcon />
             Twitter  
            </Nav.Link>    
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default x; 