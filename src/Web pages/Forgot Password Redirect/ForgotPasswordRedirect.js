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