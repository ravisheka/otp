import { Box, Toolbar,AppBar, Typography, Button } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <>
        <Box sx={{flexGrow:1}}>
            <AppBar position="static" color="secondary">
            <Toolbar>
                <Typography variant='h5' component="div" sx={{flexGrow:1}}>
                Geek-shop

                </Typography>
                <Button component={NavLink} to='/' style={({isActive})=>{return{backgroundColor:isActive ? '#6d1b7b':''}}} sx={{color:'white', textTransform:'none'}}>Home</Button>
                <Button component={NavLink} to='/contact' style={({isActive})=>{return{backgroundColor:isActive ? '#6d1b7b':''}}} sx={{color:'white',textTransform:'none'}}>Contact</Button>
                <Button component={NavLink} to='/login' style={({isActive})=>{return{backgroundColor:isActive ? '#6d1b7b':''}}} sx={{color:'white',textTransform:'none'}}>Login/Regitration</Button>
            </Toolbar>
            </AppBar>
        </Box>
    </>
  )
}

export default Navbar