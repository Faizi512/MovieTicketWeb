import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import Form from "react-bootstrap/Form";
import logo1 from "../spider.jpg";
import Image from "react-bootstrap/Image";
import { Container, Row, Col } from "reactstrap";
import Table from "react-bootstrap/Table";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
export default class ViewBooking extends React.Component {
  render() {
    return (
      <Form className="container">
        <h1>Bookings</h1>

        <Row>
          <Col sm="12">
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Movie Name</th>
                  <th>Customer Name</th>
                  <th>Ticket</th>
                  <th>Date</th>
                  <th>Show Time</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Avengers</td>
                  <td>Ali</td>
                  <td>Gold</td>
                  <td>12-Jun-2019</td>
                  <td>Noon</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Spider man</td>
                  <td>Ahmed</td>
                  <td>Platinum</td>
                  <td>13-Jun-2019</td>
                  <td>Morning</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Hell boy</td>
                  <td>Daniyal</td>
                  <td>Platinum</td>
                  <td>12-Jun-2019</td>
                  <td>Noon</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>The Lion King</td>
                  <td>Faizan</td>
                  <td>silver</td>
                  <td>14-Jun-2019</td>
                  <td>Evening</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Form>
    );
  }
}
