import React, { useState, useEffect,} from 'react';
import classes from '../../Web pages/Success Reports/Success.module.css';
import RegLogo from '../../Images/RegistrationLogo.svg'
import { Tab, Tabs, Form } from 'react-bootstrap';
import Folder from '../../Images/folder-2.svg';
import axios from 'axios';
import ArrowLogo from '../../Images/arrow-left.svg';
import LoanImage from '../../Images/loan bg.svg';
import MainDashoard from '../Main Dashboard/MainDashoard';
import SuccessImg from '../../Images/loanSuccessImg.svg'
import { Link, useNavigate } from 'react-router-dom'

export default function Success() {
    const navigate = useNavigate();

    const handleLoanApplication = () => {
        navigate('/dashboard');
    };


    return (
        <div>
        <MainDashoard />

        <div className={classes.finishedbodyCont}>
            <div className={`${classes.formSecCont} ${classes.shadow}`}>
                <h3>Dashboard</h3>
            </div>
                    <div className={classes.mainform}>
                        <div className={classes.signin}>
                        <div className={classes.applycntnt}>
                            <div className={classes.imgapply}>
                                <img src={SuccessImg} alt='img' />
                            </div>

                            <div>
                                <p className={classes.applygrnttxt}>Your application is being reviewed</p>
                                <p className={classes.grntapplytxt}>Your application is being reviewed</p>
                            </div>
                            <div className={classes.applyLoan} onClick={handleLoanApplication}>
                                <p className={classes.continueReg}>Back to dashboard</p>
                            </div>
                        </div>
                            
                    </div>
                    </div>
                    </div>
                

            </div>
    )
}
