import React, { Component } from 'react';
import './App.css';
import { SignUp } from "./components";
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
        <SignUp />
      </AlginCenter>
    );
  }
}

export default App;
