import { Alert, Box, Button,  TextField } from '@mui/material'
import React, { useState } from 'react'
//import {  useNavigate } from 'react-router-dom';


function ChangePassword() {
  const [error,setError]=useState({
    status:false,msg:"",type:""
})


const handleSubmit =(e)=>{
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData ={
        password:data.get('password'),
        password_confirmation:data.get('password_confirmation'),
       
    }
        if(actualData.password && actualData.password_confirmation ){
      if(actualData.password === actualData.password_confirmation){
        console.log(actualData);
        document.getElementById('password-change-form').reset()
        setError({status:true,msg:"password Changed Successfully",type:'success'}) 
       
      }else{
        setError({status:true,msg:"password and confirm password Does not Match",type:'error'})

    }
    }else{
        setError({status:true,msg:"All Fields are Required",type:'error'})
       }
        
      }
    return <>
    <Box sx={{display:'flex', flexDirection:'column', flexWrap:'wrap',maxWidth:500,mx:4}}>
    <h1>Change Password</h1>
    <Box component='form' noValidate sx={{mt:1}} id="password-change-form" onSubmit={handleSubmit}>
        
        <TextField margin='normal' required fullWidth id='password' name='password' label='New password' type='password' />
        <TextField margin='normal' required fullWidth id='password_confirmation' name='password_confirmation' label='Confirm New password' type='password' />
        
        <Box textAlign='center'>
            <Button type='submit' variant='contained' sx={{mt:3,mb:2,px:5}}>Update</Button>
        </Box>
        
       {error.status ? <Alert severity={error.type}>{error.msg}</Alert> :''}
       </Box>
    </Box>
  </>
}

export default ChangePassword