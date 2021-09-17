import React from 'react'
//import { NavLink } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function Navigation() {
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
    </Navbar>
  );
}

export default Navigation;