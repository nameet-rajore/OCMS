import { Typography, Grid, TextField } from '@mui/material'
import Emoji from '../components/UI/Emoji';
import { LoadingButton } from '@mui/lab';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { NextLinkComposed } from '../src/Link';
import Header from '../components/UI/Header';
import { authActions } from '../src/store';
import { useSelector, useDispatch } from 'react-redux';
import Container from '../components/UI/Container';
import { useEffect, useState } from 'react';
import useFetchData from '../hooks/use-fetch-data';


const index = () => {

  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.isLoggedIn);
  const userName = useSelector(state => state.userName);

  const BeforeLogin = <Grid container pl={10} sx={{
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)'
  }}>
    <Grid item xs={7}>
      <Typography variant='h2' fontWeight='300' color='primary' mb={1} >
        Welcome to OCMS<Emoji symbol='🎈' />
      </Typography>
    </Grid>
    <Grid item xs={6}>
      <Typography variant='h6' fontWeight='400' color='gray' align='justify'>
      Online Course Management System (OCMS) is a project which aims at
      developing a computerized system to maintain notes and drive links of
      lectures recorded in online semesters to help students access study
      material easily. This system helps students learn whichever subjects they
      want from professors across three BITS campuses.
      </Typography>
    </Grid>
  </Grid>

  const AfterLogin = <> <Grid container pl={10} sx={{
    borderRadius: 2,
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)'
  }}>
    <Grid item xs={7}>
      <Typography variant='h3' fontWeight='300' color='primary' mb={1} >
        Welcome {userName}<Emoji symbol='❤️' />
      </Typography>
    </Grid>
    <Grid item xs={6}>
      <Typography variant='h6' fontWeight='400' color='gray' align='justify'>
      Search for notes based
on course name, course ID, Professor name or/and College name.<Emoji symbol='👇' />
      </Typography>
      <Grid item xs={6} pt={3}>
        <LoadingButton fullWidth disableElevation color='inherit' variant='contained' to={{ pathname: '/search' }} component={NextLinkComposed} size='large' type='submit' sx={{ height: '3.2rem' }}>Click here to Search</LoadingButton>
      </Grid>
    </Grid>
  </Grid>
    <Fab sx={{
      padding: '2rem', borderRadius: '50rem', position: 'fixed', right: '-2rem',
      bottom: '2rem',
      transform: 'translate(-50%, -50%)',
      boxShadow: '0',
    }} size='large' color='primary' variant="extended"
      to={{ pathname: '/upload' }}
      component={NextLinkComposed}
    >
      <AddIcon sx={{ mr: 1 }} />
      Upload Notes
    </Fab>
  </>
  return (
    <>
      <Header />
      <Container>
        {!!isLoggedIn ? AfterLogin : BeforeLogin}
      </Container>
    </>);
}

export default index;