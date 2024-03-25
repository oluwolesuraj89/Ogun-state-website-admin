import React, { useState, useEffect, useRef } from 'react';
import classes from './CompleteReg.module.css';
import RegLogo from '../../Images/RegistrationLogo.svg'
import { Link, useNavigate } from 'react-router-dom'
import { Tab, Tabs, Form } from 'react-bootstrap';
import Folder from '../../Images/folder-2.svg';
import axios from 'axios';
import SuccessImg from '../../Images/completed.svg';
import messageIcon from '../../Images/Dashbord-menu-icons/message-text.svg';
import Invoice from '../../Images/Dashbord-menu-icons/invoice.svg';
import LogOutIcon from '../../Images/Dashbord-menu-icons/logout.svg';
import MainDashoard from '../Main Dashboard/MainDashoard';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DashboardFinal from '../Dashboard/Dashboard';
import Valid from '../../Images/valid.png';
import Invalid from '../../Images/invalid.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Spinner } from 'react-bootstrap';

export default function CompleteReg() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [taxLoading, setTaxLoading] = useState(false);
    const [bpLoading, setBpLoading] = useState(false);
    const [bankLoading, setBankLoading] = useState(false);
    const [firstName, setFirstName] = useState('');
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
    const [dateOfBirth, setDateofBirth] = useState(null);
    const [homeAddress, setHomeAddress] = useState('');
    const [userProfile, setUserProfile] = useState([]);
    const [permanentAddress, setPermanentAddress] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);
    const [selectedBank, setSelectedBank] = useState(null);
    const [selectedStatus, setSelectedStatus] = useState(null);
    const [selectedState, setSelectedState] = useState(null);
    const [selectedLocalGovt, setSelectedLocalGovt] = useState(null);
    const [selectedNokRelationship, setSelectedNokRelationship] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedSector, setSelectedSector] = useState(null);
    const [activeLink, setActiveLink] = useState(null);
    const [activeTab, setActiveTab] = useState('personal-details'); 
    const [localGovt, setLocalGovt] = useState([]);
    const [sectors, setSectors] = useState([]);
    const [banks, setBanks] = useState([]);
    const [permitStatus, setPermitStatus] = useState(false);
    const [rcStatus, setRcStatus] = useState(false);
    const [bankStatus, setBankStatus] = useState(false);
    const [rcLoading, setRcLoading] = useState(false);
    const [bearer, setBearer] = useState('');
    const [responseMessage, setResponseMessage] = useState('');
    const [responseMessage1, setResponseMessage1] = useState('');
    const [responseMessage2, setResponseMessage2] = useState('');
    const [responseMessage3, setResponseMessage3] = useState('');
    const [companyType, setCompanyType] = useState('');
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    const [profileLoading, setProfileLoading] = useState(false);
    const [load, setLoad] = useState(false);
