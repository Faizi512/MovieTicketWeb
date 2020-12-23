import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import Form from "react-bootstrap/Form";
import logo1 from "../spider.jpg";
import Image from "react-bootstrap/Image";
import { Row, Col } from "reactstrap";
import Description from "./Description";

export default class BuyTicket extends React.Component {
  render() {
    return (
      <div>
        <Form className="container ">
          <h1>Buy Ticket</h1>

          <Row>
            <Col sm="6">
              <Form.Label>Selected Movie </Form.Label>
              <Form.Control
                type="text"
                contentEditable="false"
                value="Spider-Man"
              />
              <br />
              <Form.Label>Customer Name </Form.Label>
              <Form.Control as="input" placeholder="Example(John Allen)" />
              <br />
              <Form.Label>Customer Email </Form.Label>
              <Form.Control
                as="input"
                type="Email"
                placeholder="example@domain.com"
              />
              <br />
              <Form.Label>Select Date </Form.Label>
              <br />
              <Form.Control as="select">
                <option>12-Jun-2019</option>
                <option>13-Jun-2019</option>
                <option>14-Jun-2019</option>
                <option>15-Jun-2019</option>
                <option>16-Jun-2019</option>
                <option>17-Jun-2019</option>
                <option>18-Jun-2019</option>
              </Form.Control>
              <br />
              <Form.Label>Select Show Time </Form.Label>
              <br />
              <Form.Control as="select">
                <option>Morning ( 08:00-11:30 )</option>
                <option>Noon ( 14:00-17:30 )</option>
                <option>Evning ( 20:00-23:30 )</option>
                <option>Late Night ( 01:00-03:30 )</option>
              </Form.Control>
              <br />
              {/* <Form.Label>Select Screen </Form.Label> */}
              {/* <br /> */}
              {/* <div>
              <Col sm="4">
                <Form.Check
                  type="radio"
                  label="Platinum"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios1"
                  style={{ marginLeft: "10%" }}
                />
              </Col>
              <Col sm="4">
                <Form.Check
                  type="radio"
                  label="Gold"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios1"
                  style={{ marginLeft: "10%", size: "5rem" }}
                />
              </Col>
              <Col sm="4">
                <Form.Check
                  type="radio"
                  label="sliver"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios1"
                  style={{ marginLeft: "10%", size: "5rem" }}
                />
              </Col>
            </div>
            <div>
              <Form.Label>Select Type </Form.Label>
              <br />

              <Col sm="4">
                <Form.Check
                  type="radio"
                  label="3D"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios2"
                  style={{ marginLeft: "10%" }}
                />
              </Col>
              <Col sm="4">
                <Form.Check
                  type="radio"
                  label="2D"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios2"
                  style={{ marginLeft: "10%", size: "5rem" }}
                />
              </Col>
              <Col sm="4">
                <Form.Check
                  type="radio"
                  label="Other"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios2"
                  style={{ marginLeft: "10%", size: "5rem" }}
                />
              </Col>
            </div> */}

              <Form.Control type="number" placeholder="Enter Seats" />
              <br />

              <Form.Group as={Row} controlId="formPlaintextEmail ">
                <Form.Label column sm="3" className="bg-light ml-4">
                  Total Price
                </Form.Label>
                <Col sm="2" className="bg-light">
                  <Form.Control plaintext readOnly defaultValue="500" />
                </Col>
              </Form.Group>

              <Button variant="success" size="lg" block>
                Conform Booking
              </Button>
              <br />
            </Col>

            <Col sm="6">
              <Image src={logo1} rounded fluid />

              <div className="embed-responsive embed-responsive-16by9">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/Nt9L1jCKGnE"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                />
              </div>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}
