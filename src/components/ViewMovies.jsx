import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import Form from "react-bootstrap/Form";
import logo1 from "../1.jpg";
import logo2 from "../spider.jpg";
import logo3 from "../boy.jpg";
import logo4 from "../lion.jpeg";
import Image from "react-bootstrap/Image";
import star_7 from "../star_7.jpg";
import star1 from "../Yellow.jpg";
import { Container, Row, Col } from "reactstrap";
import Table from "react-bootstrap/Table";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
export default class ViewMoview extends React.Component {
  render() {
    return (
      <Form className="container">
        <h1>Movies</h1>

        <Row>
          <Col sm="12">
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Movie Name</th>
                  <th>Director Name</th>
                  <th>Genres</th>
                  <th>Rating</th>
                  <th>Release Date</th>
                  <th>Play Time</th>
                  <th>Poster</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Avengers</td>
                  <td>Ali</td>
                  <td>Gold</td>
                  <td>
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
                  </td>
                  <td>12-Jun-2019</td>
                  <td>3hrs</td>
                  <td>
                    <a href={logo1} target="_blank">
                      <img src={logo1} width="70rem" height="30rem" />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Spider man</td>
                  <td>Ahmed</td>
                  <td>Platinum</td>
                  <td>
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
                  </td>
                  <td>12-Jun-2019</td>
                  <td>3hrs</td>
                  <td>
                    <a href={logo2} target="_blank">
                      <img src={logo2} width="70rem" height="30rem" />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Hell boy</td>
                  <td>Daniyal</td>
                  <td>Platinum</td>
                  <td>
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
                  </td>
                  <td>12-Jun-2019</td>
                  <td>3hrs</td>
                  <td>
                    <a href={logo3} target="_blank">
                      <img src={logo3} width="70rem" height="30rem" />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>The Lion King</td>
                  <td>Faizan</td>
                  <td>silver</td>
                  <td>
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
                  </td>
                  <td>12-Jun-2019</td>
                  <td>3hrs</td>
                  <td>
                    <a href={logo4} target="_blank">
                      <img src={logo4} width="70rem" height="30rem" />
                    </a>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Form>
    );
  }
}
