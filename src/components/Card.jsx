import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import logo1 from "../1.jpg";
import logo2 from "../boy.jpg";
import logo3 from "../lion.jpeg";
import logo4 from "../spider.jpg";
import logo5 from "../Dark.jpg";
import logo6 from "../Bright.jpg";
import { Row, Col } from "reactstrap";
import Description from "./Description";

export default class MovieCard extends React.Component {
  buyTicket = e => {
    console.log(e.target);
  };
  render() {
    return (
      <Card
        className="bg-dark text-white ml-4 mb-2"
        style={{
          width: "23rem"
        }}
      >
        <a href={this.props.image} target="_blank">
          <Card.Img variant="top" src={this.props.image} height="300" />
        </a>
        <Card.Body>
          <Card.Title>
            <NavLink to="/details"> {this.props.title} </NavLink>
          </Card.Title>
          <Card.Text>{this.props.desc}</Card.Text>
          <NavLink
            className="btn btn-danger"
            to="/buyticket"
            onClick={this.buyTicket}
          >
            Buy Ticket
          </NavLink>
        </Card.Body>
      </Card>
      // <div>
      //   {/* <br />

      //   <div className="container">
      //     <Row>
      //       <Col xs="10" sm="12" md="6" lg="4">

      //       </Col>
      //     </Row>
      //     {/* </Col>
      //       <Col xs="10" sm="12" md="6" lg="4">
      //         <Card
      //           className="bg-dark text-white m-2"
      //           style={{ width: "23rem" }}
      //         >
      //           <a href={logo3} target="_blank">
      //             <Card.Img variant="top" src={logo3} height="300" />
      //           </a>
      //           <Card.Body>
      //             <a>
      //               <Card.Title>The Lion King</Card.Title>
      //             </a>
      //             <Card.Text>
      //               After the murder of his father, a young lion prince flees
      //               his kingdom only to learn the true meaning...
      //             </Card.Text>
      //             <Button variant="danger">Buy Ticket</Button>
      //           </Card.Body>
      //         </Card>
      //       </Col>
      //       <Col xs="10" sm="12" md="6" lg="4">
      //         <Card
      //           className="bg-dark text-white m-2"
      //           style={{ width: "23rem" }}
      //         >
      //           <a href={logo3} target="_blank">
      //             <Card.Img variant="top" src={logo2} height="300" />
      //           </a>
      //           <Card.Body>
      //             <a>
      //               <Card.Title>Hell Boy</Card.Title>
      //             </a>
      //             <Card.Text>
      //               Based on the graphic novels by Mike Mignola, Hellboy, caught
      //               between the worlds...
      //             </Card.Text>
      //             <Button variant="danger">Buy Ticket</Button>
      //           </Card.Body>
      //         </Card>
      //       </Col>
      //       <Col xs="10" sm="12" md="6" lg="4">
      //         <Card
      //           className="bg-dark text-white m-2"
      //           style={{ width: "23rem" }}
      //         >
      //           <a href={logo4} target="_blank">
      //             <Card.Img variant="top" src={logo4} height="300" />
      //           </a>
      //           <Card.Body>
      //             <a>
      //               <Card.Title>Spider-Man Far From Home</Card.Title>
      //             </a>
      //             <Card.Text>
      //               Following the events of Avengers: Endgame, Spider-Man must
      //               step up to take on new threats...
      //             </Card.Text>
      //             <Button variant="danger">Buy Ticket</Button>
      //           </Card.Body>
      //         </Card>
      //       </Col>
      //       <Col xs="10" sm="12" md="6" lg="4">
      //         <Card
      //           className="bg-dark text-white m-2"
      //           style={{ width: "23rem" }}
      //         >
      //           <a href={logo5} target="_blank">
      //             <Card.Img variant="top" src={logo5} height="300" />
      //           </a>
      //           <Card.Body>
      //             <a>
      //               <Card.Title>Dark Phoenix (2019)</Card.Title>
      //             </a>
      //             <Card.Text>
      //               Jean Grey begins to develop incredible powers that corrupt
      //               and turn her into a Dark Phoenix.
      //             </Card.Text>
      //             <Button variant="danger">Buy Ticket</Button>
      //           </Card.Body>
      //         </Card>
      //       </Col>
      //       <Col xs="10" sm="12" md="6" lg="4">
      //         <Card
      //           className="bg-dark text-white m-2"
      //           style={{ width: "23rem" }}
      //         >
      //           <a href={logo6} target="_blank">
      //             <Card.Img variant="top" src={logo6} height="300" />
      //           </a>
      //           <Card.Body>
      //             <a>
      //               <Card.Title>Bright Burn</Card.Title>
      //             </a>
      //             <Card.Text>
      //               What if a child from another world crash-landed on Earth,
      //               but instead of becoming a hero to mankind...
      //             </Card.Text>
      //             <Button variant="danger">Buy Ticket</Button>
      //           </Card.Body>
      //       // </Card>*/}
      //   </div>
      // </div>
    );
  }
}
