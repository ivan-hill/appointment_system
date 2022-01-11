import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardMedia } from '@mui/material';

const Service = (props) => {
    const { name, description, img } = props.service;
    return (
        <div>
            <Grid item xs={2} sm={4} md={6}>
                <Card sx={{ minWidth: 360, marginTop: 10, marginRight: 2, marginLeft: 2,}}>
                    <CardMedia
                        component="img"
                        style={{ width: '100px', height: '100px', margin: '0 auto' }}
                        image={img}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography variant="h5" component="div">
                            {name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {description}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </div>
    );
};

export default Service;