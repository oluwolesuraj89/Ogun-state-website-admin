import React, { useState, useEffect } from 'react';
import classes from './LoansOnboarding.module.css';
import RegLogo from '../../Images/RegistrationLogo.svg'
import { Tab, Tabs, Form, Badge } from 'react-bootstrap';
import Folder from '../../Images/folder-2.svg';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ArrowLogo from '../../Images/arrow-left.svg';
import LoanImage from '../../Images/loan bg.svg';
import MainDashoard from '../Main Dashboard/MainDashoard';
import Ready from '../../Images/undraw_no_data_re_kwbl 1.png'
import { Link, useNavigate } from 'react-router-dom'

export default function LoansOnboarding() {
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
            const response = await axios.get('https://api-silas.ogunstate.gov.ng/api/application/get-loans', { headers });
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
            const response = await axios.get('https://api-silas.ogunstate.gov.ng/api/get-invoices', { headers });
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
        navigate('/loans');
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
                <div className={`${classes.formSecCont} ${classes.shadow}`}>
                    <h3>Loan</h3>
                </div>

                <div className={classes.mainform}>
    {isLoan ? (
        <div className={classes.loandgrantcards}>
            <div className={classes.loandethead}>
                <p className={classes.loanText}>Loan Amount: <span className={classes.theamount}> ₦500,000</span></p>
                <p className={classes.loanText}>Duration: <span className={classes.monthText}>10 months</span></p>
                <p className={classes.loanText}>Loan start date: <span className={classes.loanText}>1st March 2024</span></p>
                <p className={classes.loanText}>Loan repayment end date: <span className={classes.loanText}>1st January 2025</span></p>
            </div>

            <div className={classes.loanContainer}>
                <div className={classes.loanResponsive}>
                    <table>
                        <thead className={classes.loanTable}>
                            <tr >
                                <th className={classes.tableText}>S/N</th>
                                <th className={classes.tableText}>Invoice Number</th>
                                <th className={classes.tableText}>Description</th>
                                <th className={classes.tableText}>Amount Paid</th>
                                <th className={classes.tableText}>Date</th>
                                <th className={classes.tableText}>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                        {invoicePayment.map((item, index) => (
        <tr key={index}>
            <td>{index + 1}</td>
            <td>{item.invoice_number}</td>
            <td>{item.description}</td>
            <td style={{textAlign: "right"}}>{parseFloat(item.amount).toLocaleString('en-US', {
                                      minimumIntegerDigits: 1,
                                      minimumFractionDigits: 2,
                                      maximumFractionDigits: 2
                                    })}</td>
            <td>{formatDate(item.created_at)}</td>
            <td> <Badge bg={item.status === "Pending" ? 'warning' : 'success'}>
                    {item.status}
                </Badge></td>
            <td>
               
            </td>
        </tr>
    ))}
</tbody>
                    </table>
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
                    <p className={classes.applygrnttxt}>You are yet to apply for a Loan </p>
                    <p className={classes.grntapplytxt}>Apply for a loan from your dashboard to see the status of your loan here </p>
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
