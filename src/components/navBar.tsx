import React, { useState } from 'react';
import { createStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import styled from 'styled-components';
import { useFetch } from '../hooks/useFetch';

 const AlginCenter = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  height: 100vh;
`
const HeaderBar = styled(AppBar)`
  background-color: var(--base-green-color);
  .MuiTypography-h6{
    text-transform:capitalize;
  }
`


export interface IPath {
  path: string,
  children?: any,
  routeName?: string
}

// const ProfileSlider = ({data, open}) =>{
//   return (
//   //   <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
//   //   {}
//   // </Drawer>

//   )
// }
export const NavBar: React.FC<IPath> = ({ children, routeName = 'home' }) => {
  const [open, setOpen] = useState<boolean>(false);  
  const openDrawer = () => setOpen(state=> !state);
  const data = useFetch('/profile')
  console.log(data)
  return (<div >
    <HeaderBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon onClick={openDrawer}/>
        </IconButton>
        <Typography variant="h6">
          {routeName}
        </Typography>
      </Toolbar>
    </HeaderBar>
    {/* <ProfileSlider open={open} data={data}/> */}
    <AlginCenter>
      {children}
    </AlginCenter>
  </div>)
}