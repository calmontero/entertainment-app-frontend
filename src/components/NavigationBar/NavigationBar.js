import React from 'react'
//import { NavLink } from 'react-router-dom'
import { Navbar, Nav, Form, Button, ButtonGroup } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';

function Navigation({ onLogout }) {
  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => onLogout());
  }

  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <LinkContainer to="/">
          <Nav.Link>Home</Nav.Link>   
        </LinkContainer>
        <LinkContainer to="/profiles">
          <Nav.Link>Profiles</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/programs">
          <Nav.Link>Full List</Nav.Link>
        </LinkContainer>
      </Nav>
    </Navbar.Collapse>
    <Form inline className="mx-3">
      <ButtonGroup>
        <Button variant="secondary" as={Link} to="/login">Login</Button>
        <Button variant="secondary" onClick={handleLogout} to="/signup">Signup</Button>
      </ButtonGroup> 
    </Form>
    </Navbar>
  );
}

export default Navigation;