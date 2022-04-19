import React from 'react'
import { Button, TextField, Grid, Typography, Box, Link } from '@mui/material';
import Card from '../components/UI/Card';
import Emoji from '../components/UI/Emoji';
import { NextLinkComposed } from '../src/Link';

const Login = () => {
    const submitHandler = (e) => {
        e.preventDefault();
    }
    return (
        <>
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
                        <TextField variant="outlined" label="Email ID" fullWidth />
                    </Grid>
                    <Grid item xs={12} p={0}>
                        <TextField variant="outlined" label="Password" type="password" fullWidth />
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