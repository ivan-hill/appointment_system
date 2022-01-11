import { Container, Grid } from '@mui/material';
import React from 'react';
import appointment_banner from '../../../images/appointment_banner.jpg';
import Calendar from '../../Shared/Calendar/Calendar';

const AppointmentHeader = ({ date, setDate }) => {
    console.log(date);
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Calendar date={date} setDate={setDate}></Calendar>
                </Grid>

                <Grid item xs={12} md={6}>
                    <img src={appointment_banner} alt="" style={{ width: '70%' }} />
                </Grid>
            </Grid>
        </Container>
    );
};

export default AppointmentHeader;