import React, { useEffect, useRef, useState } from 'react';
import { authActions } from '../src/store';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/UI/Header';
import Router from 'next/router';
import { TextField, Grid, Typography, Box} from '@mui/material';
import Card from '../components/UI/Card';
import Emoji from '../components/UI/Emoji';
import LoadingButton from '@mui/lab/LoadingButton';

const SignUp = () => {

    const passwordInputRef = useRef();
    const emailIDInputRef = useRef();
    const confirmPasswordInputRef = useRef();
    const firstNameInputRef = useRef();
    const lastNameInputRef = useRef();
    const branchInputRef = useRef();
    const ageInputRef = useRef();
    const phoneNumberInputRef = useRef();
    const collegeInputRef = useRef();

    const isLoggedIn= useSelector(state=>state.isLoggedIn);

    const [isLoading, setIsLoading] = useState(false);
    
    const [passwordMatch, setPasswordMatch] = useState(true);

    
    const dispatch = useDispatch();
    
    const submitHandler = async (e) => {
        e.preventDefault();
        if(confirmPasswordInputRef.current.value===passwordInputRef.current.value){
            setIsLoading(true);
            setPasswordMatch(true);
            const id = Math.floor(Math.random()*1000)
            const response = await fetch(`/api/signup?userId=us${id}&branch=${branchInputRef.current.value}&emailID=${emailIDInputRef.current.value}&password=${passwordInputRef.current.value}&firstName=${firstNameInputRef.current.value}&lastName=${lastNameInputRef.current.value}&age=${ageInputRef.current.value}&phoneNumber=${phoneNumberInputRef.current.value}&collegeName=${collegeInputRef.current.value}`, {method:'PUT', headers:{ "Content-Type": "application/json" }})
            if(response.ok)
            {
                dispatch(authActions.setLogin(true));
                dispatch(authActions.setUserId(`us${id}`));
                dispatch(authActions.setUserName(firstNameInputRef.current.value+' '+lastNameInputRef.current.value));
                Router.push('/');
            }
        }
        else{
            setPasswordMatch(false);
        }
        setIsLoading(false);
    }

    const confirmPasswordHandler = () =>{

    }

    useEffect(() => {
        if (isLoggedIn) {
            Router.push('/')
        }
    });

    return (
        <>
        <Header/>
        <form onSubmit={submitHandler}>
        <Card width='60rem' boxShadow spacing={3}>
            <Grid item xs={12}>
                <Typography variant="h5" fontWeight="700">
                    Sign Up
                    <Emoji symbol=" 🙌" />
                </Typography>
                <Typography variant="h6" fontWeight="400" color='gray'>
                    Please fill in all the details to experience our app!
                </Typography>
            </Grid>
            <Grid item xs={6} >
                <TextField variant="outlined" label="First Name" fullWidth inputRef={firstNameInputRef}/>
            </Grid>
            <Grid item xs={6} >
                <TextField variant="outlined" label="Last Name" fullWidth inputRef={lastNameInputRef}/>
            </Grid>
            <Grid item xs={6} >
                <TextField variant="outlined" label="Password" type="password" fullWidth inputRef={passwordInputRef} />
            </Grid>
            <Grid item xs={6} >
                <TextField variant="outlined" label="Confirm Password" type="password" inputRef={confirmPasswordInputRef} helperText={!passwordMatch && 'Passwords do not match'} error={!passwordMatch} onBlur={confirmPasswordHandler} fullWidth />
            </Grid>
            <Grid item xs={6} >
                <TextField variant="outlined" label="Branch" fullWidth inputRef={branchInputRef}/>
            </Grid>
            <Grid item xs={6} >
                <TextField variant="outlined" label="Age" type='number' fullWidth inputRef={ageInputRef}/>
            </Grid>
            <Grid item xs={6} >
                <TextField variant="outlined" label="Phone Number" type='number' inputRef={phoneNumberInputRef} fullWidth />
            </Grid>
            <Grid item xs={6} >
                <TextField variant="outlined" label="Email ID" type='email' fullWidth inputRef={emailIDInputRef} />
            </Grid>
            <Grid item xs={6} >
                <TextField variant="outlined" label="College" fullWidth inputRef={collegeInputRef}/>
            </Grid>
            <Grid item xs={6}>
                <LoadingButton fullWidth loading={isLoading} variant='contained' size='large'  type='submit' sx={{ height: '3.2rem' }}>Proceed to App</LoadingButton>
            </Grid>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row-reverse',
                    p: 1,
                    m: 1,
                    bgcolor: 'background.paper',
                    borderRadius: 1,
                }}
            >
                
            </Box>
        </Card>
    </form>
        </>
    )
}

export default SignUp