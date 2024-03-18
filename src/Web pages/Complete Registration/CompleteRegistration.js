import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import OnbImg from '../../Images/image bg.png';
import classes from './CompleteRegistration.module.css';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button } from 'react-bootstrap';
import crossedEyeIcon from '../../Images/eye-slash.png'
import { Tab, Tabs, Form } from 'react-bootstrap';
import Folder from '../../Images/folder-2.svg'


const CompleteRegistration = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [error, setError] = useState({});
    const [errorMessage, setErrorMessage] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [termsSelected, setTermsSelected] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const location = useLocation();






    const handleLogin = async () => {
        setIsLoading(true); // Set loading state to true
        try {
            const response = await axios.post('https://gtc.ogunstate.gov.ng/api/login', {
                email: email,
                password: password,
            });
            AsyncStorage.setItem('userToken', response.data.data?.token);

            if (location.state && location.state.from) {
                navigate(location.state.from);
            } else {
                // If there's no previous page, navigate to a default route
                navigate('/onboarding');
            }
            console.log('Login successful', response.data);
            setEmail('');
            setPassword('');




        } catch (error) {
            const errorMessage = JSON.stringify(error.response?.data?.message || 'An error occurred');
            setErrorMessage(errorMessage);
            // Handle errors (e.g., display error message)
            console.error('Login failed', error);
            //   Swal.fire({
            //     icon: 'error',
            //     title: 'Login failed',
            //     text: error.response.data.message,
            //   });

        } finally {
            setIsLoading(false); // Set loading state back to false after handling the request
        }
    };

    const isButtonDisabled = !email || !password;

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };


    const navigateToSignup = () => {
        navigate('/sign_up');
    };

    const navigateToForgot = () => {
        navigate('/forgot_password');
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !isButtonDisabled) {
            handleLogin();
        }
    };

    return (
        <div className={classes.signin}>
            <Tabs
      defaultActiveKey="personal-details"
      id="justify-tab-example"
      className="mb-3 complete-tabs"
      justify
  
    >
      <Tab eventKey="personal-details" title="Personal Details">
      <form>
                    <div className={classes.rszeInput}>
                        <div className={classes.formInput}>
                            <span className={classes.stId}>First Name</span>
                            <input type="text" className={classes.snInput} placeholder="" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className={classes.formInput}>
                            <span className={classes.stId}>Last Name</span>
                            <input type="text" className={classes.snInput} placeholder="" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                    </div>
                    <div className={classes.rszeInput}>
                        <div className={classes.formInput}>
                            <span className={classes.stId}>Other Name</span>
                            <input type="text" className={classes.snInput} placeholder="" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className={classes.formInput}>
                            <span className={classes.stId}>Date of Birth</span>
                            <input type="date" className={classes.snInput} placeholder="" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                    </div>
                    <div className={classes.rszeInput}>
                        <div className={classes.formInput}>
                            <span className={classes.stId}>Home Address</span>
                            <textarea
                            className={classes.snInput2}
                            typeof='text'

                            />
                        </div>
                        <div className={classes.formInput}>
                            <span className={classes.stId}>Permanent Address</span>
                            <textarea
                            className={classes.snInput2}
                            typeof='text'

                            />
                            {/* <input type="date" className={classes.snInput} placeholder="" onChange={(e) => setEmail(e.target.value)} /> */}
                        </div>
                    </div>
                    <div className={classes.rszeInput}>
                        <div className={classes.formInput}>
                            <span className={classes.stId}>Marital Status</span>
                                <Form.Select className={classes.snInput} >
                                    <option>Select Marital Status</option>
                                    <option>Single</option>
                                    <option>Married</option>
                                    <option>Divorced</option>
                                </Form.Select>
                            {/* <input type="text" className={classes.snInput} placeholder="" onChange={(e) => setEmail(e.target.value)} /> */}
                        </div>
                        <div className={classes.formInput}>
                            <span className={classes.stId}>State of Origin</span>
                            <Form.Select className={classes.snInput} >
                                    <option>Select State of Origin</option>
                                </Form.Select>
                        </div>
                    </div>
                    <div className={classes.rszeInput}>
                    <div className={classes.formInput}>
                            <span className={classes.stId}>Local Government</span>
                            <Form.Select className={classes.snInput} >
                                    <option>Select L.G</option>
                                </Form.Select>
                        </div>
                        <div className={classes.formInput}>
                            <span className={classes.stId}>Enter your N.I.N</span>
                            <input type="text" className={classes.snInput} placeholder="" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                    </div>
                    <p className={classes.nextKin}>Next of Kin details</p>
                    <div className={classes.rszeInput}>
                        <div className={classes.formInput}>
                            <span className={classes.stId}>Full Name</span>
                            <input type="text" className={classes.snInput} placeholder="" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className={classes.formInput}>
                            <span className={classes.stId}>Phone Number</span>
                            <input type="text" className={classes.snInput} placeholder="" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                    </div>
                    <div className={classes.rszeInput}>
                        <div className={classes.formInput}>
                            <span className={classes.stId}>Email Address</span>
                            <input type="text" className={classes.snInput} placeholder="" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className={classes.formInput}>
                            <span className={classes.stId}>Relationship</span>
                            <Form.Select className={classes.snInput} >
                                    <option>Select Relationship</option>
                                </Form.Select>
                        </div>
                    </div>

                    <div className={classes.rszeInput}>
                        <div className={classes.formInput}>
                            <span className={classes.stId}>Home Address</span>
                            <textarea
                            className={classes.snInput2}
                            typeof='text'

                            />
                        </div>
                        </div>
                        <div className={classes.continueButton}>
                            <p className={classes.continueReg}>Continue</p>
                        </div>
                    </form>
      </Tab>
      <Tab eventKey="business-details" title="Business Details">
      <form>
                    <div className={classes.rszeInput}>
                        <div className={classes.formInput}>
                            <span className={classes.stId}>Business Name</span>
                            <input type="text" className={classes.snInput} placeholder="" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className={classes.formInput}>
                            <span className={classes.stId}>Business Phone Number</span>
                            <input type="text" className={classes.snInput} placeholder="" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                    </div>
                    <div className={classes.rszeInput}>
                        <div className={classes.formInput}>
                            <span className={classes.stId}>Business Email Address</span>
                            <input type="text" className={classes.snInput} placeholder="" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className={classes.formInput}>
                            <span className={classes.stId}>RC Number</span>
                            <input type="text" className={classes.snInput} placeholder="" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                    </div>
                    <div className={classes.rszeInput}>
                            <div className={classes.formInput}>
                            <span className={classes.stId}>Date of commencement of business</span>
                            <input type="date" className={classes.snInput} placeholder="" onChange={(e) => setEmail(e.target.value)} />
                        </div>

                        <div className={classes.formInput}>
                            <span className={classes.stId}>Sector of Business</span>
                                <Form.Select className={classes.snInput} >
                                    <option>Select Sector</option>
                                </Form.Select>
                            {/* <input type="text" className={classes.snInput} placeholder="" onChange={(e) => setEmail(e.target.value)} /> */}
                        </div>
                    </div>
                    <div className={classes.rszeInput}>
                        
                        <div className={classes.formInput}>
                            <span className={classes.stId}>Ogun state Tax ID number</span>
                             <input type="text" className={classes.snInput} placeholder="" onChange={(e) => setEmail(e.target.value)} />
                        </div>

                        <div className={classes.formInput}>
                            <span className={classes.stId}>Number of employees</span>
                            <input type="text" className={classes.snInput} placeholder="" onChange={(e) => setEmail(e.target.value)} />
                        </div>

                       
                    </div>

                        <div className={classes.rszeInput}>
                            <div className={classes.formInput}>
                                <span className={classes.stId}>Business Address</span>
                                <textarea
                                    className={classes.snInput2}
                                    typeof='text'
                                />
                            </div>
                            <div className={classes.formInput}>
                                <span className={classes.stId}>Business premises permit ID</span>
                                <div className={classes.snInput23}>
                                    <label htmlFor="fileInput" className={classes.fileInputLabel}>
                                        {/* Your file icon element goes here */}
                                        <img src={Folder} alt="File Icon" className={classes.fileIcon} />
                                        {/* Input element hidden, but clickable */}
                                        <input type="file" id="fileInput" className={classes.fileInput} onChange={(e) => setEmail(e.target.value)} />
                                    </label>
                                </div>
                                <span className={classes.placeholder}>No file is chosen</span>
                            </div>
                        </div>
                        
                        <div className={classes.rszeInput}>
                            <div className={classes.formInput}>
                                <span className={classes.stId}>CAC Certificate</span>
                                <div className={classes.snInput23}>
                                    <label htmlFor="fileInput" className={classes.fileInputLabel}>
                                        {/* Your file icon element goes here */}
                                        <img src={Folder} alt="File Icon" className={classes.fileIcon} />
                                        {/* Input element hidden, but clickable */}
                                        <input type="file" id="fileInput" className={classes.fileInput} onChange={(e) => setEmail(e.target.value)} />
                                    </label>
                                </div>
                                <span className={classes.placeholder}>No file is chosen</span>
                            </div>
                            <div className={classes.formInput}>
                                <span className={classes.stId}>Evidence of Annual turnover for 2 years</span>
                                <div className={classes.snInput23}>
                                    <label htmlFor="fileInput" className={classes.fileInputLabel}>
                                        {/* Your file icon element goes here */}
                                        <img src={Folder} alt="File Icon" className={classes.fileIcon} />
                                        {/* Input element hidden, but clickable */}
                                        <input type="file" id="fileInput" className={classes.fileInput} onChange={(e) => setEmail(e.target.value)} />
                                    </label>
                                </div>
                                <span className={classes.placeholder}>No file is chosen</span>
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
                                        <input type="file" id="fileInput" className={classes.fileInput} onChange={(e) => setEmail(e.target.value)} />
                                    </label>
                                </div>
                                <span className={classes.placeholder}>No file is chosen</span>
                            </div>
                            </div>
                    
                        <div className={classes.continueButton}>
                            <p className={classes.continueReg}>Continue</p>
                        </div>
                    </form>
      </Tab>
      <Tab  eventKey="bank-details" title="Bank Details">
      <form>
                    <div className={classes.rszeInput}>
                        <div className={classes.formInput}>
                            <span className={classes.stId}>Account Number</span>
                            <input type="text" className={classes.snInput} placeholder="" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className={classes.formInput}>
                            <span className={classes.stId}>Bank</span>
                            <Form.Select className={classes.snInput} >
                                    <option>Select Bank</option>
                                </Form.Select>
                        </div>
                    </div>
                    <div className={classes.rszeInput}>
                        <div className={classes.formInput}>
                            <span className={classes.stId}>Account Name</span>
                            <input type="text" className={classes.snInput} placeholder="" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className={classes.formInput}>
                            <span className={classes.stId}>BVN</span>
                            <input type="text" className={classes.snInput} placeholder="" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                    </div>
                        <div className={classes.continueButton}>
                            <p className={classes.continueReg}>Continue</p>
                        </div>
                    </form>
      </Tab>
    </Tabs>

        </div>


    );
}

export default CompleteRegistration;