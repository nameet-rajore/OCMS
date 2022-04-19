import React from "react";
import { AppBar, Toolbar, Box, Button, Typography, IconButton, Badge, Link } from '@mui/material';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { useSelector, useDispatch } from 'react-redux';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { authActions } from "../../src/store";
import { NextLinkComposed } from '../../src/Link';

function ElevationScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

const Header = () => {

    const token = useSelector(state => state.token);
    const dispatch = useDispatch();

    const logoutHandler = () => {
        dispatch(authActions.setToken(''));
    }

    const LoginButton = <Button
        variant="contained"
        size="large"
        disableElevation
        to={{ pathname: '/login' }}
        component={NextLinkComposed}
        sx={{
            marginRight: '1rem'
        }}
    >
        Login
    </Button>;

    const SignUpButton = <Button
        variant="contained"
        color='inherit'
        size="large"
        disableElevation
        to={{ pathname: '/sign-up' }}
        component={NextLinkComposed}
    >
        Sign Up
    </Button>

    const CartButton = <IconButton sx={{
        marginRight: '1rem'
    }} color="primary" to={{ pathname: '/cart' }}
        component={NextLinkComposed}>
        <Badge badgeContent={3} color='error'>
            <ShoppingCartIcon fontSize="large" />
        </Badge>
    </IconButton>

    const LogoutButton = <Button size="large" variant="contained" disableElevation onClick={logoutHandler}>Logout</Button>

    return (
        <>
            <ElevationScroll>
                <AppBar color="inherit" position='fixed' sx={{ padding: '1rem', borderBottomRightRadius: '1rem', borderBottomLeftRadius: '1rem' }}>
                    <Toolbar>
                        <Typography variant='h3' fontWeight='700' color='primary' sx={{ flexGrow: '1' }}>
                            <Link underline="none" to={{ pathname: '/' }} component={NextLinkComposed}>
                                OCMS
                            </Link>
                        </Typography>
                        {!token && LoginButton}
                        {!token && SignUpButton}
                        {!!token && CartButton}
                        {!!token && LogoutButton}
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <Box m={13} />
        </>
    );
};

export default Header;
