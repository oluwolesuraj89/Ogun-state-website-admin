import React, { useState, useEffect } from 'react';
import classes from './GrantOnboarding.module.css';
import RegLogo from '../../Images/RegistrationLogo.svg'
import { Tab, Tabs, Form } from 'react-bootstrap';
import Folder from '../../Images/folder-2.svg';
import axios from 'axios';
import ArrowLogo from '../../Images/arrow-left.svg';
import LoanImage from '../../Images/loan bg.svg';
import MainDashoard from '../Main Dashboard/MainDashoard';
import Ready from '../../Images/undraw_no_data_re_kwbl 1.png'
import { Link, useNavigate } from 'react-router-dom'

export default function GrantOnboarding() {
    const navigate = useNavigate();

    const handleLoanApplication = () => {
        navigate('/grant');
    };


    return (
        <div>
        <MainDashoard />

        <div className={classes.finishedbodyCont}>
            <div className={`${classes.formSecCont} ${classes.shadow}`}>
                <h3>Grant</h3>
            </div>
                    <div className={classes.mainform}>
                        <div className={classes.signin}>
                        <div className={classes.applycntnt}>
                            <div className={classes.imgapply}>
                                <img src={Ready} alt='img' />
                            </div>

                            <div>
                                <p className={classes.applygrnttxt}>You are yet to apply for a Grant </p>
                                <p className={classes.grntapplytxt}>Apply for a grant from your dashboard to see the status of your grant here </p>
                            </div>
                            <div className={classes.applyLoan} onClick={handleLoanApplication}>
                                        <p className={classes.continueReg}>Apply for Grant</p>
                                    </div>
                        </div>
                            
                    </div>
                    </div>
                    </div>
                

            </div>
    )
}
