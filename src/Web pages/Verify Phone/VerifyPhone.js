import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, NavLink } from 'react-router-dom';
import OnbImg from '../../Images/image bg.svg';
import classes from './VerifyPhone.module.css';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button, Spinner } from 'react-bootstrap';


const VerifyPhone = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [code, setCode] = useState('');
    const [error, setError] = useState({});
    const [errorMessage, setErrorMessage] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [load, setLoad] = useState(false);
    const [termsSelected, setTermsSelected] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const location = useLocation();

    const { otpCode } = location.state || {};

    useEffect(() => {
        if (otpCode) {
         setEmail(otpCode.email);
         setPassword(otpCode.password);
         setConfirmPassword(otpCode.password_confirmation);
         setFirstName(otpCode.first_name);
         setLastName(otpCode.last_name);
         setPhone(otpCode.phone);
        }
      }, [otpCode]);


    const handleRegistration = async () => {
        setLoad(true);
        try {
            const responses = await axios.post(
                `https://api-smesupport.ogunstate.gov.ng/api/register`,
                {
                    email: email,
                    password: password,
                    first_name: firstName,
                    last_name: lastName,
                password_confirmation: confirmPassword,
                phone: phone,
                reg_type:"Phone",
                otp:code
                },
            );
    
            
            
                // If there's no previous page, navigate to a default route
                navigate('/sign_in');
           
            console.log(responses.data.message);
            
            setEmail('');
            setPassword('');
            setFirstName('');
            setLastName('');
            setPhone('');
            setConfirmPassword('');
            setCode('');

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
            setLoad(false);
        }
    };

    const isButtonDisabled = !code ;

  

    const navigateToEmail = () => {
        navigate('/register_email');
    };

    const navigateToPhone = () => {
        navigate('/register_phone');
    };

    const navigateToForgot = () => {
        navigate('/forgot_password');
    };

    

    return (
        <div className={classes.signin}>
            <div className={classes.marketersImg}>
                <img src={OnbImg} className="leftonb-img" alt="img" />
            </div>

            <div className={classes.signContainer}>
                <p className={classes.headerText}>Verify Phone number</p>
                <p className={classes.subText}>Enter the 4 digit code sent to your phone number to continue your registration</p>
                    {errorMessage && <p style={{ color: 'red', textAlign: 'center' }}>{errorMessage}</p>}
                    <div style={{ marginTop: 20 }}>
                        <span className={classes.stId}> Email 4 digit code </span>
                            <div className={classes.inputContainer}>
                                <input type="text" className={classes.snInput} placeholder="" value={code} onChange={(e) => setCode(e.target.value)} />
                            </div>
                    </div>

                   

                    <button className={classes.signinButton} style={{backgroundColor: isButtonDisabled ? "#acebc9" : "#2D995F", cursor: isButtonDisabled ? "default" : "pointer"}} onClick={handleRegistration} disabled={isButtonDisabled}>
                    {load ? (
                        <>
                            <Spinner size='sm' />
                            <span style={{ marginLeft: '5px' }}>Verifying, Please wait...</span>
                        </>
                    ) : (
                        "Continue"
                    )}
                    </button>
            </div>

        </div>


    );
}

export default VerifyPhone;