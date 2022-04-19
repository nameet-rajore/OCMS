import React from 'react'
import { Grid, TextField, Card, CardContent, Typography, CardActions, Button, Rating, Box } from '@mui/material'
import { LoadingButton } from '@mui/lab'
import Header from '../components/UI/Header';
import Container from '../components/UI/Container';
import SearchCard from '../components/Search/SearchCard';

const Search = () => {

    const bull = (
        <Box
            component="span"
            sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
            •
        </Box>
    );

    return (
        <>
            <Header/>
            <Container>
            <Box mt={-7} mb={3} p={7}  minHeight='70vh' borderRadius={4} minWidth='80rem' sx={{ backgroundColor: '#f5f5f5' }}>
                <Grid container spacing={3} >
                    <Grid item xs={12} >
                        <Typography variant='h4' fontWeight='500'>
                            Search
                        </Typography>
                    </Grid>
                    <Grid item xs={2.75} >
                        <TextField variant="outlined" size='small' label="College" fullWidth />
                    </Grid>
                    <Grid item xs={2.75} >
                        <TextField variant="outlined" size='small' label="Course Name" fullWidth />
                    </Grid>
                    <Grid item xs={2.75} >
                        <TextField variant="outlined" size='small' label="Year" fullWidth />
                    </Grid>

                    <Grid item xs={2.75} >
                        <TextField variant="outlined" size='small' label="Professor" fullWidth />
                    </Grid>
                    <Grid item xs={1} >
                        <LoadingButton fullWidth disableElevation variant='contained' size='large' type='submit' sx={{ height: '2.5rem' }}>Search</LoadingButton>
                    </Grid>
                </Grid>
                <Grid container spacing={3} py={3} >
                   <SearchCard/>
                </Grid>
            </Box>
            </Container>
        </>
    )
}

export default Search