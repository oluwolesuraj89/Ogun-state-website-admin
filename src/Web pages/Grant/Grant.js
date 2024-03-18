import React, { useState, useEffect } from 'react';
import classes from './Grant.module.css';
import RegLogo from '../../Images/RegistrationLogo.svg'
import { Link, useNavigate } from 'react-router-dom'
import { Tab, Tabs, Form } from 'react-bootstrap';
import Folder from '../../Images/folder-2.svg';
import axios from 'axios';
import ArrowLogo from '../../Images/arrow-left.svg';
import GrantImage from '../../Images/grant bg.svg';
import MainDashoard from '../Main Dashboard/MainDashoard';

export default function Grant() {
const navigate = useNavigate();

const handleNext = () => {
    navigate('/grant_application');
}

    return (
        <div className={classes.regBody}>
                    <MainDashoard/>
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
                                <p className={classes.userdetails}>Eligibility Criteria</p>
                                <div className={classes.lineBottom} />
                                <div className={classes.eligibilityCriteria}>
                                    <div className={classes.bulletList}>
                                        <p>Business must:</p>
                                        <p>• be located in Ogun State;</p>
                                        <p>• be in operation for a minimum of 1year;</p>
                                        <p>• Employ a minimum of 1-3;</p>
                                        <p>• be owned by someone between the ages of 18- 60 years;</p>
                                        <p>• Not have benefited from OG-Cares operational grant.</p>
                                    </div>
                                </div>
                            </div>
                            <div className={classes.eligibilityText}>
                                <p className={classes.userdetails}>Requirement</p>
                                <div className={classes.lineBottom} />
                                <div className={classes.eligibilityCriteria}>
                                    <div className={classes.bulletList}>
                                        <p>Applicant must provide:</p>
                                        <p>• State business premises permit/LG trade permit;</p>
                                        <p>• Bank statement of 12months;</p>
                                        <p>• Bank verification number(BVN)</p>
                                        <p>• Bank Account;</p>
                                    </div>
                                </div>
                            </div>
                            <div className={classes.applyLoan} onClick={handleNext}>
                                            <p className={classes.continueReg}>Apply for Grant</p>
                                        </div>
                        </div>
                    </div>
                {/* </div> */}

             </div>
         </div>
    )
}
