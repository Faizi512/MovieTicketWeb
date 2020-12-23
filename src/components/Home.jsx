import React from "react";
import Carousel from "../components/Carousel";
import logo1 from "../1.jpg";
import logo2 from "../boy.jpg";
import logo3 from "../lion.jpeg";
import logo4 from "../spider.jpg";
import logo5 from "../Dark.jpg";
import logo6 from "../Bright.jpg";
import MovieCard from "./Card";
import { Row, Col } from "reactstrap";

export default class CarouselBar extends React.Component {
  state = {
    array: ["haseeb", "ahmed", "khan"],
    cardArr: [
      { title: "Avangers", desc: "slksadjfl;kasdjfl;", image: logo1 },
      { title: "Hell Boy", desc: "slksadjfl;kasdjfl;", image: logo2 },
      { title: "The Lion King", desc: "slksadjfl;kasdjfl;", image: logo3 },
      { title: "Avangers", desc: "slksadjfl;kasdjfl;", image: logo4 },
      { title: "Avangers", desc: "slksadjfl;kasdjfl;", image: logo5 },
      { title: "Avangers", desc: "slksadjfl;kasdjfl;", image: logo6 }
    ]
  };
  render() {
    return (
      <div>
        <div style={{ backgroundColor: "#212121" }}>
          <Carousel />
        </div>
        <h1
          style={{
            backgroundColor: "Black",
            color: "white",
            fontWeight: "bold",
            borderTopStyle: "solid",
            borderBottomStyle: "solid",
            borderColor: "#FCAD",
            paddingLeft: "1rem"
          }}
        >
          Available Movies
        </h1>{" "}
        <Row>
          {this.state.cardArr.map(e => (
            <Col xs="10" sm="12" md="6" lg="4">
              <MovieCard title={e.title} desc={e.desc} image={e.image} />
            </Col>
          ))}
        </Row>
        {/* <MovieCard title="avangers" desc="wow movie!" image={logo1} /> */}
      </div>
    );
  }
}
