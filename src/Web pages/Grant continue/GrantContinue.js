import React, { useState, useEffect } from 'react';
import classes from './GrantContinue.module.css';
import RegLogo from '../../Images/RegistrationLogo.svg'
import { Link } from 'react-router-dom'
import { Tab, Tabs, Form } from 'react-bootstrap';
import Folder from '../../Images/folder-2.svg';
import axios from 'axios';
import ArrowLogo from '../../Images/arrow-left.svg';
import GrantImage from '../../Images/grant proceed.svg';
import MainDashoard from '../Main Dashboard/MainDashoard';

export default function SubmitGrantApplication() {



    return (
        <div>
            <MainDashoard />

            <div className={classes.finishedbodyCont}>
                <div className={`${classes.formSecCont} ${classes.shadow}`}>
                    <h3>Grant</h3>
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
    )
}
