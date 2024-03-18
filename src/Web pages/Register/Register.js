import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import OnbImg from '../../Images/image bg.png';
import classes from './Register.module.css';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button } from 'react-bootstrap';
import crossedEyeIcon from '../../Images/eye-slash.png'


const Register = () => {
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


    const navigateToSignup = () => {
        navigate('/sign_up');
    };

    const navigateToForgot = () => {
        navigate('/forgot_password');
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
                <p className={classes.headerText}>Register</p>
                <p className={classes.subText}>As a Business</p>
                <form>
                    <div className={classes.rszeInput}>
                        <div className={classes.formInput}>
                            <span className={classes.stId}>RC Number</span>
                            <input type="number" className={classes.snInput} placeholder="" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className={classes.formInput}>
                            <span className={classes.stId}>Business Name</span>
                            <input type="text" className={classes.snInput} placeholder="" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                    </div>

                    <div className={classes.rszeInput}>
                        <div className={classes.formInput}>
                            <span className={classes.stId}>Email Address</span>
                            <input type="text" className={classes.snInput} placeholder="" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className={classes.formInput}>
                            <span className={classes.stId}>Phone Number</span>
                            <input type="text" className={classes.snInput} placeholder="" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                    </div>

                    <div className={classes.rszeInput}>
                        <div className={classes.formInput}>
                            <span className={classes.stId}>Password</span>
                            <div className={classes.passwordInputContainer}>
                            <div className={classes.inputContainer}>
                                <input type={showPassword ? 'text' : 'password'} className={classes.snInput} placeholder="" onChange={(e) => setPassword(e.target.value)} onKeyPress={handleKeyPress} />
                            </div>
                            <button
                                type="button"
                                className={classes.passwordToggleButton}
                                onClick={togglePasswordVisibility}
                            >
                                {showPassword ? (
                                    <img src={crossedEyeIcon} alt="Hide Password" style={{ height: "20px", width: "20px" }} />
                                ) : (
                                    '👁️'
                                )}
                            </button>
                        </div>
                        </div>
                        <div className={classes.formInput}>
                            <span className={classes.stId}>Confirm Password</span>
                            <div className={classes.passwordInputContainer}>
                            <div className={classes.inputContainer}>
                                <input type={showPassword ? 'text' : 'password'} className={classes.snInput} placeholder="" onChange={(e) => setPassword(e.target.value)} onKeyPress={handleKeyPress} />
                            </div>
                            <button
                                type="button"
                                className={classes.passwordToggleButton}
                                onClick={togglePasswordVisibility}
                            >
                                {showPassword ? (
                                    <img src={crossedEyeIcon} alt="Hide Password" style={{ height: "20px", width: "20px" }} />
                                ) : (
                                    '👁️'
                                )}
                            </button>
                        </div>
                        </div>
                    </div>
                 
                   
                    <div className={classes.signinButton}>
                        <p style={{color: "#fff"}}>Continue</p>
                    </div>

                </form>
            </div>

        </div>


    );
}

export default Register;