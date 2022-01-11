import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import Service from '../Service/Service';
import img_1 from '../../../images/img-1.jpg';
import img_2 from '../../../images/img-2.jpg';
import img_3 from '../../../images/img-3.jpg';



const services = [
    {
        name: "Flouride",
        description: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
        img: img_1
    },

    {
        name: "Chloride",
        description: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
        img: img_2
    },

    {
        name: "Bromide",
        description: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
        img: img_3
    }

]

const Services = () => {
    return (
        <Box md={{ flexGrow: 1 }}>
            <Container>
                <Typography variant="h2" sx={{ fontWeight: 500, m: 2, color: 'secondary.main' }} component="div">
                    OUR SERVICES
                </Typography>
                <Typography variant="h4" sx={{ fontWeight: 600, m: 2, color: 'secondary.main' }} component="div">
                    We Provide These Services
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 6, md: 12 }}>
                    {
                        services.map(service => <Service
                            key={service.name}
                            service={service}></Service>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;