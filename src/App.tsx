import React, { Component, FC } from 'react';
import './App.css';
import { LoginSignUp, ToasterFactory } from "./components";
import Styled from "styled-components/macro";
import { Router, useNavigate } from "@reach/router"
import { UITrigger } from './context/uiTrigger';
import { Profile } from './screens/Profile';
import { ENV } from './config';
import { Store } from './context/store';
import { NavBar } from './components/navBar';


export const AlginCenter = Styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  height: 100vh;
`
export interface IPath {
  path: string,
  children?: any
}
console.info('in develop auth routes dont work env:-', ENV)

const UnAuthorize: FC<IPath> = () => <AlginCenter>
  <LoginSignUp path="/" />
</AlginCenter>

const AuthRoutes: FC<IPath> = ({ path, children }: IPath) => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  console.info('in develop auth routes dont work env:-', ENV)
  if (!token && ENV !== 'develop') {
    navigate('/', { replace: false })
    return <AlginCenter>
      <LoginSignUp path="/" />
    </AlginCenter>
  }
  else {
    return (
      <div>
        {children}
      </div>
    )
  }
  return <></>
}


const PageNotFound: FC<{ path: string }> = () => <AlginCenter>Page Not Found</AlginCenter>
class App extends Component {
  render() {
    return (
      <Store>
        <UITrigger>
          <>
            <ToasterFactory />
            <Router>
              <UnAuthorize path="/" />
              <AuthRoutes path="user" >
                <NavBar path="home">
                  
                </NavBar>
                  <Profile path="profile" />               
              </AuthRoutes>
              <PageNotFound path="*" />
            </Router>
          </>
        </UITrigger>
      </Store>
    );
  }
}

export default App;
