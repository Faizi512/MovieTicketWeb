import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.css";
import Form from "react-bootstrap/Form";
import logo1 from "../1.jpg";
import { Row, Col } from "reactstrap";
import { FormGroup } from "semantic-ui-react";
export default class Signup extends React.Component {
  render() {
    return (
      <Form>
        <Col lg={{ size: 8, offset: 2 }} md={{ size: 8, offset: 2 }}>
          <Card
            className=" text-white bg-dark"
            style={{
              marginTop: "2%"
            }}
          >
            <Card.Title
              style={{
                fontWeight: "bolder",
                textAlign: "center",
                fontSize: "3rem",
                borderBottomStyle: "double",
                borderBottomColor: "Gray",
                borderTopStyle: "double",
                borderTopColor: "Gray"
              }}
            >
              Sign Up
            </Card.Title>
            <Card.Img
              src={logo1}
              alt="Card image"
              className="rounded-circle pull-right col-lg-7 col-sm-8"
              style={{
                alignSelf: "center"
              }}
            />
            <Button
              variant="danger"
              className="rounded-circle"
              style={{ marginTop: "2rem", alignSelf: "Center" }}
            >
              UPLOAD
            </Button>
            <Card.Body className="bg-dark text-white">
              <Form.Control type="text" placeholder="First Name" />
              <br />
              <Form.Control type="text" placeholder="Last Name" />
              <br />
              <Form.Control type="number" placeholder="Phone Number" />
              <br />
              <Form.Control type="email" placeholder="Email" />
              <br />
              <Form.Control type="password" placeholder="Password" />
              <br />
              <FormGroup>
                <Form.Check
                  type="radio"
                  label="Male"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios1"
                  style={{ alignSelf: "Center" }}
                />
                <Form.Check
                  type="radio"
                  label="Female"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios2"
                  style={{ alignSelf: "Center" }}
                />
              </FormGroup>
              <Button variant="danger" style={{ alignSelf: "Center" }}>
                Submit
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Form>
    );
  }
}
