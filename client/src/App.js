//import React Components
import React, { useEffect, useState } from "react";
//import React Router Components
import { BrowserRouter as Router, Route } from 'react-router-dom';
//import Bootstrap Components
import { Container, Button } from 'react-bootstrap';
//import CSS
import "./App.css";
//import Custom Components
import Story from './components/Story';
import Navigation from "./components/Navigation";
import StoriesWrapper from "./components/StoriesWrapper";
import Discover from './components/Discover';
import Create from './components/Create';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Container>
          <Route exact path="/">
            <StoriesWrapper />
          </Route>
          <Route exact path="/discover">
            <Discover />
          </Route>
          <Route exact path="/post">
            <Create></Create>
          </Route>
        </Container>
      </div>
    </Router >

  );
}
export default App;
