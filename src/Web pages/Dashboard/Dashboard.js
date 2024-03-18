import React, { useState, useEffect } from 'react';
import classes from './Dashboard.module.css';
import RegLogo from '../../Images/RegistrationLogo.svg'
import { Link } from 'react-router-dom'
import { Tab, Tabs, Form } from 'react-bootstrap';
import Folder from '../../Images/folder-2.svg';
import axios from 'axios';
import SuccessImg from '../../Images/completed.svg';
import messageIcon from '../../Images/Dashbord-menu-icons/message-text.svg';
import Invoice from '../../Images/Dashbord-menu-icons/invoice.svg';
import LogOutIcon from '../../Images/Dashbord-menu-icons/logout.svg';
import MainDashoard from '../Main Dashboard/MainDashoard';

export default function Dashboard() {
    const [email, setEmail] = useState('');
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
    const [dateOfBirth, setDateofBirth] = useState(null);
    const [homeAddress, setHomeAddress] = useState('');
    const [permanentAddress, setPermanentAddress] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);
    const [selectedBank, setSelectedBank] = useState(null);
    const [selectedFile1, setSelectedFile1] = useState(null);
    const [selectedFile2, setSelectedFile2] = useState(null);
    const [selectedFile3, setSelectedFile3] = useState(null);
    const [selectedStatus, setSelectedStatus] = useState(null);
    const [selectedState, setSelectedState] = useState(null);
    const [selectedLocalGovt, setSelectedLocalGovt] = useState(null);
    const [selectedNokRelationship, setSelectedNokRelationship] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedSector, setSelectedSector] = useState(null);
    const [activeLink, setActiveLink] = useState(null);

    const handleLinkClick = (linkName) => {
        setActiveLink(linkName);
    };

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };
    const handleFileChange1 = (e) => {
        setSelectedFile1(e.target.files[0]);
    };
    const handleFileChange2 = (e) => {
        setSelectedFile2(e.target.files[0]);
    };

    const handleFileChange3 = (e) => {
        setSelectedFile3(e.target.files[0]);
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
    const handleStateChange = (event) => {
        setSelectedState(event.target.value);
    }


    return (
        <div className={classes.regBody}>
            <div className={classes.regContainer}>
                <MainDashoard/>
                {/* <div className={classes.sideNav}>
                    <div className={classes.logoCont}>
                        <img src={RegLogo} alt='Logo' />
                    </div>
                    <div className={classes.regMenu}>
                    <Link
                        to=''
                        onClick={() => handleLinkClick('Complete Registration')}
                        className={activeLink === 'Complete Registration' ? classes.active : ''}
                    >
                        <p><img src={messageIcon} alt='icon'/>Complete Registration</p>
                    </Link>
                    <Link
                        to=''
                        onClick={() => handleLinkClick('Loans')}
                        className={activeLink === 'Loans' ? classes.active : ''}
                    >
                        <p><img src={messageIcon} alt='icon'/> Loans</p>
                    </Link>
                    <Link
                        to=''
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
                        to= ''
                        onClick={() => handleLinkClick('Logout')}
                        className={activeLink === 'Logout' ? classes.active : ''}
                    >
                        <p><img src={LogOutIcon} alt='icon'/> Logout</p>
                    </Link>
                    </div>
                </div> */}
                <div className={classes.formSection}>
                    {/* <div className={classes.formSectionHeader}>
                        <h1>Welcome Oriade</h1>
                        <p>Apply for grants or loans from the Ogun state govt</p>
                        <div className={`${classes.formSecCont} ${classes.shadow}`}>
                            <h3>Complete Registration</h3>
                        </div>
                    </div> */}
                    <div className={classes.mainform}>
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
                                                {/* <input type="date" className={classes.snInput} placeholder="" onChange={(e) => setEmail(e.target.value)} /> */}
                                            </div>
                                        </div>
                                        <div className={classes.rszeInput}>
                                            <div className={classes.formInput}>
                                                <span className={classes.stId}>Marital Status</span>
                                                <Form.Select className={classes.snInput} value={selectedStatus} onChange={handleMaritalChange} >
                                                    <option>Select Marital Status</option>
                                                    <option>Single</option>
                                                    <option>Married</option>
                                                    <option>Divorced</option>
                                                </Form.Select>
                                                {/* <input type="text" className={classes.snInput} placeholder="" onChange={(e) => setEmail(e.target.value)} /> */}
                                            </div>
                                            <div className={classes.formInput}>
                                                <span className={classes.stId}>State of Origin</span>
                                                <Form.Select className={classes.snInput} value={selectedState} onChange={handleStateChange}>
                                                    <option>Select State of Origin</option>
                                                </Form.Select>
                                            </div>
                                        </div>
                                        <div className={classes.rszeInput}>
                                            <div className={classes.formInput}>
                                                <span className={classes.stId}>Local Government</span>
                                                <Form.Select className={classes.snInput} value={selectedLocalGovt} onChange={handleLgChange} >
                                                    <option>Select L.G</option>
                                                </Form.Select>
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
                                                <input type="text" className={classes.snInput} placeholder="" onChange={(e) => setEmail(e.target.value)} />
                                            </div>
                                            <div className={classes.formInput}>
                                                <span className={classes.stId}>Relationship</span>
                                                <Form.Select className={classes.snInput} value={selectedNokRelationship} onChange={handleStatusChange}>
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
                                                    value={nokAddress}
                                                    onChange={(e) => setNokAddress(e.target.value)}
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
                                                    <option>Select Sector</option>
                                                </Form.Select>
                                               
                                            </div>
                                        </div>
                                        <div className={classes.rszeInput}>

                                            <div className={classes.formInput}>
                                                <span className={classes.stId}>Ogun state Tax ID number</span>
                                                <input type="text" className={classes.snInput} placeholder="" value={businessTax} onChange={(e) => setBusinessTax(e.target.value)} />
                                            </div>

                                            <div className={classes.formInput}>
                                                <span className={classes.stId}>Number of employees</span>
                                                <input type="text" className={classes.snInput} placeholder="" value={businessEmployess} onChange={(e) => setBusinessEmployess(e.target.value)} />
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
                                                />
                                            </div>
                                            <div className={classes.formInput}>
                                                <span className={classes.stId}>Business premises permit ID</span>
                                                <div className={classes.snInput23}>
                                                    <label htmlFor="fileInput" className={classes.fileInputLabel}>
                                                        {/* Your file icon element goes here */}
                                                        <img src={Folder} alt="File Icon" className={classes.fileIcon} />
                                                        {/* Input element hidden, but clickable */}
                                                        <input type="file" id="fileInput" className={classes.fileInput} value={selectedFile} onChange={handleFileChange} />
                                                    </label>
                                                    <span className={classes.placeholder}>
                                                        {selectedFile ? selectedFile.name : 'No file is chosen'}
                                                    </span>
                                                </div>
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
                                                        <input type="file" id="fileInput" className={classes.fileInput} value={selectedFile1} onChange={handleFileChange1} />
                                                    </label>
                                                    <span className={classes.placeholder}>
                                                        {selectedFile ? selectedFile.name : 'No file is chosen'}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className={classes.formInput}>
                                                <span className={classes.stId}>Evidence of Annual turnover for 2 years</span>
                                                <div className={classes.snInput23}>
                                                    <label htmlFor="fileInput" className={classes.fileInputLabel}>
                                                        {/* Your file icon element goes here */}
                                                        <img src={Folder} alt="File Icon" className={classes.fileIcon} />
                                                        {/* Input element hidden, but clickable */}
                                                        <input type="file" id="fileInput" className={classes.fileInput} value={selectedFile2} onChange={handleFileChange2} />
                                                    </label>
                                                    <span className={classes.placeholder}>
                                                        {selectedFile ? selectedFile.name : 'No file is chosen'}
                                                    </span>
                                                </div>
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
                                                        <input type="file" id="fileInput" className={classes.fileInput} value={selectedFile3} onChange={handleFileChange3} />
                                                    </label>
                                                    <span className={classes.placeholder}>
                                                        {selectedFile ? selectedFile.name : 'No file is chosen'}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className={classes.continueButton}>
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
                                                    <option>Select Bank</option>
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
                                        <div className={classes.continueButton}>
                                            <p className={classes.continueReg}>Continue</p>
                                        </div>
                                    </form>
                                </Tab>
                            </Tabs>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
