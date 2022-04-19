import React from 'react';
import { Grid } from '@mui/material';

const Card = (props) => {
    return (
        <Grid
            container
            item
            justifyContent="center"
            alignItems="center"
            spacing={props.spacing}
            p={3}
            pr={5}
            pb={4}
            sx={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                boxShadow: (props.boxShadow === true) ? "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" : '',
                borderRadius: 2,
                border:'5px solid #fff',
                width: props.width,
                backgroundColor:'white'
            }}
        >{props.children} </Grid>
    )
}

export default Card;