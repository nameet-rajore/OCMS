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

const index = (props) => {

  const token = useSelector(state => state.token);
  const dispatch = useDispatch();
  dispatch(authActions.setToken(true));

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
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam laboriosam velit distinctio tempora, ut quia quasi, sunt nisi dolore alias error ullam voluptatibus quo! Debitis dolorem atque obcaecati perspiciatis delectus.
      </Typography>
    </Grid>
  </Grid>

  const AfterLogin = <> <Grid container sx={{
    borderRadius: 2,
  }}>
    <Grid item xs={7}>
      <Typography variant='h3' fontWeight='300' color='primary' mb={1} >
        Welcome @nameetrajore<Emoji symbol='❤️' />
      </Typography>
    </Grid>
    <Grid item xs={6}>
      <Typography variant='h6' fontWeight='400' color='gray' align='justify'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam laboriosam velit distinctio tempora, ut quia quasi, sunt nisi dolore alias error ullam voluptatibus quo! Debitis dolorem atque obcaecati perspiciatis delectus.<Emoji symbol='👇' />
      </Typography>
    </Grid>
  </Grid>
    <Grid container spacing={3} py={3} mt={1} sx={{ width: '25%', minWidth: '25rem' }}>
      <Grid item xs={12} >
        <TextField variant="outlined" label="College" fullWidth />
      </Grid>
      <Grid item xs={12} >
        <TextField variant="outlined" label="Course Name" fullWidth />
      </Grid>
      <Grid item xs={12} >
        <TextField variant="outlined" label="Year" fullWidth />
      </Grid>

      <Grid item xs={12} >
        <TextField variant="outlined" label="Professor" fullWidth />
      </Grid>
      <Grid item xs={12} >
        <LoadingButton fullWidth disableElevation variant='contained' to={{ pathname: '/search' }} component={NextLinkComposed} size='large' type='submit' sx={{ height: '3.2rem' }}>Search</LoadingButton>
      </Grid>
    </Grid>
    <Fab sx={{
      padding: '2rem', borderRadius: '50rem', position: 'fixed', right: '-2rem',
      bottom: '2rem',
      transform: 'translate(-50%, -50%)',
      boxShadow: '0',
    }} size='large' color='primary' variant="extended"
      to={{pathname:'/upload'}}
      component={NextLinkComposed}
    >
      <AddIcon sx={{ mr: 1 }} />
      Upload Notes
    </Fab>
  </>

  return (
    <>
    <Header/>
    <Container>
    {!!token ? AfterLogin : BeforeLogin}
    </Container>
    </>);
}

export default index;