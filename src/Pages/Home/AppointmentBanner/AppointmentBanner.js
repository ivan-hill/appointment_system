import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import doctor_img from '../../../images/doctor-img.png';
import appointment_bg from '../../../images/appointment_bg.jpg';
import { Button, Typography } from '@mui/material';

const appointmentBg = {
    background: `url(${appointment_bg})`,
    marginTop: 170,
    backgroundColor: `#33c9dc`,
    backgroundBlendMode: 'lighten'
}

const AppointmentBanner = () => {
    return (
        <Box style={appointmentBg} sx={{ width: '100%' }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12} md={6}>
                    <img style={{ width: 300, marginTop: '-110px' }} src={doctor_img} alt="doctor_image" />
                </Grid>
                <Grid item xs={12} md={6} style={
                    {
                        display: 'flex',
                        justifyContent: 'flex-start',
                        textAlign: 'left',
                        alignItems: 'center'
                    }}>
                    <Box>
                        <Typography variant="h6" sx={{ mb: 5 }} style={{ color: '#af52bf' }}>
                            Appointment
                        </Typography>
                        <Typography variant="h4" sx={{ my: 4 }} style={{ color: '#fff', fontWeight: '500' }}>
                            Schedule your appointment today
                        </Typography>
                        <Typography variant="h6" sx={{ my: 4 }} style={{ color: '#fff', fontSize: '15px', fontWeight: '500' }}>
                            Lorem Ipsum Dolor Simit.Lorem Ipsum Dolor Simit.Lorem Ipsum Dolor Simit.
                        </Typography>
                        <Button variant='contained'>Learn More</Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AppointmentBanner;