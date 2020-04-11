import React, { Component } from 'react';
import './App.css';
import { Login } from "./components";
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
        <Login />
      </AlginCenter>
    );
  }
}

export default App;
