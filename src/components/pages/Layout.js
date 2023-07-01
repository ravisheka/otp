import { CssBaseline } from '@mui/material';
import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar'
//import Contact from './Contact';
//import Home from './Home';

function Layout() {
  return <>
  <CssBaseline/>
    <Navbar/>
   <Outlet/>
    </>;
}

export default Layout