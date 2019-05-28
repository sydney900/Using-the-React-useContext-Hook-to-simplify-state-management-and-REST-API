import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Header = props => {
  const { logoName } = props;

  return (
    <header className="header">
      <Navbar bg="light" expand="lg" sticky="top">
        <Navbar.Brand href="/">{logoName}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav variant="pills" defaultActiveKey="/" className="mr-auto">
            <Nav.Item className="mr-3">
              <NavLink to="/">Clients</NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to="/client/new">Create Client</NavLink>
            </Nav.Item>
          </Nav>
          <Form inline>
            <Form.Control
              type="text"
              placeholder="Search"
              className="mr-sm-2"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
