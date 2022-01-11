import { Container, Grid, Typography, TextField, Button, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.jpg'

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, signInWithGoogle, authError } = useAuth();
    const location = useLocation();
    const history = useHistory();

    const handleOnChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
        console.log(field, value);
    }
    const handleLoginSubmit = (e) => {
        loginUser(loginData.email, loginData.password, location, history)
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }

    return (
        <Container>
            <Grid container spacing={2} sx={{ mt: 2 }}>
                <Grid item xs={12} md={6} sx={{ mt: 5 }}>
                    <Typography variant="body1" gutterBottom>Login</Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '50%', m: 1 }}
                            id="standard-basic"
                            name="email"
                            onBlur={handleOnChange}
                            label="E-Mail"
                            variant="standard" />
                        <TextField
                            sx={{ width: '50%', m: 1 }}
                            id="standard-basic"
                            name="password"
                            onBlur={handleOnChange}
                            label="Password"
                            type="password"
                            variant="standard" />

                        <Button variant="contained" type="submit" sx={{ width: '50%', m: 2 }}>Login</Button>
                        <NavLink
                            to="/register"
                            style={{ textDecoration: 'none' }}>
                            <Button variant="text" sx={{ m: 3 }}>New User? Then Register</Button>
                        </NavLink>
                        {isLoading && <CircularProgress />}
                        {user?.email && <Alert severity="success">Login Successfully.</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>}
                    </form>
                    <p>Additional Sign-In options</p>
                    <Button variant="text" onClick={handleGoogleSignIn}>Google Sign In</Button>
                </Grid>
                <Grid item xs={12} md={6} sx={{ mt: 3 }}>
                    <img style={{ width: '80%' }} src={login} alt="" />
                </Grid>


            </Grid>
        </Container>
    );
};

export default Login;