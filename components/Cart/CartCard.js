import React from 'react'
import { Grid, Card, CardContent, Typography, CardActions, Button, Rating, Box, AppBar, Toolbar } from '@mui/material'

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

const CartCard = (props) => {
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
                        <Button color='error' >Remove from Cart</Button>
                    </CardActions>
                </Card>
            </Grid>
        </>
    )
}

export default CartCard