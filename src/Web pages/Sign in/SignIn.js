import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import OnbImg from '../../Images/image bg.svg';
import classes from './SignIn.module.css';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Spinner } from 'react-bootstrap';
import crossedEyeIcon from '../../Images/eye-slash.png'
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


const SignIn = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [error, setError] = useState({});
    const [errorMessage, setErrorMessage] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [termsSelected, setTermsSelected] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [errorMessage1, setErrorMessage1] = useState('');
    const location = useLocation();

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleEmailBlur = () => {
        const isValid = validateEmail(email);
        setIsValidEmail(isValid);
        if (!isValid) {
            setErrorMessage1('Invalid email');
        } else {
            setErrorMessage1('');
        }
    };

    

    const handleLogin = async () => {
        setIsLoading(true);
        try {
            const response = await axios.post(
                `https://api-smesupport.ogunstate.gov.ng/api/login`,
                {
                    email: email,
                    password: password,
                },
            );
    
            
            const result = response.data?.data?.user?.name;
     const phones = response.data?.data?.user?.phone_number;
     const emails = response.data?.data?.user?.email;
     const stins = response.data?.data?.user?.stin;
     const token = response.data?.data?.token;
     const isLoan = response.data?.data?.user?.is_loan;
     const isGrant = response.data?.data?.user?.is_grant ;
     const isComplete = response.data?.data?.user?.home_address === null;
     const isCompleted = response.data?.data?.user?.home_address;

     
     AsyncStorage.setItem('email', emails);
     AsyncStorage.setItem('stin', stins);
     AsyncStorage.setItem('phone', phones);
     AsyncStorage.setItem('userToken', token);
     AsyncStorage.setItem('fullName', result);
     AsyncStorage.setItem('isGrant', isGrant);
     AsyncStorage.setItem('isLoan', isLoan);
     AsyncStorage.setItem('isComplete', isComplete);
     AsyncStorage.setItem('isCompleted', isCompleted);
     

     if (isCompleted === null) {
        navigate('/my_profile');
    } else {
        navigate('/dashboard');
    }

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
            toast.error(errorMessage);
        } finally {
            setIsLoading(false);
        }
    };

    const isButtonDisabled = !email || !password ;

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleForgotPassword = () => {
        navigate('/forgot_password');
    };

    const handleNavigateRegister = () => {
        navigate('/sign_up');
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
                    <ToastContainer />
                    {/* {errorMessage && <p style={{ color: 'red', textAlign: 'center' }}>{errorMessage}</p>} */}
                        <span className={classes.stId}> Email Address </span>
                            <div className={classes.inputContainer}>
                                <input autoComplete='off' type="text" className={classes.snInput} placeholder="" value={email} onChange={handleEmailChange} onBlur={handleEmailBlur} />
                            </div>
                            
                    </div>

                    <div style={{ marginTop: 20 }}>
                        <span className={classes.stId}> Password </span>
                        <div className={classes.passwordInputContainer}>
                            <div className={classes.inputContainer}>
                                <input autoComplete='off' type={showPassword ? 'text' : 'password'} className={classes.snInput} placeholder="" value={password} onChange={(e) => setPassword(e.target.value)} onKeyPress={handleKeyPress} />
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
                    
                        <p className={classes.forgotPassword} onClick={handleForgotPassword}>Forgot password</p>
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
                    <div className={classes.bottom}>
                    <p className={classes.signUp} >Don't have an account? </p>
                    <p className={classes.register} onClick={handleNavigateRegister}>Register here!</p>
                    </div>
            </div>

        </div>


    );
}

export default SignIn;