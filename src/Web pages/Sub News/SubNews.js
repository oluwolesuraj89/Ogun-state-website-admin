import React, { useState, useEffect } from 'react';
import classes from './SubNews.module.css';
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
import rectangle from '../../Images/Rectangle 9.png';
import arrow from '../../Images/arrow.svg';

export default function SubNews() {
    const navigate = useNavigate();
    // const [bearer, setBearer] = useState('');
    // const [grantDetail, setGrantDetail] = useState([]);
    // const [invoicePayment, setInvoicePayment] = useState([]);
    // const [isLoading, setIsLoading] = useState(false);
    // const [paymentLoading, setPaymentLoading] = useState(false);
    // const [isLoan, setIsLoan] = useState(false);
    // const { isGrant, isHome } = useRegistration();

    const goBack = () =>{
        navigate('/news_editor')
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
            <div className={`${classes.formSecCont}`}>
                <div className={classes.formSectionHeader}>
                    <h3>News Editor</h3>
                    <div className={classes.secTop}>
                        <p className={classes.sec1}> Welcome</p>
                        <p className={classes.sec2}>Mayowa Lawal</p>
                    </div>
                </div>
            </div>
            {/* <div className={classes.formSection}>
                <div className={classes.formSectionHeader}>
                    <h3>News Editor</h3>
                    
                </div>
                <div className={classes.formSectionHeader}>
                    <p>Welcome </p>
                    <h3 style={{color:'#2D995F'}}>{user}</h3>
                </div>
            </div> */}

        <div className={classes.mainform}>

    <div className={classes.loandgrantcards}>
    <div className={classes.loandethead} onClick={goBack}>
        <img src={arrow} />
        <p className={classes.loanText}>Back to News</p>
    </div>

    <div className={classes.loanContainer}>
        <h4>Ogun State Receives 30 CNG Gas Powered Buses</h4>
        <p className={classes.firstP}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse </p>
<img src ={rectangle} width={970} height={288} />
<p className={classes.secondP}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia 
consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, 
adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, 
quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in 
ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur</p>

<p className={classes.thirdP}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia 
consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, 
adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, 
quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in 
ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur</p>

<div className={classes.btnEdit}>
    <button>Edit news in news editor</button>
</div>
    </div>
</div> 

</div>

        </div>

    </div>
)
}