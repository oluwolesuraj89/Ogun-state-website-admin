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
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [regType, setRegType] = useState('');
    const [accountNumber, setAccountNumber] = useState('');
    const [accountName, setAccountName] = useState('');
    const [accountBVN, setAccountBVN] = useState('');
    const [businessAddress, setBusinessAddress] = useState('');
    const [businessName, setBusinessName] = useState('');
    const [businessPhone, setBusinessPhone] = useState('');
    const [businessEmail, setBusinessEmail] = useState('');
    const [businessTax, setBusinessTax] = useState('');
    const [businessEmployess, setBusinessEmployess] = useState('');
    const [businessRc, setBusinessRc] = useState('');
    const [lastName, setLastName] = useState('');
    const [nin, setNin] = useState('');
    const [nokName, setNokName] = useState('');
    const [nokPhone, setNokPhone] = useState('');
    const [nokAddress, setNokAddress] = useState('');
    const [nokEmail, setNokEmail] = useState('');
    const [otherName, setOtherName] = useState('');
    const [businessPermit, setBusinessPermit] = useState('');
    const [cacNo, setCacNo] = useState('');
    const [turnover, setTurnover] = useState('');
    const [dateOfBirth, setDateofBirth] = useState('');
    const [homeAddress, setHomeAddress] = useState('');
    const [permanentAddress, setPermanentAddress] = useState('');
    const [selectedBank, setSelectedBank] = useState('');
    const [selectedStatus, setSelectedStatus] = useState('');
    const [selectedState, setSelectedState] = useState('');
    const [selectedLocalGovt, setSelectedLocalGovt] = useState('');
    const [selectedNokRelationship, setSelectedNokRelationship] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedSector, setSelectedSector] = useState('');
    const [user, setUser] = useState('');
    const [isReg, setIsReg] = useState(false);
    const [userProfile, setUserProfile] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

const navigate = useNavigate();

const handleLoan = () => {
    navigate('/loan_onboarding');
}

const handleGrant = () => {
    navigate('/grant_onboarding');
}


