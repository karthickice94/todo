import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {Link} from "react-router-dom"

const navBar=()=> {
  return (
    <>
      <Navbar
        className="border border-secondary px-4 py-2"
        bg="light"
        expand="lg"
      >
        <Container>
          <Navbar.Brand className="me-5" href="#home">
            FoodiesHub
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto gap-3">
              <Nav.Link as={Link}  to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} href="#features">
                Features
              </Nav.Link>
              <Nav.Link as={Link} href="#pricing">
                Pricing
              </Nav.Link>
              <Nav.Link as={Link}  to="/Todo">
                Todo
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default navBar;
