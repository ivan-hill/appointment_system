import React from 'react';
import Grid from '@mui/material/Grid';
import top_banner from '../../../images/office.png';
import { Button, Typography, Container } from '@mui/material';

const Banner = () => {
    return (
        <Container sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item style={{ textAlign: 'left' }} sx={{ mt: 5, mb: 5 }} xs={12} md={5}>
                    <Typography variant="h3">
                        Make Your Appointment <br />
                        By using This App.
                    </Typography>
                    <Typography variant="h5" sx={{ fontSize: 14, fontWeight: 300, color: 'gray', my: 2 }}>
                        Lorem Ipsum Dolor Simit.Lorem Ipsum Dolor Simit.Lorem Ipsum Dolor Simit.Lorem Ipsum Dolor Simit.
                    </Typography>
                    <Button variant='contained' sx={{ my: 2 }}>Make Appointment</Button>
                </Grid>
                <Grid item xs={12} md={7} sx={{ mt: 5, mb: 5 }}>
                    <img style={{ width: '530px' }} src={top_banner} alt="Top" />
                </Grid>


            </Grid>
        </Container>
    );
};

export default Banner;