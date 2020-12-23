import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import Form from "react-bootstrap/Form";
import logo1 from "../spider.jpg";
import Image from "react-bootstrap/Image";
import { Container, Row, Col } from "reactstrap";
import Table from "react-bootstrap/Table";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
export default class update extends React.Component {
  render() {
    return (
      <Form className="container">
        <h1>Update Movie</h1>
        <Row>
          <Form.Label>Select Movie </Form.Label>
          <Form.Control as="select">
            <option>Spider man</option>
            <option>Avengers End Game</option>
            <option>Hell Boy</option>
            <option>The Lion King</option>
          </Form.Control>
        </Row>
        <br />
        <Row>
          <Col sm="3">
            <Button variant="info" size="lg">
              Update
            </Button>
            <br />
            <br />
            <Button variant="danger" size="lg">
              Delete
            </Button>
          </Col>
          <Col sm="9">
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Movie Name</th>
                  <th>Customer Name</th>
                  <th>Ticket</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Avengers</td>
                  <td>Ali</td>
                  <td>Gold</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Spider man</td>
                  <td>Ahmed</td>
                  <td>Platinum</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Hell boy</td>
                  <td>Daniyal</td>
                  <td>Platinum</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>The Lion King</td>
                  <td>Faizan</td>
                  <td>silver</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Form>
    );
  }
}
