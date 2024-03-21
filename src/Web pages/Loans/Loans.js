import React, { useState, useEffect } from 'react';
import classes from './Loans.module.css';
import RegLogo from '../../Images/RegistrationLogo.svg'
import { Tab, Tabs, Form } from 'react-bootstrap';
import Folder from '../../Images/folder-2.svg';
import axios from 'axios';
import ArrowLogo from '../../Images/arrow-left.svg';
import LoanImage from '../../Images/loan bg.svg';
import Grant from '../../Images/AgMobileimg.svg';
import MainDashoard from '../Main Dashboard/MainDashoard';
import { Link, useNavigate } from 'react-router-dom'

export default function Loans() {
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
                                <img src={LoanImage} className={`${classes.loanBg} ${classes.webshow}`} alt='loan-image' />
                                <img src={Grant} className={`${classes.loanBg} ${classes.mobileshow}`} alt='loan-image' />
                            </div>
                            <div className={classes.eligibilityText}>
                                <p className={classes.userdetails}>Eligibility Criteria</p>
                                <div className={classes.lineBottom} />
                                <div className={classes.eligibilityCriteria}>
                                    <div className={classes.bulletList}>
                                        <p>Business must:</p>
                                        <p>• be located in Ogun State;</p>
                                        <p>• be in operation for a minimum of 3years;</p>
                                        <p>• Employ a minimum of 3;</p>
                                        <p>• be owned by someone between the ages of 21- 60 years;</p>
                                        <p>• be in retail, service and manufacturing sector</p>
                                    </div>
                                </div>
                            </div>
                            <div className={classes.eligibilityText}>
                                <p className={classes.userdetails}>Requirement</p>
                                <div className={classes.lineBottom} />
                                <div className={classes.eligibilityCriteria}>
                                    <div className={classes.bulletList}>
                                        <p>Applicant must provide:</p>
                                        <p>• CAC certificate of business registration;</p>
                                        <p>• State business premises permit/LG trade permit</p>
                                        <p>• Evidence of annual turnover for 2years;</p>
                                        <p>• 2 years Bank statement</p>
                                        <p>• Ogun State tax clearance/OGRIS Tax Identification number for the business owner</p>
                                        <p>• Bank verification number(BVN)</p>
                                    </div>
                                </div>
                            </div>
                            <div className={classes.applyLoan} onClick={handleLoanApplication}>
                                <p className={classes.continueReg}>Apply for Loan</p>
                            </div>

                                        
                        </div>
                    </div>
                </div>

            </div>
    )
}
