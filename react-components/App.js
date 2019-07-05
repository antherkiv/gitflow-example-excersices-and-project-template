import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container, Row, Col } from 'reactstrap';

import MainNavBar from './MainNavBar';
import Carousel from './Carousel';
import Home from './Home';

import "bootstrap/dist/css/bootstrap.min.css";
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <MainNavBar />
          <Carousel />
          <Container>
              <Route exact path="/" component={Home} />
          </Container>
        </div>
      </Router>
    );
  }
}

export default App;
