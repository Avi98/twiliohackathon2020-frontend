import React, { useState, SFC } from 'react';
import { createStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import styled from 'styled-components/macro';
import { useFetch } from '../hooks/useFetch';
import { Drawer } from '@material-ui/core';
import { profileData } from "./types";
import { PreviewComp } from './imageUpload';

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

interface IProfile {
  data: profileData
  open: boolean
  anchor?: 'left' | 'top' | 'right' | 'bottom';
  toggleDrawer: () => void
}

const ProfileContainer = styled.table`
  padding: 20px;
  >tr > td{
    font-weight: 600;
  }
  @media screen  and (max-width: 600px){
  padding: 0px;
  }
  
`
const H4 = styled.h4`
  
`
const P = styled.p`
font-weight: 400;
@media screen and (max-width: 600px){

   white-space: nowrap;
    width: 100px;
    text-overflow: ellipsis;
    overflow: hidden;
}
`
const HeaderNavBar = styled.div`
  background-color: var(--base-green-color);
  width: 100%;
  display:flex;
  max-height: 150px;
  padding: 20px;

  align-items:flex-start;
  >div{
    border: none;
    box-shadow: none;
  }
  >h4{
    text-transform: capitalize;
    margin-top: 17.7px;
    margin-left: 10px;
    color: var(--base-white-color);
  }
`
const DrawerContainer = styled(Drawer)`
   @media screen and (min-width: 250px) and (max-width: 400px){
    font-size: 0.76rem;
     div:nth-child(3){
      width: 50%;
      >h4{
        margin-left: 2px;
      }
     }
   }
`
const ProfileSlider: SFC<IProfile> = ({ data, open, anchor = 'left', toggleDrawer }) => {
  return (
    <DrawerContainer anchor={anchor} open={open} onClose={toggleDrawer}>
      <HeaderNavBar>
        <PreviewComp selectedImage={{ imagePreviewUrl: undefined }} height={'50px'} width={'50px'} />
        <H4>{data.first_name} {data.last_name}</H4>
      </HeaderNavBar>
      <ProfileContainer>
        <tr>
          <td>Description:</td>
          <td><P id='description'>{data.description}</P></td>
        </tr>
        <tr>
          <td>Mobile:</td>
          <td><P>{data.mobile}</P></td>
        </tr>
        <tr>
          <td>Location:</td>
          <td><P>{data.current_location}</P></td>
        </tr>
      </ProfileContainer>

    </DrawerContainer>

  )
}
export const NavBar: React.FC<IPath> = ({ children, routeName = 'home' }) => {
  const [open, setOpen] = useState<boolean>(false);
  const openDrawer = () => setOpen(state => !state);
  const { data: { profile }, status } = useFetch('/profile')
  debugger
  return (<div >
    <HeaderBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon onClick={openDrawer} />
        </IconButton>
        <Typography variant="h6">
          {routeName}
        </Typography>
      </Toolbar>
    </HeaderBar>
    {status === 'done_loading' && <ProfileSlider open={open} data={profile} toggleDrawer={openDrawer} />}
    <AlginCenter>
      {children}
    </AlginCenter>
  </div>)
}