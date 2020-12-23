import React from "react";
import { NavLink } from "react-router-dom";
import {
  Navbar,
  Button,
  Nav,
  NavDropdown,
  Form,
  FormControl
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import Icon from "../icon.jpg";
import logo1 from "../brand.png";
export default class NavbarAdmin extends React.Component {
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
          <NavLink className="navbar-brand" to="/Home">
            <img
              alt=""
              src={logo1}
              width="170"
              height="70"
              className="d-inline-block align-top mr-4"
            />
          </NavLink>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <NavLink className="navbar-brand" to="/Home">
                Home
              </NavLink>
              <NavLink to="/ViewMovies" className="navbar-brand">
                View Movies
              </NavLink>
              <NavLink to="/AddMovies" className="navbar-brand">
                Add Movies
              </NavLink>
              <NavLink to="/booking" className="navbar-brand">
                Bookings
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
