import React, { useState } from 'react'
import { Alert, Box, Button, FormControlLabel, TextField,Checkbox } from '@mui/material'
import { useNavigate } from 'react-router-dom'
//import { CheckBox } from '@mui/icons-material';
function Registration() {
    const [error,setError]=useState({
    status:false,msg:"",type:""
})
const navigate=useNavigate();
const handleSubmit =(e)=>{
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData ={
        name:data.get('name'),
        email:data.get('email'),
        password:data.get('password'),
        password_confirmation:data.get('password_confirmation'),
        tc:data.get('tc'),
    }
        if(actualData.name && actualData.email && actualData.password && actualData.tc !==null){
            if(actualData.password===actualData.password_confirmation){
       console.log(actualData);
       document.getElementById('registration-form').reset()
       setError({status:true,msg:"Registration Successfully",type:'success'})

      navigate('/dashboard')
            }else{
                setError({status:true,msg:"password and confirm password Does not Match",type:'error'})
  
            }
       }else{
        setError({status:true,msg:"All Friends are Required",type:'error'})
       }
    }
  return <>
    <Box component='form' noValidate sx={{mt:1}} id="registration-form" onSubmit={handleSubmit}>
        <TextField margin='normal' required fullWidth id='name' name='name' label='Name' />
        <TextField margin='normal' required fullWidth id='email' name='email' label='Email Address' />
        <TextField margin='normal' required fullWidth id='password' name='password' label='password' type='password' />
        <TextField margin='normal' required fullWidth id='password_confirmation' name='password_confirmation' label='confirm-password' type='password' />
         <FormControlLabel control={<Checkbox defaultChecked value="agree" color="primary" name='tc' id='tc'/>}  label="I agree to term and condition."/>
        <Box textAlign='center'>
            <Button type='submit' variant='contained' sx={{mt:3,mb:2,px:5}}>Join</Button>
        </Box>
        
       {error.status ? <Alert severity={error.type}>{error.msg}</Alert> :''}
    </Box>
  </>
    
  
}

export default Registration