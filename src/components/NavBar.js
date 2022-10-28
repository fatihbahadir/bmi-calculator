import React, { useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";
import "../assets/styles/Nav.css";

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [url, setUrl] = useState(null);

  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);
  return (
    <>
      <Navbar expand="lg" className="navbar__container" variant="light">
        <Container>
          <Navbar.Brand
            className="nav__brand"
            onClick={() => {
              navigate("/");
            }}
          >
            <img
              src={logo}
              alt="logo"
              width="60"
              height="60"
              className="d-inline-block align-top"
            />
            <div className="nav__brandText" style={{}}>
              BMI CALCULATOR
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="nav__items">
              <Nav.Item>
                <Nav.Link
                  className={"nav__link " + (url === "/" ? "active" : "")}
                  as={Link}
                  to="/"
                >
                  Home
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  className={"nav__link " + (url === "/about" ? "active" : "")}
                  as={Link}
                  to="/about"
                >
                  About BMI
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  className={
                    "nav__link last " + (url === "/history" ? "active" : "")
                  }
                  as={Link}
                  to="/history"
                >
                  History
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
