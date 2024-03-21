import React, { useState, useEffect, useRef } from 'react';
import classes from './ApplyLoan.module.css';
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

import { Spinner } from 'react-bootstrap';

export default function ApplyLoan() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [taxLoading, setTaxLoading] = useState('');
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
    const [bearer, setBearer] = useState('');
    const [responseMessage, setResponseMessage] = useState('');
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    const [bpLoading, setBpLoading] = useState(false);
    const [load, setLoad] = useState(false);
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

      const handleContinue = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
    
        if (!isButtonDisabled) {
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
    

    const handleApply = () => {
        navigate('/apply_for_loan');
    }



    
    

    const handleFileChange = (event) => {
        const files = event.target.files;
        const fileList = Array.from(files);
        setSelectedFile(fileList);
      };

    

    const handleBankChange = (event) => {
        setSelectedBank(event.target.value);
    }

    const handleSectorChange = (event) => {
        setSelectedSector(event.target.value);
    }
    const handleStatusChange = (event) => {
        setSelectedNokRelationship(event.target.value);
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
          const response = await axios.get('https://api-silas.ogunstate.gov.ng/api/local-govt', { headers });
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
          const response = await axios.get('https://api-silas.ogunstate.gov.ng/api/sectors', { headers });
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
          const response = await axios.get('https://api-silas.ogunstate.gov.ng/api/banks', { headers });
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
                setIsButtonDisabled(false);
            }
        } catch (error) {
            if (error.response && error.response.data.responseCode === 400) {
                setResponseMessage(error.response.data.message);
                // console.log(error.response.data);
                setIsButtonDisabled(true);
            } else if (error.message === 'Network Error' || error.code === 'ECONNABORTED') {
                setResponseMessage('Network error or connection timed out');
            } else {
                console.log(error);
            }
        } finally {
            setTaxLoading(false);
        }
    };

    const handleBlur = async () => {
        if (!businessTax) return; 
        setShowErrorMessage(false); 
        await validateTaxPayer();
    };
    
    useEffect(() => {
        if (responseMessage) {
            setShowErrorMessage(true);
        }
    }, [responseMessage]);
    
    
    

    useEffect(() => {
        console.log(responseMessage);
      }, [responseMessage, showErrorMessage]);
    


    const validateBp = async () => {
        setBpLoading(true);
        try {
            const response = await axios.get(`https://api.businesspermit.ogunstate.gov.ng/api/verify-permit-number?permit_id=${businessPermit}`);
            const responseData = response.data.data;
            console.log(responseData, "here");
            // if (responseData.responseCode === 201) {
            //     setResponseMessage(responseData.data[0].name);
            //     setIsButtonDisabled(false); // Assuming data is an array
            // } else {
            //     setResponseMessage(responseData.message);
            // }
        } catch (error) {
            if (error.response && error.response.data.responseCode === 401) {
                setResponseMessage(error.response.data.message);
                setIsButtonDisabled(true);
            } else {
                console.log(error);
            }

        } finally {
            setBpLoading(false);
        }
    };
    
    
    
    
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
            formData.append('type', 1);
            formData.append('file', selectedFile[0]);

            console.log(formData);
            console.log(selectedFile);
    
    

            
    
            const response = await axios.post(
                'https://api-silas.ogunstate.gov.ng/api/application/create',
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
        } finally {
            setLoad(false);
        }
    };
    
    const ErrorMessage = ({ message }) => {
        
        return <p className={classes.errorMess}>{message}</p>;
        
    };

    const isTaxDisable = !businessTax;

    return (

        <div>
            <MainDashoard />

            <div className={classes.finishedbodyCont}>
                <div className={`${classes.formSecCont} ${classes.shadow}`}>
                    <h3>Loan</h3>
                </div>
                <div className={classes.mainform} >
                    <div className={classes.signin}>
                        <Tabs
                            defaultActiveKey="personal-details"
                            id="justify-tab-example"
                            className="mb-3 complete-tabs"
                            justify
                            activeKey={activeTab}
                            onSelect={isButtonDisabled || isTaxDisable ? null : (k) => setActiveTab(k)}
                            
                        >
                            <Tab eventKey="personal-details" title="Personal Details">
                                <form>
                                    <div className={classes.rszeInput}>
                                        <div className={classes.formInput}>
                                            <span className={classes.stId}>First Name</span>
                                            <input type="text" className={classes.snInput} placeholder="" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                                        </div>
                                        <div className={classes.formInput}>
                                            <span className={classes.stId}>Last Name</span>
                                            <input type="text" className={classes.snInput} placeholder="" value={lastName} onChange={(e) => setLastName(e.target.value)} />
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
                                        </div>
                                        <div className={classes.formInput}>
                                            <span className={classes.stId}>Permanent Address</span>
                                            <textarea
                                                className={classes.snInput2}
                                                typeof='text'
                                                value={permanentAddress}
                                                onChange={(e) => setPermanentAddress(e.target.value)}

                                            />
                                            
                                        </div>
                                    </div>
                                    <div className={classes.rszeInput}>
                                        <div className={classes.formInput}>
                                            <span className={classes.stId}>Marital Status</span>
                                            <Form.Select className={classes.snInput} value={selectedStatus} onChange={handleMaritalChange} >
                                                <option value="">Select Marital Status</option>
                                                <option value="single">Single</option>
                                                <option value="married">Married</option>
                                                <option value="divorced">Divorced</option>
                                            </Form.Select>
                                            
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
                                        </div>
                                        {/* <div className={classes.formInput}>
                                            <span className={classes.stId}>State of Origin</span>
                                            <Form.Select className={classes.snInput} value={selectedState} onChange={handleStateChange}>
                                                <option>Select State of Origin</option>
                                            </Form.Select>
                                        </div> */}
                                    </div>
                                    <div className={classes.rszeInput}>
                                     <div className={classes.formInput}>
                                            <span className={classes.stId}>Ogun state Tax ID number</span>
                                            <input type="text" className={classes.snInput} placeholder="" value={businessTax} onChange={(e) => setBusinessTax(e.target.value)} onBlur={handleBlur}/>
                                           
                                            {taxLoading && (
    <div>
        <Spinner size='sm' />
        <span style={{marginLeft: 5}}>Verifying... please wait</span>
    </div>
)}
{showErrorMessage && (
    <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
        {responseMessage.includes('Invalid TIN') && (
            <img src={Invalid} alt="Invalid Tin" style={{ width: '20px', height: '20px' }}/>
        )}
        {responseMessage.includes('Valid Tax') && (
            <img src={Valid} alt="Valid Tax" style={{ width: '20px', height: '20px' }} />
        )}
        <ErrorMessage message={responseMessage} />
    </div>
)}

        
                                        </div>
                                       
                                        <div className={classes.formInput}>
                                            <span className={classes.stId}>Enter your N.I.N</span>
                                            <input type="text" className={classes.snInput} placeholder="" value={nin} onChange={(e) => setNin(e.target.value)} />
                                        </div>
                                    </div>
                                    <p className={classes.nextKin}>Next of Kin details</p>
                                    <div className={classes.rszeInput}>
                                        <div className={classes.formInput}>
                                            <span className={classes.stId}>Full Name</span>
                                            <input type="text" className={classes.snInput} placeholder="" value={nokName} onChange={(e) => setNokName(e.target.value)} />
                                        </div>
                                        <div className={classes.formInput}>
                                            <span className={classes.stId}>Phone Number</span>
                                            <input type="text" className={classes.snInput} placeholder="" value={nokPhone} onChange={(e) => setNokPhone(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className={classes.rszeInput}>
                                        <div className={classes.formInput}>
                                            <span className={classes.stId}>Email Address</span>
                                            <input type="text" className={classes.snInput} placeholder="" value={nokEmail} onChange={(e) => setNokEmail(e.target.value)} />
                                        </div>
                                        <div className={classes.formInput}>
                                            <span className={classes.stId}>Relationship</span>
                                            <Form.Select className={classes.snInput} value={selectedNokRelationship} onChange={handleStatusChange}>
                                            <option value="">Select Relationship</option>
                                            <option value="Spouse">Spouse</option>
                                            <option value="Parent">Parent</option>
                                            <option value="Sibling">Sibling</option>
                                            <option value="Child">Child</option>
                                            <option value="Other">Other</option>
                                            </Form.Select>
                                        </div>
                                    </div>

                                    <div className={classes.rszeInput}>
                                        <div className={classes.formInput}>
                                            <span className={classes.stId}>Home Address</span>
                                            <textarea
                                                className={classes.snInput2}
                                                typeof='text'
                                                value={nokAddress}
                                                onChange={(e) => setNokAddress(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <button disabled={isTaxDisable} className={classes.continueButton} onClick={handleContinue} style={{backgroundColor: isButtonDisabled || isTaxDisable ? "#acebc9" : "#2D995F", cursor: isButtonDisabled || isTaxDisable ? "default" : "pointer"}}>
                                        <p className={classes.continueReg}>Continue</p>
                                    </button>
                                </form>
                            </Tab>
                            <Tab eventKey="business-details" title="Business Details">
                                <form>
                                    <div className={classes.rszeInput}>
                                        <div className={classes.formInput}>
                                            <span className={classes.stId}>Business Name</span>
                                            <input type="text" className={classes.snInput} placeholder="" value={businessName} onChange={(e) => setBusinessName(e.target.value)} />
                                        </div>
                                        <div className={classes.formInput}>
                                            <span className={classes.stId}>Business Phone Number</span>
                                            <input type="text" className={classes.snInput} placeholder="" value={businessPhone} onChange={(e) => setBusinessPhone(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className={classes.rszeInput}>
                                        <div className={classes.formInput}>
                                            <span className={classes.stId}>Business Email Address</span>
                                            <input type="text" className={classes.snInput} placeholder="" value={businessEmail} onChange={(e) => setBusinessEmail(e.target.value)} />
                                        </div>
                                        <div className={classes.formInput}>
                                            <span className={classes.stId}>RC Number</span>
                                            <input type="text" className={classes.snInput} placeholder="" value={businessRc} onChange={(e) => setBusinessRc(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className={classes.rszeInput}>
                                        <div className={classes.formInput}>
                                            <span className={classes.stId}>Date of commencement of business</span>
                                            <input type="date" className={classes.snInput} placeholder="" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} />
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
                                            <input type="text" className={classes.snInput} placeholder="" value={businessPermit} onChange={(e) => setBusinessPermit(e.target.value)} />
                                        </div>
                                    </div>


                                    <div className={classes.rszeInput}>
                                    <div className={classes.formInput}>
                                            <span className={classes.stId}>C.A.C Certificate No</span>
                                            <input type="text" className={classes.snInput} placeholder="" value={cacNo} onChange={(e) => setCacNo(e.target.value)} />
                                        </div>
                                        <div className={classes.formInput}>
                                       
                                            <span className={classes.stId}>Annual turnover for 2 years</span>
                                            <input type="text" className={classes.snInput} placeholder="" value={turnover} onChange={(e) => setTurnover(e.target.value)} />
                                        </div>
                                       
                                    </div>

                                    <div className={classes.rszeInput}>
                                        <div className={classes.formInput}>
                                            <span className={classes.stId}>2 years bank statement</span>
                                            <div className={classes.snInput23}>
                                                <label htmlFor="fileInput" className={classes.fileInputLabel}>
                                                    {/* Your file icon element goes here */}
                                                    <img src={Folder} alt="File Icon" className={classes.fileIcon} />
                                                    {/* Input element hidden, but clickable */}
                                                    <input type="file" accept='.pdf' id="fileInput" className={classes.fileInput}  onChange={handleFileChange} />
                                                </label>
                                                <span className={classes.placeholder}>
                                                    {selectedFile ? selectedFile[0].name : 'No file is chosen'}
                                                </span>
                                            </div>
                                        </div>

                                        
                                        <div className={classes.formInput}>
                                            <span className={classes.stId}>Business Address</span>
                                            <textarea
                                                className={classes.snInput2}
                                                typeof='text'
                                                value={businessAddress}
                                                onChange={(e) => setBusinessAddress(e.target.value)}
                                            />
                                        </div>
                                       
                                   
                                    </div>

                                    

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
                                            <Form.Select className={classes.snInput} value={selectedBank} onChange={handleBankChange} >
                                            <option value="">Select Bank</option>
                                                                                  {banks.map((item) => (
                                                                                <option key={item.id} value={item.id}>
                                                                                  {item.name}
                                                                                </option>
                                                                              ))}
                                            </Form.Select>
                                        </div>
                                    </div>
                                    <div className={classes.rszeInput}>
                                        <div className={classes.formInput}>
                                            <span className={classes.stId}>Account Name</span>
                                            <input type="text" className={classes.snInput} placeholder="" value={accountName} onChange={(e) => setAccountName(e.target.value)} />
                                        </div>
                                        <div className={classes.formInput}>
                                            <span className={classes.stId}>BVN</span>
                                            <input type="text" className={classes.snInput} placeholder="" value={accountBVN} onChange={(e) => setAccountBVN(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className={classes.continueButton} onClick={handleSubmit}>
                                    {load ? (
                        <>
                            <Spinner size='sm' />
                            <span style={{ marginLeft: '5px' }}>Processing, Please wait...</span>
                        </>
                    ) : (
                        "Submit Application"
                    )}
                    <div style={{marginTop: 20}} />
                    {errorMessage1 && <p style={{ color: 'red', textAlign: 'center' }}>{errorMessage1}</p>}
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
