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
    const cart = useSelector(state=>state.cart);
    const userId = useSelector(state=>state.userId);
    const [cartIsLoading, setCartIsLoading] = useState(false);
    const [orderIsLoading, setOrderIsLoading] = useState(false);

    const orderHandler =()=>{
        fetchOrder('/api/order', 'POST', {}).then(()=>{
            alert('The order has been placed! You will get the link to the notes in your Email ID');
            Router.push('/');
        });
    }

    useEffect(() => {
        const fn = async ()=>{
        setCartIsLoading(true);
        console.log(userId);
        const response = await fetch(`/api/cart/get?userId=${userId}`, {method:'GET'});
        const data = await response.json();
        dispatch(authActions.setCart(data));
        console.log(data);
        setCartIsLoading(false);
        }
        fn();
    }, []);

    console.log();
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
                        {!cartIsLoading&& !!cart.length && cart.map(item=><CartCard key={Math.random()} college={item.College_name} courseId={item.Course_id} uploadedBy={item.User_name} title={item.Title} cost={item.Cost} materialId={item.Material_ID} rating={Math.random()*5}/>)}
                        {!cartIsLoading&& !cart.length && <Typography variant='h5' sx={{m:3}} color='GrayText' > Your cart is empty!</Typography>}
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
                        ₹{cart.map((item)=>item.Cost).reduce((prev, curr)=> curr+prev, 0)}
                        </Typography>
                    </Box>
                    <LoadingButton size="large" variant="contained" disableElevation onClick={orderHandler} loading={orderIsLoading}>Place Order</LoadingButton>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Cart