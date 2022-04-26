import React, { useEffect, useRef, useState } from 'react'
import { Grid, TextField, Typography, Box } from '@mui/material'
import { LoadingButton } from '@mui/lab'
import Header from '../components/UI/Header';
import Container from '../components/UI/Container';
import SearchCard from '../components/Search/SearchCard';
import useFetchData from '../hooks/use-fetch-data';
import Router from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../src/store';
import CircularProgress from '@mui/material/CircularProgress';



const Search = () => {

    const collegeInputRef = useRef();
    const courseInputRef = useRef();
    const yearInputRef = useRef();
    const professorInputRef = useRef();

    const dispatch = useDispatch();
    const isLoggedIn = useSelector(state => state.isLoggedIn);

    const { isLoading, apiData, fetchData } = useFetchData();

    const [searchList, setSearchList] = useState([]);

    const searchHandler = () => {
        fetchData('/api/search', 'POST', {
            'college': collegeInputRef.current.value,
            'course': courseInputRef.current.value,
            'year': yearInputRef.current.value,
            'ic': professorInputRef.current.value
        });
        setSearchList(apiData);
    }

    const bull = (
        <Box
            component="span"
            sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
            •
        </Box>
    );

    useEffect(() => {
        if (JSON.parse(localStorage.getItem("isLoggedIn"))) { dispatch(authActions.setLogin(JSON.parse(true))); }
        else {
            dispatch(authActions.setLogin(JSON.parse(false)))
            Router.push('/');
        }
    });
    return (
        <>
            <Header />
            <Container>
                <Box mt={-7} mb={3} p={7} minHeight='70vh' borderRadius={4} minWidth='80rem' sx={{ backgroundColor: '#f5f5f5' }}>
                    <Grid container spacing={3} >
                        <Grid item xs={12} >
                            <Typography variant='h4' fontWeight='500'>
                                Search
                                {isLoading && <CircularProgress size='1.5rem' sx={{px:1.5}} />}
                            </Typography>
                        </Grid>
                        <Grid item xs={2.75} >
                            <TextField variant="outlined" size='small' label="College" fullWidth inputRef={collegeInputRef} />
                        </Grid>
                        <Grid item xs={2.75} >
                            <TextField variant="outlined" size='small' label="Course Name" fullWidth inputRef={courseInputRef} />
                        </Grid>
                        <Grid item xs={2.75} >
                            <TextField variant="outlined" size='small' label="Year" fullWidth inputRef={yearInputRef} />
                        </Grid>

                        <Grid item xs={2.75} >
                            <TextField variant="outlined" size='small' label="Professor" fullWidth inputRef={professorInputRef} />
                        </Grid>
                        <Grid item xs={1} >
                            <LoadingButton fullWidth disableElevation variant='contained' size='large' type='submit' sx={{ height: '2.5rem' }} onClick={searchHandler}>Search</LoadingButton>
                        </Grid>
                    </Grid>
                    <Grid container spacing={3} py={3}>
                        {!isLoading && !!searchList.length && searchList.map(item => <SearchCard key={Math.random()} college={item.college} courseId={item.courseId} uploadedBy={item.uploadedBy} title={item.title} cost={item.cost} rating={Math.random()} />)}
                        {!isLoading && !searchList.length && <Typography variant='h4' p={4}> There are no search results.</Typography>}
                        {/* <SearchCard college='BITS Pilani Hyderabad' courseId='CS F111' uploadedBy='Mansvi Bhatia' title='Normalization Notes' cost={80} rating={3} /> */}
                    </Grid>
                </Box>
            </Container>
        </>
    )
}

export default Search