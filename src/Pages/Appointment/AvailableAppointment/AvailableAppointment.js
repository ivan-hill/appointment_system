import React, { useState } from 'react';
import { Grid, Container, Typography, Alert } from '@mui/material';
import Booking from '../Booking/Booking';

const bookings = [
    {
        id: 1,
        name: 'ENT',
        time: '6.00 PM- 7.00 PM',
        space: 20
    },
    {
        id: 2,
        name: 'Orthopedic',
        time: '7.00 PM- 8.00 PM',
        space: 20
    },
    {
        id: 3,
        name: 'Child Specialist',
        time: '6.00 PM- 7.00 PM',
        space: 25
    },
    {
        id: 4,
        name: 'ENT',
        time: '6.00 PM- 7.00 PM',
        space: 20
    },
]

const AvailableAppointment = ({ date }) => {
    const [bookingSuccess, setBookingSuccess] = useState(false)
    return (
        <Container>
            <Typography variant="h4" sx={{ color: 'info.main', my: 3 }}>Available Appoinntment {date.toDateString()} </Typography>
            {bookingSuccess && <Alert severity="success">Appointment Successfully.</Alert>}
            <Grid container spacing={2}>
                {
                    bookings.map(booking => <Booking
                        key={booking.id}
                        booking={booking}
                        date={date}
                        setBookingSuccess={setBookingSuccess}></Booking>)
                }
            </Grid>
        </Container>
    );
};

export default AvailableAppointment;