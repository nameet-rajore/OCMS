import React, { useState } from 'react'
import { Grid, Card, CardContent, Typography, CardActions, Button, Rating, Box } from '@mui/material'
import { LoadingButton } from '@mui/lab';
import { useSelector, useDispatch } from 'react-redux';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);


const SearchCard = (props) => {

    const [disableButton, setDisableButton] = useState(false);
    const userId = useSelector(state=>state.userId);

    const cartAddHandler = async ()=>{
        const response = await fetch(`/api/cart/insert?userId=${userId}&materialId=${props.materialId}`, {method:'PUT', headers:{"Content-Type": "application/json"}});
        if(response.ok){
            setDisableButton(true);
        }
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
                        <LoadingButton onClick={cartAddHandler} disabled={disableButton}>Add to Cart</LoadingButton>
                    </CardActions>
                </Card>
            </Grid>
        </>
    )
}

export default SearchCard