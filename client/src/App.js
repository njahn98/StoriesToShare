import React, { useEffect, useState } from "react";
import { Container } from 'react-bootstrap';
import Story from './components/Story';
import Navbar from './components/Navigation';
import logo from "./logo.svg";
import "./App.css";
import Navigation from "./components/Navigation";

function App() {
  const range = (end) => {
    var start = 0;
    var ans = [];
    for (let i = start; i <= end; i++) {
      ans.push(i);
    }
    return ans;
  }

  const getStories = () => {

  };

  const numStories = 10;

  return (
    <div className="App">
      <Navigation></Navigation>
      <Container>
        <div className="stories">
          {
            range(numStories).map(i =>
              <Story></Story>
            )
          }
        </div>
      </Container>
    </div>
  );
}

export default App;
