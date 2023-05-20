import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbvar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">
          {" "}
          <img src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link to={`/`}>
              <Nav.Link>Home</Nav.Link>
            </Link>

            <Link to={`/forum/general`}>
              <Nav.Link href="#general">Posts</Nav.Link>
            </Link>
            <Nav.Link href="/mentors">Mentors</Nav.Link>
            <Nav.Link href="#action2">Coding </Nav.Link>
            <Nav.Link href="/jobs"> Jobs </Nav.Link>

            <Nav.Link href="#action2"> Resources </Nav.Link>
            <Nav.Link href="#action2">Meet-Ups </Nav.Link>

            <NavDropdown title="More" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Help</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Contact Us</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">About</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbvar;
