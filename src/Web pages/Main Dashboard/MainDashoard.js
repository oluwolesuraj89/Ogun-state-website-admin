import React, { useState, useEffect } from 'react';
import classes from '../../Web pages/Main Dashboard/MinDashboard.module.css';
import RegLogo from '../../Images/RegistrationLogo.svg'
import { Link } from 'react-router-dom'
import { Tab, Tabs, Form } from 'react-bootstrap';
import Folder from '../../Images/folder-2.svg';
import axios from 'axios';
import SuccessImg from '../../Images/completed.svg';
import messageIcon from '../../Images/Dashbord-menu-icons/message-text.svg';
import Invoice from '../../Images/Dashbord-menu-icons/invoice.svg';
import LogOutIcon from '../../Images/Dashbord-menu-icons/logout.svg';


export default function MainDashoard() {
    const [activeLink, setActiveLink] = useState(null);

    const handleLinkClick = (linkName) => {
        setActiveLink(linkName);
    };

  return (
    <div className={classes.sideNavBody}>
            {/* <div className={classes.regContainer}> */}
                <div className={classes.sideNav}>
                    <div className={classes.logoCont}>
                        <img src={RegLogo} alt='Logo' />
                    </div>
                    <div className={classes.regMenu}>
                    <Link
                        to={'/dashboard'}
                        onClick={() => handleLinkClick('Dashboard')}
                        className={activeLink === 'Dashboard' ? classes.active : ''}
                    >
                        <p><img src={messageIcon} alt='icon'/>Dashboard</p>
                    </Link>
                    <Link
                        to={'/loans'}
                        onClick={() => handleLinkClick('Loan')}
                        className={activeLink === 'Loan' ? classes.active : ''}
                    >
                        <p><img src={messageIcon} alt='icon'/> Loans</p>
                    </Link>
                    <Link
                        to={'/grant'}
                        onClick={() => handleLinkClick('Grants')}
                        className={activeLink === 'Grants' ? classes.active : ''}
                    >
                        <p> <img src={messageIcon} alt='icon'/> Grants</p>
                    </Link>
                    <Link
                        to=''
                        onClick={() => handleLinkClick('Invoices')}
                        className={activeLink === 'Invoices' ? classes.active : ''}
                    >
                        <p> <img src={Invoice} alt='icon'/> Invoices</p>
                    </Link>
                    <Link
                        to= {'/sign_in'}
                        onClick={() => handleLinkClick('Logout')}
                        className={activeLink === 'Logout' ? classes.active : ''}
                    >
                        <p><img src={LogOutIcon} alt='icon'/> Logout</p>
                    </Link>
                    </div>
                </div>
                <div className={classes.formSection}>
                    <div className={classes.formSectionHeader}>
                        <h1>Welcome Oriade</h1>
                        <p>Apply for grants or loans from the Ogun state govt</p>
                        {/* <div className={`${classes.formSecCont} ${classes.shadow}`}>
                            <h3>Complete Registration</h3>
                        </div> */}
                    </div>
                </div>
            </div>
        // </div>
    )
}
