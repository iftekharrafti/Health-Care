import React from "react";
import logo from './logo.png';
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import './header.css';

const Header = () => {
  const {user} = useAuth();
  console.log(user)
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About us</Nav.Link>
            <Nav.Link as={Link} to="/services">Services</Nav.Link>
            <Nav.Link as={Link} to="/doctor">Doctors</Nav.Link>
            {user.email && <h4>{user.displayName}</h4>}
            {
              user.email ? 
              <Link to="/login">
                <Button className="btn" variant="outline-info">Logouts</Button>
            </Link>
              :
              <div>
                <Link to="/login">
                <Button className="btn" variant="outline-info">Login</Button>
            </Link>
            <Link to="/signup">
                <Button variant="outline-info">Signup</Button>
            </Link>
              </div>
            }
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
