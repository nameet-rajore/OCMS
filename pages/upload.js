import React from 'react'
import { Grid, TextField, Typography, Box } from '@mui/material'
import { LoadingButton } from '@mui/lab'
import Container from '../components/UI/Container'
import Header from '../components/UI/Header'

const Upload = () => {
    return (
        <>
        <Header/>
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
                            <TextField variant="outlined" label="College" fullWidth />
                        </Grid>
                        <Grid item xs={4} >
                            <TextField variant="outlined" label="Course Name" fullWidth />
                        </Grid>
                        <Grid item xs={4} >
                            <TextField variant="outlined" label="Year" fullWidth />
                        </Grid>
                        <Grid item xs={4} >
                            <TextField variant="outlined" label="Semester" fullWidth />
                        </Grid>
                        <Grid item xs={4} >
                            <TextField variant="outlined" label="IC" fullWidth />
                        </Grid>
                        <Grid item xs={4} >
                            <TextField variant="outlined" label="Drive Link" fullWidth />
                        </Grid>
                        <Grid item xs={12} >
                        <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row-reverse',
                            borderRadius: 1,
                            flexGrow:'1'
                        }}
                    >
                        
                            <LoadingButton disableElevation variant='contained' to='/search' size='large' type='submit' sx={{ height: '3.2rem' }}>Upload Notes</LoadingButton>
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