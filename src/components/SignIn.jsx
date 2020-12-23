import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.css";
import Form from "react-bootstrap/Form";
import logo1 from "../user.png";
import { Row, Col } from "reactstrap";
export default class Signin extends React.Component {
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
              Log In
            </Card.Title>
            <Card.Img
              src={logo1}
              alt="Card image"
              className="rounded-circle pull-right col-lg-7 col-sm-8"
              style={{
                alignSelf: "Center"
              }}
            />

            <Card.Body className="bg-dark text-white">
              <br />
              <Form.Control type="email" placeholder="Email address" />
              <br />
              <Form.Control type="password" placeholder="Password" />
              <br />
              <Form.Group>
                <Form.Check
                  type="radio"
                  label="Member"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios1"
                />
                <Form.Check
                  type="radio"
                  label="Admin"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios2"
                />
              </Form.Group>
              <Button variant="danger">Log in</Button>
            </Card.Body>
          </Card>
        </Col>
      </Form>
    );
  }
}
