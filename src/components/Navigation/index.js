import React from "react";
import Nav from "react-bootstrap/Nav";

const Navigation = () => {
  return (
    <Nav className="justify-content-center main-header" id="navbar">
     
      <Nav.Item  >
        <Nav.Link >About Me</Nav.Link>
      </Nav.Item>
      <Nav.Item >
        <Nav.Link >Projects</Nav.Link>
      </Nav.Item>
      <Nav.Item >
        <Nav.Link>Resume</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>Contact Me</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default Navigation;