const [showErrorMessage, setShowErrorMessage] = useState(false);
const [errors, setErrors] = useState(false);
const [errorMessage1, setErrorMessage1] = useState('');

    const readData = async () => {
        try {
          const details = await AsyncStorage.getItem('userToken');
          
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

      const isValidEmail = (email) => {
        // Regular expression for validating email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    

    const handleContinue = (e) => {
        e.preventDefault();
    
        let errors = {};
    
        // Validate First Name
        if (!(firstName ?? '').trim()) {
            errors.firstName = 'First Name is required';
        }
    
        // Validate Last Name
        if (!(lastName ?? '').trim()) {
            errors.lastName = 'Last Name is required';
        }
    
        // Validate Home Address
        if (!(homeAddress ?? '').trim()) {
            errors.homeAddress = 'Home Address is required';
        }
    
        // Validate Date of Birth
        if (!(dateOfBirth ?? '').trim()) {
            errors.dateOfBirth = 'Date of Birth is required';
        }
    
        // Validate Email
        if (!(email ?? '').trim()) {
            errors.email = 'Email is required';
        } else if (!isValidEmail(email)) {
            errors.email = 'Invalid Email format';
        }
    
        // Validate Phone Number
        if (!(phone ?? '').trim()) {
            errors.phone = 'Phone Number is required';
        }

        // if (!(selectedLocalGovt ?? '').trim()) {
        //     errors.selectedLocalGovt = 'Local Government is required';
        // }
    
        setErrors(errors);
    
        // If there are no errors, proceed to the next tab
        if (Object.keys(errors).length === 0) {
            switch (activeTab) {
                case 'personal-details':
                    setActiveTab('business-details');
                    break;
                case 'business-details':
                    setActiveTab('bank-details');
                    break;
                default:
                    break;
            }
        }
    };
    
    
    const handleTaxChange = (e) => {
        const value = e.target.value;
        setBusinessTax(value);
    };
    
   

    

    const handleBankChange = (event) => {
        setSelectedBank(event.target.value);
    }

    const handleSectorChange = (event) => {
        setSelectedSector(event.target.value);
    }
   
    const handleDateChange = (event) => {
        setDateofBirth(event.target.value);
    }

    const handleMaritalChange = (event) => {
        setSelectedStatus(event.target.value);
    }
    const handleLgChange = (event) => {
        setSelectedLocalGovt(event.target.value);
    }
    // const handleStateChange = (event) => {
    //     setSelectedState(event.target.value);
    // }

    const fetchLocalGovt = async () => {
        try {
          const response = await axios.get('https://api-smesupport.ogunstate.gov.ng/api/local-govt', { headers });
          const lg = response.data?.data;
          setLocalGovt(lg);
         
        } catch (error) {
          if (error.response && error.response.status === 401) {
            
            navigate('/sign_in');
          } else {
          const errorStatus = error.response?.data?.message;
          console.log(errorStatus);
          setLocalGovt([]);
        }
        } finally {
        }
      };

    const fetchSector = async () => {
        try {
          const response = await axios.get('https://api-smesupport.ogunstate.gov.ng/api/sectors', { headers });
          const sc = response.data?.data;
          setSectors(sc);
         
        } catch (error) {
          if (error.response && error.response.status === 401) {
            
            navigate('/sign_in');
          } else {
          const errorStatus = error.response?.data?.message;
          console.log(errorStatus);
          setSectors([]);
        }
        } finally {
        }
      };

    const fetchBank = async () => {
        try {
          const response = await axios.get('https://api-smesupport.ogunstate.gov.ng/api/banks', { headers });
          const bks = response.data?.data;
          setBanks(bks);
         
        } catch (error) {
          if (error.response && error.response.status === 401) {
            
            navigate('/sign_in');
          } else {
          const errorStatus = error.response?.data?.message;
          console.log(errorStatus);
          setSectors([]);
        }
        } finally {
        }
      };



    
    const validateTaxPayer = async () => {
        setTaxLoading(true);
        try {
            const response = await axios.get(`https://api.ogetax.ogunstate.gov.ng/api/validate-tax-clearance-with-stin?stin=${businessTax}`);
            const responseData = response.data;
            if (responseData.responseCode === 200) {
                setResponseMessage(responseData.message);
                // console.log(responseMessage, "true");
                // setIsButtonDisabled(false);
            }
        } catch (error) {
            if (error.response && error.response.data.responseCode === 400) {
                setResponseMessage(error.response.data.message);
                setBusinessTax('');
                // console.log(error.response.data);
                // setIsButtonDisabled(true);
            } else if (error.message === 'Network Error' || error.code === 'ECONNABORTED') {
                setResponseMessage('Network error or connection timed out');
            } else {
                console.log(error);
            }
        } finally {
            setTaxLoading(false);
        }
    };

    const validateBPP = async () => {
        setBpLoading(true);
        try {
            const response = await axios.get(`https://api.businesspermit.ogunstate.gov.ng/api/verify-permit-number?permit_id=${businessPermit}`);
            const responseData = response.data.data;
            // console.log(responseData);
            if (response.data.status === true) {
               setResponseMessage1("Valid Premise Permit");
               setBusinessAddress(responseData.address);
            }
        } catch (error) {
            if (error.response && error.response.data.status === false) {
                setResponseMessage1("Invalid Premise Permit");
                setBusinessPermit('');
                setBusinessAddress('');
            } else if (error.message === 'Network Error' || error.code === 'ECONNABORTED') {
                setResponseMessage1('Network error or connection timed out');
            } else {
                console.log(error);
            }
        } finally {
            setBpLoading(false);
        }
    };

    const validateRc = async () => {
        setRcLoading(true);
        try {
            const response = await axios.post(
                `https://api-smesupport.ogunstate.gov.ng/api/rc-number-validation?rc_number=${businessRc}`,
                {},
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${bearer}`,
                    },
                }
            );
            const responseData = response.data.data?.cac;
            if (response.data.status === true) {
                setBusinessName(responseData.companyName);
                setBusinessEmail(responseData.companyEmail);
                const date = new Date(responseData.registrationDate);
                const formattedDate = date.toISOString().split('T')[0];
                setSelectedDate(formattedDate);
                setCompanyType(responseData.classification);
                setResponseMessage2(response.data.message);
            }
        } catch (error) {
            if (error.response && error.response.data.status === false) {
                setResponseMessage2("Invalid RC Number");
                setBusinessRc('');
                setBusinessName('');
                setBusinessEmail('');
                setSelectedDate('');
                setCompanyType('');
            } else if (error.message === 'Network Error' || error.code === 'ECONNABORTED') {
                setResponseMessage2('Network error or connection timed out');
            } else {
                console.log(error);
            }
        } finally {
            setRcLoading(false);
        }
    };

    const validateBank = async () => {
        setBankLoading(true);
        try {
            const response = await axios.post(
                `https://api-smesupport.ogunstate.gov.ng/api/kyc-paystack`,
                {
                    first_name: firstName,
                    last_name: lastName,
                    account_number: accountNumber,
                    bank_id: selectedBank
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${bearer}`,
                    },
                }
            );
            const responseData = response.data.data;
            if (response.data.status === true) {
                setAccountName(responseData.accountName);
                setAccountBVN(responseData.bvn);
                setResponseMessage3(response.data.message);
            }
        } catch (error) {
            if (error.response && error.response.data.status === false) {
                setResponseMessage3("Invalid Account");
                setAccountNumber('');
                setSelectedBank([]);
                setAccountName('');
                setAccountBVN('');
            } else if (error.message === 'Network Error' || error.code === 'ECONNABORTED') {
                setResponseMessage3('Network error or connection timed out');
            } else {
                console.log(error);
            }
        } finally {
            setBankLoading(false);
        }
    };
    

    const handleBlur = async () => {
        if (!businessTax) {
            setShowErrorMessage(false);  
            return; 
        }
        setShowErrorMessage(false); 
        await validateTaxPayer();
        setShowErrorMessage(true)
    };
    
    useEffect(() => {
        if (responseMessage) {
            setShowErrorMessage(true);
        }
    }, [responseMessage]);


    const handleBlur1 = async () => {
        if (!businessPermit) {
            setPermitStatus(false); 
            return; 
        }
        setPermitStatus(false); 
        await validateBPP();
        setPermitStatus(true); 
    };

    const handleBlur2 = async () => {
        if (!businessRc) {
            setRcStatus(false); 
            return; 
        }
        setRcStatus(false); 
        await validateRc();
        setRcStatus(true); 
    };

    const handleBlur3 = async () => {
        if (!accountNumber || !selectedBank) {
            setBankStatus(false); 
            return; 
        }
        setBankStatus(false); 
        await validateBank();
        setBankStatus(true); 
    };
    
    
    useEffect(() => {
        if (responseMessage1) {
            setPermitStatus(true);
        }
    }, [responseMessage1]);
    
    
    
    useEffect(() => {
        
      }, [responseMessage, showErrorMessage]);

    useEffect(() => {
        
      }, [responseMessage1, permitStatus]);

    useEffect(() => {
        
      }, [responseMessage2, rcStatus]);

    useEffect(() => {
        
      }, [responseMessage3, bankStatus]);
    
    
    
      useEffect(() => {
        if (bearer) {
          fetchLocalGovt();
          fetchSector();
          fetchBank();
         
    
        }
      }, [bearer]);


      const handleSubmit = async () => {
        setLoad(true);
    
        try {
            const formData = new FormData();
            formData.append('business_premise_id', businessPermit);
            formData.append('company_name', businessName);
            formData.append('email', email);
            formData.append('first_name', firstName);
            formData.append('last_name', lastName);
            formData.append('phone_number', phone);
            formData.append('business_address', businessAddress);
            formData.append('bvn', accountBVN);
            formData.append('rc_number', businessRc);
            formData.append('account_name', accountName);
            formData.append('bank_name', selectedBank);
            formData.append('other_name', otherName);
            formData.append('account_number', accountNumber);
            formData.append('local_govt', selectedLocalGovt);
            formData.append('next_of_kin_name', nokName);
            formData.append('next_of_kin_relationship', selectedNokRelationship);
            formData.append('next_of_kin_address', nokAddress);
            formData.append('next_of_kin_phone_number', nokPhone);
            formData.append('next_of_kin_email', nokEmail);
            formData.append('dob', dateOfBirth);
            formData.append('sector', selectedSector);
            formData.append('marital_status', selectedStatus);
            formData.append('stin', businessTax);
            formData.append('home_address', homeAddress);
            formData.append('permanent_address', permanentAddress);
            
           

    
    

            
    
            const response = await axios.post(
                'https://api-smesupport.ogunstate.gov.ng/api/update-profile',
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Authorization': `Bearer ${bearer}`,
                    },
                }
            );
    
            console.log(response.data.message);
            navigate('/dashboard');
    
            console.log(response.data);
        } catch (error) {
            let errorMessage1 = 'An error occurred. Please try again.';
            if (error.response && error.response.data && error.response.data.message) {
                if (typeof error.response.data.message === 'string') {
                    errorMessage1 = error.response.data.message;
                } else if (Array.isArray(error.response.data.message)) {
                    errorMessage1 = error.response.data.message.join('; ');
                } else if (typeof error.response.data.message === 'object') {
                    errorMessage1 = JSON.stringify(error.response.data.message);
                }
            }
            setErrorMessage1(errorMessage1);
    
            console.log(error);
            toast.error(errorMessage1);
        } finally {
            setLoad(false);
        }
    };
    
    const ErrorMessage = ({ message }) => {
        
        return <p className={classes.errorMess}>{message}</p>;
        
    };

    const fetchProfile = async () => {
        setProfileLoading(true);
        try {
          const response = await axios.get('https://api-smesupport.ogunstate.gov.ng/api/profile', { headers });
          const fetchedProfile = response.data?.data;
          const fName = response.data?.data?.name;
          const result = fName.split(' ')[1];
          const lName = response.data?.data?.name.split(' ')[0];
          const em = response.data?.data?.email;
          const ph = response.data?.data?.phone_number;
          const st = response.data?.data?.marital_status;
      const ad = response.data?.data?.home_address;
      const pd = response.data?.data?.permanent_address;
      const rg = response.data?.data?.reg_type;
      const lg = response.data?.data?.local_govt;
      const bsnName = response.data?.data?.company_name;
      const bsnAdd = response.data?.data?.business_address;
      const se = response.data?.data?.sector;
      const stin = response.data?.data?.stin;
      const ac = response.data?.data?.account_name;
      const acn = response.data?.data?.account_number;
      const bn = response.data?.data?.bank_name;
      const bv = response.data?.data?.bvn;
      const dob = response.data?.data?.dob;
     
          setUserProfile(fetchedProfile);
          console.log(fetchedProfile);
          setFirstName(result);
          setLastName(lName);
          setPhone(ph);
          setEmail(em);
          setDateofBirth(dob);
          setAccountName(ac);
      setAccountNumber(acn);
      setSelectedBank(bn);
      setAccountBVN(bv);
      setSelectedStatus(st);
      setHomeAddress(ad);
      setPermanentAddress(pd);
      setSelectedLocalGovt(lg);
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
          console.log(errorStatus);
          setUserProfile([]);
        }
        } finally {
          setProfileLoading(false);
        }
      };
    
      useEffect(() => {
        if (bearer) {
            fetchProfile();
            
        }
      }, [bearer]);

    

    return (

        <div>
            <MainDashoard />

            <div className={classes.finishedbodyCont}>
                <div className={`${classes.formSecCont} ${classes.shadow}`}>
                    <h3>Profile</h3>
                </div>
                <div className={classes.mainform} >
                <ToastContainer />
                    <div className={classes.signin}>
                        <Tabs
                            defaultActiveKey="personal-details"
                            id="justify-tab-example"
                            className="mb-3 complete-tabs"
                            justify
                            activeKey={activeTab}
                            onSelect={ (k) => setActiveTab(k)}
                            
                        >
                            <Tab eventKey="personal-details" title="Personal Details">
                                <form>
                                    <div className={classes.rszeInput}>
                                        <div className={classes.formInput}>
                                            <span className={classes.stId}>First Name</span>
                                            <input disabled type="text" className={classes.snInput} placeholder="" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                                            {errors.firstName && <div className={classes.errorMess1}>{errors.firstName}</div>}
                                        </div>
                                        <div className={classes.formInput}>
                                            <span className={classes.stId}>Last Name</span>
                                            <input disabled type="text" className={classes.snInput} placeholder="" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                                            {errors.lastName && <div className={classes.errorMess1}>{errors.lastName}</div>}
                                        </div>
                                    </div>
                                    <div className={classes.rszeInput}>
                                        <div className={classes.formInput}>
                                            <span className={classes.stId}>Other Name</span>
                                            <input type="text" className={classes.snInput} placeholder="" value={otherName} onChange={(e) => setOtherName(e.target.value)} />
                                        </div>
                                        <div className={classes.formInput}>
                                            <span className={classes.stId}>Date of Birth</span>
                                            <input type="date" className={classes.snInput} placeholder="" value={dateOfBirth} onChange={handleDateChange} />
                                            {errors.dateOfBirth && <div className={classes.errorMess1}>{errors.dateOfBirth}</div>}
                                        </div>
                                    </div>
                                    <div className={classes.rszeInput}>
                                    <div className={classes.formInput}>
                                            <span className={classes.stId}>Ogun state Tax ID number</span>
                                            <input type="text" className={classes.snInput} placeholder="" value={userProfile.stin} onChange={handleTaxChange} onBlur={handleBlur}/>
                                            {taxLoading && (
    <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
        <Spinner size='sm' />
        <span style={{ marginLeft: 5 }}>Verifying... please wait</span>
    </div>
)}

{showErrorMessage && (
    <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
        {responseMessage.includes('Invalid TIN') || responseMessage.includes('No Valid Tax Clearance') ? (
            <img src={Invalid} alt="Invalid Tin" style={{ width: '20px', height: '20px' }} />
        ) : responseMessage.includes('Valid Tax') && (
            <img src={Valid} alt="Valid Tax" style={{ width: '20px', height: '20px' }} />
        )}
        <ErrorMessage message={responseMessage} />
    </div>
)}


        
                                        </div>

                                        <div className={classes.formInput}>
                                            <span className={classes.stId}>Phone Number</span>
                                            <input type="text" className={classes.snInput} placeholder="" value={phone} onChange={(e) => setPhone(e.target.value)} />
                                            {errors.phone && <div className={classes.errorMess1}>{errors.phone}</div>}
                                        </div>
                                        
                                        
                                    </div>
                                    <div className={classes.rszeInput}>
                                        <div className={classes.formInput}>
                                            <span className={classes.stId}>Email Address</span>
                                            <input type="text" className={classes.snInput} placeholder="" value={email} onChange={(e) => setEmail(e.target.value)} />
                                            {errors.email && <div className={classes.errorMess1}>{errors.email}</div>}
                                        </div>

                                        <div className={classes.formInput}>
                                            <span className={classes.stId}>Marital Status</span>
                                            <Form.Select className={classes.snInput} value={selectedStatus} onChange={handleMaritalChange} >
                                                <option value="">Select Marital Status</option>
                                                <option value="single">Single</option>
                                                <option value="married">Married</option>
                                                <option value="divorced">Divorced</option>
                                            </Form.Select>
                                            
                                        </div>
                                    </div>

                                    <div className={classes.rszeInput}>
                                    <div className={classes.formInput}>
                                            <span className={classes.stId}>Permanent Address</span>
                                            <textarea
                                                className={classes.snInput2}
                                                typeof='text'
                                                value={permanentAddress}
                                                onChange={(e) => setPermanentAddress(e.target.value)}

                                            />
                                            
                                        </div>
                                        

                                        <div className={classes.formInput}>
                                            <span className={classes.stId}>Local Government</span>
                                            <Form.Select className={classes.snInput} value={selectedLocalGovt} onChange={handleLgChange} >
                                            <option value="">Select L.G.A</option>
                                                                                  {localGovt.map((item) => (
                                                                                <option key={item.id} value={item.id}>
                                                                                  {item.name}
                                                                                </option>
                                                                              ))}
                                            </Form.Select>
                                            {/* {errors.selectedLocalGovt && <div className={classes.errorMess1}>{errors.selectedLocalGovt}</div>} */}
                                        </div>
                                       
                                    </div>
                                    <div className={classes.rszeInput}>
                                    <div className={classes.formInput}>
                                            <span className={classes.stId}>Home Address</span>
                                            <textarea
                                                className={classes.snInput2}
                                                typeof='text'
                                                value={homeAddress}
                                                onChange={(e) => setHomeAddress(e.target.value)}
                                            />
                                            {errors.homeAddress && <div className={classes.errorMess1}>{errors.homeAddress}</div>}
                                        </div>
                                       
                                        
                                    </div>
                                    
                                    <button  className={classes.continueButton} onClick={handleContinue} >
                                        <p className={classes.continueReg}>Continue</p>
                                    </button>
                                </form>
                            </Tab>
                            <Tab eventKey="business-details" title="Business Details">
                                <form>
                                    <div className={classes.rszeInput}>
                                    <div className={classes.formInput}>
                                            <span className={classes.stId}>RC Number</span>
                                            <input type="text" className={classes.snInput} placeholder="" value={businessRc} onChange={(e) => setBusinessRc(e.target.value)} onBlur={handleBlur2}/>
                                            {rcLoading && (
    <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
        <Spinner size='sm' />
        <span style={{ marginLeft: 5 }}>Verifying... please wait</span>
    </div>
)}

{rcStatus && (
    <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
        {responseMessage2.includes('Invalid RC Number')  ? (
            <img src={Invalid} alt="Invalid Tin" style={{ width: '20px', height: '20px' }} />
        ) : responseMessage2.includes('Verification Succesful!') && (
            <img src={Valid} alt="Valid Tax" style={{ width: '20px', height: '20px' }} />
        )}
        <ErrorMessage message={responseMessage2} />
    </div>
)}
                                        </div>
                                        <div className={classes.formInput}>
                                            <span className={classes.stId}>Business Name</span>
                                            <input disabled type="text" className={classes.snInput} placeholder="" value={businessName} onChange={(e) => setBusinessName(e.target.value)} />
                                        </div>
                                        
                                    </div>

                                    <div className={classes.rszeInput}>
                                    <div className={classes.formInput}>
                                            <span className={classes.stId}>Business Phone Number</span>
                                            <input disabled type="text" className={classes.snInput} placeholder="" value={businessPhone} onChange={(e) => setBusinessPhone(e.target.value)} />
                                        </div>

                                        <div className={classes.formInput}>
                                            <span className={classes.stId}>Business Email Address</span>
                                            <input disabled type="text" className={classes.snInput} placeholder="" value={businessEmail} onChange={(e) => setBusinessEmail(e.target.value)} />
                                        </div>
                                       
                                    </div>
                                    <div className={classes.rszeInput}>
                                        <div className={classes.formInput}>
                                            <span className={classes.stId}>Date of commencement of business</span>
                                            <input disabled type="date" className={classes.snInput} placeholder="" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} />
                                        </div>

                                        <div className={classes.formInput}>
                                            <span className={classes.stId}>Sector of Business</span>
                                            <Form.Select className={classes.snInput} value={selectedSector} onChange={handleSectorChange}>
                                                <option value="">Select Sector</option>
                                                                                  {sectors.map((item) => (
                                                                                <option key={item.id} value={item.id}>
                                                                                  {item.description}
                                                                                </option>
                                                                              ))}
                                            </Form.Select>

                                        </div>
                                    </div>
                                    <div className={classes.rszeInput}>

                                       

                                        <div className={classes.formInput}>
                                            <span className={classes.stId}>Number of employees</span>
                                            <input type="text" className={classes.snInput} placeholder="" value={businessEmployess} onChange={(e) => setBusinessEmployess(e.target.value)} />
                                        </div>

 <div className={classes.formInput}>
                                            <span className={classes.stId}>Business Premise Permit ID</span>
                                            <input type="text" className={classes.snInput} placeholder="" value={businessPermit} onChange={(e) => setBusinessPermit(e.target.value)} onBlur={handleBlur1} />
                                            {bpLoading && (
    <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
        <Spinner size='sm' />
        <span style={{ marginLeft: 5 }}>Verifying... please wait</span>
    </div>
)}

{permitStatus && (
    <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
        {responseMessage1.includes('Invalid Premise Permit')  ? (
            <img src={Invalid} alt="Invalid Tin" style={{ width: '20px', height: '20px' }} />
        ) : responseMessage1.includes('Valid Premise Permit') && (
            <img src={Valid} alt="Valid Tax" style={{ width: '20px', height: '20px' }} />
        )}
        <ErrorMessage message={responseMessage1} />
    </div>
)}
                                        </div>
                                    </div>


                                    <div className={classes.rszeInput}>
                                    <div className={classes.formInput}>
                                            <span className={classes.stId}>Business Address</span>
                                            <textarea
                                                className={classes.snInput2}
                                                typeof='text'
                                                value={businessAddress}
                                                onChange={(e) => setBusinessAddress(e.target.value)}
                                                disabled
                                            />
                                        </div>
                                    {/* <div className={classes.formInput}>
                                            <span className={classes.stId}>C.A.C Certificate No</span>
                                            <input type="text" className={classes.snInput} placeholder="" value={cacNo} onChange={(e) => setCacNo(e.target.value)} />
                                        </div> */}
                                        <div className={classes.formInput}>
                                       
                                            <span className={classes.stId}>Annual turnover for 2 years</span>
                                            <input type="text" className={classes.snInput} placeholder="" value={turnover} onChange={(e) => setTurnover(e.target.value)} />
                                        </div>
                                       
                                    </div>
                                    <div className={classes.rszeInput}>
                                        <div className={classes.formInput}>
                                            <span className={classes.stId}>Company Type</span>
                                            <input disabled type="text" className={classes.snInput} placeholder="" value={companyType} onChange={(e) => setCompanyType(e.target.value)} />
                                        </div>
                                        </div>

                                    {/* <div className={classes.rszeInput}>
                                       
                                        
                                        
                                       
                                   
                                    </div> */}

                                    

                                    <div className={classes.continueButton} onClick={handleContinue}>
                                        <p className={classes.continueReg}>Continue</p>
                                    </div>
                                </form>
                            </Tab>
                            <Tab eventKey="bank-details" title="Bank Details">
                                <form>
                                    <div className={classes.rszeInput}>
                                        <div className={classes.formInput}>
                                            <span className={classes.stId}>Account Number</span>
                                            <input type="text" className={classes.snInput} placeholder="" value={accountNumber} onChange={(e) => setAccountNumber(e.target.value)} />
                                        </div>
                                        <div className={classes.formInput}>
                                            <span className={classes.stId}>Bank</span>
                                            <Form.Select className={classes.snInput} value={selectedBank} onChange={handleBankChange} onBlur={handleBlur3}>
                                            <option value="">Select Bank</option>
                                                                                  {banks.map((item) => (
                                                                                <option key={item.id} value={item.id}>
                                                                                  {item.name}
                                                                                </option>
                                                                              ))}
                                            </Form.Select>
                                            {bankLoading && (
    <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
        <Spinner size='sm' />
        <span style={{ marginLeft: 5 }}>Verifying... please wait</span>
    </div>
)}

{bankStatus && (
    <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
        {responseMessage3.includes('Invalid Account') || responseMessage3.includes('No Valid Tax Clearance') ? (
            <img src={Invalid} alt="Invalid Tin" style={{ width: '20px', height: '20px' }} />
        ) : responseMessage3.includes('Bank details retrieved successfully') && (
            <img src={Valid} alt="Verified Succesfully!" style={{ width: '20px', height: '20px' }} />
        )}
        <ErrorMessage message={responseMessage3} />
    </div>
)}
                                        </div>
                                    </div>
                                    <div className={classes.rszeInput}>
                                        <div className={classes.formInput}>
                                            <span className={classes.stId}>Account Name</span>
                                            <input disabled type="text" className={classes.snInput} placeholder="" value={accountName} onChange={(e) => setAccountName(e.target.value)} />
                                        </div>
                                        <div className={classes.formInput}>
                                            <span className={classes.stId}>BVN</span>
                                            <input disabled type="text" className={classes.snInput} placeholder="" value={accountBVN} onChange={(e) => setAccountBVN(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className={classes.continueButton} onClick={handleSubmit}>
                                    {load ? (
                        <>
                            <Spinner size='sm' />
                            <span style={{ marginLeft: '5px' }}>Processing, Please wait...</span>
                        </>
                    ) : (
                        "Save Changes"
                    )}
                    <div style={{marginTop: 20}} />
                    {/* {errorMessage1 && <p style={{ color: 'red', textAlign: 'center' }}>{errorMessage1}</p>} */}
                                        {/* <p className={classes.continueReg}>Submit</p> */}
                                    </div>
                                    
                                </form>
                            </Tab>
                        </Tabs>

                    </div>
                </div>
            </div>
                        {/* <DashboardFinal/> */}
                     </div>

        //         </div>

        //     </div>
        // </div>
    )
}
