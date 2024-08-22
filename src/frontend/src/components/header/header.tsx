import React, { useState } from 'react'
import { Navbar, Nav, Form, Button, Container } from 'react-bootstrap'
import { FaPlane, FaSearch } from 'react-icons/fa'
import { CiUser } from "react-icons/ci"
import { useLocation } from 'react-router-dom'

import './header.css'


const Header: React.FC = () => {
    const [searchVisible, setSearchVisible] = useState(false);
    const location = useLocation();
  
    const handleSearchClick = () => {
      setSearchVisible(!searchVisible);
    };
  
    return (
      <Navbar expand="lg" className="bg-white">
        <Container fluid>
          <Navbar.Brand href="/home">
            <FaPlane size={24} className="mr-2" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }}>
              <Nav.Link href="/home" className={location.pathname === '/home' ? 'active-link' : ''}>Home</Nav.Link>
              <Nav.Link href="">About</Nav.Link>
              <Nav.Link href="/tours" className={location.pathname === '/tours' ? 'active-link' : ''}>Tours</Nav.Link>
              <Nav.Link href="">Destination</Nav.Link>
              <Nav.Link href="">Blog</Nav.Link>
              <Nav.Link href="">Pages</Nav.Link>
              <Nav.Link href="">Contact</Nav.Link>
            </Nav>
            <Form className="d-flex align-items-center">
              {searchVisible && (
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
              )}
              <Button variant="link" onClick={handleSearchClick} className="search-button">
                <FaSearch className="search-button-color" />
              </Button>
            </Form>
            <Nav.Link href="/login" className="d-flex align-items-center">
              <CiUser size={20} className="mr-1" /> Login / Signup
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  };
  
  export default Header;
  
