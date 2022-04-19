import React from 'react'
import { Grid, Card, CardContent, Typography, CardActions, Button, Rating, Box, AppBar, Toolbar} from '@mui/material'
import Container from '../components/UI/Container';
import Header from '../components/UI/Header';
import CartCard from '../components/Cart/CartCard';

const Cart = () => {
    return (
        <>
        <Header/>
        <Container>
            <Box mt={-7} mb={3} p={6} pt={5} borderRadius={4} minWidth='80rem' sx={{ backgroundColor: '#f5f5f5' }}>
                <Grid container spacing={3} >
                    <Grid item xs={12} >
                        <Typography variant='h4' fontWeight='500'>
                            Cart
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={3} py={3} >
                    <CartCard/>
                </Grid>
            </Box>
            </Container>
            <AppBar position='fixed' sx={{ padding: '0.75rem', borderTopRightRadius: '1rem', borderTopLeftRadius: '1rem', top: 'auto', bottom: 0, boxShadow: '0', backgroundColor: '#f5f5f5' }}>
                <Toolbar>
                <Box sx={{ flexGrow: '1' }}>
                    <Typography color="primary" variant='h5' fontWeight='300'>
                        Total:
                    </Typography>
                    <Typography color="primary" variant='h4' mr={3} fontWeight='700'>
                        ₹80
                    </Typography>
                    </Box>
                    <Button size="large" variant="contained" disableElevation>Place Order</Button>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Cart