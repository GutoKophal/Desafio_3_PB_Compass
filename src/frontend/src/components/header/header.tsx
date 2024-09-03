import React, { useState } from 'react'
import { Navbar, Nav, Form, Button, Container } from 'react-bootstrap'
import { FaSearch } from 'react-icons/fa'
import { CiUser } from 'react-icons/ci'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/authContext'

import "./header.css";

const Header: React.FC = () => {
  const [searchVisible, setSearchVisible] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { currentUser, logout } = useAuth();

  const handleSearchClick = () => {
    setSearchVisible(!searchVisible);
  };

  const handleLogout = () => {
    logout();
    if (location.pathname !== "/home") {
      navigate("/home");
    }
  };

  return (
    <Navbar expand="lg" className="bg-white header-navbar">
      <Container fluid>
        <Navbar.Brand href="/home">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/trisog-e765d.appspot.com/o/icons%2FLogo.png?alt=media&token=ac0fad67-96a6-4bcc-a46d-b9a1bce4cb73"
            alt="Logo icon"
            className="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }}>
            <Nav.Link
              href="/home"
              className={location.pathname === "/home" ? "active-link" : ""}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#"
              className={location.pathname === "#" ? "active-link" : ""}
            >
              About
            </Nav.Link>
            <Nav.Link
              href="/tours"
              className={location.pathname === "/tours" ? "active-link" : ""}
            >
              Tours
            </Nav.Link>
            <Nav.Link
              href="#"
              className={location.pathname === "#" ? "active-link" : ""}
            >
              Destination
            </Nav.Link>
            <Nav.Link
              href="#"
              className={location.pathname === "#" ? "active-link" : ""}
            >
              Blog
            </Nav.Link>
            <Nav.Link
              href="#"
              className={location.pathname === "#" ? "active-link" : ""}
            >
              Pages
            </Nav.Link>
            <Nav.Link
              href="#"
              className={location.pathname === "#" ? "active-link" : ""}
            >
              Contact
            </Nav.Link>
          </Nav>
          <Form className="d-flex align-items-center">
            {searchVisible && (
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2 form-control"
                aria-label="Search"
              />
            )}
            <Button
              variant="link"
              onClick={handleSearchClick}
              className="search-button"
            >
              <FaSearch className="search-button-color" />
            </Button>
          </Form>
          {currentUser ? (
            <div className="d-flex align-items-center">
              <span className="user-email">{currentUser.email}</span>
              <Button
                variant="link"
                onClick={handleLogout}
                className="logout-button"
              >
                Logout
              </Button>
            </div>
          ) : (
            <Nav.Link
              href="/"
              className="d-flex align-items-center login-signup-link"
            >
              <CiUser size={20} className="mr-1" /> Login / Signup
            </Nav.Link>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
