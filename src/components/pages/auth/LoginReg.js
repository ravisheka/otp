import { Box, Card, Grid, Tab, Tabs } from '@mui/material'

import React, { useState } from 'react'
import Pic1 from '../../../images/pic1.png'
import Login from './Login';
import Registration from './Registration';

const Tabpanel =(props)=>{
    const {children,value,index}=props;
    return(
        <div role='tabpanel' hidden={value !==index}>
            {
                value===index && (
                    <Box>{children}</Box>
                )
            }
        </div>
    )
}

function LoginReg() {
    const[value,setValue] =useState(0)
    const handleChange =( event,newValue)=>{
        setValue(newValue);
    }
  return <>
<Grid container sx={{height:'90vh'}}>
    <Grid item lg={7} sm={5} sx={{backgroundImage:`url(${Pic1})`,
    backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center', display:{sx:'none',sm:'block'}}}>
    </Grid>
    <Grid item lg={5} sm={7} xs={12}>
    <Card sx={{width:'100%',height:'100%'}}>
     <Box >
        <Box sx={{borderBottom:1,borderColor:'divider'}}>
        <Tabs value={value} textColor='secondary' indicatorColor='secondary' onChange={handleChange}>
            <Tab label='Login' sx={{textTransform:'none',fontWeight:'bold'}}></Tab>
            <Tab label='Registration'sx={{textTransform:'none',fontWeight:'bold'}}></Tab>
        </Tabs>
        </Box>
         <Tabpanel value={value} index={0}>
            <Login/>
         </Tabpanel>
         <Tabpanel value={value} index={1}>
            <Registration/>
         </Tabpanel>
        </Box>
    </Card>
    </Grid>
</Grid>


  </>
   
  
}

export default LoginReg