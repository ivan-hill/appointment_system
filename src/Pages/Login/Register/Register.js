import { Container, Grid, Typography, TextField, Button, CircularProgress } from '@mui/material';
import Alert from '@mui/material/Alert';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.jpg'


const Register = () => {
    const [loginData, setLoginData] = useState({});

    const { user, registerUser, isLoading, authError } = useAuth();
    const history = useHistory();
    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
        console.log(newLoginData);
    }
    const handleLoginSubmit = (e) => {
        if (loginData.password !== loginData.password2) {
            alert('Your Password did not match');
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history)
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2} sx={{ mt: 2 }}>
                <Grid item xs={12} md={6} sx={{ mt: 5 }}>
                    <Typography variant="body1" gutterBottom>Register</Typography>
                    {!isLoading && <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '50%', m: 1 }}
                            id="standard-basic"
                            name="name"
                            onBlur={handleOnBlur}
                            label="Your Name"
                            variant="standard" />
                        <TextField
                            sx={{ width: '50%', m: 1 }}
                            id="standard-basic"
                            name="email"
                            onBlur={handleOnBlur}
                            label="Type E-Mail"
                            variant="standard" />
                        <TextField
                            sx={{ width: '50%', m: 1 }}
                            id="standard-basic"
                            name="password"
                            onBlur={handleOnBlur}
                            label="Password"
                            type="password"
                            variant="standard" />
                        <TextField
                            sx={{ width: '50%', m: 1 }}
                            id="standard-basic"
                            name="password2"
                            onBlur={handleOnBlur}
                            label="Re-Type Password"
                            type="password"
                            variant="standard" />

                        <Button variant="contained" type="submit" sx={{ width: '50%', m: 2 }}>Register</Button>
                        <NavLink
                            to="/login"
                            style={{ textDecoration: 'none' }}>
                            <Button variant="text" sx={{ m: 3 }}>Already Registered? Then Login</Button>
                        </NavLink>
                    </form>}
                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">Congrats!!! You are registered.</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                </Grid>
                <Grid item xs={12} md={6} sx={{ mt: 3 }}>
                    <img style={{ width: '80%' }} src={login} alt="" />
                </Grid>


            </Grid>
        </Container>
    );
};

export default Register;