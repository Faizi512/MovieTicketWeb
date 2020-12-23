import React from "react";
import Carousel from "react-bootstrap/Carousel";
import logo1 from "../1.jpg";
import logo2 from "../boy.jpg";
import logo3 from "../lion.jpeg";
import logo4 from "../spider.jpg";
import logo5 from "../Dark.jpg";
import logo6 from "../Bright.jpg";
import MovieCard from "./Card";
export default class CarouselBar extends React.Component {
  render() {
    return (
      <Carousel pauseOnHover="true" interval="3000" className="container-fluid">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={logo1}
            alt="First slide"
            height="550"
          />
          <Carousel.Caption>
            <h3>Avengers End Game</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={logo2}
            alt="First slide"
            height="550"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Hell Boy</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={logo3}
            alt="First slide"
            height="550"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>The Lion King</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={logo4}
            alt="First slide"
            height="550"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Spider Man</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={logo5}
            alt="First slide"
            height="550"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Dark Phoenix</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={logo6}
            alt="First slide"
            height="550"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Bright Burn</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}
