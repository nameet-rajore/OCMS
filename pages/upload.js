import React, { useEffect, useRef } from 'react'
import { Grid, TextField, Typography, Box } from '@mui/material'
import { LoadingButton } from '@mui/lab'
import Container from '../components/UI/Container'
import Header from '../components/UI/Header'
import { authActions } from '../src/store';
import { useDispatch, useSelector } from 'react-redux';
import useFetchData from '../hooks/use-fetch-data'
import Router from 'next/router'


const Upload = () => {

    const collegeInputRef = useRef();
    const courseInputRef = useRef();
    const yearInputRef = useRef();
    const semesterInputRef = useRef();
    const icInputRef = useRef();
    const driveInputRef = useRef();

    const dispatch = useDispatch();
    const isLoggedIn = useSelector(state => state.isLoggedIn);

    const { isLoading, fetchData } = useFetchData();

    useEffect(() => {
        if (JSON.parse(localStorage.getItem("isLoggedIn"))) { dispatch(authActions.setLogin(JSON.parse(true))); }
        else {
            dispatch(authActions.setLogin(JSON.parse(false)))
            Router.push('/');
        }
    }, []);

    const uploadHandler = () => {

        fetchData('/api/upload', 'POST', {
            'college': collegeInputRef.current.value,
            'course': courseInputRef.current.value,
            'year': yearInputRef.current.value,
            'semesterInputRef': semesterInputRef.current.value,
            'ic': icInputRef.current.value,
            'driveLink': driveInputRef.current.value
        }).then(() => {
                alert('Notes Uploaded!')
                Router.push('/');
        })

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
                                <TextField variant="outlined" label="College" fullWidth inputRef={collegeInputRef} />
                            </Grid>
                            <Grid item xs={4} >
                                <TextField variant="outlined" label="Course Name" fullWidth inputRef={courseInputRef} />
                            </Grid>
                            <Grid item xs={4} >
                                <TextField variant="outlined" label="Year" fullWidth inputRef={yearInputRef} />
                            </Grid>
                            <Grid item xs={4} >
                                <TextField variant="outlined" label="Semester" fullWidth inputRef={semesterInputRef} />
                            </Grid>
                            <Grid item xs={4} >
                                <TextField variant="outlined" label="IC" fullWidth inputRef={icInputRef} />
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

export default Upload