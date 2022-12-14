import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';
function x() {
  return (
    <Navbar bg="primary" expand="md">
      <Container>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">
             Fake Twitter
            </Nav.Link>


          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default x; 