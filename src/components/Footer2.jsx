import React, { Component } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { MDBFooter } from "mdbreact";
import { MDBCol, MDBContainer, MDBRow } from "mdbreact";
import logo1 from "../brand.png";
import { NavLink } from "react-router-dom";

export default class Footer2 extends React.Component {
  render() {
    return (
      <MDBFooter
        color="stylish-color-dark"
        className="page-footer font-small pt-4 mt-4"
      >
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow>
            <MDBCol md="6">
              {" "}
              <a href={logo1} target="_blank">
                <img
                  alt=""
                  src={logo1}
                  width="170"
                  height="70"
                  className="d-inline-block align-top mr-4"
                />
              </a>
              <a href="http://localhost:3000/">
                <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
                  Book Me A Movie
                </h5>
              </a>
              <p>
                You can book any movie which is being displayed in the Cinema.
                We keep your personal information hidden from all the thired
                parties and keep it secure.
              </p>
            </MDBCol>
            <hr className="clearfix w-100 d-md-none" />
            <MDBCol md="2">
              <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
                Links
              </h5>
              <ul className="list-unstyled">
                <li>
                  <a href="/Home" target="_blank">
                    Home{" "}
                  </a>
                </li>
                <br />
                <li>
                  <a href="/about" target="_blank">
                    About Us{" "}
                  </a>
                </li>
              </ul>
            </MDBCol>
            <hr className="clearfix w-100 d-md-none" />
            <MDBCol md="2">
              <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
                Links
              </h5>
              <ul className="list-unstyled">
                <li>
                  <a href="/SignIn" target="_blank">
                    Sign-in{" "}
                  </a>
                </li>
                <br />
                <li>
                  <a href="/BuyTicket" target="_blank">
                    Buy Ticket{" "}
                  </a>
                </li>
              </ul>
            </MDBCol>
            <hr className="clearfix w-100 d-md-none" />
            <MDBCol md="2">
              <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
                Links
              </h5>
              <ul className="list-unstyled">
                <li>
                  <a href="/ViewMovies" target="_blank">
                    Available Movies
                  </a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <hr />
        <div className="text-center py-3">
          <ul className="list-unstyled list-inline mb-0">
            <li className="list-inline-item">
              <h5 className="mb-1">Register for free</h5>
            </li>
            <li className="list-inline-item">
              <a
                href="/SignUp"
                target="_blank"
                className="btn btn-danger btn-rounded"
              >
                Sign up!
              </a>
            </li>
          </ul>
        </div>
        <hr />
        <div className="text-center">
          <ul className="list-unstyled list-inline">
            <li className="list-inline-item">
              <a
                href="https://www.facebook.com/faizan.haider.20"
                target="_blank"
                className="btn-floating btn-sm btn-fb mx-1"
              >
                <i className="fab fa-facebook-f"> </i>
              </a>
            </li>
            <li className="list-inline-item">
              <a
                href="https://twitter.com/FaizanH98645897/"
                target="_blank"
                className="btn-floating btn-sm btn-tw mx-1"
              >
                <i className="fab fa-twitter"> </i>
              </a>
            </li>
            <li className="list-inline-item">
              <a
                href="https://plus.google.com/hfaizan53@gmail.com"
                target="_blank"
                className="btn-floating btn-sm btn-gplus mx-1"
              >
                <i className="fab fa-google-plus"> </i>
              </a>
            </li>
            <li className="list-inline-item">
              <a
                href="https://www.instagram.com/faizan.haider.9210256/"
                target="_blank"
                className="btn-floating btn-sm btn-li mx-1"
              >
                <i className="fab fa-instagram"> </i>
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Copyright:{" "}
            <a href="http://localhost:3000"> BookMeAMovie </a>
          </MDBContainer>
        </div>
      </MDBFooter>
    );
  }
}
