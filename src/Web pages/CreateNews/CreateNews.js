import React, { useState, useEffect } from 'react';
import classes from './CreateNews.module.css';
import RegLogo from '../../Images/RegistrationLogo.svg'
import { Spinner, Badge, Button } from 'react-bootstrap';
import Folder from '../../Images/folder-2.svg';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ArrowLogo from '../../Images/arrow-left.svg';
import LoanImage from '../../Images/loan bg.svg';
import MainDashoard from '../Main Dashboard/MainDashoard';
import Ready from '../../Images/nothing.svg'
import Ready1 from '../../Images/review.svg';
import { useRegistration } from '../RegistrationContext';
import { Link, useNavigate } from 'react-router-dom'
import Table from 'react-bootstrap/Table';
import placeHolder from "../../assets/imagePlaceHolder.jpg"
// import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import InputGroup from 'react-bootstrap/InputGroup';

export default function CreateNews() {
    const navigate = useNavigate();
    // const [bearer, setBearer] = useState('');
    // const [grantDetail, setGrantDetail] = useState([]);
    // const [invoicePayment, setInvoicePayment] = useState([]);
    // const [isLoading, setIsLoading] = useState(false);
    // const [paymentLoading, setPaymentLoading] = useState(false);
    // const [isLoan, setIsLoan] = useState(false);
    // const { isGrant, isHome } = useRegistration();

    const openNews = () =>{
        navigate('/subnew')
    }

    // const readData = async () => {
    //     try {
    //         const details = await AsyncStorage.getItem('userToken');
    //         if (details !== null) {
    //             setBearer(details);
    //         }
    //     } catch (e) {
    //         alert('Failed to fetch the input from storage');
    //     }
    // };

    // useEffect(() => {
    //     readData();
    // }, []);

    // const headers = {
    //     'Content-Type': 'application/json',
    //     'Authorization': `Bearer ${bearer}`
    // };



   

    // const fetchPayments = async () => {
    //     setPaymentLoading(true);
    //     try {
    //         const response = await axios.get('https://api-smesupport.ogunstate.gov.ng/api/get-invoices', { headers });
    //         const results = response.data?.data;
    //         setInvoicePayment(results);
    //         // console.log(results, "invoice payment");
    //     } catch (error) {
    //         // if (error.response && error.response.status === 401) {

    //         //     navigate('/sign_in');
    //         // } else 
    //         {
    //             const errorStatus = error.response?.data?.message;
    //             console.log(errorStatus);
    //             setInvoicePayment([]);
    //         }
    //     } finally {
    //         setIsLoading(false);
    //     }
    // };

    // useEffect(() => {
    //     if (bearer) {
    //         fetchGrant();
    //         fetchPayments();

    //     }
    // }, [bearer]);




    // const handleLoanApplication = async () => {
    //     try {
    //         if (isHome === false) {
    //             navigate('/apply_grant');
    //         } else {
    //             navigate('/grant_ineligible');
    //         }
    //     } catch (error) {
    //         console.error('Error checking isComplete status:', error);
    //         // Handle error
    //     }
    // };
  

    // function formatDate(dateString) {
    //     const date = new Date(dateString);
    //     const formattedDate = `${date.getFullYear()}-${padZero(date.getMonth() + 1)}-${padZero(date.getDate())} `;
    //     return formattedDate;
    //   }
    
    //   function padZero(num) {
    //     return num < 10 ? `0${num}` : num;
    //   }
  
//  const fetchGrant = async () => {
//         setIsLoading(true);
//         try {
//             const response = await axios.get('https://api-smesupport.ogunstate.gov.ng/api/application/get-grants', { headers });
//             const resultxxx = response.data?.data;
//             setGrantDetail(resultxxx);
//             // console.log(resultxxx, "men payment");
//         } catch (error) {
//             // if (error.response && error.response.status === 401) {

//             //     navigate('/sign_in');
//             // } else 
//             {
//                 const errorStatus = error.response?.data?.message;
//                 console.log(errorStatus);
//                 setGrantDetail([]);
//             }
//         } finally {
//             setIsLoading(false);
//         }
//     };

    return (
        <div>
        <MainDashoard />

        <div className={classes.finishedbodyCont}>
            <div className={classes.topPadding}>
                <div className={`${classes.formSecCont}`}>
                    <div className={classes.formSectionHeader}>
                        <h3>News Editor</h3>
                    </div>
                    <div className={classes.formSectionHeader}>
                        <small>Welcome </small>
                        <h3 style={{color:'#2D995F'}}>user</h3>
                    </div>
                </div>
            </div>
            
        <div className={classes.mainform}>

    <div className={classes.loandgrantcards}>
    <div className={classes.loandethead}>
        <div className={classes.formLabel}>
            <h4>New</h4>
            <p className={classes.loanText}>Home-Apps-eCommerce-Catalog</p>
        </div>
        <div className={classes.formIntBtn}>
            <Button variant="light" className={classes.btn1}> Add Member</Button>
            <Button variant="success" className={classes.btn2}>New Campaign</Button>
        </div>
    </div>

    <div className={classes.loanContainer}>
        <div className={classes.loanResponsive}>
            <div className={classes.banner}>
                <h5>Banner</h5>
                <div className={classes.imgSec}>
                    {/* <div> */}
                        <img src={placeHolder} alt='img' width={150} />
                    {/* </div> */}
                    <p>Set the product thumbnail image. Only *.png, *.jpg and *.jpeg image files are accepted</p>
                </div>
            </div>    
            <div className={classes.mainForm}>
                <h5>General</h5>
                <Form className={classes.form}>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Code<span>*</span></Form.Label>
                        <Form.Control type="text" placeholder="New code"/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Category<span>*</span></Form.Label>
                        <Form.Control type="text" placeholder="News Category"/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Status<span>*</span></Form.Label>
                        <Form.Control type="text" placeholder="News Status"/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Registration name<span>*</span></Form.Label>
                        <Form.Control type="text" placeholder="Registration Name"/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Short description<span>*</span></Form.Label>
                        <Form.Control type="text" placeholder="News description"/>
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Long description</Form.Label>
                        <div className={classes.span}>
                            <span >
                                <InputGroup  className={classes.formActionArea}>
                                    <DropdownButton
                                    variant="outline-secondary"
                                    title="Normal"
                                    id="input-group-dropdown-1"
                                    >
                                        <Dropdown.Item href="#">Action</Dropdown.Item>
                                        <Dropdown.Item href="#">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                        {/* <Dropdown.Divider />
                                        <Dropdown.Item href="#">Separated link</Dropdown.Item> */}
                                    </DropdownButton>
                                    <span>
                                        <i>icons</i>
                                        <i>icons</i>
                                        <i>icons</i>
                                        <i>icons</i>
                                    </span>
                                    {/* <Form.Control aria-label="Text input with dropdown button" /> */}
                                </InputGroup>
                                <textarea cols={50} placeholder='Type your text here..'></textarea>
                            </span>
                        </div>
                    </Form.Group>

                    

                    
                    {/* <Button variant="primary" type="submit">
                        Submit
                    </Button> */}
                </Form>
            </div>
        </div>
        {/* <div className={classes.accrodBtns}>
            <Button variant='light' className={classes.prev}>Previous</Button>
                
            <Button variant="success" className={classes.next}>Next</Button>
        </div> */}
    </div>
</div> 

</div>

        </div>

    </div>
)
}