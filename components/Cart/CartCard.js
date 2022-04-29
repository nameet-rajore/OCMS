import React, {useState} from 'react'
import { Grid, Card, CardContent, Typography, CardActions, Button, Rating, Box, AppBar, Toolbar } from '@mui/material'
import { LoadingButton } from '@mui/lab';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../../src/store';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);


const CartCard = (props) => {
    const [disableButton, setDisableButton] = useState(false);
    const userId = useSelector(state=>state.userId);
    const dispatch = useDispatch();

    const cartDeleteHandler = async ()=>{
        const response = fetch(`/api/cart/del?userId=${userId}&materialId=${props.materialId}`, {method:'DELETE', headers:{"Content-Type": "application/json"}});
        if(response.ok){
            setDisableButton(true);
        }
        const res = await fetch(`/api/cart/get?userId=${userId}`, {method:'GET'});
        const data = await res.json();
        dispatch(authActions.setCart(data));
    }
    
    return (
        <>
            <Grid item xs={3} >
                <Card sx={{ border: '1px solid #bdbdbd', backgroundColor: '#fafafa', boxShadow: 'none' }}>
                    <CardContent>
                    <Typography color="text.secondary" gutterBottom>
                            {props.college} {bull} {props.courseId}
                        </Typography>
                        <Typography variant="h5" component="div" sx={{ mb: 1.5 }}>
                            {props.title}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            Uploaded By {props.uploadedBy}
                        </Typography>
                        <Rating
                            sx={{ mb: 1.5 }}
                            value={props.rating}
                            readOnly
                        />
                        <Typography variant="h5" color='Highlight'>
                            ₹{props.cost}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <LoadingButton color='error' onClick={cartDeleteHandler} disabled={disableButton}>Remove from Cart</LoadingButton>
                    </CardActions>
                </Card>
            </Grid>
        </>
    )
}

export default CartCard