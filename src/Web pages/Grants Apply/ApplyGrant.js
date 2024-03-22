import React, { useState, useEffect, useRef } from 'react';
import classes from './ApplyGrant.module.css';
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

export default function ApplyGrant() {
    const navigate = useNavigate();
    const [permitStatus, setPermitStatus] = useState(false);
    const [taxLoading, setTaxLoading] = useState(false);
    const [guarantorName, setGuarantorName] = useState("");
    const [guarantorEmail, setGuarantorEmail] = useState("");
    const [guarantorPhone, setGuarantorPhone] = useState("");
    const [guarantorAddress, setGuarantorAddress] = useState("");
    const [businessTax, setBusinessTax] = useState('');
    const [businessRc, setBusinessRc] = useState('');
    const [businessPermit, setBusinessPermit] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);
    const [userProfile, setUserProfile] = useState([]);
    const [bearer, setBearer] = useState('');
    const [responseMessage, setResponseMessage] = useState('');
    const [responseMessage1, setResponseMessage1] = useState('');
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    const [bpLoading, setBpLoading] = useState(false);
    const [load, setLoad] = useState(false);
    const [profileLoading, setProfileLoading] = useState(false);
    const [showErrorMessage, setShowErrorMessage] = useState(false);
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

    const handleFileChange = (event) => {
        const files = event.target.files;
        const fileList = Array.from(files);
        setSelectedFile(fileList);
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
               
            }
        } catch (error) {
            if (error.response && error.response.data.status === false) {
                setResponseMessage1("Invalid Premise Permit");
                setBusinessPermit('');
               
            } else if (error.message === 'Network Error' || error.code === 'ECONNABORTED') {
                setResponseMessage1('Network error or connection timed out');
            } else {
                console.log(error);
            }
        } finally {
            setBpLoading(false);
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

    useEffect(() => {
        if (responseMessage1) {
            setPermitStatus(true);
        }
    }, [responseMessage1]);

    useEffect(() => {
        
    }, [responseMessage, showErrorMessage]);

  useEffect(() => {
      
    }, [responseMessage1, permitStatus]);
    


    const handleSubmit = async () => {
        setLoad(true);

        try {
            const formData = new FormData();
            formData.append('business_premise_id', businessPermit);
            formData.append('guarantor_name', guarantorName);
            formData.append('guarantor_address', guarantorAddress);
            formData.append('guarantor_email', guarantorEmail);
            formData.append('guarantor_phone_number', guarantorPhone);
            formData.append('rc_number', businessRc);
            formData.append('stin', businessTax);
            formData.append('type', 2);
            formData.append('file', selectedFile[0]);

            const response = await axios.post(
                'https://api-smesupport.ogunstate.gov.ng/api/application/create',
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Authorization': `Bearer ${bearer}`,
                    },
                }
            );

            console.log(response.data.message);
            navigate('/success');

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
            toast.error(errorMessage1);
            console.log(error);
        } finally {
            setLoad(false);
        }
    };

    const ErrorMessage = ({ message }) => {

        return <p className={classes.errorMess}>{message}</p>;

    };

    const buttonDisable = !businessTax || !guarantorName || !guarantorAddress || !guarantorEmail || !guarantorPhone || !selectedFile;

    const fetchProfile = async () => {
        setProfileLoading(true);
        try {
          const response = await axios.get('https://api-smesupport.ogunstate.gov.ng/api/profile', { headers });
          const results = response.data?.data;
          const rc = response.data?.data?.rc_number;
          const st = response.data?.data?.stin;
          const bpp = response.data?.data?.business_premise_id;
          
          setUserProfile(results);
          setBusinessRc(rc);
          setBusinessTax(st);
          setBusinessPermit(bpp);
    
    
    
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
            <div style={{ zIndex: '999' }}>
                <MainDashoard />
            </div>

            <div className={classes.finishedbodyCont}>
                <div className={`${classes.formSecCont} ${classes.shadow}`}>
                    <h3>Grant Application</h3>
                </div>
                <ToastContainer />
                <div className={classes.mainform} >
                    <div className={classes.signin}>

                        <form className={classes.fromMain}>

                            <div className={classes.rszeInput}>
                                <div className={classes.formInput}>
                                    <span className={classes.stId}>Ogun state Tax ID number</span>
                                    <input type="text" className={classes.snInput} placeholder="" value={businessTax} onChange={(e) => setBusinessTax(e.target.value)} onBlur={handleBlur} />
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
                                        <span className={classes.stId}>RC Number</span>
                                        <input type="text" className={classes.snInput} placeholder="" value={businessRc} onChange={(e) => setBusinessRc(e.target.value)} />
                                    </div>

                            </div>

                            <div className={classes.rszeInput}>
                            <div className={classes.formInput}>
                                    <span className={classes.stId}>Business Premise Permit ID</span>
                                    <input type="text" className={classes.snInput} placeholder="" value={businessPermit} onChange={(e) => setBusinessPermit(e.target.value)} onBlur={handleBlur1}/>
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
                                    <span className={classes.stId}>12 months bank statement</span>
                                    <div className={classes.snInput23}>
                                        <label htmlFor="fileInput" className={classes.fileInputLabel}>
                                            {/* Your file icon element goes here */}
                                            <img src={Folder} alt="File Icon" className={classes.fileIcon} />
                                            {/* Input element hidden, but clickable */}
                                            <input type="file" accept='.pdf' id="fileInput" className={classes.fileInput} onChange={handleFileChange} />
                                        </label>
                                        <span className={classes.placeholder}>
                                            {selectedFile ? selectedFile[0].name : 'No file is chosen'}
                                        </span>
                                    </div>
                                </div>
                                </div>

                           
                            
                                
                         
                            <div   className={classes.continueButton} onClick={handleSubmit} >
                            {load ? (
                        <>
                            <Spinner size='sm' />
                            <span style={{ marginLeft: '5px' }}>Processing, Please wait...</span>
                        </>
                    ) : (
                        "Submit Application"
                    )}
                    <div style={{marginTop: 20}} />
                    {/* {errorMessage1 && <p style={{ color: 'red', textAlign: 'center' }}>{errorMessage1}</p>} */}
                                        {/* <p className={classes.continueReg}>Submit</p> */}
                                    </div>
                        </form>
                    </div>
                </div>
            </div>
          
        </div>

            )
}
