import React, { useState, useEffect } from 'react';
import classes from './PubNews.module.css';
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
import stroke from '../../Images/stroke.svg';
import bold from '../../Images/bold.svg';
import italic from '../../Images/italic.svg';
import underline from '../../Images/underline.svg';
import tbarrow from '../../Images/t-b arrow.svg';
import align from '../../Images/align.svg';
import ealign from '../../Images/ealign.svg';
import num from '../../Images/num.svg';
import list from '../../Images/list.svg';
import join from '../../Images/join.svg';
import quotes from '../../Images/quotes.svg';
import pics from '../../Images/pics.svg';
import dot from '../../Images/dot.svg';


export default function PubNews() {
    // const navigate = useNavigate();
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
    <div className={classes.loandethead}>
        <img src={arrow} />
        <p className={classes.loanText} onClick={goBack}>Back to News</p>
    </div>

    <div className={classes.loanContainer}>
       <div className={classes.topIcons}>
        <div>
            <select name="heading" id="heading">
                <option value="Heading1">Heading 1</option>
            </select>
        </div>
        <img src={stroke} />
        <img src={bold} />
        <img src={italic} />
        <div>
            U
            <img src={underline} />
        </div>
        <div>X<sub>2</sub></div>
        <div>X<sup>2</sup></div>
        <img src={stroke} />
        <div>A
            <img src={tbarrow} />
        </div>
        <div>A
           <img src={align} />
        </div>
        <div>A
        </div>
        <img src={stroke} />
        <img src={ealign} />
        <img src={stroke} />
        <img src={num} />
        <img src={list} />
        <img src={stroke} />
        <img src={join} />
        <img src={quotes} />
        <img src={pics} />
        </div>
        <div className={classes.bodyText}>
            <div className={classes.title}> 
                <img src={dot} />
                <div >Enter Title here</div>
            </div>

            <div className={classes.intro}>
                <img src={dot} />
                <div >Enter short introduction here</div>
            </div>

            <div className={classes.image}>
                <img src={dot} />
                <div className={classes.newsimg}>
                    <div>Insert news image here</div>
                        <div className={classes.upload}>
                            <button>Upload</button>
                        </div>
                </div>
            </div>
            <div className={classes.news}>
                <img src={dot} />
                <div >Enter the rest of the news here</div>
            </div>
            
        </div>
<div className={classes.btnEdit}>
    <button>Publish News</button>
</div>
    </div>
</div> 

</div>

        </div>

    </div>
)
}