import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import logo1 from "./brand.png";
import {
  Navbar,
  Button,
  Nav,
  NavDropdown,
  Form,
  FormControl
} from "react-bootstrap";
import SampleNavbar from "./components/Navbar";
import CarouselBar from "./components/Carousel";
import MovieCard from "./components/Card";
import Signup from "./components/SignUp";
import Signin from "./components/SignIn";
import BuyTicket from "./components/BuyTicket";
import Entermovie from "./components/entermovie";
import Update from "./components/Update";
import App from "./App";
import { Link } from "react-router-dom";

ReactDOM.render(<App />, document.getElementById("root"));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
