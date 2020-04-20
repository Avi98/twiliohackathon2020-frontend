import React, { Component, FC, ReactChildren, ReactChild, ReactNode } from 'react';
import './App.css';
import { LoginSignUp, ToasterFactory } from "./components";
import Styled from "styled-components/macro";
import { Router, Link, useNavigate } from "@reach/router"
import { UITrigger, useUITrigger } from './context/uiTrigger';
import { useLoginSignUp } from './hooks/useAuth';


const AlginCenter = Styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  height: 100vh;
`
interface IPath {
  path: string,
  children?: any
}
const UnAuthorize: FC<IPath> = () => <AlginCenter>
  <LoginSignUp path="/" />
</AlginCenter>

const Profile: FC<IPath> = () => <div>Profile Routes working fine</div>
const Home: FC<IPath> = () => <h2>home Routes working fine</h2>
const AuthRoutes: FC<IPath> = ({ path, children }: IPath) => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  if (!token) {
    navigate('/', { replace: false })
    return <AlginCenter>
      <LoginSignUp path="/" />
    </AlginCenter>
  }
  else {
    return (
      <div>hi
        <AlginCenter>
          {children}
        </AlginCenter>
      </div>
    )
  }
  return <></>
}

// <AlginCenter>
//   {/* <Dashbord path='dash'/> */}
// </AlginCenter>




const PageNotFound: FC<{ path: string }> = () => <AlginCenter>Page Not Found</AlginCenter>
class App extends Component {
  render() {
    return (
      <UITrigger>
        <>
          <ToasterFactory />
          <Router>
            <UnAuthorize path="/" />
            <AuthRoutes path="user" >
              <Profile path="profile" />
              <Home path="home" />
            </AuthRoutes>
            <PageNotFound path="*" />

          </Router>
        </>
      </UITrigger >
    );
  }
}

export default App;
