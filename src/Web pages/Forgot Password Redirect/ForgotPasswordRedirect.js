import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import OnbImg from '../../Images/image bg.svg';
import classes from './ForgotPasswordRedirect.module.css';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Spinner } from 'react-bootstrap';
import crossedEyeIcon from '../../Images/eye-slash.png'
import EmailIcon from '../../Images/mail.svg'
import Swal from 'sweetalert2';


const ForgotPasswordRedirect = () => {
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

   



   

    return (
        <div className={classes.signin}>
            <div className={classes.marketersImg}>
                <img src={OnbImg} className="leftonb-img" alt="img" />
            </div>

            <div className={classes.signContainer}>
            <img src={EmailIcon} className={classes.mailIcon} alt="img" />
                <p className={classes.headerText}>Please check your mail</p>
                <p className={classes.subText}>An email with the link to reset your password has been sent to your
email address</p>
            </div>

        </div>


    );
}

export default ForgotPasswordRedirect;