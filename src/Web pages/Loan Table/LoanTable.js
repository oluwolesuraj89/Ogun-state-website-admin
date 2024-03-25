import React, { useState, useEffect } from 'react';
import classes from './LoanTable.module.css';
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

export default function LoanTable() {
    const navigate = useNavigate();
    const [bearer, setBearer] = useState('');
    const [loanDetail, setLoanDetail] = useState([]);
    const [invoicePayment, setInvoicePayment] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [paymentLoading, setPaymentLoading] = useState(false);
    const [isLoan, setIsLoan] = useState(false);
    const { isReg, isHome } = useRegistration();

 

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


    const handleLoanApplication = async () => {
        try {
            if (isHome === false) {
                navigate('/loan_application');
            } else {
                navigate('/loan_ineligible');
            }
        } catch (error) {
            console.error('Error checking isComplete status:', error);
            // Handle error
        }
    };

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
                    <h3>Loans</h3>
                </div>

                <div className={classes.mainform}>
    
        <div className={classes.loandgrantcards}>
        <div className={classes.loandethead}>
            <p className={classes.loanText}>Loan Amount: <span className={classes.theamount}> ₦500,000.00</span></p>
            <p className={classes.loanText}>Duration: <span className={classes.monthText}>10 months</span></p>
            {/* <p className={classes.loanText}>Loan start date: <span className={classes.loanText1}>{formatDate(loanDetail[0].updated_at)}</span></p>
            <p className={classes.loanText}>Loan end date: <span className={classes.loanText2}>1st January 2025</span></p> */}
        </div>

        <div className={classes.loanContainer}>
            <div className={classes.loanResponsive}>
                <table>
                    <thead className={classes.loanTable}>
                        <tr >
                            <th className={classes.tableText}>S/N</th>
                            <th className={classes.tableText}>Application Number</th>
                            <th className={classes.tableText}>Description</th>
                            <th className={classes.tableText}>Amount</th>
                            <th className={classes.tableText}>Date</th>
                            <th className={classes.tableText}>Status</th>
                        </tr>
                    </thead>
                        
                    {isLoading ? (
    <p className={classes.fetchText}><Spinner size='sm' style={{ marginRight: 5 }} />Fetching loan application...</p>
) : loanDetail.length > 0 ? (
    <tbody>
        {loanDetail.map((item, index) => (
            <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.application_number}</td>
                <td>{item.type === 1 ? "Loan Application" : "Grant Application"}</td>
                <td style={{ textAlign: "right" }}>₦{parseFloat(item.amount).toLocaleString('en-US', {
                    minimumIntegerDigits: 1,
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                })}</td>
                <td>{formatDate(item.created_at)}</td>
                <td>
                    <Badge bg={item.status === "Pending" ? 'warning' : item.status === "Approved" ? 'success' : 'danger'}>
                        {item.status}
                    </Badge>
                </td>
                <td>
                   
                </td>
            </tr>
        ))}
    </tbody>
) : (
    <tbody>
        <tr>
            <td colSpan="7">No loan applications</td>
        </tr>
    </tbody>
)}

                </table>
            </div>
        </div>
    </div> 
  
</div>

            </div>



        </div>
    )
}
