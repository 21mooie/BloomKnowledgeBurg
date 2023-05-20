import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "./Navbvar.css";

const Navbvar = () => {
  return (
    <div>
      <Form className="d-flex justify-content-end">
        <div className="d-flex me-3 mt-3">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </div>
      </Form>
      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">
            {" "}
            <img src={logo} alt="" className="size"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mt-3"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link to={`/`} className="link">
                <Nav.Link href="#general">Home</Nav.Link>
              </Link>

              <Link to={`/jobs`} className="link">
                <Nav.Link href="#general">Jobs</Nav.Link>
              </Link>
              <Link to={`/`} className="link">
                <Nav.Link href="#mentors">Mentorship</Nav.Link>
              </Link>
              <Link to={`/`} className="link">
                <Nav.Link href="#action2"> Resources </Nav.Link>
              </Link>
              <Link to={`/`} className="link">
                <Nav.Link href="#action2">Meet-Ups </Nav.Link>
              </Link>

              <NavDropdown title="More" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Help</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Contact Us</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">About</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
    
  );
};

export default Navbvar;
