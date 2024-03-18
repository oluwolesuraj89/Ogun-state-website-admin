import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import OnbImg from '../../Images/image bg.svg';
import classes from './SignIn.module.css';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Spinner } from 'react-bootstrap';
import crossedEyeIcon from '../../Images/eye-slash.png'
import Swal from 'sweetalert2';


const SignIn = () => {
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
        setIsLoading(true);
        try {
            const responses = await axios.post(
                `https://api-silas.ogunstate.gov.ng/api/login`,
                {
                    email: email,
                    password: password,
                },
            );
    
            
            if (location.state && location.state.from) {
                navigate(location.state.from);
            } else {
                // If there's no previous page, navigate to a default route
                navigate('/dashboard');
            }
            console.log(responses.data.message);
            
            setEmail('');
            setPassword('');

        } catch (error) {
            let errorMessage = 'An error occurred. Please try again.';
            if (error.response && error.response.data && error.response.data.message) {
                if (typeof error.response.data.message === 'string') {
                    errorMessage = error.response.data.message;
                } else if (Array.isArray(error.response.data.message)) {
                    errorMessage = error.response.data.message.join('; ');
                } else if (typeof error.response.data.message === 'object') {
                    errorMessage = JSON.stringify(error.response.data.message);
                }
            }
            setErrorMessage(errorMessage);
        } finally {
            setIsLoading(false);
        }
    };

    const isButtonDisabled = !email || !password;

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
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
                <p className={classes.headerText}>Log In</p>
                <p className={classes.subText}>to access your portal</p>
                    <div style={{ marginTop: 20 }}>
                    {errorMessage && <p style={{ color: 'red', textAlign: 'center' }}>{errorMessage}</p>}
                        <span className={classes.stId}> Email Address </span>
                            <div className={classes.inputContainer}>
                                <input type="text" className={classes.snInput} placeholder="" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                    </div>

                    <div style={{ marginTop: 20 }}>
                        <span className={classes.stId}> Password </span>
                        <div className={classes.passwordInputContainer}>
                            <div className={classes.inputContainer}>
                                <input type={showPassword ? 'text' : 'password'} className={classes.snInput} placeholder="" value={password} onChange={(e) => setPassword(e.target.value)} onKeyPress={handleKeyPress} />
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
                    
                        <p className={classes.forgotPassword}>forgot password</p>
                    </div>

                    <button className={classes.signinButton} style={{backgroundColor: isButtonDisabled ? "#acebc9" : "#2D995F", cursor: isButtonDisabled ? "default" : "pointer"}} onClick={handleLogin} disabled={isButtonDisabled}>
                    {isLoading ? (
                        <>
                            <Spinner size='sm' />
                            <span style={{ marginLeft: '5px' }}>Processing, Please wait...</span>
                        </>
                    ) : (
                        "Log In"
                    )}
                    </button>

                {/* <div className={classes.buttonContainer}>
                        <div className={classes.buttonSignup}>
                            <p className={classes.button1}>Register as an Individual</p>
                        </div>
                        <div className={classes.buttonSignup2}>
                            <p className={classes.button2}>Register as a Business</p>
                        </div>
                    </div> */}
            </div>

        </div>


    );
}

export default SignIn;