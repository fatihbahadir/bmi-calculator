import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "../assets/styles/Footer.css";
const FooterComponent = () => {
  return (
    <div className="fixed-bottom">
      <Navbar className="nav__container" bg="dark">
        <Nav.Link
          className="nav"
          target="_blank"
          href="https://github.com/fatihbahadir"
        >
          Copyright © 2022 github.com/fatihbahadir{" "}
        </Nav.Link>
      </Navbar>
    </div>
  );
};

export default FooterComponent;
