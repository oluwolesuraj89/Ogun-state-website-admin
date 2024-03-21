import React, { useState, useEffect } from 'react';
import classes from './LoansApplication.module.css';
import RegLogo from '../../Images/RegistrationLogo.svg'
import { Link, useNavigate } from 'react-router-dom'
import { Tab, Tabs, Form } from 'react-bootstrap';
import Folder from '../../Images/folder-2.svg';
import axios from 'axios';
import ArrowLogo from '../../Images/arrow-left.svg';
import LoanImage from '../../Images/admin fee.svg';
import LoanImage1 from '../../Images/monitor fee.svg';
import MainDashoard from '../Main Dashboard/MainDashoard';

export default function LoansApplication() {
const navigate = useNavigate();

const handleLoanApplication = () => {
    navigate('/loan_application');
};

    return (
        <div>
            <MainDashoard />

            <div className={classes.finishedbodyCont}>
                <div className={`${classes.formSecCont} ${classes.shadow}`}>
                    <h3>Loan</h3>
                </div>
                    <div className={classes.mainform}>
                        <div className={classes.signin}>
                            <div className={classes.arrowLoan}>
                                <img src={ArrowLogo} className={classes.arrow} alt='arrow-back' />
                                <p className={classes.applyLoanText}>Apply for Loan</p>
                            </div>
                            <div className={classes.loanBackground}>
                                <img src={LoanImage} className={classes.loanBg} alt='loan-image' />
                            </div>
                            <div className={classes.loanBackground}>
                                <img src={LoanImage1} className={classes.loanBg1} alt='loan-image' />
                            </div>
                           
                            <div className={classes.eligibilityText}>
                                <p className={classes.userdetails}>Application process</p>
                                <div className={classes.lineBottom} />
                                <div className={classes.eligibilityCriteria}>
                                    <div className={classes.bulletList}>
                                        <p>1. Generate the two Invoices above</p>
                                        <p>2. Go to the designated bank to make your payment.</p>
                                        <p>3. Click on submit application, once your loan has been approved, it will be disbursed to your bank account</p>
                                    </div>
                                </div>
                            </div>
                            <div className={classes.applyLoan} onClick={handleLoanApplication}>
                                            <p className={classes.continueReg}>Start Application</p>
                                        </div>
                        </div>
                    </div>
                </div>

            </div>
    )
}