useEffect(() => {
    const retrieveRegStatus = async () => {
      try {
        const regStatus = await AsyncStorage.getItem('isComplete');
          setIsReg(regStatus === 'true');
        
  
        
      } catch (error) {
        console.error('Error retrieving admin status:', error);
      }
    };

    retrieveRegStatus();
  }, []);

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
      const response = await axios.get('https://api-smesupport.ogunstate.gov.ng/api/profile', { headers });
      const results = response.data?.data;
      const fName = response.data?.data?.name;
      const dob = response.data?.data?.dob;
      const result = fName.split(' ')[0];
      const lName = response.data?.data?.name.split(' ')[1];
      const em = response.data?.data?.email;
      const st = response.data?.data?.marital_status;
      const ad = response.data?.data?.home_address;
      const pd = response.data?.data?.permanent_address;
      const rg = response.data?.data?.reg_type;
      const lg = response.data?.data?.local_govt;
      const nok = response.data?.data?.next_of_kin_name;
      const nok1 = response.data?.data?.next_of_kin_relationship;
      const nok4 = response.data?.data?.next_of_kin_email;
      const nok2 = response.data?.data?.next_of_kin_address;
      const nok3 = response.data?.data?.next_of_kin_phone_number;
      const bsnName = response.data?.data?.company_name;
      const bsnAdd = response.data?.data?.business_address;
      const se = response.data?.data?.sector;
      const stin = response.data?.data?.stin;
      const ac = response.data?.data?.account_name;
      const acn = response.data?.data?.account_number;
      const bn = response.data?.data?.bank_name;
      const bv = response.data?.data?.bvn;
      setFirstName(result);
      setLastName(lName);
      setDateofBirth(dob);
      setEmail(em);
      setAccountName(ac);
      setAccountNumber(acn);
      setSelectedBank(bn);
      setAccountBVN(bv);
      setUserProfile(results);
      setSelectedStatus(st);
      setHomeAddress(ad);
      setPermanentAddress(pd);
      setRegType(rg);
      setSelectedLocalGovt(lg);
      setNokName(nok);
      setNokEmail(nok4);
      setSelectedNokRelationship(nok1);
      setNokAddress(nok2);
      setNokPhone(nok3);
      setBusinessName(bsnName);
      businessAddress(bsnAdd);
      setSelectedSector(se);
      setBusinessTax(stin);



      // console.log(results);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        
        navigate('/sign_in');
      } else {
      const errorStatus = error.response?.data?.message;
     
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
                        <div className={`${classes.formSecCont}`}>
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
                    <div className={classes.body}>{firstName.length > 25 ? `${firstName.substring(0, 25)}...` : firstName}</div>
                </td>
            </tr>
            <tr>
                <td>
                    <div className={classes.header}>Last Name</div>
                    <div className={classes.body}>{lastName.length > 25 ? `${lastName.substring(0, 25)}...` : lastName}</div>
                </td>
            </tr>
            <tr>
                <td>
                    <div className={classes.header}>Date of birth</div>
                    <div className={classes.body}>{dateOfBirth ? (dateOfBirth.length > 25 ? `${dateOfBirth.substring(0, 25)}...` : dateOfBirth) : ''}</div>

                </td>
            </tr>
            <tr>
                <td>
                    <div className={classes.header}>Email</div>
                    <div className={classes.body}>{email ? (email.length > 25 ? `${email.substring(0, 25)}...` : email) : ''}</div>
                </td>
            </tr>

            <tr>
            <td className={classes.last}>
                    <div className={classes.header}>Marital Status</div>
                    <div className={classes.body}>{selectedStatus ? (selectedStatus.length > 25 ? `${selectedStatus.substring(0, 25)}...` : selectedStatus) : ''}</div>
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
                    <div className={classes.body}>{homeAddress ? (homeAddress.length > 25 ? `${homeAddress.substring(0, 25)}...` : homeAddress) : ''}</div>
                </td>
            </tr>
            <tr>
                <td>
                    <div className={classes.header}>Permanent address</div>
                    <div className={classes.body}>{permanentAddress ? (permanentAddress.length > 25 ? `${permanentAddress.substring(0, 25)}...` : permanentAddress) : ''}</div>
                </td>
            </tr>
           
            <tr>
                <td>
                    <div className={classes.header}>Registration Type</div>
                    <div className={classes.body}>{regType ? (regType.length > 25 ? `${regType.substring(0, 25)}...` : regType) : ''}</div>
                </td>
            </tr>
            {/* <tr>
            <td className={classes.last}>
                    <div className={classes.header}>Local Government</div>
                    <div className={classes.body}>{selectedLocalGovt ? (selectedLocalGovt.length > 25 ? `${selectedLocalGovt.substring(0, 25)}...` : selectedLocalGovt) : ''}</div>
                </td>
            </tr> */}

            
        </tbody>
    </table>

                                </div>
                                <div className={classes.firstcard}>
                                    <table>
        <tbody>
            <tr>
                <td>
                    <div className={classes.infouser2}>Guarantor's details</div>
                </td>
            </tr>
            <tr>
                <td>
                    <div className={classes.header}>Full Name</div>
                    <div className={classes.body}>{nokName ? (nokName.length > 25 ? `${nokName.substring(0, 25)}...` : nokName) : ''}</div>
                </td>
            </tr>
            <tr>
                <td>
                    <div className={classes.header}>Phone Number</div>
                    <div className={classes.body}>{nokPhone ? (nokPhone.length > 25 ? `${nokPhone.substring(0, 25)}...` : nokPhone) : ''}</div>
                </td>
            </tr>
            <tr>
                <td>
                    <div className={classes.header}>Address</div>
                    <div className={classes.body}>{nokAddress ? (nokAddress.length > 25 ? `${nokAddress.substring(0, 25)}...` : nokAddress) : ''}</div>
                </td>
            </tr>
            <tr>
            <td className={classes.last}>
                    <div className={classes.header}>Email Address</div>
                    <div className={classes.body}>{nokEmail ? (nokEmail.length > 25 ? `${nokEmail.substring(0, 25)}...` : nokEmail) : ''}</div>
                </td>
            </tr>

            {/* <tr>
                <td>
                    <div className={classes.header}>Relationship</div>
                    <div className={classes.body}>{selectedNokRelationship ? (selectedNokRelationship.length > 25 ? `${selectedNokRelationship.substring(0, 25)}...` : selectedNokRelationship) : ''}</div>
                </td>
            </tr> */}
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
                    <div className={classes.body}>{businessName ? (businessName.length > 25 ? `${businessName.substring(0, 25)}...` : businessName) : ''}</div>
                </td>
            </tr>
            <tr>
                <td>
                    <div className={classes.header}>Business Email Address</div>
                    {/* <div className={classes.body}>Doe</div> */}
                </td>
            </tr>
            <tr>
                <td>
                    <div className={classes.header}>Business Phone Number</div>
                    {/* <div className={classes.body}>30</div> */}
                </td>
            </tr>
            <tr>
                <td>
                    <div className={classes.header}>Date of Commencement</div>
                    {/* <div className={classes.body}>john.doe@example.com</div> */}
                </td>
            </tr>

            <tr>
            <td className={classes.last}>
                    <div className={classes.header}>Sector of Business</div>
                    <div className={classes.body}>{selectedSector ? (selectedSector.length > 25 ? `${selectedSector.substring(0, 25)}...` : selectedSector) : ''}</div>
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
                    <div className={classes.body}>{businessAddress ? (businessAddress.length > 25 ? `${businessAddress.substring(0, 25)}...` : businessAddress) : ''}</div>
                </td>
            </tr>
            <tr>
                <td>
                    <div className={classes.header}>No of Employees</div>
                    {/* <div className={classes.body}>Doe</div> */}
                </td>
            </tr>
            <tr>
                <td>
                    <div className={classes.header}>Ogun Tax ID Number</div>
                    <div className={classes.body}>{businessTax ? (businessTax.length > 25 ? `${businessTax.substring(0, 25)}...` : businessTax) : ''}</div>
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
                    <div className={classes.body}>{accountName ? (accountName.length > 25 ? `${accountName.substring(0, 25)}...` : accountName) : ''}</div>
                </td>
            </tr>
            <tr>
                <td>
                    <div className={classes.header}>Account Number</div>
                    <div className={classes.body}>{accountNumber ? (accountNumber.length > 25 ? `${accountNumber.substring(0, 25)}...` : accountNumber) : ''}</div>
                </td>
            </tr>
            <tr>
                <td>
                    <div className={classes.header}>Bank</div>
                    <div className={classes.body}>{selectedBank ? (selectedBank.length > 25 ? `${selectedBank.substring(0, 25)}...` : selectedBank) : ''}</div>
                </td>
            </tr>

            <tr>
                <td>
                    <div className={classes.header}>BVN</div>
                    <div className={classes.body}>{accountBVN ? (accountBVN.length > 25 ? `${accountBVN.substring(0, 25)}...` : accountBVN) : ''}</div>
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