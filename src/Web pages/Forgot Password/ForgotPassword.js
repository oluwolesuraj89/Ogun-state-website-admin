import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import OnbImg from '../../Images/image bg.svg';
import classes from './ForgotPassword.module.css';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Spinner } from 'react-bootstrap';
import crossedEyeIcon from '../../Images/eye-slash.png'
import Swal from 'sweetalert2';


const ForgotPassword = () => {
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

    const isButtonDisabled = !email ;

   

    const handleForgotPassword = () => {
        navigate('/forgot_password_redirect');
    };

   

    return (
        <div className={classes.signin}>
            <div className={classes.marketersImg}>
                <img src={OnbImg} className="leftonb-img" alt="img" />
            </div>

            <div className={classes.signContainer}>
                <p className={classes.headerText}>Forgot Password</p>
                <p className={classes.subText}>Reset your password here</p>
                    <div style={{ marginTop: 20 }}>
                    {errorMessage && <p style={{ color: 'red', textAlign: 'center' }}>{errorMessage}</p>}
                        <span className={classes.stId}> Enter your email address </span>
                            <div className={classes.inputContainer}>
                                <input type="text" className={classes.snInput} placeholder="" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                    </div>


                    <button className={classes.signinButton} style={{backgroundColor: isButtonDisabled ? "#acebc9" : "#2D995F", cursor: isButtonDisabled ? "default" : "pointer"}} onClick={handleForgotPassword} disabled={isButtonDisabled}>
                    {isLoading ? (
                        <>
                            <Spinner size='sm' />
                            <span style={{ marginLeft: '5px' }}>Processing, Please wait...</span>
                        </>
                    ) : (
                        "Continue"
                    )}
                    </button>
            </div>

        </div>


    );
}

export default ForgotPassword;