import { Alert, Box, Button, Grid, TextField } from '@mui/material'
import React, { useState } from 'react'
import {  useNavigate } from 'react-router-dom';

function ResetPassword() {
 
    const [error,setError]=useState({
        status:false,msg:"",type:""
    })
 const navigate = useNavigate()
   
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
            document.getElementById('password-reset-form').reset()
            setError({status:true,msg:"password Reset Successfully.Redirecting to Login Page...",type:'success'}) 
            setTimeout(()=>{
                navigate("/login")
            },3000)
          }else{
            setError({status:true,msg:"password and confirm password Does not Match",type:'error'})

        }
        }else{
            setError({status:true,msg:"All Fields are Required",type:'error'})
           }
            
        
    }
    return <>
    <Grid container justifyContent='center'>
        <Grid item sm={6} xs={12}>
        <h1>Reset Password</h1>
        <Box component='form' noValidate sx={{mt:2}} id="password-reset-form" onSubmit={handleSubmit}>
        <TextField margin='normal' required fullWidth id='password' name='password' label='New password' type='password' />
        <TextField margin='normal' required fullWidth id='password_confirmation' name='password_confirmation' label='New confirm-password' type='password' />
        <Box textAlign='center'>
            <Button type='submit' variant='contained' sx={{mt:3,mb:2,px:5}}>Save</Button>
        </Box>
        
       {error.status ? <Alert severity={error.type}>{error.msg}</Alert> :''}
    </Box>
        </Grid>
    </Grid>
  </>
}

export default ResetPassword