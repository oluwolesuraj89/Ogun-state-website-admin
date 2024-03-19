import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import OnbImg from '../../Images/image bg.svg';
import classes from './RegisterEmail.module.css';
import axios from 'axios';
import Swal from 'sweetalert2';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Spinner } from 'react-bootstrap';
import crossedEyeIcon from '../../Images/eye-slash.png'



const RegisterEmail = () => {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState({});
    const [errorMessage, setErrorMessage] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [load, setLoad] = useState(false);
    const [termsSelected, setTermsSelected] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const location = useLocation();






    const handleRegistration = async () => {
        setLoad(true);
        try {
            const responses = await axios.post(
                `https://api-silas.ogunstate.gov.ng/api/send-otp`,
                {
                    email: email,
                    password: password,
                    first_name: firstName,
                    last_name: lastName,
                password_confirmation: confirmPassword,
                phone: phone,
                reg_type:"Email",
                },
            );
    
                navigate('/verify_email', { state: { otpCode:  responses.data.data} });
           
            console.log(responses.data.data);
            
            setEmail('');
            setPassword('');
            setFirstName('');
            setLastName('');
            setPhone('');
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
            setErrorMessage(errorMessage);
        } finally {
            setLoad(false);
        }
    };

    const isButtonDisabled = !email || !password || !confirmPassword || !firstName || !lastName;

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const togglePasswordVisibility1 = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };


    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !isButtonDisabled) {
            handleRegistration();
        }
    };

    return (
        <div className={classes.signin}>
            <div className={classes.marketersImg}>
                <img src={OnbImg} className="leftonb-img" alt="img" />
            </div>

            <div className={classes.signContainer}>
                <p className={classes.headerText}>Register</p>
                <p className={classes.subText}>Fill in your details to register</p>
                {/* <form> */}
                {errorMessage && <p style={{ color: 'red', textAlign: 'center' }}>{errorMessage}</p>}
                    <div className={classes.rszeInput}>
                        <div className={classes.formInput}>
                            <span className={classes.stId}>First Name</span>
                            <input type="text" className={classes.snInput} placeholder="" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                        </div>
                        <div className={classes.formInput}>
                            <span className={classes.stId}>Last Name</span>
                            <input type="text" className={classes.snInput} placeholder="" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                        </div>
                    </div>

                    <div className={classes.rszeInput}>
                        <div className={classes.formInput}>
                            <span className={classes.stId}>Email Address</span>
                            <input type="email" className={classes.snInput} placeholder="" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className={classes.formInput}>
                            <span className={classes.stId}>Phone Number</span>
                            <input type="text" className={classes.snInput} placeholder="" value={phone} onChange={(e) => setPhone(e.target.value)} />
                        </div>
                    </div>

                    <div className={classes.rszeInput}>
                        <div className={classes.formInput} >
                            <span className={classes.stId}>Password</span>
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
                        <div className={classes.formInput}>
                            <span className={classes.stId}>Confirm Password</span>
                            <div className={classes.passwordInputContainer}>
                            <div className={classes.inputContainer}>
                                <input type={showConfirmPassword ? 'text' : 'password'} className={classes.snInput} placeholder="" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} onKeyPress={handleKeyPress} />
                            </div>
                            <button
                                type="button"
                                className={classes.passwordToggleButton}
                                onClick={togglePasswordVisibility1}
                            >
                                {showConfirmPassword ? (
                                    <img src={crossedEyeIcon} alt="Hide Password" style={{ height: "20px", width: "20px" }} />
                                ) : (
                                    '👁️'
                                )}
                            </button>
                        </div>
                        </div>
                    </div>
                 
                   
                    <button className={classes.signinButton} style={{backgroundColor: isButtonDisabled ? "#acebc9" : "#2D995F", cursor: isButtonDisabled ? "default" : "pointer"}} onClick={handleRegistration} disabled={isButtonDisabled}>
                    {load ? (
                        <>
                            <Spinner size='sm' />
                            <span style={{ marginLeft: '5px' }}>Registration in process, Please wait...</span>
                        </>
                    ) : (
                        "Continue"
                    )}
                    </button>

                {/* </form> */}
            </div>

        </div>


    );
}

export default RegisterEmail;