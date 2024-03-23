import React, { useState, useEffect } from 'react';
import classes from './LoansOnboarding.module.css';
import RegLogo from '../../Images/RegistrationLogo.svg'
import { Spinner,Badge } from 'react-bootstrap';
import Folder from '../../Images/folder-2.svg';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ArrowLogo from '../../Images/arrow-left.svg';
import LoanImage from '../../Images/loan bg.svg';
import MainDashoard from '../Main Dashboard/MainDashoard';
import Ready from '../../Images/nothing.svg'
import { Link, useNavigate } from 'react-router-dom'
import { useRegistration } from '../RegistrationContext';

export default function LoansOnboarding() {
    const navigate = useNavigate();
    const [bearer, setBearer] = useState('');
    const [loanDetail, setLoanDetail] = useState([]);
    const [invoicePayment, setInvoicePayment] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [paymentLoading, setPaymentLoading] = useState(false);
    const [isLoan, setIsLoan] = useState(false);
    const { isReg, isHome } = useRegistration();
    console.log(isHome, "loann");

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


    

    const fetchLoans = async () => {
        setIsLoading(true);
        try {
            const response = await axios.get('https://api-smesupport.ogunstate.gov.ng/api/application/get-loans', { headers });
            const results = response.data?.data;
            setLoanDetail(results);
        //    console.log(results, "loan detail");
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
            const resultsss = response.data?.data;
            setInvoicePayment(resultsss);
            // console.log(resultsss, "invoice payment");
        } catch (error) {
            if (error.response && error.response.status === 401) {

                navigate('/sign_in');
            } else {
                const errorStatus = error.response?.data?.message;
                console.log(errorStatus);
                setInvoicePayment([]);
            }
        } finally {
            setPaymentLoading(false);
        }
    };

    useEffect(() => {
        if (bearer) {
            fetchLoans();
            fetchPayments();

        }
    }, [bearer]);


    // const handleLoanApplication = async () => {
    //     try {
    //         if (isHome === true) {
    //             navigate('/loan_application');
    //         } else {
    //             navigate('/loan_ineligible');
    //         }
    //     } catch (error) {
    //         console.error('Error checking isComplete status:', error);
    //         // Handle error
    //     }
    // };

    const handleLoanApplication = async () => {
        navigate('/loan_application');
    }

    function formatDate(dateString) {
        const date = new Date(dateString);
        const formattedDate = `${date.getFullYear()}-${padZero(date.getMonth() + 1)}-${padZero(date.getDate())} `;
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
  
        <div className={classes.signin}>
        <div className={classes.applycntnt}>
            <div className={classes.imgapply}>
                <img src={Ready} alt='img' />
            </div>

            <div>
                <p className={classes.applygrnttxt}>No ongoing loan payment to display </p>
                <p className={classes.grntapplytxt}>Click on the proceed button below to continue. </p>
            </div>
            <div className={classes.applyLoan} onClick={handleLoanApplication}>
                <p className={classes.continueReg}>Proceed</p>
            </div>
        </div>
    </div>

        
        
</div>

            </div>



        </div>
    )
}
