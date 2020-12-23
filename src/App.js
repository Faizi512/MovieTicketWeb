import React, { Component } from "react";
//import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import NavbarAdmin from "./components/NavbarAdmin";
import Carousel from "./components/Carousel";
import MovieCard from "./components/Card";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import BuyTicket from "./components/BuyTicket";
import Entermovie from "./components/entermovie";
// import Update from "./components/Update";
import Counter from "./components/counter";
import Footer from "./components/Footer";
import Footer1 from "./components/Footer1";
import Footer2 from "./components/Footer2";
import Description from "./components/Description";
import AddMovie from "./components/AddMovie";
import ViewBooking from "./components/ViewBooking";
import ViewMovies from "./components/ViewMovies";
import AboutUs from "./components/AboutUs";
import Card from "./components/Card";
import Home from "./components/Home";

//import imagePicker from "./components/imagePicker";
//import { Route, Switch, Redirect } from "react-router-dom";

import { Container, Row, Col } from "reactstrap";

class App extends Component {
  render() {
    return (
      <div className="App ">
        {/* <Navbar />
        <NavbarAdmin />
        <CarouselBar />
        <AddMovie />
        <MovieCard />
        {/* <Entermovie /> 
        <BuyTicket />

        <Description />
        <AddMovie />
        <Signup />
        <Signin />
        <ViewBooking />
        <ViewMovies />

        <AboutUs />
        <Footer2 />
        <Counter /> */}
        <BrowserRouter>
          {true && <Navbar />}
          {true && <NavbarAdmin />}
          <Switch>
            <Route path="/Home" component={Home} />
            <Route path="/ViewMovies" component={ViewMovies} />
            <Route path="/AddMovies" component={AddMovie} />
            <Route path="/booking" component={ViewBooking} />
            <Route path="/About" component={AboutUs} />
            <Route path="/buyticket" component={BuyTicket} />
            <Route path="/SignIn" component={SignIn} />
            <Route path="/SignUp" component={SignUp} />
            <Route path="/bookmovie" component={BuyTicket} />
            <Route path="/details" component={Description} />
          </Switch>
        </BrowserRouter>
        <Footer2 />
      </div>
    );
  }
}

export default App;
