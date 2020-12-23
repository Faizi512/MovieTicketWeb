import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
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
//import "react-dates/initialize";
//import "react-dates/lib/css/_datepicker.css";
//import { SingleDatePicker } from "react-dates";
//import ImagePicker from "./imagePicker";
//import imagePicker from "./imagePicker";

export default class AddMovie extends React.Component {
  render() {
    return (
      <Form className="container card bg-dark text-white">
        <span className="p-2" style={{ textAlign: "center" }}>
          {" "}
          <h1>Add movie's details</h1>{" "}
        </span>

        <Row>
          <Col sm="12">
            <Form.Label>Enter movie name</Form.Label>
            <Form.Control as="input" placeholder="enter movie name" />
            <br />
            <Form.Label>Enter director's name</Form.Label>
            <Form.Control as="input" placeholder="enter director's name/s" />
            <Form.Text>
              Note: For multiple names use ( , ) to separate names
            </Form.Text>
            <br />
            <Form.Label>Enter Cast's name</Form.Label>
            <Form.Control as="input" placeholder="enter cast's name/s" />
            <Form.Text>
              Note: For multiple names use ( , ) to separate names
            </Form.Text>
            <br />
            <Form.Label>Enter play time</Form.Label>
            <Form.Control as="input" placeholder="enter play time" />
            <br />
            <Form.Label>Enter rating</Form.Label>
            <Form.Control as="input" placeholder="1-5" />
            <Form.Text>
              Note: For b/w one star you can use "1.2/2.3/3.5/4.7 etc"
            </Form.Text>
            <br />
            <Form.Label>Enter release date</Form.Label>
            <Form.Control as="input" placeholder="Jan 1,2019" />
            <br />
            <Form.Label>Select Genres </Form.Label>
            <br />
            <Form.Row>
              <Col sm="4">
                <Form.Check
                  type="checkbox"
                  label="SiFi"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios1"
                  style={{ marginLeft: "10%" }}
                />
              </Col>
              <Col sm="4">
                <Form.Check
                  type="checkbox"
                  label="Advanture"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios1"
                  style={{ marginLeft: "10%" }}
                />
              </Col>
              <Col sm="4">
                <Form.Check
                  type="checkbox"
                  label="Romance"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios1"
                  style={{ marginLeft: "10%" }}
                />
              </Col>
              <Col sm="4">
                <Form.Check
                  type="checkbox"
                  label="Comedy"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios1"
                  style={{ marginLeft: "10%" }}
                />
              </Col>
              <Col sm="4">
                <Form.Check
                  type="checkbox"
                  label="Animation"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios1"
                  style={{ marginLeft: "10%" }}
                />
              </Col>
              <Col sm="4">
                <Form.Check
                  type="checkbox"
                  label="Action"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios2"
                  style={{ marginLeft: "10%", size: "5rem" }}
                />
              </Col>
              <Col sm="4">
                <Form.Check
                  type="checkbox"
                  label="Thriller"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios2"
                  style={{ marginLeft: "10%", size: "5rem" }}
                />
              </Col>
            </Form.Row>
            <br />
            <Form.Label>Enter description/story line</Form.Label>
            <Form.Control as="textarea" placeholder="Enter story line" />
            <br />
            <Button variant="warning" size="lg" block>
              Save details
            </Button>
            <br />
          </Col>
        </Row>
      </Form>
    );
  }
}
