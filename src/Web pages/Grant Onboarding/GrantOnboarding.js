import React, { useState, useEffect } from 'react';
import classes from './GrantOnboarding.module.css';
import RegLogo from '../../Images/RegistrationLogo.svg'
import { Tab, Tabs, Form, Badge } from 'react-bootstrap';
import Folder from '../../Images/folder-2.svg';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ArrowLogo from '../../Images/arrow-left.svg';
import LoanImage from '../../Images/loan bg.svg';
import MainDashoard from '../Main Dashboard/MainDashoard';
import Ready from '../../Images/nothing.svg'
import Ready1 from '../../Images/review.svg'
import { Link, useNavigate } from 'react-router-dom'

export default function GrantOnboarding() {
    const navigate = useNavigate();
    const [bearer, setBearer] = useState('');
    const [grantDetail, setGrantDetail] = useState([]);
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

   

    const fetchPayments = async () => {
        setPaymentLoading(true);
        try {
            const response = await axios.get('https://api-smesupport.ogunstate.gov.ng/api/get-invoices', { headers });
            const results = response.data?.data;
            setInvoicePayment(results);
            // console.log(results, "invoice payment");
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
            fetchGrant();
            fetchPayments();

        }
    }, [bearer]);




    const handleLoanApplication = async () => {
        try {
            const isComplete = await AsyncStorage.getItem('isCompleted');
            if (isComplete === "null") {
                navigate('/grant_ineligible');
            } else {
                navigate('/apply_grant');
            }
        } catch (error) {
            console.error('Error checking isComplete status:', error);
            // Handle error
        }
    };
    const handleLoanApplication1 = () => {
        navigate('/dashboard');
    };

    function formatDate(dateString) {
        const date = new Date(dateString);
        const formattedDate = `${date.getFullYear()}-${padZero(date.getMonth() + 1)}-${padZero(date.getDate())} ${padZero(date.getHours())}:${padZero(date.getMinutes())} ${date.getHours() >= 12 ? 'PM' : 'AM'}`;
        return formattedDate;
      }
    
      function padZero(num) {
        return num < 10 ? `0${num}` : num;
      }
  
 const fetchGrant = async () => {
        setIsLoading(true);
        try {
            const response = await axios.get('https://api-smesupport.ogunstate.gov.ng/api/get-grant', { headers });
            const resultxxx = response.data?.data;
            setGrantDetail(resultxxx);
            console.log(resultxxx, "men payment");
        } catch (error) {
            if (error.response && error.response.status === 401) {

                navigate('/sign_in');
            } else {
                const errorStatus = error.response?.data?.message;
                console.log(errorStatus);
                setGrantDetail([]);
            }
        } finally {
            setIsLoading(false);
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
    {isLoan ? (
        <div className={classes.loandgrantcards}>
            <div className={classes.signin}>
            <div className={classes.applycntnt}>
                <div className={classes.imgapply}>
                    <img src={Ready1} alt='img' />
                </div>

                <div>
                    <p className={classes.applygrnttxt}>Your application is being reviewed  </p>
                    <p className={classes.grntapplytxt}>You will be notified via mail once your application has been approved. </p>
                </div>
                <div className={classes.applyLoan} onClick={handleLoanApplication1}>
                    <p className={classes.continueReg}>Back to Dashboard</p>
                </div>
            </div>
        </div>

           
        </div>
    ) : (
        <div className={classes.signin}>
            <div className={classes.applycntnt}>
                <div className={classes.imgapply}>
                    <img src={Ready} alt='img' />
                </div>

                <div>
                    <p className={classes.applygrnttxt}>You are yet to apply for a Grant  </p>
                    <p className={classes.grntapplytxt}>Click on the proceed button below to continue. </p>
                </div>
                <div className={classes.applyLoan} onClick={handleLoanApplication}>
                    <p className={classes.continueReg}>Proceed</p>
                </div>
            </div>
        </div>
    )}
</div>

            </div>



        </div>
    )
}
