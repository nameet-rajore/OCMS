import React from 'react'
import { Grid, Card, CardContent, Typography, CardActions, Button, Rating, Box } from '@mui/material'

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

const SearchCard = () => {
    return (
        <>
            <Grid item xs={3} >
                <Card sx={{ border: '1px solid #bdbdbd', backgroundColor: '#fafafa', boxShadow: 'none' }}>
                    <CardContent>
                        <Typography color="text.secondary" gutterBottom>
                            BITS Pilani Hyderabad {bull} CS F211
                        </Typography>
                        <Typography variant="h5" component="div" sx={{ mb: 1.5 }}>
                            Normalization Notes
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            Uploaded By Mansvi Bhatia
                        </Typography>
                        <Rating
                            sx={{ mb: 1.5 }}
                            value={3}
                            readOnly
                        />
                        <Typography variant="h5" color='Highlight'>
                            ₹80
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button >Add to Cart</Button>
                    </CardActions>
                </Card>
            </Grid>
        </>
    )
}

export default SearchCard