import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, NavLink } from 'react-router-dom';
import OnbImg from '../../Images/image bg.svg';
import classes from './SignUp.module.css';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button } from 'react-bootstrap';


const SignUp = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [error, setError] = useState({});
    const [errorMessage, setErrorMessage] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [termsSelected, setTermsSelected] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const location = useLocation();






    const handleLogin = async () => {
        setIsLoading(true); // Set loading state to true
        try {
            const response = await axios.post('https://gtc.ogunstate.gov.ng/api/login', {
                email: email,
                password: password,
            });
            AsyncStorage.setItem('userToken', response.data.data?.token);

            if (location.state && location.state.from) {
                navigate(location.state.from);
            } else {
                // If there's no previous page, navigate to a default route
                navigate('/onboarding');
            }
            console.log('Login successful', response.data);
            setEmail('');
            setPassword('');




        } catch (error) {
            const errorMessage = JSON.stringify(error.response?.data?.message || 'An error occurred');
            setErrorMessage(errorMessage);
            // Handle errors (e.g., display error message)
            console.error('Login failed', error);
            //   Swal.fire({
            //     icon: 'error',
            //     title: 'Login failed',
            //     text: error.response.data.message,
            //   });

        } finally {
            setIsLoading(false); // Set loading state back to false after handling the request
        }
    };

    const isButtonDisabled = !email || !password;

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };


    const navigateToEmail = () => {
        navigate('/register_email');
    };

    const navigateToPhone = () => {
        navigate('/register_phone');
    };

    const handleNavigateRegister = () => {
        navigate('/sign_in');
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !isButtonDisabled) {
            handleLogin();
        }
    };

    return (
        <div className={classes.signin}>
            <div className={classes.marketersImg}>
                <img src={OnbImg} className="leftonb-img" alt="img" />
            </div>

            <div className={classes.signContainer}>
                <p className={classes.headerText}>Create an Account</p>
                <p className={classes.subText}>Register to access the Ogun state SME Empowerment Fund</p>
                    <div className={classes.buttonContainer}>
                        <div className={classes.buttonSignup} onClick={navigateToEmail}>
                            <p className={classes.button1}>Continue with Email</p>
                        </div>
                        <div className={classes.buttonSignup2} onClick={navigateToPhone}>
                            <p className={classes.button2}>Continue with Phone number</p>
                        </div>
                        <div className={classes.bottom}>
                    <p className={classes.signUp} >Already have an account? </p>
                    <p className={classes.register} onClick={handleNavigateRegister}>Log In here!</p>
                    </div>
                    </div>
            </div>

        </div>


    );
}

export default SignUp;