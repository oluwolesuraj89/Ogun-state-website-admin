import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import OnbImg from '../../Images/image bg.svg';
import classes from './ForgotPasswordReset.module.css';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Spinner } from 'react-bootstrap';
import crossedEyeIcon from '../../Images/eye-slash.png'
import Swal from 'sweetalert2';


const ForgotPasswordReset = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [error, setError] = useState({});
    const [errorMessage, setErrorMessage] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [termsSelected, setTermsSelected] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showPassword1, setShowPassword1] = useState(false);
    const [token, setToken] = useState(false);

    const location = useLocation();




    
    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const tokens = searchParams.get('token');
        setToken(tokens)
        console.log('Here is your token:', tokens); 
        
        // if (tokens) {
        //     handleForgotPassword(token);
        // }
    }, [location.search]);

    
    const handleForgotPassword = async () => {
        setIsLoading(true);
        try {
            const responses = await axios.post(
                `https://api-smesupport.ogunstate.gov.ng/api/reset-password`,
                {
                    password: password,
                    password_confirmation: confirmPassword,
                token: token
                },
            );
    
            navigate('/sign_in');
    
            setPassword('');
            setConfirmPassword('');
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
            console.log(errorMessage);
            setErrorMessage(errorMessage);
        } finally {
            setIsLoading(false);
        }
    };
    

    const isButtonDisabled = !password || !confirmPassword;

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const togglePasswordVisibility1 = () => {
        setShowPassword1(!showPassword1);
    };


    

    return (
        <div className={classes.signin}>
            <div className={classes.marketersImg}>
                <img src={OnbImg} className="leftonb-img" alt="img" />
            </div>

            <div className={classes.signContainer}>
                
                <p className={classes.headerText}>Reset Password</p>
                <p className={classes.subText}>Reset your password here</p>
                {errorMessage && <p style={{ color: 'red', textAlign: 'center' }}>{errorMessage}</p>}
                    <div style={{ marginTop: 20 }}>
                        <span className={classes.stId}> Enter your new Password </span>
                        <div className={classes.passwordInputContainer}>
                            <div className={classes.inputContainer}>
                                <input type={showPassword ? 'text' : 'password'} className={classes.snInput} placeholder="" value={password} onChange={(e) => setPassword(e.target.value)}  />
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

                    <div style={{ marginTop: 20 }}>
                        <span className={classes.stId}> Re-enter your new Password </span>
                        <div className={classes.passwordInputContainer}>
                            <div className={classes.inputContainer}>
                                <input type={showPassword1 ? 'text' : 'password'} className={classes.snInput} placeholder="" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}  />
                            </div>
                            <button
                                type="button"
                                className={classes.passwordToggleButton}
                                onClick={togglePasswordVisibility1}
                            >
                                {showPassword1 ? (
                                    <img src={crossedEyeIcon} alt="Hide Password" style={{ height: "20px", width: "20px" }} />
                                ) : (
                                    '👁️'
                                )}
                            </button>
                        </div>
                    
                        
                    </div>

                    <button className={classes.signinButton} style={{backgroundColor: isButtonDisabled ? "#acebc9" : "#2D995F", cursor: isButtonDisabled ? "default" : "pointer"}} onClick={handleForgotPassword} >
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

export default ForgotPasswordReset;