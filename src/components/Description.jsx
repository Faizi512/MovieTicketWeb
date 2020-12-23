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
import logo4 from "../spider.jpg";
import { Row, Col } from "reactstrap";
import Image from "react-bootstrap/Image";

export default class Description extends React.Component {
  render() {
    return (
      <Row>
        <div
          className="container card"
          style={{ backgroundColor: "Black", marginBottom: "1rem" }}
        >
          <Col xs="12">
            <h1 style={{ color: "White" }}>Description</h1>
            <div
              className="col col-lg-12 col-md-11 col-sm-10 col-xs-2 bg-dark text-white "
              style={{ width: "70rem" }}
            >
              <div className="p-2">
                <h1>Avengers End Game (2019)</h1>
                <div>
                  <span style={{ marginRight: ".1rem" }}>
                    <img src={star1} width="25" height="25" border="0" />
                  </span>
                  <span style={{ marginRight: ".1rem" }}>
                    <img src={star1} width="25" height="25" border="0" />
                  </span>
                  <span style={{ marginRight: ".1rem" }}>
                    <img src={star1} width="25" height="25" border="0" />
                  </span>
                  <span style={{ marginRight: ".1rem" }}>
                    <img src={star1} width="25" height="25" border="0" />
                  </span>
                  <span style={{ marginRight: ".1rem" }}>
                    <img src={star_7} width="25" height="25" border="0" />
                  </span>
                </div>
              </div>

              <Card border="dark" text="dark" bg="light">
                <Row>
                  <Col sm="12">
                    <Card.Img src={logo1} wrapped ui={true} height={"330rem"} />
                  </Col>

                  <Card.Body>
                    <Row>
                      <Col sm="4">
                        <h2>Director:</h2>
                        <p>Anthony Russo, Joe Russo</p>
                      </Col>
                      <Col sm="4">
                        <h2>Cast</h2>
                        <p>
                          Iron Man, Captain America, Thor, Hulk, Ant-Man, Wasp,
                          Shuri, Black Panther
                        </p>
                      </Col>
                      <Col sm="4">
                        <h2>PlayTime</h2>
                        <p>3hrs</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm="4">
                        <h2>Geners</h2>
                        <p>SiFi, Action</p>
                      </Col>
                      <Col sm="4">
                        <h2>Release Date</h2>
                        <p>April 24,2019</p>
                      </Col>
                      <Col sm="3">
                        <Button
                          className="col col-lg-8 col-md-3 col-sm-2 col-xs-1"
                          variant="info"
                        >
                          Buy Ticket
                        </Button>
                      </Col>
                    </Row>
                  </Card.Body>
                </Row>
              </Card>
              <div className="p-2">
                <h2>Story Line</h2>
                <p>
                  Adrift in space with no food or water, Tony Stark sends a
                  message to Pepper Potts as his oxygen supply starts to
                  dwindle. Meanwhile, the remaining Avengers -- Thor, Black
                  Widow, Captain America and Bruce Banner -- must figure out a
                  way to bring back their vanquished allies for an epic showdown
                  with Thanos -- the evil demigod who decimated the planet and
                  the universe.
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
