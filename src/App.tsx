import React, { Component, FC } from 'react';
import './App.css';
import { LoginSignUp } from "./components";
import Styled from "styled-components/macro";
import { Router, Link } from "@reach/router"
import { UITrigger, useUITrigger } from './context/uiTrigger';

const AlginCenter = Styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  height: 100vh;
`

const Home: FC<{ path: string }> = () => <AlginCenter>
  <LoginSignUp />
</AlginCenter>
  


const PageNotFound: FC<{ path: string }> = () => <AlginCenter>Page Not Found</AlginCenter>

class App extends Component {
  render() {
    return (
      <UITrigger>
        <Router>
          <Home path="/" />
          <PageNotFound path="*" />
        </Router>
      </UITrigger>
    );
  }
}

export default App;
