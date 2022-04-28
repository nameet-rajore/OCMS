import React, { useRef } from 'react'
import { Button, TextField, Grid, Typography, Box, Link } from '@mui/material';
import Card from '../components/UI/Card';
import Emoji from '../components/UI/Emoji';
import { NextLinkComposed } from '../src/Link';
import Header from '../components/UI/Header';
import { useSelector, useDispatch } from 'react-redux';
import Router from 'next/router';
import { authActions } from '../src/store';
import { useState } from 'react';
import { useEffect } from 'react';
import { LoadingButton } from '@mui/lab';

const Login = () => {

    const dispatch = useDispatch();
    const isLoggedIn = useSelector(state => state.isLoggedIn);

    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    const submitHandler = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        const response = await fetch(`/api/auth?emailID=${emailInputRef.current.value}&password=${passwordInputRef.current.value}`, {method: 'GET', headers: { "Content-Type": "application/json" }});
        const data = await response.json();
        console.log(data);
        if(data.message==='Successful Login')
        {
        dispatch(authActions.setUserName(data.userName));
        dispatch(authActions.setUserId(data.userId));
        dispatch(authActions.setLogin(true));
        setEmailError(false);
        setPasswordError(false);
        Router.push('/');
        }
        else{
            setEmailError(true);
            setPasswordError(true);
        }
        setIsLoading(false);
    }

    return (
        <>
            <Header />
            <form onSubmit={submitHandler}>
                <Card width='30rem' boxShadow spacing={3}>
                    <Grid item xs={12} p={0}>
                        <Typography variant="h5" fontWeight="700">
                            Hello, Student!
                            <Emoji symbol="👋" />
                        </Typography>
                        <Typography variant="h6" fontWeight="400" color='gray'>
                            Please login
                        </Typography>
                    </Grid>

                    <Grid item xs={12} >
                        <TextField variant="outlined" label="Email ID" fullWidth inputRef={emailInputRef} error={emailError}/>
                    </Grid>
                    <Grid item xs={12} p={0}>
                        <TextField variant="outlined" label="Password" type="password" fullWidth inputRef={passwordInputRef} error={passwordError}/>
                    </Grid>
                    <Grid item xs={12}>
                        <LoadingButton fullWidth variant='contained' size='large' type='submit' loading={isLoading} sx={{ height: '3.2rem' }}>Login</LoadingButton>
                    </Grid>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row-reverse',
                            p: 1,

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

export default Login