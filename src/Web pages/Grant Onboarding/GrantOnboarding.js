import React, { useState, useEffect } from 'react';
import classes from './GrantOnboarding.module.css';
import RegLogo from '../../Images/RegistrationLogo.svg'
import { Spinner, Badge } from 'react-bootstrap';
import Folder from '../../Images/folder-2.svg';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ArrowLogo from '../../Images/arrow-left.svg';
import LoanImage from '../../Images/loan bg.svg';
import MainDashoard from '../Main Dashboard/MainDashoard';
import Ready from '../../Images/nothing.svg'
import Ready1 from '../../Images/review.svg';
import { useRegistration } from '../RegistrationContext';
import { Link, useNavigate } from 'react-router-dom'

export default function GrantOnboarding() {
    const navigate = useNavigate();
    const [bearer, setBearer] = useState('');
    const [grantDetail, setGrantDetail] = useState([]);
    const [invoicePayment, setInvoicePayment] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [grantLoading, setGrantLoading] = useState(false);
    const [isLoan, setIsLoan] = useState(false);
    const { isGrant, isHome } = useRegistration();
console.log(isHome, "grant");
  

    const readData = async () => {
        try {
            const details = await AsyncStorage.getItem('userToken');
            if (details !== null) {
                setBearer(details);
            }
        } catch (e) {
            alert('Failed to fetch the input from storage');
        }
    };

    useEffect(() => {
        readData();
    }, []);

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${bearer}`
    };



    const fetchGrantStatus = async () => {
        setGrantLoading(true);
        try {
            let shouldNavigateToProfile = false;
            let addressResponse = null;
    
            // Fetch the address
            try {
                addressResponse = await axios.get('https://api-smesupport.ogunstate.gov.ng/api/profile', { headers });
                shouldNavigateToProfile = addressResponse.data?.data?.home_address === null;
            } catch (addressError) {
                console.error('Error fetching address:', addressError);
            }
    
            if (shouldNavigateToProfile) {
                navigate('/my_profile');
                return; // Exit the function to prevent further execution
            }
    
            // Fetch loan status
            const loanResponse = await axios.get('https://api-smesupport.ogunstate.gov.ng/api/verify-applicant-grant-status', { headers });
            const loanADD = loanResponse.data?.data;
    
            if (loanResponse.data.status === true) {
                navigate('/grant_ineligible');
            } else {
                navigate('/apply_grant');
            }
        } catch (error) {
            if (error.response && error.response.status === 401) {
                navigate('/sign_in');
            } else {
                const errorStatus = error.response?.data?.message;
                console.log(errorStatus);
            }
        } finally {
            setGrantLoading(false);
        }
    };

    return (
        <div>
        <MainDashoard />

        <div className={classes.finishedbodyCont}>
            <div className={`${classes.formSecCont}`}>
                <h3>Grant</h3>
            </div>

            <div className={classes.mainform}>

    <div className={classes.signin}>
    <div className={classes.applycntnt}>
        <div className={classes.imgapply}>
            <img src={Ready} alt='img' />
        </div>

        <div>
            <p className={classes.applygrnttxt}>No ongoing grant application to display </p>
            <p className={classes.grntapplytxt}>Click on the proceed button below to continue. </p>
        </div>
        <div className={classes.applyLoan} onClick={fetchGrantStatus}>
        {grantLoading ? (
                        <>
                            <Spinner size='sm' />
                            <span style={{ marginLeft: '5px' }}>Processing, Please wait...</span>
                        </>
                    ) : (
                        "Proceed"
                    )}
        </div>
    </div>
        </div>
        </div>
        </div>
    </div>
)
}