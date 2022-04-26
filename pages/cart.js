import React, { useEffect, useState } from 'react'
import { Grid, Typography, Button, Box, AppBar, Toolbar } from '@mui/material'
import Container from '../components/UI/Container';
import Header from '../components/UI/Header';
import CartCard from '../components/Cart/CartCard';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../src/store';
import CircularProgress from '@mui/material/CircularProgress';
import useFetchData from '../hooks/use-fetch-data';
import { LoadingButton } from '@mui/lab';
import Router from 'next/router';

const Cart = () => {

    const dispatch = useDispatch();
    const isLoggedIn = useSelector(state => state.isLoggedIn);

    const [cartItems, setCartItems] = useState([]);
    const { isLoading:cartIsLoading, apiData, fetchData:fetchCart } = useFetchData();
    const {isLoading:orderIsLoading, fetchData:fetchOrder} = useFetchData();

    const orderHandler =()=>{
        fetchOrder('/api/order', 'POST', {}).then(()=>{
            alert('The order has been placed! You will get the link to the notes in your Email ID');
            Router.push('/');
        });
    }

    useEffect(() => {
        if (JSON.parse(localStorage.getItem("isLoggedIn"))) { dispatch(authActions.setLogin(JSON.parse(true))); }
        else {
            dispatch(authActions.setLogin(JSON.parse(false)))
            Router.push('/');
        }

        fetchCart('/api/cart', 'GET');
        setCartItems(apiData);
    }, []);

    return (
        <>
            <Header />
            <Container>
                <Box mt={-7} mb={3} p={6} pt={5} borderRadius={4} minWidth='80rem' sx={{ backgroundColor: '#f5f5f5' }}>
                    <Grid container spacing={3} >
                        <Grid item xs={12} >
                            <Typography variant='h4' fontWeight='500'>
                                Cart
                            {cartIsLoading&&<CircularProgress size='1.5rem' sx={{px:1.5}}/>}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={3} py={3} >
                        {!cartIsLoading&&cartItems.map(item=><CartCard key={Math.random()} college={item.college} courseId={item.courseId} uploadedBy={item.uploadedBy} title={item.title} cost={item.cost} rating={item.rating}/>)}
                        <CartCard college='BITS Pilani Hyderabad' courseId='CS F111' uploadedBy='Mansvi Bhatia' title='Normalization Notes' cost={80} rating={Math.random()*5}/>
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
                    <LoadingButton size="large" variant="contained" disableElevation onClick={orderHandler} loading={orderIsLoading}>Place Order</LoadingButton>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Cart