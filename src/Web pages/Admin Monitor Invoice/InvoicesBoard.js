import React, { useState, useEffect, useRef } from 'react';
import MainDashoard from '../Main Dashboard/MainDashoard';
import classes from './InvoicesBoard.module.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Ready from '../../Images/nothing.svg'
import { useRegistration } from '../RegistrationContext';
import { Spinner } from 'react-bootstrap';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Link } from 'react-router-dom';

export default function InvoicesBoard() {
    const navigate = useNavigate();
    const [bearer, setBearer] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [invoicePayment, setInvoicePayment] = useState([]);
    const [paymentLoading, setPaymentLoading] = useState(false);
   

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


    const fetchPayments = async () => {
        setPaymentLoading(true);
        try {
            const response = await axios.get('https://api-smesupport.ogunstate.gov.ng/api/get-invoices', { headers });
            const resultsss = response.data?.data;
            setInvoicePayment(resultsss);
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
            fetchPayments();

        }
    }, [bearer]);


  return (
    <div>
        <MainDashoard />
        <div className={classes.finishedbodyCont}>
    <div className={`${classes.formSecCont} ${classes.shadow}`}>
        <h3>Invoices</h3>
    </div>
    <div className={classes.invoices}>
    {paymentLoading ? (
        <Spinner size='lg' style={{color: '#2D995F'}} />
    ) : (
        invoicePayment.length > 0 ? (
            invoicePayment.map((item, index) => (
                <div key={index} className={classes.invoiceCards}>
                    <span style={{fontWeight: 500}}>Invoice</span>
                    <h4>{item.invoice_number}</h4>
                    <button onClick={() => navigate('/admin_invoice', {state: { invoice: invoicePayment }})} className={classes.invoiceOpen}>Open</button>
                </div>
            ))
        ) : (
            <div className={classes.mainform}>
            <div className={classes.signin}>
            <div className={classes.applycntnt}>
                <div className={classes.imgapply}>
                    <img src={Ready} alt='img' />
                </div>
    
                <div>
                    <p className={classes.applygrnttxt}>No Invoice to display </p>
                </div>
            </div>
        </div>
        </div>
        )
    )}
</div>

  


 
</div>

    </div>

  )
}
