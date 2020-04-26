import React, { Component, FC} from 'react';
import './App.css';
import { LoginSignUp, ToasterFactory } from "./components";
import Styled from "styled-components/macro";
import { Router, useNavigate } from "@reach/router"
import { UITrigger } from './context/uiTrigger';
import { Profile } from './screens/Profile';
import { ENV } from './config';


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
console.info('in develop auth routes dont work env:-', ENV)

const UnAuthorize: FC<IPath> = () => <AlginCenter>
  <LoginSignUp path="/" />
</AlginCenter>

const Home: FC<IPath> = () => <h2>home Routes working fine</h2>
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
