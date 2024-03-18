import React, { useState, useEffect } from 'react';
import classes from './LoansContinue.module.css';
import RegLogo from '../../Images/RegistrationLogo.svg'
import { Link } from 'react-router-dom'
import { Tab, Tabs, Form } from 'react-bootstrap';
import Folder from '../../Images/folder-2.svg';
import axios from 'axios';
import ArrowLogo from '../../Images/arrow-left.svg';
import LoanImage from '../../Images/loan continue.svg';

export default function LoansContinue() {



    return (
        <div className={classes.regBody}>
            <div className={classes.regContainer}>
                <div className={classes.sideNav}>
                    <div className={classes.logoCont}>
                        <img src={RegLogo} alt='Logo' />
                    </div>
                    <div className={classes.regMenu}>
                        <Link to={'/#'}><p className={classes.active}>Complete Registration</p></Link>
                        <Link to={'/#'}><p>Loans</p></Link>
                        <Link to={'/#'}><p>Grants</p></Link>
                        <Link to={'/#'}><p>Invoices</p></Link>
                        <Link to={'/#'}><p>Logout</p></Link>
                    </div>
                </div>
                <div className={classes.formSection}>
                    <h1>Welcome Oriade</h1>
                    <p>Apply for grants or loans from the Ogun state govt</p>
                    <div className={classes.formSecCont}>
                        <h3>Dashboard</h3>
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
                            <div className={classes.applyLoan}>
                                            <p className={classes.continueReg}>Proceed</p>
                                        </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
