import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import search from "../assets/search.png";
import "./Navbvar.css";

const Navbvar = () => {
  return (
    <div>
      <Form className="d-flex justify-content-end" onSubmit={(e) => console.log('clicked')}>
        <div className="d-flex me-3 mt-3 border rounded">
          <button type="submit" className="reset-style ms-2" >
            <img src={search} alt="" className="search mb-0"/>
          </button>
          <div>
            <input
              type="search"
              placeholder="Search"
              className="border border-0 ms-3 input"
              aria-label="Search"
            />
          </div>
        </div>
      </Form>
      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">
            {" "}
            <img src={logo} alt="" className="size"/>
          </Navbar.Brand>
          <Nav
            className="mt-3 d-flex"
            style={{ maxHeight: "100px"}}
            navbarScroll
          >
            <Link to={`/`} className="link">
              <Nav.Link href="#general" className="fs-5">Home</Nav.Link>
            </Link>

            <Link to={`/jobs`} className="link">
              <Nav.Link href="#general" className="fs-5">Jobs</Nav.Link>
            </Link>
            <Link to={`/`} className="link">
              <Nav.Link href="#mentors" className="fs-5">Mentorship</Nav.Link>
            </Link>
            <Link to={`/`} className="link">
              <Nav.Link href="#action2" className="fs-5"> Resources </Nav.Link>
            </Link>
            <Link to={`/`} className="link">
              <Nav.Link href="#action2" className="fs-5">Meet-Ups </Nav.Link>
            </Link>

            
          </Nav>
          <NavDropdown title="More" id="navbarScrollingDropdown" className="hamburger">
              <NavDropdown.Item href="#action3">Help</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Contact Us</NavDropdown.Item>
              <NavDropdown.Item href="#action5">About</NavDropdown.Item>
            </NavDropdown>
        </Container>
      </Navbar>
    </div>
    
  );
};

export default Navbvar;
