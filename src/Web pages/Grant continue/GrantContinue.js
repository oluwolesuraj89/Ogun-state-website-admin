import React, { useState, useEffect } from 'react';
import classes from './GrantContinue.module.css';
import RegLogo from '../../Images/RegistrationLogo.svg'
import { Link } from 'react-router-dom'
import { Tab, Tabs, Form } from 'react-bootstrap';
import Folder from '../../Images/folder-2.svg';
import axios from 'axios';
import ArrowLogo from '../../Images/arrow-left.svg';
import GrantImage from '../../Images/grant proceed.svg';

export default function GrantContinue() {



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
                                <p className={classes.applyLoanText}>Apply for Grant</p>
                            </div>
                            <div className={classes.loanBackground}>
                                <img src={GrantImage} className={classes.loanBg} alt='loan-image' />
                            </div>
                            <div className={classes.eligibilityText}>
                                <p className={classes.userdetails}>How to Apply Always</p>
                                <div className={classes.lineBottom} />
                                <div className={classes.eligibilityCriteria}>
                                    <div className={classes.bulletList}>
                                        <p>1. Click on the submit application below,</p>
                                        <p>2. Once your application has been approved, the grant will be paid to the account number you entered during registration</p>
                                    </div>
                                </div>
                            </div>
                            <div className={classes.applyLoan}>
                                            <p className={classes.continueReg}>Submit Application</p>
                                        </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
