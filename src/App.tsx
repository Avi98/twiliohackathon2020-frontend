import React, { Component } from 'react';
import './App.css';
import { LoginSignUp } from "./components";
import Styled from "styled-components/macro";

const AlginCenter = Styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  height: 100vh;
`

class App extends Component {
  render() {
    return (
      <AlginCenter>
        <LoginSignUp />
      </AlginCenter>
    );
  }
}

export default App;
