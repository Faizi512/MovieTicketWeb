import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import logo1 from "../1.jpg";
import star0 from "../Blank.jpg";
import star1 from "../Yellow.jpg";
import star_2 from "../star_2.jpg";
import star_5 from "../star_5.jpg";
import star_7 from "../star_7.jpg";
import brand from "../brand.png";
import { Row, Col } from "reactstrap";
import Image from "react-bootstrap/Image";

export default class AboutUs extends React.Component {
  render() {
    return (
      <Row
        style={{
          backgroundColor: "#212121"
        }}
      >
        <div
          className="container card"
          style={{
            backgroundColor: "Black",
            marginBottom: "1rem",
            marginTop: "1rem"
          }}
        >
          <Col xs="12">
            <h1 style={{ color: "White" }}>About Us</h1>
            <div
              className="col col-lg-12 col-md-11 col-sm-10 col-xs-2 bg-dark text-white"
              style={{ width: "70rem" }}
            >
              <div className="p-2">
                <a href="http://localhost:3000/" style={{ color: "White" }}>
                  <h1>Book Me A Movie</h1>
                  <span>www.bookmeamovie.com</span>
                </a>
              </div>

              <Card border="dark" text="dark" bg="light">
                <Row>
                  <Col sm="12">
                    <a href={brand} target="_blank">
                      <Card.Img
                        src={brand}
                        wrapped
                        ui={true}
                        height={"330rem"}
                      />
                    </a>
                  </Col>

                  <Card.Body>
                    <Row>
                      <Col sm="4">
                        <h2>Owner:</h2>
                        <p>
                          Faizan Haider
                          <br />
                          <i>
                            <a
                              href="https://www.linkedin.com/in/faizan-haider-689522162/"
                              target="_blank"
                            >
                              hfaizan53@gmail.com
                            </a>
                          </i>
                        </p>
                      </Col>
                      <Col sm="4">
                        <h2>Esteblished in</h2>
                        <p>2019</p>
                      </Col>
                      <Col sm="4">
                        <h2>Number of cinemas supporting</h2>
                        <p>One</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm="4">
                        <h2>Rating</h2>
                        <div>
                          <span style={{ marginRight: ".1rem" }}>
                            <img
                              src={star1}
                              width="25"
                              height="25"
                              border="0"
                            />
                          </span>
                          <span style={{ marginRight: ".1rem" }}>
                            <img
                              src={star1}
                              width="25"
                              height="25"
                              border="0"
                            />
                          </span>
                          <span style={{ marginRight: ".1rem" }}>
                            <img
                              src={star1}
                              width="25"
                              height="25"
                              border="0"
                            />
                          </span>
                          <span style={{ marginRight: ".1rem" }}>
                            <img
                              src={star1}
                              width="25"
                              height="25"
                              border="0"
                            />
                          </span>
                          <span style={{ marginRight: ".1rem" }}>
                            <img
                              src={star_7}
                              width="25"
                              height="25"
                              border="0"
                            />
                          </span>
                          <p>
                            4.7 On the basis of our current sales and promotion.
                          </p>
                        </div>
                      </Col>

                      <Col sm="3">
                        <div
                          className="col col-lg-8 col-md-3 col-sm-2 col-xs-1"
                          style={{ marginTop: "4rem", marginLeft: "14rem" }}
                        >
                          <div className="mb-7 flex-center">
                            <a
                              className="fb-ic"
                              style={{ marginLeft: "5rem" }}
                              href="https://www.facebook.com/faizan.haider.20"
                              target="_blank"
                            >
                              <i className="fab fa-facebook-f fa-lg blue-text mr-md-5 mr-3 fa-2x" />
                            </a>
                            <a
                              className="tw-ic"
                              style={{ marginLeft: "5rem" }}
                              href="https://twitter.com/FaizanH98645897/"
                              target="_blank"
                            >
                              <i className="fab fa-twitter fa-lg blue-text mr-md-5 mr-3 fa-2x" />
                            </a>
                            <a
                              className="gplus-ic"
                              style={{ marginLeft: "5rem" }}
                              href="https://plus.google.com/hfaizan53@gmail.com"
                              target="_blank"
                            >
                              <i className="fab fa-google-plus fa-lg red-text mr-md-5 mr-3 fa-2x" />
                            </a>
                            <a
                              className="ins-ic"
                              style={{ marginLeft: "5rem" }}
                              href="https://www.instagram.com/faizan.haider.9210256/"
                              target="_blank"
                            >
                              <i className="fab fa-instagram fa-lg red-text mr-md-5 mr-3 fa-2x" />
                            </a>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Card.Body>
                </Row>
              </Card>
              <div className="p-2">
                <h2>Story Line</h2>
                <p>
                  1 year ago in Pakistan a seed of an idea was planted, a dream
                  was shared. Inception happened. 1 year later, we look back at
                  what we've built. Leave it up to us, and we'd love to do it
                  all over again. And we have believe in ourselves that we will
                  succeed in our mission .Here's our story.
                </p>
              </div>
            </div>
            <br />
          </Col>
        </div>
      </Row>
    );
  }
}
