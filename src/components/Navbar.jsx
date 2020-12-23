import React from "react";
import {
  Navbar,
  Button,
  Nav,
  NavDropdown,
  Form,
  FormControl
} from "react-bootstrap";
import Icon from "../icon.jpg";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import logo1 from "../brand.png";
export default class SampleNavbar extends React.Component {
  render() {
    return (
      <div>
        <Navbar
          variant="tabs"
          bg="dark"
          variant="dark"
          expand="md"
          // className="mb-2"
        >
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo1}
              width="170"
              height="70"
              className="d-inline-block align-top mr-4"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <NavLink className="navbar-brand" to="/Home">
                Home
              </NavLink>
              <NavLink to="/bookmovie" className="navbar-brand">
                Book Movie
              </NavLink>
              <NavLink to="/SignIn" className="navbar-brand">
                Sign In
              </NavLink>
              <NavLink to="/SignUp" className="navbar-brand">
                Get Register
              </NavLink>
              <NavLink to="/about" className="navbar-brand">
                About Us
              </NavLink>
            </Nav>

            <Form inline>
              <a href={Icon} target="_blank">
                <img src={Icon} width="170" height="70" />
              </a>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
