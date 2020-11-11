//import React Components
import React from "react";
//import React Router Components
import { BrowserRouter as Router, Route } from 'react-router-dom';
//import Bootstrap Components
import { Container } from 'react-bootstrap';
//import CSS
import "./App.css";
//import Custom Components
import Navigation from "./components/Navigation";
import StoriesWrapper from "./components/StoriesWrapper";
import Discover from './components/Discover';
import Create from './components/Create';
import CreateAccount from './components/CreateAccount';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Container>
          <Route exact path="/">
            <StoriesWrapper query="" />
          </Route>
          <Route exact path="/discover">
            <Discover />
          </Route>
          <Route exact path="/post">
            {(localStorage.getItem("token") && localStorage.getItem("token").length !== 0) && <Create></Create>}
          </Route>
          <Route exact path="/account/create">
            <CreateAccount> </CreateAccount>
          </Route>
        </Container>
      </div>
    </Router >

  );
}
export default App;
