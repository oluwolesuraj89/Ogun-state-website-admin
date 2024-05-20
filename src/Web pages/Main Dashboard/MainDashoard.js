import React, { useState, useEffect } from 'react';
import classes from '../../Web pages/Main Dashboard/MinDashboard.module.css';
import RegLogo from '../../Images/RegistrationLogo.svg'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Tab, Tabs, Form, Spinner } from 'react-bootstrap';
import Folder from '../../Images/folder-2.svg';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import SuccessImg from '../../Images/completed.svg';
import messageIcon from '../../Images/Dashbord-menu-icons/message-text.svg';
import Invoice from '../../Images/Dashbord-menu-icons/invoice.svg';
import LogOutIcon from '../../Images/Dashbord-menu-icons/logout.svg';
import DashImg from '../../Images/DI-mobile1.svg';
import Msg1 from '../../Images/DI-mobile2.svg';
import Inv from '../../Images/DI-mobile3.svg';
import LgOut from '../../Images/DI-mobile4.svg';
import DashboardLogo from '../../Images/dashboardLogo.svg';
import UserLogo from '../../Images/user-edit.svg';
import Swal from 'sweetalert2';
import { useRegistration } from '../RegistrationContext';


export default function MainDashoard() {
    const location = useLocation();
    const navigate = useNavigate();
    const [bearer, setBearer] = useState('');
    const [user, setUser] = useState('');
    const [activeLink, setActiveLink] = useState(null);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { isReg, retrieveRegStatus } = useRegistration();


    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Toggle the menu open/close state
    };

    const closeMenu = () => {
        setIsMenuOpen(false); // Close the menu
    };
    // const [isReg, setIsReg] = useState(false);


    useEffect(() => {
        const pathname = location.pathname;
        if (pathname.includes('dashboard')) {
            setActiveLink('Dashboard');
        } else if (pathname.includes('loan')) {
            setActiveLink('Loan');
        } else if (pathname.includes('complete_registration')) {
            setActiveLink('Update Profile');
        } else if (pathname.includes('my_profile')) {
            setActiveLink('My Profile');
        } else if (pathname.includes('grant')) {
            setActiveLink('Grants');
        } else if (pathname.includes('invoice')) {
            setActiveLink('Invoices');
        } else if (pathname === '/sign_in') {
            setActiveLink('Logout');
        } else {
            setActiveLink(null);
        }
    }, [location]);

    const readData = async () => {
        try {
            const detail = await AsyncStorage.getItem('fullName');
            const details = await AsyncStorage.getItem('userToken');


            if (detail !== null) {
                const firstName = detail.split(' ')[0];
                setUser(firstName);
            }


            if (details !== null) {
                setBearer(details);
            }
        } catch (e) {
            alert('Failed to fetch the input from storage');
        }
    };

    useEffect(() => {
        readData();
    }, []);


    // useEffect(() => {
    //     const retrieveRegStatus = async () => {
    //       try {
    //         const regStatus = await AsyncStorage.getItem('isComplete');
    //           setIsReg(regStatus === 'true');



    //       } catch (error) {
    //         console.error('Error retrieving admin status:', error);
    //       }
    //     };

    //     retrieveRegStatus();
    //   }, []);


    const handleLogout = async () => {
        setLoading(true);
        try {
            const response = await axios.post(
                'https://api-smesupport.ogunstate.gov.ng/api/logout',
                {},
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${bearer}`
                    }
                }
            );
            navigate('/sign_in');


        } catch (error) {
            let errorMessage = 'An error occurred. Please try again.';
            if (error.response && error.response.data && error.response.data.message) {
                if (typeof error.response.data.message === 'string') {
                    errorMessage = error.response.data.message;
                } else if (Array.isArray(error.response.data.message)) {
                    errorMessage = error.response.data.message.join('; ');
                } else if (typeof error.response.data.message === 'object') {
                    errorMessage = JSON.stringify(error.response.data.message);
                }
                if (errorMessage.toLowerCase().includes('unauthenticated') || errorMessage.toLowerCase().includes('unauthorized')) {
                    navigate('/sign_in');
                    return;
                }
            }
            setErrorMessage(errorMessage);
        } finally {
            setLoading(false);
        }
    };



    return (
        <div className={classes.sideNavBody}>
            <div className={classes.sideNav}>
                <div className={classes.logoCont}>
                    <img src={RegLogo} alt='Logo' className={`${classes.img} ${classes.webshow}`} />
                    <img src={DashboardLogo} alt='Logo' className={`${classes.img} ${classes.mobileshow}`} />
                </div>
                {/* {`${classes.mainMenu} ${isMenuOpen ? classes.menuOpen : ''}`} */}

                <div className={`${classes.regMenu} ${isMenuOpen ? '' : classes.menuOpen}`}>
               
                    <Link
                        to={'/dashboard'}
                        className={activeLink === 'Dashboard' ? classes.active : ''}
                    >
                        <p>
                            <img src={messageIcon} alt='icon' className={classes.webshow} />
                            <img src={DashImg} alt='icon' className={classes.mobileshow} />
                            Dashboard</p>
                    </Link>
                    <Link
                        to={'/news_editor'}
                        className={activeLink === 'NewsEditor' ? classes.active : ''}
                    >
                        <p> <img src={messageIcon} alt='icon' /> News Editor </p>
                    </Link>
                    <Link
                        to={'/my_profile'}
                        className={activeLink === 'My Profile' ? classes.active : ''}
                    >
                        <p> <img src={UserLogo} alt='icon' /> Profile</p>
                    </Link>

                    {/* <Link
                        to={'/loan'}
                        className={activeLink === 'Loan' ? classes.active : ''}
                    >
                        <p><img src={messageIcon} alt='icon' /> Loans</p>
                    </Link>
                    <Link
                        to={'/grants'}
                        className={activeLink === 'Grants' ? classes.active : ''}
                    >
                        <p> <img src={messageIcon} alt='icon' /> Grants</p>
                    </Link>
                    <Link
                        to={'/invoice_onboard'}
                        className={activeLink === 'Invoices' ? classes.active : ''}
                    >
                        <p> <img src={Invoice} alt='icon' /> Invoices</p>
                    </Link>
 */}

                    {/* <Link
                        onClick={handleLogout}
                        // to={'/sign_in'}
                        className={activeLink === 'Logout' ? classes.active : ''}
                    >
                        <p>
                            <img src={LogOutIcon} alt='icon' />{' '}
                            {loading ? (
                                <>
                                    <Spinner size='sm' style={{ marginRight: 5 }} /> Signing out...
                                </>
                            ) : (
                                'Log out'
                            )}
                        </p>
                    </Link> */}
                </div>
                <div className={classes.harmborgers} onClick={toggleMenu}>
                {isMenuOpen ? (
                  <span className={classes.closs}>
                    <i className='bx bx-x'></i>
                  </span>
                ) : (
                  <span className={classes.open}>
                    <i className='bx bx-menu'></i>
                  </span>
                )}
              </div>
            </div>
            <div className={classes.formSection}>
                <div className={classes.formSectionHeader}>
                    <h1>News Editor</h1>
                    {/* <p>Apply for grants or loans from the Ogun State Government</p> */}
                </div>
                <div className={classes.formSectionHeader}>
                    <p>Welcome </p>
                    <h1>{user}</h1>
                </div>
            </div>
        </div>
        // </div>
    )
}
