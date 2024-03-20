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
    const [bearer, setBearer] = useState('');
    const [user, setUser] = useState('');
    const [userProfile, setUserProfile] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

const navigate = useNavigate();

const handleLoan = () => {
    navigate('/loan_onboarding');
}

const handleGrant = () => {
    navigate('/grant_onboarding');
}

const readData = async () => {
    try {
      const detail = await AsyncStorage.getItem('fullName');
      const details = await AsyncStorage.getItem('userToken');
      
   
      if (detail !== null) {
        setUser(detail);
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

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${bearer}`
  };


  const fetchProfile = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get('https://api-silas.ogunstate.gov.ng/api/profile', { headers });
      const results = response.data?.data;
      setUserProfile(results);
      // console.log(results);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        
        navigate('/user_login');
      } else {
      const errorStatus = error.response?.data?.message;
      console.log(errorStatus);
      setUserProfile([]);
    }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (bearer) {
        fetchProfile();

    }
  }, [bearer]);


    return (
        <div>
                    <MainDashoard/>
                    
                    <div className={classes.finishedbodyCont}>
                        <div className={`${classes.formSecCont} ${classes.shadow}`}>
                            <h3>Dashboard</h3>
                        </div>
                        <div className={`${classes.mainform} ${classes.shadow}`}>
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
                                <table>
        <tbody>
            <tr>
                <td>
                    <div className={classes.header}>First Name</div>
                    <div className={classes.body}>Awonuga</div>
                </td>
            </tr>
            <tr>
                <td>
                    <div className={classes.header}>Last Name</div>
                    <div className={classes.body}>Doe</div>
                </td>
            </tr>
            <tr>
                <td>
                    <div className={classes.header}>Date of birth</div>
                    <div className={classes.body}>30</div>
                </td>
            </tr>
            <tr>
                <td>
                    <div className={classes.header}>Email</div>
                    <div className={classes.body}>john.doe@example.com</div>
                </td>
            </tr>

            <tr>
            <td className={classes.last}>
                    <div className={classes.header}>Marital Status</div>
                    <div className={classes.body}>john.doe@example.com</div>
                </td>
            </tr>
        </tbody>
    </table>
                                    

                                </div>
                                <div className={classes.firstcard}>
                                <table>
        <tbody>
            <tr>
                <td>
                    <div className={classes.header}>Home address</div>
                    <div className={classes.body}>Awonuga</div>
                </td>
            </tr>
            <tr>
                <td>
                    <div className={classes.header}>Permanent address</div>
                    <div className={classes.body}>Doe</div>
                </td>
            </tr>
            <tr>
                <td>
                    <div className={classes.header}>Date of birth</div>
                    <div className={classes.body}>30</div>
                </td>
            </tr>
            <tr>
                <td>
                    <div className={classes.header}>Registration Type</div>
                    <div className={classes.body}>30</div>
                </td>
            </tr>
            <tr>
            <td className={classes.last}>
                    <div className={classes.header}>Local Government</div>
                    <div className={classes.body}>john.doe@example.com</div>
                </td>
            </tr>

            
        </tbody>
    </table>

                                </div>
                                <div className={classes.firstcard}>
                                    <table>
        <tbody>
            <tr>
                <td>
                    <div className={classes.infouser2}>Next of Kin details</div>
                </td>
            </tr>
            <tr>
                <td>
                    <div className={classes.header}>Full Name</div>
                    <div className={classes.body}>Doe</div>
                </td>
            </tr>
            <tr>
                <td>
                    <div className={classes.header}>Phone Number</div>
                    <div className={classes.body}>30</div>
                </td>
            </tr>
            <tr>
                <td>
                    <div className={classes.header}>Email Address</div>
                    <div className={classes.body}>john.doe@example.com</div>
                </td>
            </tr>

            <tr>
                <td>
                    <div className={classes.header}>Relationship</div>
                    <div className={classes.body}>john.doe@example.com</div>
                </td>
            </tr>
        </tbody>
    </table>

                                    
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
                            </div>

                            <div className={classes.thedetails}>
                            <div className={classes.detailscards}>
                                <div className={classes.firstcard}>
                                <table>
        <tbody>
            <tr>
                <td>
                    <div className={classes.header}>Business Name</div>
                    <div className={classes.body}>Awonuga</div>
                </td>
            </tr>
            <tr>
                <td>
                    <div className={classes.header}>Business Email Address</div>
                    <div className={classes.body}>Doe</div>
                </td>
            </tr>
            <tr>
                <td>
                    <div className={classes.header}>Business Phone Number</div>
                    <div className={classes.body}>30</div>
                </td>
            </tr>
            <tr>
                <td>
                    <div className={classes.header}>Date of Commencement</div>
                    <div className={classes.body}>john.doe@example.com</div>
                </td>
            </tr>

            <tr>
            <td className={classes.last}>
                    <div className={classes.header}>Sector of Business</div>
                    <div className={classes.body}>john.doe@example.com</div>
                </td>
            </tr>
        </tbody>
    </table>
                                    

                                </div>
                                <div className={classes.firstcard}>
                                <table>
        <tbody>
            <tr>
                <td>
                    <div className={classes.header}>Business address</div>
                    <div className={classes.body}>Awonuga</div>
                </td>
            </tr>
            <tr>
                <td>
                    <div className={classes.header}>No of Employees</div>
                    <div className={classes.body}>Doe</div>
                </td>
            </tr>
            <tr>
                <td>
                    <div className={classes.header}>Ogun Tax ID Number</div>
                    <div className={classes.body}>30</div>
                </td>
            </tr>
           

            
        </tbody>
    </table>

                                </div>
                                <div className={classes.firstcard}>
                                    <table>
        <tbody>
            <tr>
                <td>
                    <div className={classes.infouser2}>Bank Details</div>
                </td>
            </tr>
            <tr>
                <td>
                    <div className={classes.header}>Account Name</div>
                    <div className={classes.body}>Doe</div>
                </td>
            </tr>
            <tr>
                <td>
                    <div className={classes.header}>Account Number</div>
                    <div className={classes.body}>30</div>
                </td>
            </tr>
            <tr>
                <td>
                    <div className={classes.header}>Bank</div>
                    <div className={classes.body}>john.doe@example.com</div>
                </td>
            </tr>

            <tr>
                <td>
                    <div className={classes.header}>BVN</div>
                    <div className={classes.body}>john.doe@example.com</div>
                </td>
            </tr>
        </tbody>
    </table>

                                </div>
                            </div>
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