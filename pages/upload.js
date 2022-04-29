import React, { useEffect, useState, useRef } from 'react'
import { Grid, TextField, Typography, Box } from '@mui/material'
import { LoadingButton } from '@mui/lab'
import Container from '../components/UI/Container'
import Header from '../components/UI/Header'
import { useDispatch, useSelector } from 'react-redux';
import Router from 'next/router'

const Upload = () => {

    const courseInputRef = useRef();
    const costInputRef = useRef();
    const titleInputRef = useRef();
    const driveInputRef = useRef();

    const [isLoading, setIsLoading] = useState(false);

    const dispatch = useDispatch();
    const isLoggedIn = useSelector(state => state.isLoggedIn);
    const userId = useSelector(state=>state.userId);

    useEffect(() => {}, []);

    const uploadHandler = () => {

        fetch(`/api/upload?courseName=${courseInputRef.current.value}&cost=${costInputRef.current.value}&title=${titleInputRef.current.value}&driveLink=${driveInputRef.current.value}&userId=${userId}`, {method:'POST'}).then(() => {
                alert('Notes Uploaded!')
                Router.push('/');
        })
    }

    return (
        <>
            <Header />
            <Container>
                <Box mt={-7} mb={3} p={7} borderRadius={4} minWidth='40rem' sx={{ backgroundColor: '#f5f5f5' }}>
                    <Grid container spacing={3} >
                        <Grid item xs={12} >
                            <Typography variant='h4' fontWeight='500'>
                                Upload Notes
                            </Typography>
                        </Grid>
                        <Grid container spacing={3} py={3} ml={0}>
                            <Grid item xs={4} >
                                <TextField variant="outlined" label="Course Name" fullWidth inputRef={courseInputRef} />
                            </Grid>
                            <Grid item xs={4} >
                                <TextField variant="outlined" label="Cost" type='number' fullWidth inputRef={costInputRef} />
                            </Grid>
                            <Grid item xs={4} >
                                <TextField variant="outlined" label="Title" fullWidth inputRef={titleInputRef} />
                            </Grid>
                            <Grid item xs={4} >
                                <TextField variant="outlined" label="Drive Link" fullWidth inputRef={driveInputRef} />
                            </Grid>
                            <Grid item xs={12} >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'row-reverse',
                                        borderRadius: 1,
                                        flexGrow: '1'
                                    }}
                                >

                                    <LoadingButton disableElevation variant='contained' to='/search' size='large' type='submit' sx={{ height: '3.2rem' }} onClick={uploadHandler} loading={isLoading}>Upload Notes</LoadingButton>
                                </Box>
                            </Grid>
                        </Grid>

                    </Grid>
                </Box>
            </Container>
        </>
    )
}

export default Upload;