import React, { useState, useEffect } from 'react';
import classes from './LoanHomePage.module.css';
import RegLogo from '../../Images/RegistrationLogo.svg'
import { Link, useNavigate } from 'react-router-dom'
import { Tab, Tabs, Form } from 'react-bootstrap';
import Folder from '../../Images/folder-2.svg';
import axios from 'axios';
import ArrowLogo from '../../Images/arrow-left.svg';
import LoanImage from '../../Images/loan continue.svg';
import MainDashoard from '../Main Dashboard/MainDashoard';

export default function LoanHomePage() {
const navigate = useNavigate();

const handleLoanApplication = () => {
    navigate('/submit_loan_application');
};


    return (
        <div>
            <MainDashoard />

            <div className={classes.finishedbodyCont}>
                <div className={`${classes.formSecCont} ${classes.shadow}`}>
                    <h3>Loan</h3>
                </div>
                <div className={classes.loanBackground}>
                    <img src={LoanImage} className={classes.loanBg} alt='loan-image' />
                </div>
                <div className={classes.eligibilityText}>
                    <p className={classes.userdetails}>How to Apply</p>
                    <div className={classes.lineBottom} />
                    <div className={classes.eligibilityCriteria}>
                        <div className={classes.bulletList}>
                            <p>1. Generate Invoice for Administrative fee and make payment.</p>
                            <p>2. Generate Invoice for Monitor fee and make payment.</p>
                            <p>3. Click on the Submit application button to apply for the loan.</p>
                            <p>4. Once your application has been approved, the loan will be paid to your bank account number provided during registration.</p>
                        </div>
                    </div>
                </div>
                <div className={classes.eligibilityText}>
                    <p className={classes.userdetails}>Loan Repayment</p>
                    <div className={classes.lineBottom} />
                    <div className={classes.eligibilityCriteria}>
                        <div className={classes.bulletList}>
                            <p>1. Loan duration is for a period of 10months.</p>
                            <p>2. Make your monthly payment of N50,000 to the designated bank for 10months to repay your loan.</p>
                            <p>3. Enjoy zero interest on your loan.</p>
                        </div>
                    </div>
                </div>
                <div className={classes.applyLoan} onClick={handleLoanApplication}>
                    <p className={classes.continueReg}>Proceed</p>
                </div>
            </div>
        </div>
    )
}
