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
const Login = () => {

    const dispatch = useDispatch();
    const isLoggedIn = useSelector(state => state.isLoggedIn);

    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const submitHandler = (e) => {
        e.preventDefault();
        //send get request
        // if true
        dispatch(authActions.setLogin(true));
        Router.push('/');
        localStorage.setItem('isLoggedIn', true);

        //else
        //setEmailError(true);
        //setPasswordError(true);
    }

    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    useEffect(() => {
        if (JSON.parse(localStorage.getItem("isLoggedIn"))) {
            Router.push('/')
        }
    });

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
                        <TextField variant="outlined" label="Email ID" fullWidth inputRef={emailInputRef} />
                    </Grid>
                    <Grid item xs={12} p={0}>
                        <TextField variant="outlined" label="Password" type="password" fullWidth inputRef={passwordInputRef} />
                    </Grid>
                    <Grid item xs={12}>
                        <Button fullWidth variant='contained' size='large' type='submit' sx={{ height: '3.2rem' }}>Login</Button>
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