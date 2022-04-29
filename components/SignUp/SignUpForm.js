import React from 'react'
import { TextField, Grid, Typography, Box} from '@mui/material';
import Card from '../UI/Card';
import Emoji from '../UI/Emoji';
import LoadingButton from '@mui/lab/LoadingButton';

const SignUpForm = (props) => {
    return (<form onSubmit={props.submitHandler}>
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
                <TextField variant="outlined" label="First Name" fullWidth />
            </Grid>
            <Grid item xs={6} >
                <TextField variant="outlined" label="Last Name" fullWidth />
            </Grid>
            <Grid item xs={6} >
                <TextField variant="outlined" label="Password" type="password" fullWidth inputRef={props.passwordInputRef} />
            </Grid>
            <Grid item xs={6} >
                <TextField variant="outlined" label="Confirm Password" type="password" inputRef={props.confirmPasswordInputRef} helperText={!props.passwordMatch && 'Passwords do not match'} error={!props.passwordMatch} onBlur={props.confirmPasswordHandler} fullWidth />
            </Grid>
            <Grid item xs={6} >
                <TextField variant="outlined" label="Branch" fullWidth />
            </Grid>
            <Grid item xs={6} >
                <TextField variant="outlined" label="Age" type='number' fullWidth />
            </Grid>
            <Grid item xs={6} >
                <TextField variant="outlined" label="Phone Number" type='number' inputProps={{ pattern: /((\+*)((0[ -]*)*|((91 )*))((\d{12})+|(\d{10})+))|\d{5}([- ]*)\d{6}/ }} fullWidth />
            </Grid>
            <Grid item xs={6} >
                <TextField variant="outlined" label="Email ID" type='email' fullWidth inputRef={props.emailInputRef} />
            </Grid>
            <Grid item xs={6} >
                <TextField variant="outlined" label="College" fullWidth />
            </Grid>
            <Grid item xs={6}>
                <LoadingButton fullWidth loading={props.isLoading} variant='contained' size='large'  type='submit' sx={{ height: '3.2rem' }}>Proceed to App</LoadingButton>
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
    )
}

export default SignUpForm