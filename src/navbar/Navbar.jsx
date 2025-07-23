import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function BasicExample() {
  return ( <>
  <div className="container-fluid fixed-top p-3">

<Navbar expand="lg">
      <Container className="justify-content-between" >
        <Navbar.Brand as={Link} className='text-light brand text-uppercase' to="/">Start Framework</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto ps-5 gap-5">
            <Nav.Link as={Link} className='text-light text-uppercase   nav ps-5 ms-5' to="about">About</Nav.Link>
            <Nav.Link  as={Link} className='text-light text-uppercase   nav' to="portfolio">Portfolio</Nav.Link>
            <Nav.Link as={Link} className='text-light text-uppercase   nav' to="contact">Contact</Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  </div>


  </>
    
  );
}

export default BasicExample;