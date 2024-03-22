import React, { useState, useEffect } from 'react';
import classes from './GrantIneligible.module.css';
import RegLogo from '../../Images/RegistrationLogo.svg'
import { Tab, Tabs, Form, Badge } from 'react-bootstrap';
import Folder from '../../Images/folder-2.svg';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ArrowLogo from '../../Images/arrow-left.svg';
import LoanImage from '../../Images/loan bg.svg';
import MainDashoard from '../Main Dashboard/MainDashoard';
import Ready from '../../Images/no profile.svg'
import { Link, useNavigate } from 'react-router-dom'

export default function GrantIneligible() {
    const navigate = useNavigate();
    const [bearer, setBearer] = useState('');
    const [loanDetail, setLoanDetail] = useState([]);
    const [invoicePayment, setInvoicePayment] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [paymentLoading, setPaymentLoading] = useState(false);
    const [isLoan, setIsLoan] = useState(false);

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


    useEffect(() => {
        const retrieveLoanStatus = async () => {
            try {
                const loanStatus = await AsyncStorage.getItem('isLoan');
                setIsLoan(loanStatus === 'true');



            } catch (error) {
                console.error('Error retrieving admin status:', error);
            }
        };

        retrieveLoanStatus();
    }, []);

    const fetchLoans = async () => {
        setIsLoading(true);
        try {
            const response = await axios.get('https://api-smesupport.ogunstate.gov.ng/api/application/get-loans', { headers });
            const results = response.data?.data;
            setLoanDetail(results);
            // console.log(results, "here");
        } catch (error) {
            if (error.response && error.response.status === 401) {

                navigate('/sign_in');
            } else {
                const errorStatus = error.response?.data?.message;
                console.log(errorStatus);
                setLoanDetail([]);
            }
        } finally {
            setIsLoading(false);
        }
    };

    const fetchPayments = async () => {
        setPaymentLoading(true);
        try {
            const response = await axios.get('https://api-smesupport.ogunstate.gov.ng/api/get-invoices', { headers });
            const results = response.data?.data;
            setInvoicePayment(results);
            console.log(results, "invoice payment");
        } catch (error) {
            if (error.response && error.response.status === 401) {

                navigate('/sign_in');
            } else {
                const errorStatus = error.response?.data?.message;
                console.log(errorStatus);
                setInvoicePayment([]);
            }
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (bearer) {
            fetchLoans();
            fetchPayments();

        }
    }, [bearer]);


    const handleLoanApplication = () => {
        navigate('/my_profile');
    };
   

    function formatDate(dateString) {
        const date = new Date(dateString);
        const formattedDate = `${date.getFullYear()}-${padZero(date.getMonth() + 1)}-${padZero(date.getDate())} ${padZero(date.getHours())}:${padZero(date.getMinutes())} ${date.getHours() >= 12 ? 'PM' : 'AM'}`;
        return formattedDate;
    }

    function padZero(num) {
        return num < 10 ? `0${num}` : num;
    }



    return (
        <div>
            <MainDashoard />

            <div className={classes.finishedbodyCont}>
                <div className={`${classes.formSecCont}`}>
                    <h3>Loan</h3>
                </div>

                <div className={classes.mainform}>

                    <div className={classes.loandgrantcards}>
                        <div className={classes.signin}>

                            <div className={classes.signin}>
                                <div className={classes.applycntnt}>
                                    <div className={classes.imgapply}>
                                        <img src={Ready} alt='img' />
                                    </div>

                                    <div>
                                        <p className={classes.applygrnttxt}>You are not eligible for a grant </p>
                                        <p className={classes.grntapplytxt}>Sadly you do not meet up with the requirements to access this grant, <br />
Kindly go to your profile and complete your registration to access this grant. </p>
                                    </div>
                                    <div className={classes.applyLoan} onClick={handleLoanApplication}>
                                        <p className={classes.continueReg}>Edit your Profile</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>



                </div>
                </div>
                </div>
                )
}
