import React, { useState, useEffect } from 'react';
import classes from './LoansApplication.module.css';
import RegLogo from '../../Images/RegistrationLogo.svg'
import { Link } from 'react-router-dom'
import { Tab, Tabs, Form } from 'react-bootstrap';
import Folder from '../../Images/folder-2.svg';
import axios from 'axios';
import ArrowLogo from '../../Images/arrow-left.svg';
import LoanImage from '../../Images/admin fee.svg';
import LoanImage1 from '../../Images/monitor fee.svg';

export default function LoansApplication() {



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
                            <div className={classes.loanBackground}>
                                <img src={LoanImage1} className={classes.loanBg} alt='loan-image' />
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
                            <div className={classes.applyLoan}>
                                            <p className={classes.continueReg}>Submit Application Now</p>
                                        </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
