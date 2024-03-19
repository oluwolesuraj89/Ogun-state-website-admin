import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import OnbImg from '../../Images/image bg.png';
import classes from './Dashboard.module.css';
import loanicon from '../../Images/moneys.png'
import loaniconblue from '../../Images/moneysblue.png'
import loanicongreen from '../../Images/receipt-2.png'
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button } from 'react-bootstrap';
import RegLogo from '../../Images/RegistrationLogo.svg'
import { Link } from 'react-router-dom'
import MainDashoard from '../Main Dashboard/MainDashoard';

const Dashboard = () => {
const navigate = useNavigate();

const handleLoan = () => {
    navigate('/loans');
}

const handleGrant = () => {
    navigate('/grant');
}


    return (
        <div>
                    <MainDashoard/>
                    
                    <div className={classes.finishedbodyCont}>
                        <div className={`${classes.formSecCont} ${classes.shadow}`}>
                            <h3>Dashboard</h3>
                        </div>
                        <div className={classes.mainform}>
                        <div className={classes.loandgrantcards}>
                            <div className={classes.loancard} onClick={handleLoan}>
                                <img src={loanicon} alt="The marketers" className={classes.icons} />
                                <p className={classes.applyText}>Apply</p>
                                <p className={classes.applyText}>For Loan</p>
                                <p className={classes.pdisc}>Get up to N500,000 with zero
                                    Interest</p>
                            </div>

                            <div className={classes.loancardblue} onClick={handleGrant}>
                                <img src={loaniconblue} alt="The marketers" className={classes.icons} />
                                <p className={classes.applyText}>Apply</p>
                                <p className={classes.applyText}>For Grant</p>
                                <p className={classes.pdisc}>Get up to N100,000 for your
                                    Business</p>
                            </div>
                            <div className={classes.loancardgreen}>
                                <img src={loanicongreen} alt="The marketers" className={classes.icons} />
                                <p className={classes.applyText}>Pending</p>
                                <p className={classes.applyText}>Payment</p>
                                <p className={classes.pdisc}>You have a pending payment of
                                    N50,000 to be made before the
                                    12th of May, 2024</p>
                            </div>
                        </div>

                        <div className={classes.phr}>
                            <p className={classes.userdetails}>Personal details</p>
                            <div className={classes.lineBottom} />
                        </div>

                        <div className={classes.thedetails}>
                            <div className={classes.detailscards}>
                                <div className={classes.firstcard}>
                                    <p className={classes.labelinfo}>First name</p>
                                    <p className={classes.infouser}>Emmanuel</p>

                                    <p className={classes.labelinfo2}>Last name</p>
                                    <p className={classes.infouser}>Oriade</p>

                                    <p className={classes.labelinfo3}>Other name</p>
                                    <p className={classes.infouser}>Olaoluwa</p>

                                    <p className={classes.labelinfo3}>Date of birth</p>
                                    <p className={classes.infouser}>15th January 1990</p>

                                    <p className={classes.labelinfo4}>Marital status</p>
                                    <p className={classes.infouser4}>Married</p>

                                </div>
                                <div className={classes.firstcard}>
                                    <p className={classes.labelinfo}>Home address</p>
                                    <p className={classes.infouser}>No 54, adura road, Oke-lantoro,
                                        Abeokuta, Ogun state</p>

                                    <p className={classes.labelinfo2}>Permanent address</p>
                                    <p className={classes.infouser}>No 54, adura road, Oke-lantoro,
                                        Abeokuta, Ogun state</p>

                                    <p className={classes.labelinfo3}>State of Origin</p>
                                    <p className={classes.infouser}>Ogun state</p>

                                    {/* <p className={classes.labelinfo3}>Local govt</p>
                                <p className={classes.infouser3}>Abeokuta North</p> */}

                                </div>
                                <div className={classes.firstcard}>
                                    <p className={classes.infouser2}>Next of Kin details</p>

                                    <p className={classes.labelinfo2}>Full name</p>
                                    <p className={classes.infouser}>Moremi Oriade</p>

                                    <p className={classes.labelinfo3}>Phone number</p>
                                    <p className={classes.infouser}>08102345678</p>

                                    <p className={classes.labelinfo3}>Email address</p>
                                    <p className={classes.infouser}>moremi@gmail.com</p>

                                    <p className={classes.labelinfo4}>Relationship</p>
                                    <p className={classes.infouser4}>Sibling</p>

                                </div>
                                <div className={classes.firstcard}>
                                    <p className={classes.labelinfo}>Address of Next of kin</p>
                                    <p className={classes.infouser}>No 54, adura road, Oke-lantoro,
                                        Abeokuta, Ogun state</p>
                                </div>
                            </div>
                        </div>
                        {/* Business details comes after this div */}

                        <div className={classes.wholebizdetails}>
                            <div className={classes.headfordetails}>
                                <div className={classes.phr}>
                                    <p className={classes.userdetails}>Business details</p>
                                    <div className={classes.lineBottom} />
                                </div>

                                {/* <div className={classes.phr}>
                                    <p className={classes.userdetailsbnk}>Bank details</p>
                                    <div className={classes.lineBottombnk} />
                                </div> */}
                            </div>
                            <div className={classes.busnisessdetails}>
                                <div className={classes.thedetailsbiz}>
                                    <div className={classes.detailscardsbiz}>
                                        <div className={classes.firstcardbiz}>
                                            <p className={classes.labelinfobiz}>First name</p>
                                            <p className={classes.infouserbiz}>Emmanuel</p>

                                            <p className={classes.labelinfo2biz}>Last name</p>
                                            <p className={classes.infouserbiz}>Oriade</p>

                                            <p className={classes.labelinfo3biz}>Other name</p>
                                            <p className={classes.infouserbiz}>Olaoluwa</p>

                                            <p className={classes.labelinfo3biz}>Date of birth</p>
                                            <p className={classes.infouserbiz}>15th January 1990</p>

                                            <p className={classes.labelinfo4biz}>Marital status</p>
                                            <p className={classes.infouser4biz}>Married</p>

                                        </div>


                                        <div className={classes.firstcardbiz}>
                                            <p className={classes.labelinfobiz}>Address of Next of kin</p>
                                            <p className={classes.infouserbiz}>No 54, adura road, Oke-lantoro,
                                                Abeokuta, Ogun state</p>
                                        </div>
                                    </div>
                                </div>


                                {/* <div className={classes.thedetailsbiz2}>
                                    <div className={classes.detailscardsbiz2}>
                                        <div className={classes.firstcardbiz}>
                                            <p className={classes.labelinfobiz}>First name</p>
                                            <p className={classes.infouserbiz}>Emmanuel</p>

                                            <p className={classes.labelinfo2biz}>Last name</p>
                                            <p className={classes.infouserbiz}>Oriade</p>

                                            <p className={classes.labelinfo3biz}>Other name</p>
                                            <p className={classes.infouserbiz}>Olaoluwa</p>

                                            <p className={classes.labelinfo3biz}>Date of birth</p>
                                            <p className={classes.infouserbiz}>15th January 1990</p>

                                            <p className={classes.labelinfo4biz}>Marital status</p>
                                            <p className={classes.infouser4biz}>Married</p>

                                        </div>

                                    </div>
                                </div> */}
                                </div>
                                </div>
                                </div>
                    </div>
                {/* </div> */}
            {/* </div> */}
        </div>

    );
}

export default Dashboard;